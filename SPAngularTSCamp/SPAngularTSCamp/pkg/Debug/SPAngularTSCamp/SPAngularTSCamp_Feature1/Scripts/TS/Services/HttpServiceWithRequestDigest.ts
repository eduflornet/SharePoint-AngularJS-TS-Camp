module SunShine.Services {

    export class HttpServiceWithRequestDigest {
        public $http: ng.IHttpService;
        private RequestDigestValue: string;
        private RequestDigestTimeout: any;
        private static RequestDigestMaxTime: number = 2 * 60 * 1000; // 2 mins
        private static RequestDigestInfoMethod: string = "/_api/contextinfo";
        private RequestDigestInfoUrl: string = null;

        constructor($http: ng.IHttpService, private $q: ng.IQService) {
            this.$http = $http;
            this.RequestDigestInfoUrl = _spPageContextInfo.siteAbsoluteUrl + HttpServiceWithRequestDigest.RequestDigestInfoMethod;
        }

        HttpPostJson<T>(url: string, params: any, customHeaders?: { [id: string]: string }): ng.IHttpPromise<T> {
            if (!customHeaders) customHeaders = {};
            if (!customHeaders["Accept"]) customHeaders["Accept"] = "application/json;odata=verbose";
            var requestConfig: ng.IRequestConfig = {
                method: "POST",
                url: url,
                headers: customHeaders,
                data: params
            };
            return this.$http(requestConfig);
        }

        public HttpPostJsonWithRequestDigest<T>(url: string, params: any ): ng.IPromise<T> {
            var _self = this;
            var defer = this.$q.defer();
            if (this.RequestDigestValue == null) {
                this.GetRequestDigestValue().success(function () {
                    _self.CreateHttpPostPromise<T>(url, params, defer);
                });
                return defer.promise;
            }
            else {
                this.CreateHttpPostPromise(url, params, defer);
            }
            return defer.promise;
        }


        private CreateHttpPostPromise<T>(url: string, params: any, defer: ng.IDeferred<any>): ng.IPromise<any> {
            var _self = this;
            return this.HttpPostJson(url, params,
                {
                    "Accept": "application/json;odata=verbose",
                    "Content-Type": "application/json;odata=verbose",
                    "X-RequestDigest": this.RequestDigestValue
                }).success(function (response) {
                    defer.resolve(response);
                }).error(function (response) {
                    defer.resolve(response);
                });
        }

        private GetRequestDigestValue(): ng.IHttpPromise<any> {
            var _self = this;
            var params = null;
            return this.HttpPostJson<any>(this.RequestDigestInfoUrl, params, {
                "Accept": "application/json;odata=verbose"
            }).success(function (data) {
                _self.UpdateRequestDigestValue(data.d.GetContextWebInformation.FormDigestValue);
            });
        }

        private UpdateRequestDigestValue(requestDigestValue: string) {
            this.RequestDigestValue = requestDigestValue;
            if (this.RequestDigestTimeout) {
                clearTimeout(this.RequestDigestTimeout);
                this.RequestDigestTimeout = null;
            }
            var _self = this;
            this.RequestDigestTimeout = setTimeout(function () {
                _self.RequestDigestTimeout = null;
                _self.RequestDigestValue = null;
            }, HttpServiceWithRequestDigest.RequestDigestMaxTime);
        }

    }

}
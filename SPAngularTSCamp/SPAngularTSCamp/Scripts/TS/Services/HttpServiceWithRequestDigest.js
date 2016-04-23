var SunShine;
(function (SunShine) {
    var Services;
    (function (Services) {
        var HttpServiceWithRequestDigest = (function () {
            function HttpServiceWithRequestDigest($http, $q) {
                this.$q = $q;
                this.RequestDigestInfoUrl = null;
                this.$http = $http;
                this.RequestDigestInfoUrl = _spPageContextInfo.siteAbsoluteUrl + HttpServiceWithRequestDigest.RequestDigestInfoMethod;
            }
            HttpServiceWithRequestDigest.prototype.HttpPostJson = function (url, params, customHeaders) {
                if (!customHeaders)
                    customHeaders = {};
                if (!customHeaders["Accept"])
                    customHeaders["Accept"] = "application/json;odata=verbose";
                var requestConfig = {
                    method: "POST",
                    url: url,
                    headers: customHeaders,
                    data: params
                };
                return this.$http(requestConfig);
            };
            HttpServiceWithRequestDigest.prototype.HttpPostJsonWithRequestDigest = function (url, params) {
                var _self = this;
                var defer = this.$q.defer();
                if (this.RequestDigestValue == null) {
                    this.GetRequestDigestValue().success(function () {
                        _self.CreateHttpPostPromise(url, params, defer);
                    });
                    return defer.promise;
                }
                else {
                    this.CreateHttpPostPromise(url, params, defer);
                }
                return defer.promise;
            };
            HttpServiceWithRequestDigest.prototype.CreateHttpPostPromise = function (url, params, defer) {
                var _self = this;
                return this.HttpPostJson(url, params, {
                    "Accept": "application/json;odata=verbose",
                    "Content-Type": "application/json;odata=verbose",
                    "X-RequestDigest": this.RequestDigestValue
                }).success(function (response) {
                    defer.resolve(response);
                }).error(function (response) {
                    defer.resolve(response);
                });
            };
            HttpServiceWithRequestDigest.prototype.GetRequestDigestValue = function () {
                var _self = this;
                var params = null;
                return this.HttpPostJson(this.RequestDigestInfoUrl, params, {
                    "Accept": "application/json;odata=verbose"
                }).success(function (data) {
                    _self.UpdateRequestDigestValue(data.d.GetContextWebInformation.FormDigestValue);
                });
            };
            HttpServiceWithRequestDigest.prototype.UpdateRequestDigestValue = function (requestDigestValue) {
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
            };
            HttpServiceWithRequestDigest.RequestDigestMaxTime = 2 * 60 * 1000; // 2 mins
            HttpServiceWithRequestDigest.RequestDigestInfoMethod = "/_api/contextinfo";
            return HttpServiceWithRequestDigest;
        })();
        Services.HttpServiceWithRequestDigest = HttpServiceWithRequestDigest;
    })(Services = SunShine.Services || (SunShine.Services = {}));
})(SunShine || (SunShine = {}));

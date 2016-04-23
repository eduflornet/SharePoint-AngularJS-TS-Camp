module SunShine.Services {

        export interface IBaseListItem {
            ID: number;
            Title: string;
        }

        interface ISharepointArrayResponse {
            value: Array<IBaseListItem>;
        }

        export class SharepointListsService extends HttpServiceWithRequestDigest {
            static $inject: Array<string> = ['$http', '$q'];
            static ServiceId: string = "SharepointListsService";

            constructor($http: ng.IHttpService, $q: ng.IQService) {
                super($http, $q);
            }

            ReadItems(listName: string): ng.IHttpPromise<Array<IBaseListItem>> {
                var url = _spPageContextInfo.siteServerRelativeUrl + "/_api/web/lists/getByTitle('" + listName + "')/items";
                var requestConfig: ng.IRequestConfig = {
                    method: "GET",
                    url: url,
                    headers: {},
                    transformResponse: this._appendTransform(this.$http.defaults.transformResponse, function (response: ISharepointArrayResponse) {
                        return response.value;
                    })
                };
                return this.$http(requestConfig);
            }

            ReadItem(listName: string, itemId: number): ng.IHttpPromise<IBaseListItem>
            {
                var url = _spPageContextInfo.siteServerRelativeUrl + "/_api/web/lists/getByTitle('" + listName + "')/items(" + itemId + ")";
                var requestConfig: ng.IRequestConfig = {
                    method: "GET",
                    url: url,
                    headers: {}
                };
                return this.$http(requestConfig);
            }

            AddItem(item: IBaseListItem, listName: string): ng.IPromise<any> {
                var url = _spPageContextInfo.siteServerRelativeUrl + "/_api/web/lists/getByTitle('" + listName + "')/items";
                return this.HttpPostJsonWithRequestDigest(url, item );
            }

            private _appendTransform(defaults, transform) {
                defaults = angular.isArray(defaults) ? defaults : [defaults];
                return defaults.concat(transform);
            }
            
        }
        
    }
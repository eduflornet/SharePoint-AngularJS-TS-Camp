var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SunShine;
(function (SunShine) {
    var Services;
    (function (Services) {
        var SharepointListsService = (function (_super) {
            __extends(SharepointListsService, _super);
            function SharepointListsService($http, $q) {
                _super.call(this, $http, $q);
            }
            SharepointListsService.prototype.ReadItems = function (listName) {
                var url = _spPageContextInfo.siteServerRelativeUrl + "/_api/web/lists/getByTitle('" + listName + "')/items";
                var requestConfig = {
                    method: "GET",
                    url: url,
                    headers: {},
                    transformResponse: this._appendTransform(this.$http.defaults.transformResponse, function (response) {
                        return response.value;
                    })
                };
                return this.$http(requestConfig);
            };
            SharepointListsService.prototype.ReadItem = function (listName, itemId) {
                var url = _spPageContextInfo.siteServerRelativeUrl + "/_api/web/lists/getByTitle('" + listName + "')/items(" + itemId + ")";
                var requestConfig = {
                    method: "GET",
                    url: url,
                    headers: {}
                };
                return this.$http(requestConfig);
            };
            SharepointListsService.prototype.AddItem = function (item, listName) {
                var url = _spPageContextInfo.siteServerRelativeUrl + "/_api/web/lists/getByTitle('" + listName + "')/items";
                return this.HttpPostJsonWithRequestDigest(url, item);
            };
            SharepointListsService.prototype._appendTransform = function (defaults, transform) {
                defaults = angular.isArray(defaults) ? defaults : [defaults];
                return defaults.concat(transform);
            };
            SharepointListsService.$inject = ['$http', '$q'];
            SharepointListsService.ServiceId = "SharepointListsService";
            return SharepointListsService;
        })(Services.HttpServiceWithRequestDigest);
        Services.SharepointListsService = SharepointListsService;
    })(Services = SunShine.Services || (SunShine.Services = {}));
})(SunShine || (SunShine = {}));

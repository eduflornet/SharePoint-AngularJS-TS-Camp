// Module indica el namespace
var SunShine;
(function (SunShine) {
    var AppMain = (function () {
        function AppMain() {
        }
        AppMain.Init = function () {
            // aqui voy a declarar mi aplicacion
            //angular.module("LegosAppAngular", []).controller("LegosListController")
            angular.module("SunShine", ['ngRoute'])
                .service(SunShine.Services.SharepointListsService.ServiceId, SunShine.Services.SharepointListsService)
                .controller(SunShine.Controllers.BrickListController.ControllerId, SunShine.Controllers.BrickListController)
                .controller(SunShine.Controllers.AddBrickController.ControllerId, SunShine.Controllers.AddBrickController)
                .controller(SunShine.Controllers.BrickDetailController.ControllerId, SunShine.Controllers.BrickDetailController)
                .filter(SunShine.Angular.CustomFilters.ReferenceFormatFilterName, SunShine.Angular.CustomFilters.ReferenceFormat)
                .directive(SunShine.Angular.GoToListDirective.DirectiveName, SunShine.Angular.GoToListDirective.factory())
                .config(function ($routeProvider) {
                $routeProvider
                    .when('/BrickList', {
                    templateUrl: 'Views/BrickList.html',
                    controller: SunShine.Controllers.BrickListController.ControllerId
                })
                    .when('/AddBrick', {
                    templateUrl: 'Views/AddBrick.html',
                    controller: SunShine.Controllers.AddBrickController.ControllerId
                })
                    .when('/BrickDetail/:brickId', {
                    templateUrl: 'Views/BrickDetail.html',
                    controller: SunShine.Controllers.BrickDetailController.ControllerId
                })
                    .otherwise('/BrickList');
            });
        };
        return AppMain;
    })();
    SunShine.AppMain = AppMain;
    SunShine.AppMain.Init();
})(SunShine || (SunShine = {}));

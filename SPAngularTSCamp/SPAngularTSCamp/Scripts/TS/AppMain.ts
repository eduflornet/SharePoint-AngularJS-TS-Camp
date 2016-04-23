// Module indica el namespace

module SunShine {
    export class AppMain {
        public static Init(): void {

        // aqui voy a declarar mi aplicacion

            //angular.module("LegosAppAngular", []).controller("LegosListController")
            
            
            angular.module("SunShine", ['ngRoute'])
            // aqui se inyectan todos las clases, controllers, filtros, etc
                .service(Services.SharepointListsService.ServiceId, Services.SharepointListsService)
                .controller(Controllers.BrickListController.ControllerId, Controllers.BrickListController)
                .controller(Controllers.AddBrickController.ControllerId, Controllers.AddBrickController)
                .controller(Controllers.BrickDetailController.ControllerId, Controllers.BrickDetailController)
                .filter(Angular.CustomFilters.ReferenceFormatFilterName, Angular.CustomFilters.ReferenceFormat)
                .directive(Angular.GoToListDirective.DirectiveName, Angular.GoToListDirective.factory())
                .config(function ($routeProvider: angular.route.IRouteProvider) {
                    $routeProvider
                        .when('/BrickList', {
                            templateUrl: 'Views/BrickList.html',
                            controller: Controllers.BrickListController.ControllerId
                        })
                        .when('/AddBrick', {
                            templateUrl: 'Views/AddBrick.html',
                            controller: Controllers.AddBrickController.ControllerId
                        })
                        .when('/BrickDetail/:brickId', {
                            templateUrl: 'Views/BrickDetail.html',
                            controller: Controllers.BrickDetailController.ControllerId
                        })
                        .otherwise('/BrickList');
            });
            
        }
    }
    
    SunShine.AppMain.Init();
}
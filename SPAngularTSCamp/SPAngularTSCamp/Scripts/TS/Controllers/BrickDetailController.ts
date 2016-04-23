module SunShine.Controllers {
    interface IBrickDetailScope extends ng.IScope {
        brick: Entities.IBrick;
    }
    export class BrickDetailController {
        static $inject = ['$scope', Services.SharepointListsService.ServiceId, '$routeParams'];
        static ControllerId: string = "BrickDetailController";

        constructor(private $scope: IBrickDetailScope, private sharepointListsService: Services.SharepointListsService,
            $routeParams: ng.route.IRouteParamsService) {
            var brickId = $routeParams["brickId"];
            var _self = this;
            sharepointListsService.ReadItem("LegoBricks", brickId).success(function (data) {
                _self.$scope.brick = data;
            });
        }
    }
}
module SunShine.Controllers {
    export interface IBrickListScope {
        legoBricks: Array<Services.IBaseListItem>;
    }
    export class BrickListController {
        static $inject = ['$scope', Services.SharepointListsService.ServiceId]
        static ControllerId: string = "BrickListController";

        constructor(private $scope: IBrickListScope, private sharepointListsService: Services.SharepointListsService) {
            //sharepointListsService.ReadItems("LegoBricks").success(function (data) {
            sharepointListsService.ReadItems("Legos").success(function (data) {
                $scope.legoBricks = data;
            });
        }
    }
}
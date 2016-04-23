module SunShine.Controllers {

    export interface IAddBrickScope {
        newLego: Entities.Brick;
        onSaveClick: Function;
    }

    export class AddBrickController {
        static $inject = ['$scope', Services.SharepointListsService.ServiceId, '$location']
        static ControllerId: string = "AddBrickController";

        constructor(private $scope: IAddBrickScope, private sharepointListsService: Services.SharepointListsService, $location: ng.ILocationService) {
            $scope.newLego = new Entities.Brick();
            $scope.onSaveClick = function () {
                sharepointListsService.AddItem($scope.newLego, "LegoBricks").then(function () {
                    $location.path("/BrickList");
                });
            }
        }
    }
}
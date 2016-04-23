var SunShine;
(function (SunShine) {
    var Controllers;
    (function (Controllers) {
        var AddBrickController = (function () {
            function AddBrickController($scope, sharepointListsService, $location) {
                this.$scope = $scope;
                this.sharepointListsService = sharepointListsService;
                $scope.newLego = new SunShine.Entities.Brick();
                $scope.onSaveClick = function () {
                    sharepointListsService.AddItem($scope.newLego, "LegoBricks").then(function () {
                        $location.path("/BrickList");
                    });
                };
            }
            AddBrickController.$inject = ['$scope', SunShine.Services.SharepointListsService.ServiceId, '$location'];
            AddBrickController.ControllerId = "AddBrickController";
            return AddBrickController;
        })();
        Controllers.AddBrickController = AddBrickController;
    })(Controllers = SunShine.Controllers || (SunShine.Controllers = {}));
})(SunShine || (SunShine = {}));

var SunShine;
(function (SunShine) {
    var Controllers;
    (function (Controllers) {
        var BrickListController = (function () {
            function BrickListController($scope, sharepointListsService) {
                this.$scope = $scope;
                this.sharepointListsService = sharepointListsService;
                //sharepointListsService.ReadItems("LegoBricks").success(function (data) {
                sharepointListsService.ReadItems("Legos").success(function (data) {
                    $scope.legoBricks = data;
                });
            }
            BrickListController.$inject = ['$scope', SunShine.Services.SharepointListsService.ServiceId];
            BrickListController.ControllerId = "BrickListController";
            return BrickListController;
        })();
        Controllers.BrickListController = BrickListController;
    })(Controllers = SunShine.Controllers || (SunShine.Controllers = {}));
})(SunShine || (SunShine = {}));

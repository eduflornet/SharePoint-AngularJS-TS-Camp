var SunShine;
(function (SunShine) {
    var Controllers;
    (function (Controllers) {
        var BrickDetailController = (function () {
            function BrickDetailController($scope, sharepointListsService, $routeParams) {
                this.$scope = $scope;
                this.sharepointListsService = sharepointListsService;
                var brickId = $routeParams["brickId"];
                var _self = this;
                sharepointListsService.ReadItem("LegoBricks", brickId).success(function (data) {
                    _self.$scope.brick = data;
                });
            }
            BrickDetailController.$inject = ['$scope', SunShine.Services.SharepointListsService.ServiceId, '$routeParams'];
            BrickDetailController.ControllerId = "BrickDetailController";
            return BrickDetailController;
        })();
        Controllers.BrickDetailController = BrickDetailController;
    })(Controllers = SunShine.Controllers || (SunShine.Controllers = {}));
})(SunShine || (SunShine = {}));

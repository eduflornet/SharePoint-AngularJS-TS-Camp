var SunShine;
(function (SunShine) {
    var Angular;
    (function (Angular) {
        var GoToListDirective = (function () {
            function GoToListDirective() {
                this.restrict = 'E';
                this.scope = {
                    onInfoClick: '&',
                    linkTitle: '@'
                };
                this.template = "<div><a ng-href='#BrickList'>{{linkTitle}}</a></div>";
                this.link = function (scope, $element, attrs, ctrl) {
                };
            }
            GoToListDirective.factory = function () {
                var directive = function () { return new GoToListDirective(); };
                directive.$inject = [];
                return directive;
            };
            GoToListDirective.DirectiveName = "spGoToList";
            return GoToListDirective;
        })();
        Angular.GoToListDirective = GoToListDirective;
    })(Angular = SunShine.Angular || (SunShine.Angular = {}));
})(SunShine || (SunShine = {}));

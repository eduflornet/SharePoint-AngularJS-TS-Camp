var SunShine;
(function (SunShine) {
    var Angular;
    (function (Angular) {
        var CustomFilters = (function () {
            function CustomFilters() {
            }
            CustomFilters.ReferenceFormat = function () {
                return function (input) {
                    if (input == "" || input == null || input == undefined)
                        return "";
                    var inputStr = input.toString();
                    var firstTwo = inputStr.slice(0, 2);
                    var remaining = inputStr.slice(2, input.length);
                    return firstTwo + "-" + remaining;
                };
            };
            CustomFilters.ReferenceFormatFilterName = "referenceformat";
            return CustomFilters;
        })();
        Angular.CustomFilters = CustomFilters;
    })(Angular = SunShine.Angular || (SunShine.Angular = {}));
})(SunShine || (SunShine = {}));

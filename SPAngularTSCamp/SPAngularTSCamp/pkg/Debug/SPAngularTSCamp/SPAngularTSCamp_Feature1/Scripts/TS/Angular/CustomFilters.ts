module SunShine.Angular {
    
    export class CustomFilters {
        public static ReferenceFormatFilterName: string = "referenceformat";

        public static ReferenceFormat() {
            return function (input: any): string {
                if (input == "" || input == null || input == undefined) return "";
                var inputStr = input.toString();
                var firstTwo = inputStr.slice(0, 2);
                var remaining = inputStr.slice(2, input.length);
                return firstTwo + "-" + remaining;
            }
        } 

    }

}
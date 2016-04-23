module SunShine.Angular {
    export interface IGoToListDirectiveScope extends ng.IScope {

        //Binded properties
        onInfoClick: Function;
        linkTitle: string;

        //Added properties
        logoUrl: string;
    }
    export class GoToListDirective implements ng.IDirective {
        public static DirectiveName: string = "spGoToList";
        restrict = 'E';
        scope = {

            onInfoClick: '&',
            linkTitle: '@'
        };

        template = "<div><a ng-href='#BrickList'>{{linkTitle}}</a></div>"
        link = (scope: IGoToListDirectiveScope, $element: any, attrs: ng.IAttributes, ctrl: any) => {
            
        }

        static factory(): ng.IDirectiveFactory {
            const directive = () => new GoToListDirective();
            directive.$inject = [];
            return directive;
        }
    }
}
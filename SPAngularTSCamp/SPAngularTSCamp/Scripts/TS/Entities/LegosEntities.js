var SunShine;
(function (SunShine) {
    var Entities;
    (function (Entities) {
        //export class Brick implements IBrick {
        //    __metadata: { [id: string]:string } = { type: 'SP.Data.LegoBricksListItem' }
        //    ID: number;
        //    Title: string;
        //    Reference: number;
        //    Pieces: number;
        //    Category: string;
        //    Image: string;
        //}
        var Brick = (function () {
            function Brick() {
                this.__metadata = { type: 'SP.Data.LegoBricksListItem' };
            }
            return Brick;
        })();
        Entities.Brick = Brick;
    })(Entities = SunShine.Entities || (SunShine.Entities = {}));
})(SunShine || (SunShine = {}));

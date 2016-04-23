module SunShine.Entities {

    //export class LegoItem {
    //    public Title: string;
    //    public NumeroPieza: number;
    //    public Referencia: number;
    //    public Categoria: string;

    //}
    
    export interface IBrick extends Services.IBaseListItem {
        
    }

    //export class Brick implements IBrick {
    //    __metadata: { [id: string]:string } = { type: 'SP.Data.LegoBricksListItem' }
    //    ID: number;
    //    Title: string;
    //    Reference: number;
    //    Pieces: number;
    //    Category: string;
    //    Image: string;
    //}

    export class Brick implements IBrick {
        __metadata: { [id: string]: string } = { type: 'SP.Data.LegoBricksListItem' }
        ID: number;
        Title: string;
        Referencia: number;
        Piezas: number;
        Categoria: string;
        Imagen: string;
    }
}
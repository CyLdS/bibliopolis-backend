
export class Libro{
    constructor(
        public isbn:number, //unicio
        public titulo: string, //obligatorio
        public autor:string,   //obligatorio
        public editorial: string, 
        public genero: string[],
        public precio: number,
        public descripcion: string,
        public imagen: string,
        public stock: number
    ){}
}
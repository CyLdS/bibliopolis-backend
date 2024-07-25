import { Pedido } from "./Pedido";

export class Usuario{
    constructor(
        public id:number,
        public nombre: string,
        public correoElectronico:string, //unico
        private contrasena: string,
        public direccion: string,
        public historialPedidos: Pedido[]
    ){}
}
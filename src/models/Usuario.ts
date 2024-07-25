import { Pedido } from "./Pedido";

export class Usuario{
    constructor(
        public id:number,
        public nombre: string,
        public correoElectronico:string, //unico
        public contrasena: string,
        public direccion: string,
        public historialPedidos: Pedido[]
    ){}
}
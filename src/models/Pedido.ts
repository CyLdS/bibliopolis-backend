import { ItemPedido } from "./ItemPedido";
import { Usuario } from "./Usuario"

export class Pedido{
    constructor(
        public id:number,
        public usuario: Usuario,
        public fechaPedido:string, 
        public estado: string, //"pendiente", "en proceso", "enviado", "entregado"
        public total: number,
        public items: ItemPedido[]
    ){}
}
import { Injectable } from '@nestjs/common';
import { Pedido } from 'src/models/Pedido';
import { Usuario } from 'src/models/Usuario';

@Injectable()
export class PedidosService {
   
   
    // Modificar el estado de un pedido según su id
    private pedidos: Pedido[] = [];

    // crear un nuevo pedido
    crearPedido(pedido: Pedido): void {
        
        }
    


      // Obtener un pedido según su Id
      obtenerPedidoPorId(id: number): Pedido{
        for (let i = 0; i < this.pedidos.length; i++) {
            if (this.pedidos[i].id == id) {
                return this.pedidos[i];
            }
        }
        return null;
    }

    // Obtener todos los pedidos y permitir filtrar por estado y/o usuario
    obtenerPedidos(estado?: string, usuario?: Usuario): Pedido[] {
        let pedidosFiltrados = this.pedidos;
    
        if (estado) {
          pedidosFiltrados = pedidosFiltrados.filter(pedido => pedido.estado === estado);
        }
    
        if (usuario) {
          pedidosFiltrados = pedidosFiltrados.filter(pedido => pedido.usuario.id === usuario.id);
        }
    
        return pedidosFiltrados;
      }



}

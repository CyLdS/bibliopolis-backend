import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { Pedido } from 'src/models/Pedido';
import { Usuario } from 'src/models/Usuario';
import { PedidosService } from './pedidos.service';

@Controller('pedidos')
export class PedidosController {
   
    constructor(private readonly servicio: PedidosService) { }

     // crear un nuevo pedido
     @Post()
     crearPedido(@Body() pedido: Pedido): void {
         this.servicio.crearPedido;
 
     }
 
      // Obtener un pedido según su Id
     @Get(':id')
     obtenerPedidoPorId(@Param('id') id: number): Pedido {
         return this.servicio.obtenerPedidoPorId(id);
     }
 
    // Obtener todos los pedidos y permitir filtrar por estado y/o usuario
    @Get()
    obtenerPedidos(@Query('estado') estado?: string, @Query('usuarioId') usuarioId?: Usuario): Pedido[] {
      
      return this.servicio.obtenerPedidos(estado, usuarioId);
    }
     
      // Modificar el estado de un pedido según su id
     

}

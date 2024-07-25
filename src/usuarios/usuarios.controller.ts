import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { Usuario } from 'src/models/Usuario';

@Controller('usuarios')
export class UsuariosController {


    constructor(private readonly servicio:UsuariosService){}

    // Registrar un nuevo usuario
    @Post()
    crearUsuario( @Body() user:Usuario ):void{
      this.servicio.crearUsuario;
      
    }
    
    // Obtener un usuario según su id
     @Get(':id')
     obtenerUsuarioPorId( @Param('id') id:number ): Usuario{
         return this.servicio.obtenerUsuarioPorId(id);
     }
    
       // Obtener todos los usuarios
       @Get()
       obtenerUsuarios():Usuario[] {
           return this.servicio.obtenerUsuarios();
       }
    
      // Eliminar un usuario según su id
      @Delete(':id')
      eliminarUsuario(@Param('id') id: number):void{
          this.servicio.eliminarUsuario(id);
      }
    



}

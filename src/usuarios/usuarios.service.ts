import { Injectable } from '@nestjs/common';
import { Usuario } from 'src/models/Usuario';
import { UsuarioDto } from 'src/models/usuario.dto';

@Injectable()
export class UsuariosService {

    private usuarios: Usuario[] = [];
    
    //     Registrar un nuevo usuario
    crearUsuario(usuario: Usuario): Usuario {
        for (let i=0; i< this.usuarios.length; i++) {
            if (this.usuarios[i].correoElectronico == usuario.correoElectronico) {
              return null;
            }
          }
          
        usuario.id = this.usuarios.length + 1;
        this.usuarios.push(usuario);
        return usuario;
    }
    convertirAUsuarioDTO(usuario: Usuario): UsuarioDto {
        return new UsuarioDto(
            usuario.id,
            usuario.nombre,
            usuario.correoElectronico,
            usuario.direccion,
            usuario.historialPedidos
        );
    }

    // Obtener un usuario según su id
    obtenerUsuarioPorId(id: number): UsuarioDto {
        for (let i = 0; i < this.usuarios.length; i++) {
            if (this.usuarios[i].id == id) {
                return this.convertirAUsuarioDTO(this.usuarios[i]);
            }
        }
        return null;
    }

   
    // Obtener todos los usuarios
    obtenerUsuarios(): UsuarioDto[] {
        let usuarioDTO: UsuarioDto[]= [];
        for(let i=0; i<this.usuarios.length; i++){
            usuarioDTO.push(this.convertirAUsuarioDTO(this.usuarios[i]))
        }
        return usuarioDTO;
    }
    
    // Eliminar un usuario según su id
    eliminarUsuario(id: number): void {
        for (let i = 0; i < this.usuarios.length; i++) {
            if (this.usuarios[i].id == id) {
                this.usuarios.splice(i, 1);
            }
        }
    }

}

import { Injectable } from '@nestjs/common';
import { Usuario } from 'src/models/Usuario';

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
    

    // Obtener un usuario según su id
    obtenerUsuarioPorId(id: number): Usuario {
        for (let i = 0; i < this.usuarios.length; i++) {
            if (this.usuarios[i].id == id) {
                return this.usuarios[i];
            }
        }
        return null;
    }

    // Obtener todos los usuarios
    obtenerUsuarios(): Usuario[] {
        return this.usuarios;
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

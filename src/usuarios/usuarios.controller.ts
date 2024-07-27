import { Body, Controller, Delete, Get, Param, Post, Res } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { Usuario } from 'src/models/Usuario';
import { response, Response } from 'express';
import { error } from 'console';

@Controller('usuarios')
export class UsuariosController {


    constructor(private readonly servicio: UsuariosService) { }

    // Registrar un nuevo usuario
    @Post()
    crearUsuario(@Body() user: Usuario, @Res() response: Response) {
        const nuevoUsuario = this.servicio.crearUsuario(user);
        if (nuevoUsuario) {
            response.status(201).send(nuevoUsuario);
        } else {
            response.status(400).send({ error: 'usuario no creado' })
        }
    }

    // Obtener un usuario según su id
    @Get(':id')
    obtenerUsuarioPorId(@Param('id') id: number, @Res() response: Response) {
        const usuarioUnico = this.servicio.obtenerUsuarioPorId(id);
        if (usuarioUnico) {
            response.status(200).send(usuarioUnico);
        } else {
            response.status(404).send({ error: 'usuario no existe' });
        }
    }

    // Obtener todos los usuarios
    @Get()
    obtenerUsuarios(): Usuario[] {
        return this.servicio.obtenerUsuarios();
    }

    // Eliminar un usuario según su id
    @Delete(':id')
    eliminarUsuario(@Param('id') id: number): void {
        this.servicio.eliminarUsuario(id);
    }




}

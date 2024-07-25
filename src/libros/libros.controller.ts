import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { LibrosService } from './libros.service';
import { Libro } from 'src/models/Libro';

@Controller('libros')
export class LibrosController {

    constructor(private readonly servicio: LibrosService) { }





    // crear un libro
    @Post()
    crearLibro(@Body() libro: Libro): void {
        this.servicio.crearLibro;

    }

    // Obtener un libro según su ISBN
    @Get(':isbn')
    obtenerLibroPorIsbn(@Param('isbn') isbn: number): Libro {
        return this.servicio.obtenerLibroPorIsbn(isbn);
    }

    // Obtener todos los libros y permitir filtrar por autor y/o género
    
    @Get()
    obtenerLibros(@Query('autor') autor?: string, @Query('genero') genero?: string): Libro[] {
        return this.servicio.obtenerLibros(autor, genero);
    }
    
    // Eliminar un libro según su ISBN
    @Delete(':isbn')
    eliminarLibro(@Param('isbn') isbn: number): void {
        this.servicio.eliminarLibro(isbn);
    }



}

import { Injectable, Query, Res } from '@nestjs/common';
import { Libro } from 'src/models/Libro';

@Injectable()
export class LibrosService {

    private libros: Libro[] = [];

    // crear un libro
    crearLibro(libro: Libro): Libro {
        for (let existeLibro of this.libros) {
            if (existeLibro.isbn === libro.isbn) {
              console.log(`El ISBN ${libro.isbn} ya existe.`);
              return null;
            }
          }
          // Agregar el nuevo libro si el ISBN no existe
          this.libros.push(libro);
          return libro;
        }
    


    // Obtener un libro según su ISBN
    obtenerLibroPorIsbn(isbn: number): Libro {
        for (let i = 0; i < this.libros.length; i++) {
            if (this.libros[i].isbn === isbn) {
                return this.libros[i];
            }
        }
        return null;
    }

    // // Obtener todos los libros y permitir filtrar por autor y/o género
    obtenerLibros(autor?: string, genero?: string): Libro[] {
        let librosFiltrados = this.libros;

        if (autor) {
            librosFiltrados = librosFiltrados.filter(libro => libro.autor.includes(autor));
        }

        if (genero) {
            librosFiltrados = librosFiltrados.filter(libro => libro.genero.includes(genero));
        }

        return librosFiltrados;
    }
    

    // Eliminar un libro según su ISBN
    eliminarLibro(isbn: number): void {
        for (let i = 0; i < this.libros.length; i++) {
            if (this.libros[i].isbn == isbn) {
                this.libros.splice(i, 1);

            }
        }
    }



}

/*DESCRIPCIÓN: Crear una clase Escuela (1) que tiene un listado de Cursos (2) al cual se
le asignan Alumnos (2)*/
class Alumno {
  nombre: string;
  constructor(nombre: string) {
    this.nombre = nombre;
  }
}
class Curso {
  nombre: string;
  alumnos: Alumno[];
  constructor(nombre: string) {
    this.nombre = nombre;
    this.alumnos = [];
  }
  asignarAlumno(alumno: Alumno) {
    this.alumnos.push(alumno);
  }
}
class Escuela {
  cursos: Curso[];
  constructor() {
    this.cursos = [new Curso("Curso 1"), new Curso("Curso 2")];
  }
  asignarAlumnos() {
    const alumno1 = new Alumno("ignacio");
    const alumno2 = new Alumno("valentin");
    this.cursos[0].asignarAlumno(alumno1);
    this.cursos[1].asignarAlumno(alumno2);
  }
}

const miEscuela = new Escuela();

miEscuela.asignarAlumnos();

console.log(miEscuela.cursos[0].alumnos[0].nombre);
console.log(miEscuela.cursos[1].alumnos[0].nombre);

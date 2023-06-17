/* DESCRIPCIÓN: Crear una clase de Auto con los atributos (marca, modelo, potencia,
    max. velocidad)
     Crear 5 autos en un array
     Iterar el array y mostrar los autos por pantalla
     Iteramos los autos y calculamos con un método (calcular tiempo) cuanto tarda
    en forma óptima en recorrer x kms */

class Auto {
  marca: string;
  modelo: string;
  potencia: number;
  maximaVelocidad: number;
  constructor(
    marca: string,
    modelo: string,
    potencia: number,
    maximaVelocidad: number
  ) {
    this.marca = marca;
    this.modelo = modelo;
    this.potencia = potencia;
    this.maximaVelocidad = maximaVelocidad;
  }

  //calcular tiempo

  calcularTiempo(distancia: number): number {
    const velocidadOptima = this.maximaVelocidad * 0.8;
    const tiempo = distancia / velocidadOptima;
    return tiempo;
  }
}

const autos: Auto[] = [
  new Auto("Peugeot", "Nissan", 170, 200),
  new Auto("Renault", "bmw", 170, 200),
  new Auto("Ford", "Audi", 170, 200),
  new Auto("Honda", "toyota", 170, 200),
  new Auto("chevrolet", "civic", 170, 200),
];

autos.forEach((auto) => {
  console.log(
    "Marca: ${auto.marca}, Modelo:${auto.modelo}, Modelo:${auto.potencia}, Modelo:${auto.maxVelocidad}"
  );
});

autos.forEach((auto) => {
  const distancia = 120;
  const tiempoOptimo = auto.calcularTiempo(distancia);
  console.log(
    "Para el auto ${auto.modelo} se estima un tiempo optimo de ${auto.Optimo.toFixed(2)} horas para recorrer ${distancia} km."
  );
});

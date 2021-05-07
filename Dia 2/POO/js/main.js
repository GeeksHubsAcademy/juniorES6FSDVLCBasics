//PROGRAMACION ORIENTADA A OBJETOS (POO)

class Casa {

    constructor(pisos,habitaciones,metros,color,habitantes,precio){
        this.pisos = pisos,
        this.habitaciones = habitaciones,
        this.metros = metros,
        this.color = color,
        this.habitantes = habitantes,
        this.precio = precio,
        this.localizacion = "Valencia",
        this.continente = "Europa"
    }

    //Métodos de la clase

    alojar(invitados){

        this.habitantes += invitados;

    }

    incendiarse(siniestro){

        this.habitantes = 0;

        if(siniestro){
            this.precio = 0;

        }else{
            this.precio = this.precio / 2;
        }

    }

    ayuda(bomberos){

        if(bomberos){
            this.habitantes = 2;
        }else{
            this.habitantes = 1;
        }

    }

}

//pisos,habitaciones,metros,color,habitantes,precio
let casa1 = new Casa(2,6,302,"Rosado",6,1500000);
let casa2 = new Casa(3,8,501,"Blanca",3,2000000);
let casa3 = new Casa(1,5,250,"Verde",4,3000000);


// console.log("Inicio en el barrio",casa1,casa2,casa3);

casa2.alojar(2);

console.log("Alojamiento en las casas...",casa1.habitantes,casa2.habitantes,casa3.habitantes);

casa3.incendiarse(false);

console.log(casa1,casa2,casa3);

casa3.ayuda(true);

console.log(casa1,casa2,casa3);

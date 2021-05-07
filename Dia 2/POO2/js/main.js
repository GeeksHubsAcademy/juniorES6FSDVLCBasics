
class Fighter {

    constructor(nombre,fuerza,resistencia,suerte,velocidad){
        this.nombre = nombre,
        this.fuerza = fuerza,
        this.resistencia = resistencia,
        this.suerte = suerte,
        this.velocidad = velocidad,
        this.vida = 300
    }


    atacar(p2){
        p2.vida = p2.vida - ((this.fuerza * this.suerte) - p2.velocidad);
    }

    especial(){


    }


    defenderse(){

    }
    

}


let luchador1 = new Fighter("Mike",10,6,2,8);
let luchador2 = new Fighter("Ryu",8,5,4,7);

luchador1.atacar(luchador2);
luchador2.atacar(luchador1);

console.log(luchador1,luchador2);


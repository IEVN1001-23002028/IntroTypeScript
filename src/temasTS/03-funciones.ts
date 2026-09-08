function sumar (x:number,y:number, z:number=5):number { //void es vacio
    let a=6
    let b=7
    let res=a+b
    console.log('La suma es '+res)
    return x + y + z

}

let resultado=sumar(8,2)
console.log(resultado)

interface Mascotas{
    nombre:string,
    edad:number,
    raza:string,
    sexo?:string,
    vacunado:boolean,
    mostrar:()=>void//funciones tipo flecha (en este caso no regresa nada)
}

const nuevaMascota:Mascotas={
    nombre: "furulais",
    edad:5,
    raza:"pastor aleman",
    vacunado:true,
    mostrar(){
        console.log(La edad de ${this.nombre} es ${this.edad}) //solo propiedades del objeto actual; this significa hacer referecncia a las propiedades del objeto actual
    }
}

function mostrarMascota(mascota:Mascotas, s:number):void{
    mascota.edad+=s //es lo mismo que mascota.edad=mascota.edad+x
    console.log(mascota)
    //console.log(mascota.mostrar())

}

mostrarMascota(nuevaMascota,3)
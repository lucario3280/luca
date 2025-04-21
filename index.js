function eje1() {
    let meses=["Enero", "Febrero", "Marzo", "Abril", "Junio", "Julio", "Agosto", "Septienbre", "Octubre", "Novienbre", "Dicienbre"]
    for (let i = 0; i < meses.length; i++) {
        console.log(meses[i])
    }
    
}

function eje2() {
    var valores=[true, 5, false, "hola", "adios", 2];
    if(valores[3].length < valores[4].length){
        console.log(valores[4]+ " es mayor que "+valores[3])
        console.log(valores[0])
    }else{
        console.log(valores[3]+ " es mayor que "+valores[4])
        console.log(valores[2])
    }
    console.log(valores[1] + valores[5]);
    console.log(valores[1] - valores[5]);
    console.log(valores[1] * valores[5]);
    console.log(valores[1] / valores[5]);
    console.log(valores[1] ** valores[5]);
    
}

function eje3(){
     var numero1 = 5;
     var numero2 = 8;
     if(numero1 < numero2) {
     console.log("numero1 no es mayor que numero2");
     }
     if(numero2 > 0) {
     console.log("numero2 es positivo");
     }
     if(numero1 < 0 || numero1 != 0) {
     console.log("numero1 es negativo o distinto de cero");
     }
     if(numero1 + 1 < numero2) {
     console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
}
}

function eje4(){
    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
    var DNI = prompt("inresar su DNI");
    var resto = DNI % 23;
    var letra = prompt("ingresa tu letra de DNI");
    
    
    if(0<DNI && DNI<99999999){
        console.log(letras[resto])
        if(letra == letras[resto]){
            console.log("Todo Correcto");
        }
        else{
            console.log("Pusiste Mal Tu Letra De DNI");
        }
    } else{
        console.log("El rango del DNI es incorrecto")
    }  
}

function eje5(){
    var factorial = prompt("Pone un numero")
    let res= factorial;
    for (let i = 1; i < factorial; i++) {
        res = res * i;
    }
    console.log("el factorial de "+ factorial+ " es " + res)
}

function eje6(){
    var numeros = prompt("Pone un Numero Pibe")
    if(numeros % 2 == 0){
        console.log("Este Numero es Par")
    }
    else{
        console.log("Este Numero es Inpar")
    }
}

function eje7(){}

function eje8(){}

function Persona(nombre,edad,genero) {
    this.nombre = nombre;
    this.edad = edad;
    this.genero = genero;
}

Persona.prototype.Detalles = function name(params) {
    console.log("el nombre es: "+this.nombre+"mi edad es "+this.edad+"y mi genero es "+this.genero)
}

function Estudiante(nombre,edad,genero,curso,grupo){
    Persona.call(this,nombre,edad,genero)
    this.curso = curso;
    this.grupo = grupo;
}
    Persona.prototype.registrar = function name(params) {
        console.log("el nombre es: "+this.curso+"y mi genero es "+this.grupo)
    }

    Estudiante.prototype = Object.create(Persona.prototype)

function Profesor(nombre,edad,genero,asignatura,nivel){
    Persona.call(this,nombre,edad,genero)
    this.asignatura = asignatura;
    this.nivel = nivel;
}
    Persona.prototype.asignar = function name(params) {
        console.log("el nombre es: "+this.asignatura+"y mi genero es "+this.nivel)
    }

    Profesor.prototype = Object.create(Persona.prototype)

function eje9(){}

function eje10(){}
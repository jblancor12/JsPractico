// Cuadrados
console.group("Cuadrados");
//const lcuadrado=5;
//console.log("Los lados del cuadrado mide "+lcuadrado + "cm")


function perimetroCuadrado(lcuadrado){
    return lcuadrado*4;
}
//console.log("el perimetro  del cuadrado mide "+perimetroCuadrado+"cm")

function areaCuadrado(lcuadrado){
    return lcuadrado*lcuadrado;
}
//console.log("el area  del cuadrado mide "+areaCuadrado+"cm^2")
console.groupEnd();

// Triangulos
console.group("Triangulos");
/*const l1Triangulo= 6;
const l2Triangulo= 6;
const bTriangulo= 4;
const hTriangulo= 5.5;*/
function perimetroTriangulo(l1,l2,base)
{
    return l1+l2+base;
}
function areaTriangulo (h,base)
{
    return (h*base)/2;
}



/*console.log(
    "los lados del triangulo miden "
    +l1Triangulo+"cm, "
    +l2Triangulo+"cm y "
    +bTriangulo+"cm")

console.log("la altura del triangulo es de  "+hTriangulo+"cm")

console.log("el perimetro  del triangulo mide "+perimetroTriangulo+"cm")
console.log("el area  del triangulo mide "+areaTriangulo+"cm^2")*/




console.groupEnd();

// Circulos
console.group("Circulos");
/*const radio=4;
const diametro = radio*2;
const pi=Math.PI;*/
function circunferencia (radius)
{
    return (radius*2)*Math.PI;
}
function areaCirculo(radius)
{
    return (radius*radius)*Math.PI;
}


/*console.log("El radio de circulo es de "+radio+"cm,"
    +"el diametro es de "+diametro+"cm")

console.log("La circunferencia es de "+circunferencia+"cm")

console.log("el area del circulo es de "+areaCirculo+"cm^2")*/


console.groupEnd();


// Interaccion con html

function calcularPerimetroCuadrado()
{
    const input = document.getElementById("input-cuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    const presultado = document.getElementById("res-cuadrados")
    presultado.innerText="El perimetro es de "+ perimetro+"cm";
}


function calcularAreaCuadrado()
{
    const input = document.getElementById("input-cuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    const presultado = document.getElementById("res-cuadrados")
    presultado.innerText="El are es de "+ area+"cm^2";
}


function calcularPerimetroTriangulo()
{
    const inputl1 = document.getElementById("input-triangulo-l1");
    const valuel1 = Number(inputl1.value);

    const inputl2 = document.getElementById("input-triangulo-l2");
    const valuel2 = Number(inputl2.value);

    const inputb = document.getElementById("input-triangulo-b");
    const valueb = Number(inputb.value);

    const perimetro = perimetroTriangulo(valuel1,valuel2,valueb);
    const presultado = document.getElementById("res-triangulos")
    presultado.innerText="El perimetro es de "+ perimetro+"cm";
}

function calcularAreaTriangulo()
{
    const inputb = document.getElementById("input-triangulo-b");
    const valueb = Number(inputb.value);

    const inputh = document.getElementById("input-triangulo-h");
    const valueh = Number(inputh.value);
    
    const area = areaTriangulo(valueh,valueb);
    const presultado = document.getElementById("res-triangulos")
    presultado.innerText="El are es de "+ area+"cm^2";
}


function calcularPerimetroCirculo()
{
    const inputr = document.getElementById("input-circulo");
    const value = inputr.value;

    const perimetro = circunferencia(value);
    const presultado = document.getElementById("res-circulos")
    presultado.innerText="El perimetro es de "+ perimetro+"cm";

}


function calcularAreaCirculo()
{
    const inputr = document.getElementById("input-circulo");
    const value = inputr.value;

    const area = areaCirculo(value);
    const presultado = document.getElementById("res-circulos")
    presultado.innerText="El are es de "+ area+"cm^2";

}



//funcion para triangulo isosceles

function hIsosceles(l1,l2,b)
{
    if(l1===l2){
        return Math.sqrt((l1*l1)-((b*b)/4));
    }
    else{
        return "no es isosceles"
    }
}





    
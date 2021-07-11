// Cuadrados
console.group("Cuadrados");
const lcuadrado=5;
console.log("Los lados del cuadrado mide "+lcuadrado + "cm")


const perimetroCuadrado = lcuadrado*4;
console.log("el perimetro  del cuadrado mide "+perimetroCuadrado+"cm")

const areaCuadrado = lcuadrado*lcuadrado;
console.log("el area  del cuadrado mide "+areaCuadrado+"cm^2")
console.groupEnd();

// Triangulos
console.group("Triangulos");
const l1Triangulo= 6;
const l2Triangulo= 6;
const bTriangulo= 4;
const hTriangulo= 5.5;
const perimetroTriangulo = l1Triangulo+l2Triangulo+bTriangulo;
const areaTriangulo =(bTriangulo*hTriangulo)/2;



console.log(
    "los lados del triangulo miden "
    +l1Triangulo+"cm, "
    +l2Triangulo+"cm y "
    +bTriangulo+"cm")

console.log("la altura del triangulo es de  "+hTriangulo+"cm")

console.log("el perimetro  del triangulo mide "+perimetroTriangulo+"cm")
console.log("el area  del triangulo mide "+areaTriangulo+"cm^2")




console.groupEnd();

// Circulos
console.group("Circulos");
const radio=4;
const diametro = radio*2;
const pi=Math.PI;
const circunferencia= diametro*pi;
const areaCirculo= (radio*radio)*pi;


console.log("El radio de circulo es de "+radio+"cm,"
    +"el diametro es de "+diametro+"cm")

console.log("La circunferencia es de "+circunferencia+"cm")

console.log("el area del circulo es de "+areaCirculo+"cm^2")


console.groupEnd();
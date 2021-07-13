




function promedioLista(lista)
{
    const sumaLista= lista.reduce(
        function (suma=0,nuevoElemento){
            return suma+nuevoElemento;
        }
    )

    const promedio = sumaLista/lista.length;
    return promedio;
}



function medianaList(lista)
{
    const mitadlista = parseInt(lista.length/2);
    let mediana;
    const listaOrdenada= lista.sort(function(salarioA,salarioB){
        return salarioA-salarioB;
    });
    console.log(listaOrdenada)

    if(lista.length%2===0){
        const elemento1 = listaOrdenada[mitadlista-1];
        const elemento2 = listaOrdenada[mitadlista];
        console.log(elemento1)
        console.log(elemento2)

        mediana= promedioLista([elemento1,elemento2]); 
    } 
    else{
        mediana = lista[mitadlista];
        
    }
    return mediana;
}



function getSalaryArray(pais){
   const salarios = pais.map(
        function (persona){
            return persona.salary;
        }
    )

    const listaOrdenada= salarios.sort(function(salarioA,salarioB){
        return salarioA-salarioB;
    });
    return listaOrdenada;

}


function medianaSalarios(pais){


    const salarios = pais.map(
        function (persona){
            return persona.salary;
        }
    )


    return medianaList(salarios);

}


function top10percent(pais){
    const salarios= getSalaryArray(pais);
    const spliceStart= (salarios.length*(100-10))/100;
    const spliceCount = salarios.length-spliceStart;
    return salarios.splice(spliceStart,spliceCount);
}

function top10percentmediana(pais){
    const salarios = top10percent(pais);
    return medianaList(salarios);
}

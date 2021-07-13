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
    const listaOrdenada= lista.sort();

    if(lista.length%2===0){
        const elemento1 = listaOrdenada[mitadlista-1];
        const elemento2 = listaOrdenada[mitadlista];

        mediana= promedioLista([elemento1,elemento2]); 
    } 
    else{
        mediana = listaOrdenada[mitadlista];
    }
    return mediana;
}


function modaLista(lista)
{
    const ObjetoLista={};

    lista.map(function (elemento){
        if(ObjetoLista[elemento]){
            ObjetoLista[elemento] +=1;
        }
        else{
            ObjetoLista[elemento]=1;
        }
    })
    console.log(ObjetoLista)

    listaOrdenada = Object.entries(ObjetoLista).sort(function(elemento1,elemento2){
        return elemento1[1]-elemento2[1];
    })
    console.log(listaOrdenada)
    
    return listaOrdenada[listaOrdenada.length-1];
}
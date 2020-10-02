const productos = [
    {nombre:'Azucar', precio: 39.50, codigo:1},
    {nombre:'Pan', precio: 20.00, codigo:2},
    {nombre:'Harina', precio: 60.00, codigo:3},
    {nombre:'Yerba', precio: 120.00, codigo:4},
    {nombre:'Sal', precio: 35.50, codigo:5},
    {nombre:'Agua', precio: 40.50, codigo:6},
    {nombre:'Galletas', precio: 70.50, codigo:7},
    {nombre:'Fosforos', precio: 45.50, codigo:8},
    {nombre:'Jabon', precio: 90.50, codigo:9},

    
]


// // ----------- ----------- ----------- ----------- -----------  creando tarjetas
// // ----------- ----------- ----------- ----------- -----------  creando tarjetas


let saldoCarroDeCompras = 0;


productos.forEach(function(x){

    const comprar = document.getElementById('comprar');
    

    const seccionProductos = document.getElementById('seccionProductos');
    
    const textoProducto = document.createElement('p')
    const descripcion = document.createTextNode(`${x.nombre}`);
    textoProducto.appendChild(descripcion)
    
    const precio = document.createElement('p')
    const valorDelProducto = document.createTextNode(`${x.precio}`)
    const spanParaSignoPesos = document.createElement('span')
    const simboloDePesos = document.createTextNode('$ ')
    spanParaSignoPesos.appendChild(simboloDePesos)
    precio.appendChild(spanParaSignoPesos)
    precio.appendChild(valorDelProducto)
    
    const botones = document.createElement('div');
    const botonDeSuma = document.createElement('button');
    botonDeSuma.id=(`suma${x.codigo}`);
    const simboloDeSuma = document.createTextNode('+');
    botonDeSuma.appendChild(simboloDeSuma);
    const botonDeResta = document.createElement('button');
    const simboloDeResta = document.createTextNode('-');
    botonDeSuma.id=(`resta${x.codigo}`);
    botonDeResta.appendChild(simboloDeResta)
    const contador = document.createElement('p');
    const numeroDelContador = document.createTextNode('0');
    numeroDelContador.id = (``)
    contador.appendChild(numeroDelContador);
    botones.appendChild(botonDeResta);
    botones.appendChild(contador);
    botones.appendChild(botonDeSuma);
    botones.setAttribute('class', 'botones')
    
    const tarjeta = document.createElement('div');
    tarjeta.setAttribute('class', 'tarjeta');
    
    tarjeta.appendChild(textoProducto)
    tarjeta.appendChild(precio)
    tarjeta.appendChild(botones)
    seccionProductos.appendChild(tarjeta)

    let contadorDeItems = 0;
    const verPrecio = x.precio;
    botonDeSuma.addEventListener('click', function(){
        
        console.log(verPrecio)
        console.log(x.nombre)
        carritoComprasSumando(x.precio)
        sumarListaDeCompras(x.nombre,x.precio)
        contadorDeItems= contadorDeItems + 1;
        contador.innerHTML=contadorDeItems;    
    })
    botonDeResta.addEventListener('click', function(){
        
        if(contadorDeItems===0){
            contadorDeItems=contadorDeItems+0
        }else{
            console.log(verPrecio)
            console.log(x.nombre)
            contadorDeItems= contadorDeItems - 1;
            contador.innerHTML=contadorDeItems;    
            carritoComprasRestando(x.precio)
            restarItemsDelCarro(x.nombre,x.precio)
        }
    })


    comprar.addEventListener('click', ejecutarCompra(x.nombre,x.precio));

});



let totalAPagar = 0;
function carritoComprasSumando(precio){
    totalAPagar=totalAPagar+precio;
    document.getElementById('carroCompra').innerHTML=totalAPagar;
}



function carritoComprasRestando(precio){
        totalAPagar=totalAPagar-precio;
        document.getElementById('carroCompra').innerHTML=totalAPagar;
}



const borrarCarro = document.getElementById('borrarCarro');
borrarCarro.addEventListener('click', function(){
    document.getElementById('carroCompra').innerHTML=0;
} )



// const comprar = document.getElementById('comprar');
function ejecutarCompra(nombre,precio){
    console.log(nombre)
    console.log(precio)
    document.getElementById('seccionProductos').style.display='none';
    document.getElementById('cajaDeCompra').style.display='inline';
    visulizarListaDeCompras()

}

function mostrarListaDeCompras(nombre){
    listaDeCompras.push(nombre)
    console.log(listaDeCompras)
}


productosComprados = [];
function sumarListaDeCompras(nombre,precio){
    const item= [nombre,precio];
    productosComprados.push(item)
    console.log(productosComprados)
}

produtosSacadosDelCarro= [];
function restarItemsDelCarro(nombre,precio){
    const item= [nombre, precio];
    produtosSacadosDelCarro.push(item)
    console.log(produtosSacadosDelCarro)
}




function visulizarListaDeCompras(nombre,precio){
    console.log(nombre + `nombre del producto comprado`)
    console.log(precio + `precio del producto comprado`)

    // productosComprados.forEach(function(nombre,precio){

    //     const listadoDeCompras = document.getElementById('listadoDeCompras')
    //     const nombresDeProductosComprados = document.getElementById('nombresDeProductosComprados')
    //     const precioProductosComprados = document.getElementById('precioProductosComprados')
    
    
    //     const listaDeNombres = document.createElement('li');
    //     const textoEnLaListaNombres = document.createTextNode(`${nombre}`);
    //     const listaDePrecios = document.createElement('li');
    //     const numeroEnListaPrecio = document.createTextNode(`${precio}`);

    //     listaDeNombres.appendChild(textoEnLaListaNombres);
    //     listaDePrecios.appendChild(numeroEnListaPrecio);
    //     nombresDeProductosComprados.appendChild(listaDeNombres);
    //     precioProductosComprados.appendChild(listaDePrecios)
    //     listadoDeCompras.appendChild(nombresDeProductosComprados);
    //     listadoDeCompras.appendChild(precioProductosComprados)

    // insertaren
    // prueba 1 para github
    // prueba para agragar a git
    // });
};
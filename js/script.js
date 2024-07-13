//Variables que mantiene el estado del carrito
var carritovisible = false

//esperamos que todos los elemntos del carrito carguen para ejecutar el script
if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded',ready)
}
else{
    ready();
}


function ready(){
    //Agregar funcionalidad a los botones
    var botonesEliminarItem = document.getElementsByClassName('btn-eliminar')
    for(var i=0; i<botonesEliminarItem.length; i++){
        var button = botonesEliminarItem[i]
        button.addEventListener('click', eliminarItemCarrito)
    }
    //Agregar funcionalidad al boton sumar cantidad
    var botonSumarCantidad = document.getElementsByClassName('sumar-cantidad')
    for(var i=0; i<botonSumarCantidad.length; i++){
        var button = botonSumarCantidad[i]
        button.addEventListener('click',botonSumarCantidad)
    }
    //Agregar funciones al boton restar cantidad
    var botonRestarCantidad = document.getElementsByClassName('restar-cantidad')
    for(var i=0; i<botonRestarCantidad.length; i++){
        var button = botonRestarCantidad[i]
        button.addEventListener('click',restarCantidad)
    }
    //Agregamos funcionalidad al boton agregar al carrito
    var botonAgregarCarrito = document.getElementsByClassName('boton-item')
    for(var i=0; i<botonAgregarCarrito.length; i++){
        var button = botonAgregarCarrito[i]
        button.addEventListener('click',AgregarAlCarritoClicked)
    }
    //Agregamos funcionalidad al boton comprar
    document.getElementsByClassName('btn-pagar')[0].addEventListener
                                            ('click',pagarClicked)
}

//Para pagar eliminamos todos los elementos del carrito y lo ocultamos
function pagarClicked(){
    alert ("Gracias por su compra")
    //Eiminar todos los elementos del carrito
    var carritoItems = document.getElementsByName('carrito-items')[0]
    while(carritoItems.hasChildNodes){
        carritoItems.removeChild(carritoItems.firstChild)
    }
    actualizarTotalCarrito()
    ocultarCarrito()
}
//funcion que controla el boton clickeado de agregar al carrito
function AgregarAlCarritoClicked(){
    var button = event.tatget
    var item = button.parentElement
    var titulo = item.getElementsByClassName('titulo-item',)[0].innerText
    var precio = item.getElementsByClassName('precio-item',)[0].innerText
    var ImagenSrc = item.getElementsByClassName('img-item',)[0].src
    console.log(ImagenSrc)
    agregarItemAlCarrito(titulo,precio,ImagenSrc)
    hacerVisibleCarrito()
}
//Funcion que hace visible al carrito
function hacerVisibleCarrito(){
    carritovisible = true
    var carrito = document.getElementsByClassName('carrito')[0]
    carrito.computedStyleMap.marginRigth = '0'
    carrito.style.opacity = '1'
    var items = document.getElementsByClassName('contenedor-items')[0]
    items.style.width = '60%'
}
//Funcion que agrega un item al carrito
function agregarItemAlCarrito(titulo,precio,ImagenSrc){
    var item = document.createElement('div')
    item.classList.add('item')
    var itemCarrito = document.getElementsByClassName('carrito-tem')[0]
    //Controlemos que el que intenta ingresar no se encunetra en el carrito
    var nombresItemCarrito = itemCarrito.getElementsByClassName('carrito-item.titulo')
    for(var i=0; i<nombresItemCarrito.length; i++){
        if(nombresItemCarrito[i].innerText=titulo){
            alert("El item ya se encuentra en el carrito")
            return
        }
    }
    
    var itemCarritoContenido =
        <div class="carrito-item">
            <img src="${imagenSrc}" width="80px" alt=""></img>
            <div class="carrito-item-detalles">
                <span class="carrito-item-titulo">"${titulo}"</span>
                <div class="selector-cantidad">
                    <i class="fa-solid fa-minus restar-cantidad"></i>
                    <input type="text" value="1" class="carrito-item-cantidad" disabled></input>
                    <i class="fa-solid fa-plus sumar-cantidad"></i>
                </div>
                <span class=""></span>
            </div>
        </div>
}


modalContainer.style.display = "none";
    const pintarCarrito = ()=>{
    modalContainer.innerHTML = "";
    modalContainer.style.display="flex";
    const modalHeader = document.createElement("div");
    modalHeader.className = ("modal-header");
    
    modalHeader.innerHTML = `
    <h1 class="modal-header-title"> Carrito </h1>

    `;
    modalContainer.append(modalHeader);

    const modalbutton = document.createElement("h1");
    modalbutton.innerText = "X";
    
    modalbutton.className = "modal-header-button";

    modalbutton.addEventListener("click",()=>{
        modalContainer.style.display = "none";
    })

    modalHeader.append(modalbutton);




    carrito.forEach((product)=>{
        let carritoContent = document.createElement("div");
        carritoContent.className = "modal-content";
        carritoContent.innerHTML = `
        <img src="${product.img}">
        <h3>${product.nombre} </h3>
        <p> $${product.precio}  </p>
      
        <p> Cantidad: ${product.cantidad}</p>
        
        <p> Subtotal: $${product.cantidad * product.precio}</p>
        <span class="eliminar-producto">❌ </span>
        `;

        modalContainer.append(carritoContent);

        let eliminar = carritoContent.querySelector(".eliminar-producto");
        eliminar.addEventListener("click",()=>{
            eliminarProducto(product.id);  
        });
        
    });



    const total = carrito.reduce((acum,prod) => acum + prod.precio*prod.cantidad,0); 
   
    const totalCompra = document.createElement("div");
    totalCompra.className = "totalCompra"
    totalCompra.innerHTML = `Total a pagar: $${total}
    <button class="pagarCarrito">Pagar</button>`
    ;
    modalContainer.append(totalCompra);

    //alerta presionar pagar
    const presionarComprar = document.createElement("div");
    let presionar = document.querySelector(".pagarCarrito");
    
    presionar.addEventListener("mouseover",()=>{
        presionarComprar.innerHTML = " <h1>Presione PAGAR para terminar con su pedido</h1>"
        ;
        modalContainer.append(presionarComprar);
        setTimeout(()=>{
            presionarComprar.innerHTML="";
        },2000)
    });

    presionar.addEventListener("click",()=>{
        Swal.fire({
            title: 'Seguro que desea pagar el carrito?',
            text: "Si desea pagar, se descontara el monto de su cuenta!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#35C40E',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Aceptar',
            cancelButtonText: 'Cancelar'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Compra realizada!',
                'El monto se descontó de su cuenta',
                'success'
              )
              localStorage.clear();
            }
            modalContainer.style.display = "none";
           
           
          })
    });

   

};


verCarrito.addEventListener("click",pintarCarrito);

//ELIMINAR PRODUCTO FUNCION
const eliminarProducto = (id)=>{
    const buscarId = carrito.find((prod) => prod.id === id); //busca id
   /*  console.log(buscarId); */

    carrito = carrito.filter((carritoId)=>{
        return carritoId !== buscarId; // me retorna todos los prod que el id sea distinto a buscarId

    });
    carritoContador();
    guardarLocal();
    pintarCarrito();
   
};


const carritoContador = () =>{
    cantCarrito.style.display = "block";

    const carritoLength = carrito.length;
    localStorage.setItem("CarritoLength", JSON.stringify(carritoLength));

    cantCarrito.innerText = JSON.parse(localStorage.getItem("CarritoLength"));
};

carritoContador();

/* const productos= [
    { id: 1, nombre: "Teclado RGB Hyperx", precio: 9300,cantidad:1, stock:10, descripcion:"Este teclado HyperX de alto rendimiento permite que puedas disfrutar de horas ilimitadas de juegos. Está diseñado especialmente para que puedas expresar tanto tus habilidades como tu estilo. Podrás mejorar tu experiencia de gaming, ya seas un aficionado o todo un experto y hacer que tus jugadas alcancen otro nivel.    ", subtotal:0,img:"Images/teclado.jpg"},
    { id: 2, nombre: "Mouse Redragon RGB", precio: 3300,cantidad:1, stock:10,descripcion:"Con más de 20 años de experiencia en fabricación de productos, Redragon innova día a día en diseño y calidad. Su objetivo es producir equipamiento de alta gama para jugadores, con excelentes prestaciones y a un precio accesible. Los mouses Redragon son adecuados para todas las ocasiones, ya sea para entretenerse en el hogar o usarlo en el trabajo. Experimentá el diseño cómodo y elegante de este dispositivo.", subtotal:0,img:"Images/mouse.jpeg"},
    { id: 3, nombre: "Auricular bt Hyperx ", precio: 10300,cantidad:1, stock:10,descripcion:"Ideado para los gamers más exigentes, el HyperX Cloud Flight tiene todo lo que un jugador busca. Su conectividad inalámbrica permite moverte de un lugar a otro sin cables. A su vez, su batería de larga duración te dará horas interminables de sonidos envolventes en tus partidas. Sus orejeras son sinónimo de comodidad, ya que pueden rotar en un ángulo de 90 grados y reposar de forma suave en tu cuello. Y como si esto fuera poco, en estas vas a controlar los efectos de luz LED, silenciar o encender el micrófono con cancelación de ruido y regular el volumen.", subtotal:0,img:"Images/auricularbt.jpg"},
    { id: 4, nombre: "Monitor 24", precio: 12300, stock:10,cantidad:1, subtotal:0,descripcion:"Una experiencia visual de calidad. Este monitor de 24'' te va a resultar cómodo para estudiar, trabajar o ver una película en tus tiempos de ocio. Asimismo, su resolución de 1920 x 1080 te permite disfrutar de momentos únicos gracias a una imagen de alta fidelidad. Su tiempo de respuesta de un milisegundo lo hace ideal para gamers y cinéfilos porque es capaz de mostrar imágenes en movimiento sin halos o bordes borrosos.",img:"Images/monitor.jpg"},
    { id: 5, nombre: "SSD 240GB", precio: 12300, stock:10,cantidad:1, subtotal:0,descripcion:"Considerado un dispositivo de alto rendimiento, la unidad en estado sólido A400 de Kingston está diseñada para las personas más exigentes. Mejora de forma notable la capacidad de respuesta de su sistema, ya que alcanza velocidades de lectura/escritura de hasta 500MB/seg y 450MB/seg. Por ende, es 10 veces más rápido que un disco duro tradicional.",img:"Images/ssd.jpg"},
    { id: 6, nombre: "SSD 480GB", precio: 12300, stock:10,cantidad:1, subtotal:0,descripcion:"Considerado un dispositivo de alto rendimiento, la unidad en estado sólido A400 de Kingston está diseñada para las personas más exigentes. Mejora de forma notable la capacidad de respuesta de su sistema, ya que alcanza velocidades de lectura/escritura de hasta 500MB/seg y 450MB/seg. Por ende, es 10 veces más rápido que un disco duro tradicional.",img:"Images/ssd480.jpg"},
    { id: 7, nombre: "Ram 8gb Hyperx", precio: 12300, stock:10,cantidad:1, subtotal:0,descripcion:"Si tu computadora funciona con lentitud, si un programa no responde o no se carga, lo más probable es que se trate de un problema de memoria. Estos son posibles indicios de un rendimiento defectuoso en el día a día de tus tareas. Por ello, contar con una memoria Kingston -sinónimo de trayectoria y excelencia- mejorará la productividad de tu equipo: las páginas se cargarán más rápido y la ejecución de nuevas aplicaciones resultará más ágil y simple.",img:"Images/ram8.jpg"},
    { id: 8, nombre: "Ram 16gb Hyperx", precio: 12300, stock:10,cantidad:1, subtotal:0,descripcion:"Potenciá tu PC. Con su tecnología DDR4, mejorará el desempeño de tu equipo, ya que aumentará la fluidez y la velocidad en la transferencia de datos ¡Optimizá al máximo el rendimiento de tu computadora y reducí el consumo energético!",img:"Images/ram16.jpg"},
    { id: 9, nombre: "Auriculares Razer", precio: 12300, stock:10,cantidad:1, subtotal:0,descripcion:"El diseño over-ear brinda una comodidad insuperable gracias a sus suaves almohadillas. Al mismo tiempo, su sonido envolvente del más alto nivel se convierte en el protagonista de la escena.",img:"Images/auricrazer.jpg"},
    { id: 10, nombre: "Mouse Razer", precio: 12300, stock:10,cantidad:1, subtotal:0,descripcion:"Adaptado a tus movimientos. El mouse de juego te ofrecerá la posibilidad de marcar la diferencia y sacar ventajas en tus partidas. Su conectividad y sensor suave ayudará a que te desplaces rápido por la pantalla.",img:"Images/mouserazer.jpg"},
    { id: 11, nombre: "Joystick PC Razer", precio: 12300, stock:10,cantidad:1, subtotal:0,descripcion:"Control preciso. Este mando combina funciones revolucionarias mientras conserva precisión, comodidad y exactitud en cada movimiento. Gracias a su ergonomía especialmente pensada para la posición de tu mano, podés pasar horas jugando con total confort.",img:"Images/joystickpc.jpg"},
    { id: 12, nombre: "Parlante bt Speaker", precio: 12300, stock:10,cantidad:1, subtotal:0,descripcion:"Compacto y potente parlante portátil. Bluetooth incorporado. Luces rítmicas. Lector de tarjeta SD. Incluye cable de carga.",img:"Images/parlantebt.jpg"},
    
]; */

let carrito = JSON.parse(localStorage.getItem("Carrito")) || [];

const shopContent = document.getElementById("shopContent"); //seria todo el contenido de la pag
const verCarrito = document.getElementById("verCarrito"); //boton carrito
const modalContainer = document.getElementById("modal-container"); //div del carrito
const cantCarrito = document.getElementById("cantCarrito"); //cont carrito

//promesas y asincronia
const getProducts = async()=>{
const response = await fetch("data.json");
const data = await response.json();
/* console.log(data); */

data.forEach((product) => {    // por cada producto, genero una tarjeta div en el html
    let content = document.createElement("div");
    content.className="card";
    content.innerHTML = `
    <img src="${product.img}">
    <h3>${product.nombre}</h3>
    <p class="price">${product.precio} $ </p>
    `;

    shopContent.append(content);

    let comprar = document.createElement("button");
    comprar.innerText = "Comprar";
    comprar.className = "comprar";
    content.append(comprar);

    let informacion = document.createElement("button");
    informacion.innerText = "Informacion";
    informacion.className = "informacion";
    content.append(informacion);


    comprar.addEventListener("click",()=>{ //evento click para meter producto al carrito
        
        productoAgregado();
        const repetido = carrito.some((prodRepetido)=>
            prodRepetido.id === product.id);
            if(repetido === true){
                carrito.map((prod)=>{
                    /* if(prod.id === product.id){
                        prod.cantidad++;
                    } */
                    prod.id === product.id && prod.cantidad++; //If pasado a Operador logico AND
                    
                });
            }else{
                
        carrito.push({
            id:product.id,
            img:product.img,
            nombre:product.nombre,
            precio:product.precio,
            cantidad:product.cantidad,
            
        });
        
        carritoContador();
        guardarLocal();
         
    }
    
       
    });

    informacion.addEventListener("click", ()=>{
        Swal.fire({
            title: product.nombre,
            text: product.descripcion,
            imageUrl: product.img,
            imageWidth: 300,
            imageHeight: 300,
            imageAlt: 'Custom image',
          })
    })
});
};
getProducts();






//set item
const guardarLocal = ()=>{
    localStorage.setItem("Carrito",JSON.stringify(carrito));
};

 
    
 const productoAgregado = ()=>{
    const Toast = Swal.mixin({
        toast: true,
        position: 'bottom-end',
        showConfirmButton: false,
        timer: 3000,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'success',
        title: 'Producto Agregado al carrito'
      });
 }


 // js del main
 function pintarfondo(item){
    const items = document.getElementById("item");
item.addEventListener("mouseover", ()=>{
    item.className = "rojo";
});
item.addEventListener("mouseout", ()=>{
    item.className = "blanco";
});  
}



pintarfondo(tituloproducto6);
pintarfondo(tituloproducto5);
pintarfondo(tituloproducto4);
pintarfondo(tituloproducto3);
pintarfondo(tituloproducto2);
pintarfondo(tituloproducto);
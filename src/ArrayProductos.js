const Productos =[
    {
        id:"1",
        name:"Mario Bros",
        codigo: "pin 22",
        color: "negro",
        categoria: "juegos",
        precio: "$5000",
        descripcion: "lampara de pared",
        img:"https://i.ibb.co/yNJgGfB/pin22.png", 
        stock:"15"

    },

   {
        id:"2",
        name:"Batman Logo",
        codigo: "pin 12",
        color: "negro",
        categoria: "logos",
        precio: "$5000",
        descripcion: "lampara de pared",
        img:"https://i.ibb.co/k8Z02FF/pin12.png",
        stock:"15"

    },
    {
        id:"3",
        name:"Superman Logo",
        codigo: "pin 11",
        color: "negro",
        categoria: "logos",
        precio: "$5000",
        descripcion: "lampara de pared",
        img:"https://i.ibb.co/gMmpC2X/pin11.png",  // tube problemas para enrutar las imagenes la solucion fue crear una carpeta en el directorio
        stock:"15"                         //public/images

    },
    {
        id:"4",
        name:"Apple",
        codigo: "pin 194",
        color: "negro",
        categoria: "logos",
        precio: "$5000",
        descripcion: "lampara de pared, color fria",
        img:"https://i.ibb.co/0Grp9gg/Pin194.png",
        stock:"15"

    },
    {
        id:"5",
        name:"Indio Solari",
        codigo: "pin 259",
        color: "negro",
        categoria: "famosos",
        precio: "$5000",
        descripcion: "lampara de pared",
        img:"https://i.ibb.co/4J7b1j2/Pin259.png",
        stock:"15"

    },
    {
        id:"6",
        name:"Ray charles",
        codigo: "pin 262",
        color: "negro",
        categoria: "famosos",
        precio: "$5000",
        descripcion: "lampara de pared",
        img:"https://i.ibb.co/0QHstb6/Pin262.png",
        stock:"15"

    },
    {
        id:"7",
        name:"Gustavo Cerati",
        codigo: "pin 268",
        color: "negro",
        categoria: "famosos",
        precio: "$5000",
        descripcion: "lampara de pared",
        img:"https://i.ibb.co/PZbwPWW/Pin268.png",
        stock:"15"

    },
    {
        id:"8",
        name:"Counter Strike",
        codigo: "pin 230",
        color: "negro",
        categoria: "juegos",
        precio: "$5000",
        descripcion: "lampara de pared",
        img:"https://i.ibb.co/xFxFSMy/Pin230.png",
        stock:"15"

    },
    {
        id:"9",
        name:"Sonic",
        codigo: "pin 243",
        color: "negro",
        categoria: "juegos",
        precio: "$5000",
        descripcion: "lampara de pared",
        img:"https://i.ibb.co/HXtXqwc/Pin243.png",
        stock:"15"

    },
]

export const getProducts =() =>{return new Promise ((resolve)=>{ setTimeout(()=>{resolve(Productos)},500)})}

// exporta una funcion constante llamada getProducts, utiliza una funcion flecha  nombreFuncion=()=>
// dentro de la funcion flecha retorna una nueva promesa en este caso no utiliza el parametro reject solo el resolve
// cuando declara resolve incliye la funcion setTimeout para simular el retraso de la respuesta como si fuese un servidor.
// Desglose del codigo
// return new Promise ((resolve)=>{ setTimeout(()=>{resolve(Productos)},500)})

//return new Promise (resolve, reject)

//(resolve)=>{ }

//setTimeout(parametro1, parametro2)
//parametro1 ()=>{resolve(Productos)}
//parametro2,500

export const getProductsById=(productoId)=>{
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            resolve(Productos.find(produc=>produc.id===productoId) )
        },500) 
    })
}

export const getProductsByCategory=(categoriaId)=>{
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            resolve(Productos.filter(produc=>produc.categoria === categoriaId) )
        },500) 
    })
}


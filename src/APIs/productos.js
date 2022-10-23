const productosAPI =[
    {
        "id" : 1,
        "img" : "remeras/remera1",
        "nombre" : "Remera 1",
        "precio" : 200,
        "categoria" : "remeras"
    },
    {
        "id" : 2,
        "img" : "remeras/remera2",
        "nombre" : "Remera 2",
        "precio" : 200,
        "categoria" : "remeras"
    },
    {
        "id" : 3,
        "img" : "remeras/remera3",
        "nombre" : "Remera 3",
        "precio" : 200,
        "categoria" : "remeras"
    },
    {
        "id" : 4,
        "img" : "remeras/remera4",
        "nombre" : "Remera 4",
        "precio" : 200,
        "categoria" : "remeras"
    },
    {
        "id" : 5,
        "img" : "remeras/remera5",
        "nombre" : "Remera 5",
        "precio" : 200,
        "categoria" : "remeras"
    },
    {
        "id" : 6,
        "img" : "remeras/remera6",
        "nombre" : "Remera 6",
        "precio" : 200,
        "categoria" : "remeras"
    },
    {
        "id" : 7,
        "img" : "remeras/remera7",
        "nombre" : "Remera 7",
        "precio" : 200,
        "categoria" : "remeras"
    },
    {
        "id" : 8,
        "img" : "remeras/remera8",
        "nombre" : "Remera 8",
        "precio" : 200,
        "categoria" : "remeras"
    },
    {
        "id" : 9,
        "img" : "remeras/remera9",
        "nombre" : "Remera 9",
        "precio" : 200,
        "categoria" : "remeras"
    },
    {
        "id" : 10,
        "img" : "pantalones/pantalon1",
        "nombre" : "Pantalon 1",
        "precio" : 200,
        "categoria" : "pantalones"
    },
    {
        "id" : 11,
        "img" : "pantalones/pantalon2",
        "nombre" : "Pantalon 2",
        "precio" : 200,
        "categoria" : "pantalones"
    },
    {
        "id" : 12,
        "img" : "pantalones/pantalon3",
        "nombre" : "Pantalon 3",
        "precio" : 200,
        "categoria" : "pantalones"
    },
    {
        "id" : 13,
        "img" : "pantalones/pantalon4",
        "nombre" : "Pantalon 4",
        "precio" : 200,
        "categoria" : "pantalones"
    },
    {
        "id" : 14,
        "img" : "pantalones/pantalon5",
        "nombre" : "Pantalon 5",
        "precio" : 200,
        "categoria" : "pantalones"
    },
    {
        "id" : 15,
        "img" : "pantalones/pantalon6",
        "nombre" : "Pantalon 6",
        "precio" : 200,
        "categoria" : "pantalones"
    },
    {
        "id" : 16,
        "img" : "pantalones/pantalon7",
        "nombre" : "Pantalon 7",
        "precio" : 200,
        "categoria" : "pantalones"
    },
    {
        "id" : 17,
        "img" : "pantalones/pantalon8",
        "nombre" : "Pantalon 8",
        "precio" : 200,
        "categoria" : "pantalones"
    },
    {
        "id" : 18,
        "img" : "pantalones/pantalon9",
        "nombre" : "Pantalon 9",
        "precio" : 200,
        "categoria" : "pantalones"
    },
    {
        "id" : 19,
        "img" : "accesorios/acc1",
        "nombre" : "Accesorio 1",
        "precio" : 500,
        "categoria" : "accesorios"
    },
    {
        "id" : 20,
        "img" : "accesorios/acc2",
        "nombre" : "Accesorio 2",
        "precio" : 500,
        "categoria" : "accesorios"
    },
    {
        "id" : 21,
        "img" : "accesorios/acc3",
        "nombre" : "Accesorio 3",
        "precio" : 500,
        "categoria" : "accesorios"
    },
    {
        "id" : 22,
        "img" : "accesorios/acc4",
        "nombre" : "Accesorio 4",
        "precio" : 500,
        "categoria" : "accesorios"
    },
    {
        "id" : 23,
        "img" : "accesorios/acc5",
        "nombre" : "Accesorio 5",
        "precio" : 500,
        "categoria" : "accesorios"
    },
    {
        "id" : 24,
        "img" : "accesorios/acc6",
        "nombre" : "Accesorio 6",
        "precio" : 500,
        "categoria" : "accesorios"
    },
    {
        "id" : 25,
        "img" : "accesorios/acc7",
        "nombre" : "Accesorio 7",
        "precio" : 500,
        "categoria" : "accesorios"
    },
    {
        "id" : 26,
        "img" : "accesorios/acc8",
        "nombre" : "Accesorio 8",
        "precio" : 500,
        "categoria" : "accesorios"
    },
    {
        "id" : 27,
        "img" : "accesorios/acc9",
        "nombre" : "Accesorio 9",
        "precio" : 500,
        "categoria" : "accesorios"
    }
]



const promesa = () => {
    return new Promise((resolve, reject) => {
        setTimeout(
            () => {
                resolve(productosAPI);
            }, 2000
        )
        if (productosAPI.length === 0) {
            reject(new Error ('Ha ocurrido un error'))
        }
    })
}


async function fetchingData() {
   const articulos = await promesa()
   return articulos
}

export default productosAPI;






 

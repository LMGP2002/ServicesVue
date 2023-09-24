<template>
    <main>
        <div class="table-header">
            <h1 class="title">Productos</h1>
            <div>
                <button class="add-product">Añadir producto</button>
            </div>
        </div>
        <div class="table-body">
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Categoría</th>
                        <th>Descripción</th>
                        <th>imagen</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Arroz</td>
                        <td>$1000</td>
                        <td>Comida</td>
                        <td>Es un grano</td>
                        <td></td>
                        <td>
                            <button><i class="fa-solid fa-pen-to-square"></i></button>
                            <button><i class="fa-solid fa-trash"></i></button>
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>
    </main>
</template>
<style scoped>
    main{
        width: 100vw;
        height: 100vh;
        
    }
    .title{
        color: #535353;
    }
    .table-header{
        height: 20vh;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
        background-color: rgb(255, 255, 255);
    }
    .table-body{
        width: 100vw;
        height: 80vh;
        overflow: auto;
    }

    table{
        width: 100%;
        table-layout: fixed;
        border-collapse: collapse;
    }

    thead th{
        position: sticky;
        top: 0;
        background-color: #f6f9fc;
        color: #8493a5;
        font-size: 1.1em;
    }

    th,td{
        border-bottom: 1px solid #dddddd;
        padding: 10px 20px;
        word-break: break-all;
        text-align: center;
    }

    .add-product{
        padding: .6em 1em;
        font-size: 1em;
        background-color: rgb(12, 100, 151);
        color: #ffffff;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color .3s ease-in-out;
    }
    .add-product:hover{
        background-color: rgb(9, 48, 71);

    }

    td img{
        height: 60px;
        width: 60px;
        object-fit: cover;
        border-radius: 15px;
        border: 5px solid #ced0d2;
    }

    tr:hover td{
        color: #0298cf;
        cursor: pointer;
    }

    td button{
        outline: none;
        border: none;
        padding: 10px;
        cursor: pointer;
        border-radius: 6px;
        color: #ffffff;
        margin: 5px;
    }

    td button:nth-child(1){
        background-color: #0298cf;
    }
    
    td button:nth-child(2){
        background-color: #f54a4a;

    }

    td button:nth-child(1):hover{
        background-color: #266a83;
    }
    
    td button:nth-child(2):hover{
        background-color: #a10d0d;

    }


    
</style>
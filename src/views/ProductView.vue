<template>
    <main>
        <div class="table-header">
            <h1 class="title">Productos</h1>
            <div>
                <button  @click="()=>openModal(0,'add')" class="add-product">Añadir producto</button>
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
                    <tr v-for="product of products">
                        <td>{{ product.id }}</td>
                        <td>{{ product.title }}</td>
                        <td>${{ product.price }}</td>
                        <td>{{ product.category }}</td>
                        <td>{{ product.description }}</td>
                        <td><img :src="product.image"></td>
                        <td>
                            <button @click="()=>openModal(product.id,'find')"><i class="fa-solid fa-magnifying-glass"></i></button>
                            <button @click="()=>openModal(product.id,'delete')"><i class="fa-solid fa-trash"></i></button>
                            <button  @click="()=>openModal(product.id,'update')"><i class="fa-solid fa-pen-to-square"></i></button>
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>
    </main>
    <div v-if="modalVisible" class="container-modal">
        <div class="content-modal">
            <BuscarEliminarProduct v-if="action=='find' || action=='delete'" @closeModal="closeModal" :action="action" :idProduct="idProduct"></BuscarEliminarProduct>
            <AgregarEditar v-else-if="action=='add' || action=='update'" @closeModal="closeModal" :action="action" :idProduct="idProduct"></AgregarEditar>
        </div>
    </div>
</template>


<script setup lang="ts">
    import {onMounted,ref} from 'vue'
    import ProductService from '@/services/ProductService';
    import BuscarEliminarProduct from '@/components/BuscarEliminarProduct.vue'
    import AgregarEditar from '@/components/AgregarEditar.vue'

    const productService=new ProductService()
    let modalVisible=ref(false)
    let idProduct=ref(0)
    let action=ref('')
    let products=productService.getProducts()
    
    
    

    const openModal=(id:any,accion:string)=>{
        modalVisible.value=true
        idProduct.value=id
        action.value=accion
    }
    const closeModal=()=>{
        modalVisible.value=false
    }
    
    onMounted(async()=>{
        await productService.getAll()
    })

</script>
<style scoped>

    /* Estilos modal */

    .container-modal{
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        background-color: rgba(144, 148, 150, 0.8);
        display: flex;
        z-index: 100;
    }


    .content-modal{
        border-radius: 15px;
        margin: auto;
        width: 40%;
        height: 75%;
        background-color: #ffffff;
    }


    /* Estilos tabla */
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
        height: 100px;
        width: 100px;
        object-fit: cover;
        border-radius: 15px;
        border: 3px solid #8395a7;
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

    td button:nth-child(3), td button:nth-child(1){
        background-color: #0298cf;
    }
    
    td button:nth-child(2){
        background-color: #f54a4a;

    }

    td button:nth-child(3):hover, td button:nth-child(1):hover{
        background-color: #266a83;
    }
    
    td button:nth-child(2):hover{
        background-color: #a10d0d;

    }


    
</style>
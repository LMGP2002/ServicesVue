<template>
    <div v-if="visibleProduct==false" class="form-add">
        <h3>{{ props.action=='add'?'Ingrese los datos del producto': 'Modifique los datos del producto'}}</h3>
        <div class="form-group">
            <input v-model="name" placeholder=" " id="name" class="form-input" type="text">
            <label class="form-label" for="name">Nombre</label>
        </div>
        <div class="form-group">
            <input v-model="price" placeholder=" " id="price" class="form-input" type="number">
            <label class="form-label" for="price">Precio</label>
        </div>
        <div class="form-group">
            <input v-model="description" placeholder=" " id="description" class="form-input" type="text">
            <label class="form-label" for="description">Descripción</label>
        </div>
        <div class="form-group">
            <input v-model="url" placeholder=" " id="url" class="form-input" type="text">
            <label class="form-label" for="url">Url imagen</label>
        </div>
        <div class="form-group">
            <input v-model="category" placeholder=" " id="category" class="form-input" type="text">
            <label class="form-label" for="category">Categoría</label>
        </div>
        <button @click="props.action=='add'?addProduct():updateProduct()" class="form-btn">{{props.action=='add'?'Agregar':'Modificar'}}</button>
    </div>

    <div v-if="visibleProduct && product!=null" class="custom-modal">

        <h2 class="product-name">id: {{product.id}}-{{product.title}}</h2>
        <div class="detail-container">
            <p class="product-detail">Precio: ${{product.price}}</p>
            <p class="product-detail">Categoría: {{product.category}}</p>
        </div>
        <div class="description-container">
            <h4>Descripción:</h4>
            <p class="product-detail">{{product.description}}</p>
        </div>
        <img :src="product.image" class="product-img">
        <button @click="closeModal" class="btn-modal">Cerrar</button>

    </div>
</template>

<script setup lang="ts">

    import {ref, type Ref,defineEmits,defineProps} from 'vue'
    import ProductService from '@/services/ProductService'

    let name:Ref<string>=ref('')
    let price:Ref<number>=ref(0)
    let description:Ref<string>=ref('')
    let url:Ref<string>=ref('')
    let category:Ref<string>=ref('')
    let visibleProduct:Ref<boolean>=ref(false)

    const productService=new ProductService()
    const emit=defineEmits(['closeModal'])
    const props=defineProps({
        action:String,
        idProduct:Number
    })

    const closeModal=()=>{
        emit('closeModal')
    }
    let product:Ref;
        
    const addProduct=async ()=>{
        const productObject={title:name.value,price:price.value,description:description.value,image:url.value,category:category.value}

        await productService.addProduct(productObject)
        product=await productService.getProductAdd()
        visibleProduct.value=true;
        

    }
    const updateProduct=async ()=>{
        const productObject={title:name.value,price:price.value,description:description.value,image:url.value,category:category.value}

        await productService.updateProduct(productObject,props.idProduct)
        product=await productService.getProductUpdate()
        visibleProduct.value=true;
        

    }

</script>

<style scoped>
/*Estilos Mostrar Producto */
.custom-modal{
        font-size: .8em;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 20px;
        width: 100%;
        height: 100%;
        padding: 20px;
    }

    .detail-container{
        width: 100%;
        display: flex;
        justify-content: space-evenly;
    }
    .description-container{
        width: 100%;
        max-width: 300px;
        height: 100px;
        max-height: 100px;
        overflow: auto;
    }
    
    .product-img{
        width: 80px;
        height: 80px;
    }

    .product-name{
        font-size: 1.3em;
    }

    .btn-modal{
        padding: 10px 20px;
        border: none;
        color: #ffffff;
        border-radius: 15px;
        cursor: pointer;
        background-color: rgb(25, 25, 95);
    }
    .form-add{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 30px;
        gap: 25px;
    }

    .form-group{
        position: relative;
        width: 80%;
    }
    .form-input{
        width: 100%;
        outline: none;
        border: none;
        border-bottom: 1px solid rgb(82, 82, 82);
        padding: .4em .3em;
    }

    .form-label{
        position: absolute;
        top: 0;
        left: 5px;
        color: rgb(70, 70, 70);
        transition: transform .3s;
    }

    .form-input:focus + .form-label, .form-input:not(:placeholder-shown) + .form-label{
        color: rgb(33, 77, 128);
        transform: translateY(-15px) scale(.8);
        transform-origin: left top;
    }

    .form-btn{
        border: none;
        padding: 1em 2em;
        background-color: rgb(33, 77, 128);
        color: #ffffff;
        border-radius: 15px;
        cursor: pointer;
        transition: color .3s;
    }

    .form-btn:hover{
        background-color: rgb(19, 49, 83);
    }

</style>
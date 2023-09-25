<template>
    <div v-if="findProduct" class="custom-modal">

        <h2 class="product-name">{{findProduct.title}}</h2>
        <div class="detail-container">
            <p class="product-detail">{{'Precio: '+findProduct.price}}</p>
            <p class="product-detail">{{'Categoría: '+findProduct.category}}</p>
        </div>
        <div class="description-container">
            <h4>Descripción:</h4>
            <p class="product-detail">{{findProduct.description}}</p>
        </div>
        <img :src="findProduct.image" class="product-img">
        <button @click="closeModal" class="btn-modal">Cerrar</button>

    </div>

</template>

<script setup lang="ts">

    import {defineProps,onMounted,defineEmits} from 'vue'
    import ProductService from '@/services/ProductService'

    const productService=new ProductService()

    const {idProduct}=defineProps({
        idProduct:Number
    })

    const emit=defineEmits(['closeModal'])

    const closeModal=()=>{
        emit('closeModal')
    }


    let findProduct=productService.getProductFind()
    
    

    onMounted(async ()=>{
        await productService.findProduct(idProduct)
        
    })
    
</script>

<style scoped>
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
        background-color: rgb(39, 88, 161);
        border: none;
        color: #ffffff;
        border-radius: 15px;
        cursor: pointer;
    }




</style>
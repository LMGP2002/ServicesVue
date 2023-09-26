<template>
    <main>
        <form class="form">
            <h2 class="">Inicia Sesión</h2>
            <div class="form-container">
                <div class="form-group">
                    <input v-model="username" class="form-input" placeholder=" " id="user" type="text">
                    <label class="form-label" for="user">Usuario</label>
                    <span class="form-line"></span>
                </div>
                <div class="form-group">
                    <input v-model="password" class="form-input" placeholder=" " id="password" type="password">
                    <label class="form-label" for="password">Password</label>
                    <span class="form-line"></span>
                </div>
                <div v-if="message=='Credenciales incorrectas'" class="msg-incorrecto">
                    {{message}}
                </div>
                <button @click="login" class="form-button" type="button">Ingresar</button>
            </div>
        </form>
    </main>
</template>

<script setup lang="ts">
    import {ref,type Ref} from 'vue'
    import { useRouter } from 'vue-router';

    import ProductService from '@/services/ProductService';
    const username:Ref<string>=ref('')
    const password:Ref<string>=ref('')
    let message:Ref<string>=ref('')
    const router = useRouter();
        
    
    const productService=new ProductService()
    const login=async ()=>{
        if(username.value!='' && password.value!=''){
            let dataLogin={
                username:username.value.trim(),
                password:password.value
            }
            
            message.value=await productService.login(dataLogin);
            if(message.value=='Credenciales correctas'){
                router.push('/product')
            }


        }  
    }

</script>

<style scoped>
    main{
        width: 100vw;
        min-height: 100vh;
        background-color: #e5e5f7;
        opacity: 0.8;
        background-image:  radial-gradient(#1d1f46 0.5px, transparent 0.5px), radial-gradient(#1d1f46 0.5px, #e5e5f7 0.5px);
        background-size: 20px 20px;
        background-position: 0 0,10px 10px;
        display: flex;
    }

    .msg-incorrecto{
        background-color: rgb(150, 78, 78);
        color: #ffffff;
    }

    .form{
        width: 400px;
        height: 400px;
        background-color: #ffffff;
        margin: auto;
        border-radius: 10px;
        box-shadow: 0 5px 10px -5px rgba(0, 0, 0, 30);
        padding: 3em;
        text-align: center;
    }

    .form-container{
        margin-top: 3em;
        display: grid;
        gap: 2em;
    }

    .form-group{
        position: relative;
    }

    .form-input{
        width: 100%;
        padding: .5em;
        outline: none;
        border: none;
        border-bottom: 1px solid rgb(78, 78, 78);
    }

    .form-label{
        position: absolute;
        top: 0;
        left: 5px;
        transition: transform .3s, color .3s;
        color: rgb(129, 128, 128);
        cursor: pointer;
    }

    .form-input:focus + .form-label,
    .form-input:not(:placeholder-shown) +.form-label
    {
        transform: translateY(-20px) scale(.8);
        color: rgb(12, 100, 151);
        transform-origin:left top;
    }
    
    .form-line{
        background-color: rgb(66, 66, 66);
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        height: 1px;
        transform: scale(0);
        transform-origin: left bottom ;
        transition: transform .3s;
    }
    
    .form-input:focus ~ .form-line{
        transform: scale(1);
        background-color: rgb(12, 100, 151);

    }

    .form-button{
        padding: .8em 2em;
        font-size: 1em;
        background-color: rgb(12, 100, 151);
        color: #ffffff;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color .3s ease-in-out;
    }
    .form-button:hover{
        background-color: rgb(9, 48, 71);

    }


    

</style>
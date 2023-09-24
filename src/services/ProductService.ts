import type IProduct from '../interfaces/IProduct'
import {type Ref, ref} from 'vue'
import axios from 'axios'

export default class ProductService{
    products:Ref<Array<IProduct>>
    constructor(){
        this.products=ref([]);
    }

    getProducts():Ref<Array<IProduct>>{
        return this.products;
    }

    async getAll():Promise<void>{
        try{

            let response=await axios.get("https://fakestoreapi.com/products");
            this.products.value=await response.data
            

        }catch(error){
            console.log(error)

        }
        
    }


}
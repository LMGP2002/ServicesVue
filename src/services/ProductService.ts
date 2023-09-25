import type IProduct from '../interfaces/IProduct'
import {type Ref, ref} from 'vue'
import axios from 'axios'

export default class ProductService{
    products:Ref<Array<IProduct>>
    productFind:Ref<IProduct>
    constructor(){
        this.products=ref([]);
        this.productFind=ref()
    }

    getProducts():Ref<Array<IProduct>>{
        return this.products;
    }

    getProductFind(){
        return this.productFind;
    }

  
    async getAll():Promise<void>{
        try{

            let response=await axios.get("https://fakestoreapi.com/products");
            this.products.value=await response.data;

        }catch(error){
            console.log(error);

        }
        
    }



    async findProduct(id:any):Promise<void>{
        try {
            let response=await axios.get("https://fakestoreapi.com/products/"+id);
            this.productFind.value=await response.data
            
        } catch (error) {
            console.log(error);    
        }
    }


}
import type IProduct from '../interfaces/IProduct'
import {type Ref, ref} from 'vue'
import axios from 'axios'

export default class ProductService{
    products:Ref<Array<IProduct>>
    productFind:Ref<IProduct|null>
    productDelete:Ref<IProduct|null>
    productAdd:Ref<IProduct|null>
    productUpdate:Ref<IProduct|null>
    constructor(){
        this.products=ref([]);
        this.productFind=ref(null)
        this.productDelete=ref(null)
        this.productAdd=ref(null)
        this.productUpdate=ref(null)
    }

    getProducts():Ref<Array<IProduct>>{
        return this.products;
    }

    getProductFind(){
        return this.productFind;
    }
    
    getProductDelete(){
        return this.productDelete;
    }
    getProductAdd(){
        return this.productAdd;
    }
    getProductUpdate(){
        return this.productUpdate;
    }
  
    async getAll():Promise<void>{
        try{

            let response=await axios.get("https://fakestoreapi.com/products");
            this.products.value=await response.data;

        }catch(error){
            console.log(error);

        }
        
    }

    // Consultar un producto

    async findProduct(id:any):Promise<void>{
        try {
            let response=await axios.get("https://fakestoreapi.com/products/"+id);
            let data=await response.data
            this.productFind.value=data
            
        } catch (error) {
            console.log(error);    
        }
    }

    // Eliminar un producto

    async deleteProduct(id:any):Promise<void>{
        try {
            let response=await axios.delete("https://fakestoreapi.com/products/"+id);
            let data=await response.data
            this.productDelete.value=data
            
        } catch (error) {
            console.log(error);    
        }
    }
    
    // Añadir un producto
    
    async addProduct(informacionProduct){
        try {

            let body=informacionProduct
            let response=await axios.post('https://fakestoreapi.com/products',body)
            let data=await response.data
            
            this.productAdd.value=data
            
        } catch (error) {
            console.log(error);    
            
        }
    }
    // Modificar un producto
    async updateProduct(informacionProduct,id){
        try {
            
            let body=informacionProduct
            let response=await axios.put('https://fakestoreapi.com/products/'+id,body)
            let data=await response.data
            
            this.productUpdate.value=data
            
        } catch (error) {
            console.log(error);    
            
        }
    }

    

    


}
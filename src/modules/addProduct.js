import { Product } from "../class/Product.js"
import { Validate } from "../class/Validate.js"

const addProduct = ()=>{
    
    document.querySelector('form').addEventListener('submit', (e)=>{
        e.preventDefault();
    
        let productName = document.querySelector('input[name=name]');
        let productPrice = document.querySelector('input[name=price]');
        let productYear = document.querySelector('input[name=year]');

        let alertDiv = document.querySelector('.alert-warning');
        alertDiv.style.display = 'none';
     
        const product = new Product();
        product.setName(productName.value);
        product.setPrice(productPrice.value);
        product.setYear(productYear.value);

        product.appendList();


    
    });
    

};


export default addProduct
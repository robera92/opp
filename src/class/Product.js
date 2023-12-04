class Product {

    constructor(name, price, year){
        this.name = name;
        this.price = price;
        this.year = year;
    }


    // setters 
    setPrice(price){
        let priceCheck = Number.isInteger(parseInt(price)) ? true : 'Numbers only!';
        
        if(priceCheck !== true){
            displayAlert(priceCheck);
        }
        else{
            this.price = price;
        }
    }

    setName(name){
        let nameLength = name > 5 ? true : 'Name too short!';

        if(nameLength !== true){
            displayAlert(nameLength);
        }
        else{
            this.name = name;
        }
    }

    setYear(year){
        let yearCheck = parseInt(this.year) > 2020 ? true : 'Wrong year!';

        if(yearCheck !== true){
            displayAlert(yearCheck);
        }
        else{
            this.name = year;
        }
    }

    // getters
    getPrice(){
        return this.price;
    }

    getName(){
        return this.name;
    }

    getYear(){
        return this.year;
    }

    getAllData(){
        return {
            name: this.name,
            price: this.price,
            year: this.year
        }
    }


    appendList(){

        let currentList = document.querySelector('.list-group');

        let newItem = document.createElement('li');
        newItem.classList.add('list-group-item');
        newItem.textContent = 'Product: ' + this.name + ' Price: '+ this.price + ' Year: '+this.year;

        currentList.appendChild(newItem);

    }


}


function displayAlert(text){
    let alertDiv = document.querySelector('.alert-warning');
    alertDiv.style.display = 'block';
    alertDiv.innerText = text;
}

module.exports = {
    Product
}
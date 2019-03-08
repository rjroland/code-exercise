function Product (code, name, quantity, unitUOM, unitCbm, unitWeight, unitPrice){
    this.code = code;
    this.name = name;
    this.quantity = quantity;
    this.unitUOM = unitUOM;
    this.unitCbm = unitCbm;
    this.unitWeight = unitWeight;
    this.unitPrice = unitPrice;
}

function ShoppingCart (){
    this.productList = [];

    this.getItems = function(){
         console.log(this.productList)
    }

    this.getTotalPrice = function(){
        //per product, get the total price, How? product quantity x product unit price = total product price
        var total = 0;
        for(var i=0; i < this.productList.length; i++){
            var currentProduct = this.productList[i]

            var totalProductPrice = currentProduct.quantity * currentProduct.unitPrice;
            total = total + totalProductPrice;            
        }
        console.log(total);
    }

    this.getTotalWeight = function(){
        var total = 0;
        for(var i=0; i < this.productList.length; i++){
            var currentProduct = this.productList[i]

            var totalWeight = currentProduct.unitWeight * currentProduct.quantity;
            
            total = total + totalWeight;
            
        }
        console.log(total);
        
    }

    this.getTotalCbm = function(){
        var total = 0;
        for(var i=0; i < this.productList.length; i++){
            var currentProduct = this.productList[i]
            var totalCbm = currentProduct.unitCbm * currentProduct.quantity;
            total = total + totalCbm;
            
        }
        console.log(total);
    }

    this.removeProduct = function(product){
        for(var i=0; i < this.productList.length; i++){
            var currentProduct = this.productList[i]
            var productCode = currentProduct.code;

            if(product.code == productCode){
                console.log("delete " + productCode);
                this.productList.splice(i, 1)
            }
            
        }
    }

}

var shoppingCart = new ShoppingCart()
var pancit = new Product("001", "Yakisoba", 10, "BOX", 20, 2, 10)
var shoes = new Product("002", "Nike", 10, "BOX", 20, 3, 10)

shoppingCart.productList.push(shoes)
shoppingCart.productList.push(pancit)
shoppingCart.getTotalPrice()
shoppingCart.removeProduct(shoes);
shoppingCart.getTotalPrice()
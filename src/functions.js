function addToCart(quantity,productName="Elma") {
    console.log("Sepete eklendi!: ürün"+productName+ "adet" + quantity)
}
//addToCart("Elma")
addToCart(10)
// addToCart("Karpuz")

let sayHello=()=>{
    console.log("Hello World!")
}

sayHello()

let sayHello2=function(){
    console.log("Hello World2")
}

sayHello2();

function addToCart2(productName, quantity,unitPrice) {
    
}
addToCart2("Elma",5, 10)
addToCart2("Armut",3, 6)
addToCart2("Kiraz",5, 78)


let product1={productName:"Elma", unitPrice:10, quantity:5}
function addToCart3(product){

    console.log("Ürün:" +product.productName)
    console.log("Adet:" +product.quantity)
    console.log("Fiyat:" +product.unitPrice)
}
addToCart3(product1)
let product2={productName:"Elma", unitPrice:10, quantity:5}
let product3={productName:"Elma", unitPrice:10, quantity:5}
product2.productName="KARPUZ"
console.log(product3.productName)
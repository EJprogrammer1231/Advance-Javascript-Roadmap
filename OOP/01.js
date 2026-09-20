function product(name, category, price, stock) {
    this.name = name;
    this.category = category;
    this.price = price;
    this.stock = stock;
}

const product1 = new product("Laptop", "Electronics" , 50000, 5);
const product2 = new product("Mouse", "Accessories" , 800, 20);
const product3 = new product("Keyboard", "Accessories" , 1500, 10);
const product4 = new product("Monitor", "Electronics" , 1200, 7);

console.log(product1);
console.log(product2);
console.log(product3);
console.log(product4);
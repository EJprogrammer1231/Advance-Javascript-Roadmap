const product = {
  id: 1,
  name: "Chicken Adobo",
  price: 150,
  category: "Meals"
};

const updatedProduct = {
  ...product,
  price: 180,
  category: "Filipino Meals",
  available: true
}

console.log(product);
console.log(updatedProduct);
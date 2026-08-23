function createCart() {
  let items = [];

  return {
    addItem(name,price,quantity) {
      items.push({
        name,
        price,
        quantity
      });
    },
    removeItem(name) {
      const index = items.findIndex(item => {
        return item.name === name;
      });

      items.splice(index,1);
    },
    getItems() {
      return items;
    },
    getTotal(){
      const total_items = items.reduce((total,item) => {
        return total += item.price * item.quantity;
      }, 0);

      return total_items;
    }
  };
}

const cart = createCart();

cart.addItem("Pork Meat", 500, 10);
cart.removeItem("Pork Meat");
cart.addItem("Computer", 10000, 2);
console.log(cart.getItems());
console.log(cart.getTotal());
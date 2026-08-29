class Product {
    // name;
    // price;
    // category;
    // description;
    // rating;
    constructor(productName,productPrice,productcategory,productDescription,productRating){
    this.name = productName;
    this.price = productPrice;
    this.category = productcategory;
    this.description = productDescription;
    this.rating = productRating;
}

  addToCart() {
    console.log("Product added to cart");
  }
  removeFromCart() {
    console.log("Product removed from cart");
  }
}

const iphone = new Product('iphone','125000','mobile','phone','4.5');
console.log(iphone);

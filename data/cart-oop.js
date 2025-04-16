const cart = {
  cartItems: undefined,
  loadFromStorage: function () {
    this.cart.cartItems = JSON.parse(localStorage.getItem("cart-oop"));

    if (!this.cart.cartItems) {
      this.cart.cartItems = [
        {
          productId: "3ebe75dc-64d2-4137-8860-1f5a963e534b",
          quantity: 2,
          deliveryOptionId: "1",
        },
        {
          productId: "8c9c52b5-5a19-4bcb-a5d1-158a74287c53",
          quantity: 1,
          deliveryOptionId: "2",
        },
      ];
    }
  },

  saveToStorage: function () {
    localStorage.setItem("cart-oop", JSON.stringify(this.cartItems));
  },

  addToCart: function (productId) {
    let matchingItem;

    this.cartItems.forEach((cartItem) => {
      if (productId === cartItem.productId) {
        matchingItem = cartItem;
      }
    });
    if (matchingItem) {
      matchingItem.quantity += 1;
    } else {
      this.cartItems.push({
        productId: productId,
        quantity: 1,
        deliveryOptionId: "1",
      });
    }
    this.saveToStorage();
  },

  removeFromCart: function (productId) {
    const newCart = [];
    this.cartItems.forEach((cartItem) => {
      if (cartItem.productId !== productId) {
        newCart.push(cartItem);
      }
    });
    this.cartItems = newCart;
    this.saveToStorage();
  },

  updateDeliveryOption: function (productId, deliveryOptionId) {
    let matchingItem;

    this.cartItems.forEach((cartItem) => {
      if (productId === cartItem.productId) {
        matchingItem = cartItem;
      }
    });

    matchingItem.deliveryOptionId = deliveryOptionId;
    this.saveToStorage();
  },
};

cart.loadFromStorage();
console.log(cart)

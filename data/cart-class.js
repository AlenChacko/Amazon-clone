class Cart {
    cartItems;
    #localStorageKey;

    constructor (localStorageKey) {
        this.#localStorageKey = localStorageKey;
        this.#loadFromStorage();
    }

    #loadFromStorage () {
        this.cartItems = JSON.parse(localStorage.getItem(this.#localStorageKey));
    
        if (!this.cartItems) {
          this.cartItems = [
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
      }

      saveToStorage () {
        localStorage.setItem(this.#localStorageKey, JSON.stringify(this.cartItems));
      }

      addToCart (productId) {
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
      }

      removeFromCart (productId) {
        const newCart = [];
        this.cartItems.forEach((cartItem) => {
          if (cartItem.productId !== productId) {
            newCart.push(cartItem);
          }
        });
        this.cartItems = newCart;
        this.saveToStorage();
      }

      updateDeliveryOption (productId, deliveryOptionId) {
        let matchingItem;
    
        this.cartItems.forEach((cartItem) => {
          if (productId === cartItem.productId) {
            matchingItem = cartItem;
          }
        });
    
        matchingItem.deliveryOptionId = deliveryOptionId;
        this.saveToStorage();
      }
}




  
  const cart = new Cart('cart-oop')
  const businessCart = new Cart('cart-business');
  
  
  console.log('cart',cart);
  console.log('business',businessCart)
  
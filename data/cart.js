export const cart = [
  {
    productId: "3ebe75dc-64d2-4137-8860-1f5a963e534b",
    quantity: 2,
  },
  {
    productId: "8c9c52b5-5a19-4bcb-a5d1-158a74287c53",
    quantity: 1,
  },
];

export function addToCart(productId) {
  let matchingItem;

  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });
  if (matchingItem) {
    matchingItem.quantity += 1;
  } else {
    cart.push({
      productId: productId,
      quantity: 1,
    });
  }
}

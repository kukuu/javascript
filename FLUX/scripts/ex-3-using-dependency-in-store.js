//Then in our Store, 
//when handling a dispatched action, 
//we can use the Dispatcher’s waitFor method to ensure our ShoeStore has been updated:

case 'BUY_SHOES':
  AppDispatcher.waitFor([
    ShoeStore.dispatcherIndex
  ], function() {
    CheckoutStore.purchaseShoes(ShoeStore.getSelectedShoes());
  });

break;
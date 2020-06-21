/** The actual model state is moved into redux, and controlled using actions 
 * However, some derivable values like total price are not stored, but we still don't
 * want to duplicate code, this file helps out removing the duplication, while not changing the state.
*/
export function calculateTotalPrice(dishes, numberOfGuests) {
  return dishes
    .map(dishes => dishes.pricePerServing)
    .reduce((totalPrice, dishPrice) => totalPrice + dishPrice, 0) * numberOfGuests;
}
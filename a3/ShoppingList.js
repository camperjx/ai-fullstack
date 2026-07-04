//1. Create a shopping list array with at least 4 items and log it to the console.
const shoppingList = ["Milk","Bread","Eggs","Apple"];
console.log("Initial Shopping List:", shoppingList)

// 2. Add a new item to the shopping list and log the updated list to the console.
shoppingList.push("Banana");
console.log("Updated Shopping List after adding Banana:", shoppingList);

// 3. if list length is greater than 5, show the message "The shopping cart is full"
const checkShoppingCart = (list) => {
    if (list.length <=5) {
        console.log("Updated Shopping List after removing first item:", list);
    }else{
        console.log("The shopping cart is full");
    }
};
checkShoppingCart(shoppingList);

// 4. Remove the last item from the shopping list and log the updated list to the console.
const removedItem = shoppingList.pop();
console.log(`Removed Item: ${removedItem}`);
console.log("Updated Shopping List after removing last item:", shoppingList);

// 5. output every item in the shopping list using a for loop.
console.log("Items in the Shopping List:");
for (let i = 0; i < shoppingList.length; i++) {
    console.log(`${i + 1}. ${shoppingList[i]}`);
}

// 6. identify the item in shopping list
const hasItem = (itemName) => {
    return shoppingList.includes(itemName);
};
console.log("Does the shopping list contain 'Milk'?", hasItem("Milk"));
console.log("Does the shopping list contain 'Cheese'?", hasItem("Cheese"));

//7. create shopping item object with properties name, quantity, and price.
const shoppingItem = {
    name: "Milk",
    quantity: 5,
    price: 3.99
};
for (const property in shoppingItem) {
    console.log(`${property}: ${shoppingItem[property]}`);
}

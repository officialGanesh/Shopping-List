
class makeItem{
    constructor(itemName,itemQuantity,itemPrice){
        this.itemName = itemName;
        this.itemQuantity =itemQuantity;
        this.itemPrice =itemPrice;
    };
};



// UI

class UI{
    
    static addItem(item){
        let availableItems = document.getElementById('available-items');
        let element = document.createElement('tr');
        let html = "";
        html += `<tr>
                    <td>${item.itemName}</td>
                    <td>${item.itemQuantity}</td> 
                    <td>${item.itemPrice}</td>
                    <td><button type="button" class="btn btn-dark px-2 mx-1 delete">🗑️</button></td>
                </tr>`
        element.innerHTML = html
        availableItems.append(element);
    };


    static clearUserInputs(){
        let itemName = document.getElementById('itemName');
        let itemQuantity = document.getElementById('quantity');
        let itemPrice = document.getElementById('price')
        itemName.value = "";
        itemQuantity.value = "";
        itemPrice.value = "";
    };

};


let addItemBtn = document.getElementById('form');
addItemBtn.addEventListener('submit',function(e){

    e.preventDefault();

    let itemName = document.getElementById('itemName').value;
    let itemQuantity = document.getElementById('quantity').value;
    let itemPrice = document.getElementById('price').value;
    let item = new makeItem(itemName,itemQuantity,itemPrice*itemQuantity);
    // console.log(item);

    // Add-Items
    UI.addItem(item);
    // Clear user inputs
    UI.clearUserInputs();

});



// Storage controller
const StoreCtrl = (function(){
    return {
        storeItem: function(item){
            let items = [];
            if(localStorage.getItem('items') === null){
                items.push(item);
            }
            else {
                items = JSON.parse(localStorage.getItem('items'));
                items.push(item);
            }
            localStorage.setItem('items', JSON.stringify(items));
        },
        getItems: function(){
            let items;
            if(localStorage.getItem('items') === null){
                items = [];
            }
            else {
                items = JSON.parse(localStorage.getItem('items'));
            }
            return items
        },
        updateItem: function(updatedItem){
            let items = JSON.parse(localStorage.getItem('items'));
            items.forEach(function(item, index){
                if(item.id === updatedItem.id){
                    items.splice(index, 1, updatedItem);
                }
            })
            localStorage.setItem('items', JSON.stringify(items));
        },
        deleteItem: function(deletedItemId){
            let items = JSON.parse(localStorage.getItem('items'));
            items.forEach(function(item, index){
                if(item.id === deletedItemId){
                    items.splice(index, 1);
                }
            })
            localStorage.setItem('items', JSON.stringify(items));
        },
        clearItems: function(){
            localStorage.removeItem('items');
        }
    }

})();


// Item controller
const ItemCtrl = (function(){
    const Item = function(id, name, calories){
        this.id = id;
        this.name = name;
        this.calories = calories;
    }

    const data = {
        // items: [
        //     {id: 0, name: 'Steak Dinner', calories: 1200},
        //     {id: 1, name: 'Cookie', calories: 400},
        //     {id: 2, name: 'Eggs', calories: 1200}
        // ],
        items: StoreCtrl.getItems(),
        currentItem: null,
        totalCalories: 0
    }

    return {
        getItems: function(){
            return data.items;
        },
        clearAllItems: function(){
            data.items = [];
        },
        getItemById: function(id){
            let found = null;
            // console.log('here', id);
            data.items.forEach((item1)=>{
                // console.log(id);
                // console.log(item1.id);
                if(item1.id === id){
                    // console.log(item1);
                    found = item1;
                }
            })
            return found;
        },
        setCurrentItem: function(item){
            data.currentItem = item;
            // console.log(item);
            // console.log(data);
        },
        updateItem: function(name, calories){
            let found = null;
            data.items.forEach((item)=>{
                if(item.id === data.currentItem.id){
                    item.name = name;
                    item.calories = parseInt(calories);
                    found = item;
                }
            })
            return found;
        },
        deleteItem: function(id){
            let ids = data.items.map(function(item){
                return item.id;
            });
            const index = ids.indexOf(id);
            data.items.splice(index, 1);
        },
        getCurrentItem: function(){
            return data.currentItem;
        },
        addItem: function(name, calories){
            let ID=0;
            if(data.items.length > 0){
                // console.log(this.getItems()[2]);
                ID = this.getItems()[data.items.length - 1].id + 1;
            }
            else {
                ID = 0; 
            }
            const item = new Item(ID, name, parseInt(calories));
            data.items.push(item);
            return item;
        },
        getTotalCalories: function(){
            let total = 0;
            data.items.forEach((item)=>{
                total += item.calories;
            });
            return total;
        },
        logData: function(){
            return data;
        }
    }
})();


// UI controller
const UICtrl = (function(){
    const UISelectors = {
        itemsList: '#item-list',
        liItems: '#item-list li',
        addBtn: '.add-btn',
        deleteBtn: '.delete-btn',
        updateBtn: '.update-btn',
        backBtn: '.back-btn',
        clearBtn: '.clear-btn',
        itemName: '#item-name',
        itemCalories: '#item-calories',
        totalCalories: '.total-calories'
    };
    return {
        populateItemList: function(items){
            this.showListItems();
            let html = ``;

            items.forEach(function(item){
                html += `
                <li class="collection-item" id="item-${item.id}">
                <strong>${item.name}: </strong> <em>${item.calories} calories</em>
                <a href="#" class="secondary-content"><i class="edit-item fa fa-pencil"></i></a>
            </li>`;
            });
            document.querySelector(UISelectors.itemsList).innerHTML = html;
        },
        getInputItems: function(){
            return {
                name: document.querySelector(UISelectors.itemName).value,
                itemCalories: document.querySelector(UISelectors.itemCalories).value
            }
        },
        addInputItems: function(item) {
            this.showListItems();

            let li = document.createElement('li');
            li.className = "collection-item";
            li.id = `item-${item.id}`;
            li.innerHTML = `<strong>${item.name}: </strong> <em>${item.calories} calories</em>
            <a href="#" class="secondary-content"><i class="edit-item fa fa-pencil"></i></a>`;

            document.querySelector(UISelectors.itemsList).insertAdjacentElement('beforeend', li);
        },
        deleteListItem: function(id){
            document.querySelector(`#item-${id}`).remove();
        },
        updateListItem: function(updateItem){
            const listItems = document.querySelectorAll(UISelectors.liItems);

            let items = Array.from(listItems);
            items.forEach(function(item){
                if(item.id === `item-${updateItem.id}`){
                    let listItem = document.querySelector(`#${item.id}`);
                    console.log(listItem);
                    console.log(item);
                    listItem.innerHTML = `<strong>${updateItem.name}: </strong> <em>${updateItem.calories} calories</em>
                    <a href="#" class="secondary-content"><i class="edit-item fa fa-pencil"></i></a>`;   
                }
            })
            // console.log(listItems);
        },
        clearInput: function(){
            document.querySelector(UISelectors.itemName).value = '';
            document.querySelector(UISelectors.itemCalories).value = '';
        },
        showCurrentItemInForm: function(){
            // console.log(ItemCtrl.getCurrentItem());
            document.querySelector(UISelectors.itemName).value = ItemCtrl.getCurrentItem().name;
            document.querySelector(UISelectors.itemCalories).value = ItemCtrl.getCurrentItem().calories;
            this.showEditState();

        },
        clearAllListItems: function(){
            // document.querySelector(UISelectors.itemsList).innerHTML = '';

            const listItems = document.querySelectorAll(UISelectors.liItems);

            let items = Array.from(listItems);
            items.forEach(function(item){
                item.remove();
            });
        },
        hideListItems: function(){
            document.querySelector(UISelectors.itemsList).style.display = 'none';
        },
        showListItems: function(){
            document.querySelector(UISelectors.itemsList).style.display = 'block';
        },
        getSelectors: function(){
            return UISelectors
        },
        showTotalCalories: function(totalCalories){
            document.querySelector(UISelectors.totalCalories).textContent = totalCalories;
        },
        clearEditState: function(){
            UICtrl.clearInput();
            document.querySelector(UISelectors.backBtn).style.display = 'none';
            document.querySelector(UISelectors.deleteBtn).style.display = 'none';
            document.querySelector(UISelectors.updateBtn).style.display = 'none';
            document.querySelector(UISelectors.addBtn).style.display = 'inline';
        },
        showEditState: function(){
            document.querySelector(UISelectors.backBtn).style.display = 'inline';
            document.querySelector(UISelectors.deleteBtn).style.display = 'inline';
            document.querySelector(UISelectors.updateBtn).style.display = 'inline';
            document.querySelector(UISelectors.addBtn).style.display = 'none';
        }
    }
})();


// App controller
const app = (function(ItemCtrl, StoreCtrl, UICtrl){

    const loadEventListeners = function(){
        // Get UI selectors
        const UISelectors = UICtrl.getSelectors();

        // Add item event
        document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit);

        // Disable enter event
        document.addEventListener('keypress', function(e){
            if(e.keyCode === 13 || e.which === 13){
                e.preventDefault();
                return false;
            }
        })

        // Edit icon click event
        document.querySelector(UISelectors.itemsList).addEventListener('click', itemEditClick);

        // Update item event
        document.querySelector(UISelectors.updateBtn).addEventListener('click', itemUpdateSubmit);

        document.querySelector(UISelectors.deleteBtn).addEventListener('click', itemDeleteSubmit);

        // Back button event
        document.querySelector(UISelectors.backBtn).addEventListener('click', UICtrl.clearEditState);

        // Clear all button event
        document.querySelector(UISelectors.clearBtn).addEventListener('click', clearAllItemsClick);

    }

    const clearAllItemsClick = function(e){

        // Clear all items from data structure
        ItemCtrl.clearAllItems();

        // Clear all items from UI
        UICtrl.clearAllListItems();

        // Calculate total calories
        const totalCalories = ItemCtrl.getTotalCalories();
        UICtrl.showTotalCalories(totalCalories);

        // UICtrl.hideListItems();

        // Clear from Local storage
        StoreCtrl.clearItems();

        e.preventDefault();
    }

    const itemDeleteSubmit = function(e){
        const currentItem = ItemCtrl.getCurrentItem();

        // Delete from the data structure
        ItemCtrl.deleteItem(currentItem.id);

        // Delete from UI
        UICtrl.deleteListItem(currentItem.id);

        // Calculate total calories
        const totalCalories = ItemCtrl.getTotalCalories();
        UICtrl.showTotalCalories(totalCalories);

        // clear edit state
        UICtrl.clearEditState();

        StoreCtrl.deleteItem(currentItem.id);

        e.preventDefault();
    }

    const itemUpdateSubmit = function(e){
        // console.log('update');
        const input = UICtrl.getInputItems();

        const itemUpdate = ItemCtrl.updateItem(input.name, input.itemCalories);

        UICtrl.updateListItem(itemUpdate);

        const totalCalories = ItemCtrl.getTotalCalories();
        UICtrl.showTotalCalories(totalCalories);

        UICtrl.clearEditState();

        StoreCtrl.updateItem(itemUpdate);

        e.preventDefault();
    }

    const itemEditClick = function(e){
        if(e.target.classList.contains('edit-item')){
            let eleID = e.target.parentNode.parentNode.id;
            let eleIDArr = eleID.split('-');
            const ID = parseInt(eleIDArr[1]);
            const item = ItemCtrl.getItemById(ID);
            // console.log(item);
            ItemCtrl.setCurrentItem(item);
            UICtrl.showCurrentItemInForm();
        }
        e.preventDefault();
    }

    // Add item submit
    const itemAddSubmit = function(e){
        const items = UICtrl.getInputItems();
        // console.log('Add');
        if(items.name !== '' && items.calories !== ''){
            const newItem = ItemCtrl.addItem(items.name, items.itemCalories);
            // console.log(ItemCtrl.logData());

            UICtrl.addInputItems(newItem);

            const totalCalories = ItemCtrl.getTotalCalories();
            UICtrl.showTotalCalories(totalCalories);

            StoreCtrl.storeItem(newItem);

            UICtrl.clearInput();
        }

        e.preventDefault();
    }
    // Public methods
    return {
        init: function(){
            UICtrl.clearEditState();
            // Fetch items from ItemCtrl
            const items = ItemCtrl.getItems();
            // console.log(items);

            if(items.length === 0){
                UICtrl.hideListItems();
            }
            else {
                UICtrl.populateItemList(items);
            }

            const totalCalories = ItemCtrl.getTotalCalories();
            UICtrl.showTotalCalories(totalCalories);

            loadEventListeners();
        }
    }
})(ItemCtrl, StoreCtrl, UICtrl);

app.init();
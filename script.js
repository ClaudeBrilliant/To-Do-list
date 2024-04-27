(() => {
    let toDoListArray = [];
    // UI variables
    const form = document.querySelector('.form');
    const input = form.querySelector('.form_input');
    const ul = document.querySelector('.toDoList');

    // Event listeners
    form.addEventListener("submit", (e) => {
        // Prevent default behaviour - page reload
        e.preventDefault();
        // Give item a unique ID
        let itemId = String(Date.now());
        // Get/assign input values
        let toDoItem = input.value;
        // Pass id and items into functions
        addItemToDOM(itemId, toDoItem);
        addItemToArray(itemId, toDoItem);
        // Clear the input box (this is default behaviour but we got rid of that)
        input.value = "";
    });

    ul.addEventListener("click", (e) => {
        let id = e.target.getAttribute("data-id");
        if (!id) return; // User clicked in something else
        // Pass id through to functions
        removeItemFromDom(id);
        removeItemFromArray(id);
    });

    // Functions
    function addItemToDOM(itemId, toDoItem) {
        // Create a li
        const li = document.createElement("li");
        li.setAttribute("data-id", itemId);
        // Add todoItem text to li
        li.innerText = toDoItem;
        // Add li to DOM
        ul.appendChild(li);
    }

    function addItemToArray(itemId, toDoItem) {
        // Add item to array as an object with an id so we can find and delete it later
        toDoListArray.push({ itemId, toDoItem });
        console.log(toDoListArray);
    }

    function removeItemFromDom(id) {
        // Get list item by data ID
        var li = document.querySelector("[data-id='" + id + "']");
        // Remove list item
        ul.removeChild(li);
    }

    function removeItemFromArray(id) {
        // Create a new todoListArray with all li's that don't match the Id
        toDoListArray = toDoListArray.filter((item) => item.itemId !== id);
        console.log(toDoListArray);
    }
})();

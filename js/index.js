let submit = document.getElementById('submitButton');
let clear = document.getElementById('clearButton');
let markAll = document.getElementById('markAllButton');
let delAll = document.getElementById('deleteButton');
let text = document.getElementById('todoText');

submit.addEventListener("click", (event)=>{
	event.preventDefault();
	let newText = document.createTextNode(text.value);
	text.value = '';
	let newDiv = document.createElement('div');
	newDiv.className = "todoItem";

	let newInput = document.createElement('input');
	newInput.type = 'checkbox';
	newInput.className = 'checkbox2';
	let newSpan = document.createElement('span');
	newSpan.className = 'newSpan';
	newSpan.appendChild(newText);

	newDiv.appendChild(newInput);
	newDiv.appendChild(newSpan);

	let oldDiv = document.getElementById('listOfTodos');
	oldDiv.appendChild(newDiv);
});

clear.addEventListener("click", (event)=>{
	event.preventDefault();
	let checkBoxesArray = document.getElementsByClassName('checkbox');

	for (let box of checkBoxesArray) {
		box.checked = false;
	}
});

markAll.addEventListener("click", (event)=>{
	event.preventDefault();
	let checkBoxesArray = document.getElementsByClassName('checkbox');

	for (let box of checkBoxesArray) {
		box.checked = true;
	}
});

delAll.addEventListener("click", (event)=>{
	event.preventDefault();
	let items = document.getElementsByClassName('todoItem');

	for(let i=items.length-1; i>=0; i--) {
		if(items[i] && items[i].parentElement)
			items[i].parentElement.removeChild(items[i]);
	}

});

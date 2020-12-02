$(function(){
	$(".openList").click(function(){
		$(".firstDiv").toggle(1500);
	});
});

// Add new elements List
var form = document.getElementById('addForm')
var itemList = document.getElementById('items');
var inputValue = document.getElementById('inputAdd');
var buttonPlus = document.getElementById('buttonAdd');

form.addEventListener('submit', runPlus);
// Delete elements
itemList.addEventListener('click', removeItem);

function runPlus(e) {
	e.preventDefault();
	
	// Get input value
	var newElem = document.getElementById('inputAdd').value;
	
	// Create new 'li'
	var li = document.createElement('li');
	
	// Add class
	li.className = 'list-group';
	
	// Add text node with input value
	li.appendChild(document.createTextNode(newElem));
	
	// Create button del elements
	var deleteBtn = document.createElement('button');
	
	// Add classes to del button
	deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
	
	// Append text node
	deleteBtn.appendChild(document.createTextNode('x'));
	
	// Append button to li 
	li.appendChild(deleteBtn);
	
	// Append 'li' to List
	itemList.appendChild(li);
}

// Remove item
function removeItem(e) {
	if (e.target.classList.contains('delete')) {
		if (confirm('Are you SURE ? ? ?')) {
			var li = e.target.parentElement;
			itemList.removeChild(li);
		}
	}
}








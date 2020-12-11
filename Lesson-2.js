$(function () {
	$(".openList").click(function () {
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
//form.addEventListener('submit', changeColor);

/*function changeColor(e) {
	
		// Color fonts new elements
	var colorFonts = ['pink', '#000000', '#fd0303', '#b12323', '#fc0ef3', '#7b7b7b', '#870def', '#9b7ab7', '#19a7a7', '#3dffff', '#054646', '#04f256', '#36b562', '#076528', '#00ff00', '#257225',  '#80cc80', '#ebff00', '#8a9509', '#bdc659', '#bccb12',  '#ffc400', '#ebc239', '#98780d', '#524416', '#f73101', '#b43315', '#ea795e', '#eac1b7',  '#551202', '#ff0101',  '#e31ae3', '#e27ae2', '#530953'];
	document.querySelector('ul').style.color = colorFonts[Math.random()*colorFonts.length <<0];
}*/

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

	// Append 'li' to List and change color 'li'
	var colorFonts = ['pink', '#000000', '#fd0303', '#b12323', '#fc0ef3', '#7b7b7b', '#870def', '#9b7ab7', '#19a7a7', '#3dffff', '#054646', '#04f256', '#36b562', '#076528', '#00ff00', '#257225', '#80cc80', '#ebff00', '#8a9509', '#bdc659', '#bccb12', '#ffc400', '#ebc239', '#98780d', '#524416', '#f73101', '#b43315', '#ea795e', '#eac1b7', '#551202', '#ff0101', '#e31ae3', '#e27ae2', '#530953'];
	itemList.appendChild(li).style.color = colorFonts[Math.random() * colorFonts.length << 0];
};

	// Remove item
	function removeItem(e) {
		if (e.target.classList.contains('delete')) {
			if (confirm('Are you SURE ? ? ?')) {
				var li = e.target.parentElement;
				itemList.removeChild(li);
			}
		}
	};

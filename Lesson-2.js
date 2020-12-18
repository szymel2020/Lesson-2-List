//Button open the List
$(function () {
	$(".openList").click(function () {
		$(".firstDiv").toggle(1500);
	});
});

// Add new elements List
var form = document.getElementById('addForm');
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

//Button add 'li' and change color
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
	var colorFonts = ['pink', '#000000', '#5d9a79',   '#ee628d',   '#ca719c',   '#fd0303', '#56d1ad',  '#fd0206', '#e054c0',  '#04fa06', '#5d4a45',   '#5d7145', '#7ce41b',  '#040706',   '#b12323', '#739e81',   '#3045e8', '#fc0ef3', '#7b7b7b', '#870def', '#9b7ab8', '#19a7a7', '#3dffff', '#054646', '#04f256', '#36b562', '#076528', '#00ff00', '#257225', '#80cc80', '#ebff00', '#8a9509', '#bdc659', '#bccb12', '#ffc400', '#ebc239', '#98780d', '#524416', '#f73101', '#b43315', '#ea795e', '#eac1b7', '#551202', '#ff0101', '#e31ae3', '#e27ae2', '#530953'];
	itemList.appendChild(li).style.color = colorFonts[Math.random() * colorFonts.length << 0];
};

// Remove item, push 'x' and delete 'li'.
function removeItem(e) {
	if (e.target.classList.contains('delete')) {
		if (confirm('Are you SURE ? ? ?')) {
			var li = e.target.parentElement;
			itemList.removeChild(li);
		}
	}
};

// Theme dark
function pushDark() {
	let bg = document.getElementById("body");
	let openList = document.getElementById("openList");
	let button = document.getElementById("btnDark");
	let btn1 = document.getElementById("btn1");
	let btn2 = document.getElementById("btn2");
	let btn3 = document.getElementById("btn3");
	//let btn4 = document.getElementById("btn4");
	//let btn5 = document.getElementById("items");
	if (bg.style.backgroundColor == "purple") {
		bg.style.backgroundColor = "white";
		button.style.backgroundColor = "black";
		button.style.color = "white";
		openList.style.backgroundColor = "black";
		openList.style.color = "white";
		btn1.style.backgroundColor = "black";
		btn1.style.color = "white";
		btn2.style.backgroundColor = "black";
		btn2.style.color = "white";
		btn3.style.backgroundColor = "black";
		btn3.style.color = "white";
		//btn4.style.backgroundColor = "black";
		//btn4.style.color = "white";
		//btn5.style.backgroundColor = "black";
		//btn5.style.color = "white";

	} else {
		bg.style.backgroundColor = " purple";
		button.style.backgroundColor = "#ffac15";
		button.style.color = "black";
		openList.style.backgroundColor = "#ffac15";
		openList.style.color = "black";
		btn1.style.backgroundColor = "#ffac15";
		btn1.style.color = "black";
		btn2.style.backgroundColor = "#ffac15";
		btn2.style.color = "black";
		btn3.style.backgroundColor = "#ffac15";
		btn3.style.color = "black";
		//btn4.style.backgroundColor = "#ffac15";
		//btn4.style.color = "black";
		//btn5.style.backgroundColor = "#ffac15";
		//btn5.style.color = "black";
	};
};

// Clock
function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    if(h == 0){
        h = 24;
    }
    
    if(h > 24){
        h = h - 24;
        //session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();







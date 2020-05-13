// Reference: http://w3schools-fa.ir/howto/howto_js_close_list_items.html

function addMessage() {
	let text = textHelper();
	let li = document.createElement("li");
	let textnode = document.createTextNode(text);
	li.append(textnode);
	if (text) {
		document.getElementById("my-list").append(li);
	}
	document.getElementById("text").value = ""; // to clear the text in the text field
	document.getElementById("fname").value = ""; // to clear the text in the text field

	let span = document.createElement("SPAN");
	let xvalue = document.createTextNode("x");
	span.className = "close";
	span.appendChild(xvalue);
	li.appendChild(span);
	handleDeleteHelper();
}

function textHelper() {
	let text = document.getElementById("text").value;
	let name = document.getElementById("fname").value;
	let gender = document.getElementById("gender").value;
	if (text === "" || name === "") {
		alert("Please fill in your name, gender, and text!");
	} else {
		return name + " (" + gender + ") says: " + text; 
	}
}

function handleDeleteHelper() {
	let close_list = document.getElementsByClassName("close");
	for (let i = 0; i < close_list.length; i++) {
		close_list[i].addEventListener("click", function() {
			let div = this.parentElement;
			div.style.display = "none";
		}); 
	}
}

function showMessage() {
	let div = document.getElementById("my-list");
	div.style.display = "block";
}

function hideMessage() {
	let div = document.getElementById("my-list");
	div.style.display = "none";
}

function clearMessage() {
	let list = document.getElementById("my-list");
	list.innerHTML = '';
}
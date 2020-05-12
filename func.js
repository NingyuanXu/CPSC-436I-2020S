function addMessage() {
	parseAndAddContent();
	document.getElementById("text").value = ""; // to clear the text in the text field
	
}


function parseAndAddContent() {
	let text = document.getElementById("text").value;
	let li = document.createElement("li");
	let textnode = document.createTextNode(text);
	li.append(textnode);
	if (text === "") {
		alert("Please enter something into the text field!");
	} else {
		document.getElementById("my-list").append(li);
	}
}
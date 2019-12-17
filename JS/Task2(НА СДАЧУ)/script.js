function createTable() {
	let height = document.getElementById('form').children[0].value;
	let width = document.getElementById('form').children[1].value;
	document.getElementById('tab').innerHTML += '<table id="table" style="background-color:black; color:white"><tbody id="tbody"></tbody></table>';
	for (let i = 0; i < height; i++){
		document.getElementById('tbody').innerHTML += '<tr></tr>';
		for (let j = 0; j < width; j++){
			document.getElementById('tbody').children[i].innerHTML += '<td><form><input type="text" style="background-color:gray; color:white"placeholder="_"><input type="button" value="save" onclick="saveText(' + i + ', ' + j + ')"></form></td>';
		}
	}
	document.getElementById('func').removeChild(document.getElementById('form'));
	for (let k = 0; k < 5; k++){
		document.getElementById('func').innerHTML += '<div class="func_"></div>';
	}
	localStorage.setItem('height', height);
	localStorage.setItem('width', width);
	document.getElementById('func').children[0].innerHTML += '<form id="apply" ><input type="text" style="background-color:black; color:white" placeholder="new width" id="nw" oninput="changeButtonText()"><select style="background-color:black; color:white" oninput="changeButtonText()"><option disabled selected>border</option><option>hidden</option><option>dotted</option><option>dashed</option><option>solid</option></select><input type="button" style="background-color:black; color:white" onclick="changeTableWidth()" value="Apply"></form>';
	document.getElementById('func').children[1].innerHTML += '<input type="button" onclick="createHeader()" value="Header" style="background-color:black; color:white">';
	document.getElementById('func').children[2].innerHTML += '<form><input type="text" placeholder="Delete row #" id="delrow" style="background-color:black; color:white" ><input type="button" onclick="deleteRow()" style="background-color:black; color:white" value="Delete"></form>';
	document.getElementById('func').children[3].innerHTML += '<input type="button" onclick="magic()" value="Prize!" style="background-color:black; color:white">';
	document.getElementById('func').children[4].innerHTML += '<input type="button" onclick="removeTable()" value="Delete table" style="background-color:black; color:white">';
}

function saveText(row, column) {
	let cell = document.getElementById('tbody').children[row].children[column];
	let mustRemove = cell.children[0];
	let savedText = mustRemove.children[0].value;
	cell.removeChild(mustRemove);
	cell.innerHTML += '<p>' + savedText + '</p>';
}

function changeButtonText() {
	let val1 = document.getElementById("nw").value;
	let val2 = document.getElementsByTagName('select')[0].value;
	document.querySelector('#apply [type="button"]').value = "Apply width:" + val1 + "% & border:" + val2 + " black";
}

function changeTableWidth() {
	document.getElementById('table').style = 'width: ' + document.getElementById("nw").value + '%; border: 2px ' + document.getElementsByTagName('select')[0].value + ' black;';
}

function createHeader() {
	document.getElementById('table').innerHTML += '<caption>LOL</caption>';
}

function deleteRow() {
	let row = document.getElementById('delrow').value;
	let limit = document.getElementById('tbody').children.length;
	if ((1 <= row) && (row <= limit)){
		document.getElementById('tbody').children[row-1].remove();
		return;
	}
	alert('!!!!!')
	return;
}

function magic(){
	let mag = Math.floor(Math.random() * 4);
	let row = Math.floor(Math.random() * localStorage.getItem('height')), column = Math.floor(Math.random() * localStorage.getItem('width'));
	let randomCell = document.getElementById('tbody').children[row].children[column].firstChild;
	switch (mag){
		case 1:
		case 2:
			randomCell.parentNode.innerHTML += '<form><input type="text" value="_"><input type="button" value="save" onclick="saveText(' + row + ', ' + column + ')"><form>';
			document.getElementById('tbody').children[row].children[column].firstChild.remove();
			break;
		case 2:
			let fc1 = Math.floor(Math.random() * 256), fc2 = Math.floor(Math.random() * 256), fc3 = Math.floor(Math.random() * 256);
			randomCell.style = 'color: rgb('+fc1+', '+fc2+', '+fc3+');';
			break;
		case 3:
			let bg1 = Math.floor(Math.random() * 256), bg2 = Math.floor(Math.random() * 256), bg3 = Math.floor(Math.random() * 256);
			randomCell.style = 'background-color: rgb('+bg1+', '+bg2+', '+bg3+');';
			break;
		case 4:
			let font = Math.floor(Math.random() * 11 + 15);
			randomCell.style = 'font-size: '+font+'px;';
			break;
	}
}

	function removeTable(){
		document.getElementById('func').innerHTML = '<form id="form"><input name="height" type="text" value="height"><input name="width" type="text" value="width"><input type="submit" onclick="createTable()"></form>';
		document.getElementById('tab').innerHTML = '';
	}

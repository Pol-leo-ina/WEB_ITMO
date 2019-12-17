function changeBorder()
{
document.getElementById('Таблица').border="100";
}
function padding()
{
document.getElementById('Таблица').cellPadding="30";
}

function spacing()
{
document.getElementById('Таблица').cellSpacing="30";
}

function aboveFrames()
{
document.getElementById('Таблица').frame="above";
}
function belowFrames()
{
document.getElementById('Таблица').frame="below";
}
function createCaption()
{
var x=document.getElementById('Таблица').createCaption();
x.innerHTML="Реклама в табличке не дорого";
}
function deleteRow(r)
{
var i=r.parentNode.parentNode.rowIndex;
document.getElementById('Таблица').deleteRow(i);
}
function insRow()
{
var x=document.getElementById('Таблица').insertRow(0);
var y=x.insertCell(0);
var z=x.insertCell(1);
var a=x.insertCell(2);
y.innerHTML="Да";
z.innerHTML="Да";
a.innerHTML="Да";
}
function insCell()
{
var x=document.getElementById('tr1').insertCell(3);
x.innerHTML="Пожалуйстааа";
}
function rightAlign()
{
document.getElementById('First').align="right";
}
function centerAlign()
{
document.getElementById('First').align="center";
}
function botAlign()
{
document.getElementById('First').vAlign="bottom";
}
function valignCell()
{
var x=document.getElementById('Таблица').rows[1].cells;
x[0].vAlign="top";
}
function changeContent()
{
var x=document.getElementById('Таблица').rows[0].cells;
x[0].innerHTML= "МЫ";
}

function setColSpan()
{
var x=document.getElementById('Таблица').rows[0].cells;
x[0].colSpan="2";
x[1].colSpan="3";
}
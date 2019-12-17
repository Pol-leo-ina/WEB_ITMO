function formReset()
   	{
   		document.getElementById("forma3").reset();
   	}
function formSubmit()
	{
	document.getElementById("forma4").submit();
	}
document.write("<p>20. Значение каждого элемента на форме: ");

var x=document.getElementById("forma2");
for (var i=0;i<x.length;i++)
  {
  document.write(x.elements[i].value);
  document.write(";<br />");
  }

document.write("<p>21. Значение атрибута action формы: "+document.getElementById("forma3").action); 
  
  document.write("<p>22. Значение атрибута enctype формы: "+document.getElementById("forma3").enctype);

  document.write("<p>23. Количество элементов на форме: "+document.getElementById("forma3").length);

   document.write("<p>24. Метод отправки данных с формы: "+document.getElementById("forma3").method);

   document.write("<p>25. Имя формы: "+document.getElementById("forma3").name);
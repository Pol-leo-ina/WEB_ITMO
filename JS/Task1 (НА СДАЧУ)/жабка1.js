function counter(str) {
  return str.split(/[, ]/).length;
}
let a = "<p>1. Я люблю вебчик? ! "
document.write(a, '<br>');
document.write('2. Количество символов: ', a.length, '<br>')
document.write('3. Количество букв: ', counter(a), '<br>');
document.write('4. URL: ', document.URL, '<br>');
document.write('5. Имя протокола: ', document.location.protocol, '<br>');
document.write('6. Имя Файла: ', document.location.pathname.split('.')[0], '<br>');
document.write('7. Расширение файла: ', document.location.pathname.split('.')[1], '<br>');
let GET_params = window.location.search.replace( '?', '');
document.write('8. Значения параметров: ', GET_params, '<br>');

let anc = 'Анкорррчик';
document.write('Новый анкор: ', anc.anchor('первый пошел'), '<br>');
document.write('Новый анкор2: ', anc.anchor('второй на взлете'), '<br>');
document.write('<a href="https://habr.com/ru/post/277421/" id="матан">Матеша про матрицы</a><br>')
document.write('<a href="https://habr.com/ru/post/416071/" target="_blank" id="нс">Статейка про нейронные сети</a><br>')
document.write('<img src="https://psychbook.ru/assets/i/ai/4/1/8/i/2798941.jpg" style="width: 20%" id="боль">')
document.write('<img src="https://cdn.4archive.org/img/eVc3cMy.png" style="width: 378px; height: 200px" id="попуг"><br>')
document.write('Кол-во анкоров: ', document.anchors.length,'<br>');
document.write('Кол-во ссылок: ', document.links.length,'<br>');
document.write('Вывод имеющегося анкора: ', document.anchors[0].innerHTML, '<br>')
document.write('Кол-во картинок: ', document.images.length,'<br>');
document.write('Ширина первой картинки: ', document.images[0].width,'<br>');
document.write('Ширина самой широкой картинки: ', Math.max.apply(Math, Array.from(document.images).map(function(w) { return w.width; })), '<br>');
const reducer = (accumulator, currentValue) => accumulator + currentValue;
document.write('Cумма всех высот картинок: ', Array.from(document.images).map(function(o) { return o.height; }).reduce(reducer),'<br>');

for(i=0; i<5; i++){
document.write('<form id="' + i + i+ '">')
document.write('<input type="button" class="button" value="Название" onClick="alert(\'Название формы '+i+'\')">')
document.write('<input type="button" class="button1" value="Как часто вы спите?" onClick="alert(\'нАдеюсь много\')">')
document.write('<input type="button" class="button2" value="Чьих будешь?" onClick="alert(',i+1,')">')
document.write('<input type="textarea" style=" vertical-align: middle; margin-left: 10px" >' );
document.write('<input type="reset" class="button3" value="Сброс">');
document.write('<input type="button" class="button4" value="Число полей" onClick="alert(',document.forms[i].childElementCount+1,')">');
document.write('</form>');

document.write('<form id="' + i +'">')
document.write('<input type="button" class="button" value="Название" onClick="alert(\'Название формы '+i+i+'\')">')
document.write('<input type="button" class="button1" value="Видете ли сны?" onClick="alert(\'нАдеюсь да\')">')
document.write('   Ваш пол: <select  id="пол"><option value="Ж">Ж</option><option value="М" selected>М</option></select>')
document.write('<input type="button" class="button2" value="Чьи, сударь?" onClick="alert(',i+1,')">')
document.write('<input type="textarea" style=" vertical-align: middle; margin-left: 10px" >' );
document.write('<input type="reset" class="button3" value="Сброс">');
document.write('<input type="button" class="button4" value="Число полей" onClick="alert(',document.forms[i].childElementCount+1,')">');
document.write('</form>');

}

for(i=0; i<10; i+=2){
document.write('Четные', document.forms[i].id, ', ')
}

document.write("</br><a href='https://www.yandex.ru'>H</a></br>");
document.write("<a href='https://vk.com'>VK</a></br>");
document.write("<a href='https://itmo.com/'>I</a></br>");
document.write("<a href='https://telegram.com'>T</a></br>");
document.write("<a href='https://tumbler.com'>T</a></br>");
document.write("<a href='https://Instagram'>I</a></br>");
document.write("<a href='https://mail.google.com'>MG</a></br>");
document.write("<a href='https://stackoverflow.com'>SO</a></br>");
document.write("<a href='http://htmlbook.ru'>HB</a></br>");
document.write("<a href='https://github.com/Pol-leo-ina/WEB_ITMO'>МОЙ GITHUB</a></br>");

let k = 0;
let namearray = [];
for (i = 0; i < document.links.length; i++)
{
if (namearray.includes(document.getElementsByTagName('a')[i].innerHTML) != 1 && (document.getElementsByTagName('a')[i].innerHTML != 'Anchor +1'))
    namearray.push(document.getElementsByTagName('a')[i].innerHTML);
}

var hrefs='';

for (i = 0; i < document.links.length; i++)
{

  hrefs = hrefs + document.links[i].href + '</br>';
}
document.write(document.links.length);

document.write("<table border='1', cellpadding='2', cellspacing='0', style='background-color:pink; font-weight: bold;'>");

document.write("<tr>");
 for (k = 0; k <= 2; k++)
{
  if (k == 0)
  {
    document.write("<td>");
    document.write(namearray);

  }
  if (k == 1)
  {
    document.write("<td >");
    document.write(document.links.length);
  }
  if (k == 2)
  {
    document.write("<td>");
    document.write(hrefs);

  }
  document.write("</td>");

}
document.write("</tr>");
document.write("</table>");

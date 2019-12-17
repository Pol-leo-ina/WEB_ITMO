document.write("<p>1. Я люблю вебчик!");

document.write("<p><u><b>2.Я люблю вебчик!"+ "</p>"+ "</u>"+"</b>");

document.write("<p>3. Количество анкоров: "+ document.anchors.length);

document.write("<p>4. innerHTML первого анкора: "+document.anchors[0].innerHTML);

document.write("<p>5. Количество форм: "+document.forms.length);

document.write("<p>6. Имя первой формы: "+document.forms[0].name);

document.write("<p>7. Количество изображений: "+document.images.length);

document.write("<p>8. id первого изображения: "+document.images[0].id);

document.write("<p>9. Количество ссылок: "+document.links.length);

document.write("<p>10. id первой cссылки: "+document.links[0].id);

document.write("<p>11. Имя домена сервера, который загрузил документ: - "+document.domain);

document.write("<p>12. URL документа, который загрузил текущий документ: - "+document.referrer);

document.write("<p>13. Заголовок документа: "+document.tile);

document.write("<p>14. Полный адрес URL документа: "+document.URL);
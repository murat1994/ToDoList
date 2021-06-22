const inputBox = document.getElementById('item_name');

inputBox.select()

function addItem(e) {
  if (e.key === 'Enter' || e.type === 'click') {
    if (inputBox.value.trim() === "") {
      alert('Lütfen doldurun...!');
    } else {

      //Create list item
      const listItem = document.createElement('li');
      listItem.className = 'list_li list-group-item';
      document.getElementById('task_list').appendChild(listItem);

      
      //Create Checkbox item
      const checkboxItem = document.createElement('input');
      checkboxItem.type= 'checkbox';
      checkboxItem.className = 'checkbox-item';
      checkboxItem.hidden = false;
      checkboxItem.addEventListener('change', checkItem);
      listItem.appendChild(checkboxItem);
      
      //styleSpan1
      const styleSpan1 = document.createElement('span');
      styleSpan1.innerHTML = '   ';
      listItem.appendChild(styleSpan1);

      //Create Text item
      const itemInput = document.createElement('input');
      itemInput.className = 'item-input';
      itemInput.hidden = true;
      listItem.appendChild(itemInput);

      //Create item text -- span --
      const itemText = document.createElement('span');
      itemText.className = 'item-text';
      itemText.innerHTML = inputBox.value;
      listItem.appendChild(itemText);


      //styleSpan2
      const styleSpan2 = document.createElement('span');
      styleSpan2.innerHTML = '   ';
      listItem.appendChild(styleSpan2);


      //Create Edit icon
      const editImg = document.createElement('img');
      editImg.src = 'https://img.icons8.com/fluent-systems-regular/24/000000/edit.png'
      editImg.className = 'img-grup-edit' ;
      editImg.style.cursor = 'pointer';
      editImg.addEventListener('click', editItem);
      listItem.appendChild(editImg);

    
      //styleSpan3
      const styleSpan3 = document.createElement('span');
      styleSpan3.innerHTML = '   ';
      listItem.appendChild(styleSpan3);


      //Create remove icon
      const removeImg = document.createElement('img');
      removeImg.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAA70lEQVRIid2TQQ6CMBRE5xfjCXTRi5iY6A04inHtTreuOQoewERdcglNRLyAEVLqhhhjW+AXNzhLwsyb398CfRe1+SkNZxsA6y/nVsbHFQuQhjPNaeeS3B3fueIXgf8tY8lpOI8AvfBL05GMT8vPT7YdXLzCAUALw2sAiLQ3gLRZzgCUHSZQQQsAVNlhAnN6AyCz5xWA8shX8vpIGwGUJAWAjJtOwK3y1gMqnbkADbJ67ADyWLTl/N0Ay3VrlLB7rADtaFMn2xtwAiDMF9mkknNErjZ1IsEADAo+IFDD9oDR9JAByBn5+Xiyv3NL9UMvzb5QOOYYXsoAAAAASUVORK5CYII=';
      removeImg.className = 'img-grup-edit' ;
      removeImg.style.cursor = 'pointer';
      removeImg.addEventListener('click', removeItem);
      listItem.appendChild(removeImg);
      
      

      //Create Save icon
      const saveImg = document.createElement('img');
      saveImg.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABEUlEQVRIie2UPU7DQBBG39hO4AyBKzgUhEtwh7SpiQtCgyBUMUi4hg7BbewGXyFcgsT20CTS2l6E8+MqvG6/ndmn2ZUW/vkDMRd+HFyK6CtwstEpKtP04vnetuWUbKIvGx8OIHrXjwOroDRBPxkrQDqIxFZcZV1vHBZ+DqIbM3PYIwqTs2Q8a02wlrQqqOLZwurd7kLrExyO4BvhuoP2OmhPVSfAokmj9ZFrCLfpefRkJI9+Eoigs197VjSaIM+992pWFO5bk95GgmNnWfs6vG7m7k2wUIa1MLNkFhq9gYg8+PEVntv9AMiKbKjodBvBF3BqqTsSkTAvliFUvuA6c3NRuiJVHa0k2zJHGO3Qf4j8AB8dSb/jYYvBAAAAAElFTkSuQmCC';
      saveImg.className = 'img-grup-save';
      saveImg.style.cursor = 'pointer';
      saveImg.hidden= true;
      saveImg.addEventListener('click', saveItem);
      listItem.appendChild(saveImg);


      //styleSpan4
      const styleSpan4 = document.createElement('span');
      styleSpan4.innerHTML = '   ';
      listItem.appendChild(styleSpan4);

      //Create Cancel icon
      const cancelImg = document.createElement('img');
      cancelImg.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAACH0lEQVRIidVVPW8aQRB9jyTIpPJHc1zS5ENRIpooxNX5aheAMIr4HyaxQEqVLgFbgf+RyMICGrdnOl86XOWjie6ocCrbsuWbFHz4wq4hkDR+1d7szHuzMzt7wE0HJ2128onoyuliLhBmSbwAcH+w9VMEXxiRem/hVz3xqXM+s4CXsV9RpALg4ZQUv0kgRbPV3v0rAcnnb3XP/DIEbyYSK4HcMVadEt8hCJsj435zkQMAZat7uPZeMYc/BmX5PDN5CELmzIZTVwQ6+UR0+WzpCIJH/yIA4Ecvdvx02PhRiVZOF3M68gjwHGBJ5WGpv6fgwfLJUjYU30cgzGqcEYDr8aZTEZHC0CYihXjTqQTgui6GvOK6fWVEUucMSNlLWedmq13zMjYBwGwe1LyUtQlIWRsBeakIADD1AgDJajeztmA0nA8A4KWsTZLV6/wB3BsulGv6nzCahfAJPABPdN79mrdrXsYuAIDZcKpeysKEU/iKgAhcUifAotnq15wiHwHAS1litto1P21HdX0geDhcj0rEiNTHHfsOsu+n7WI4W5JVP20XL4PLfe2JAXXQJJm8043fPQLksS5oBnzvxY6fKYNG170QCTQDNRtIvg4/33/cIrPV3oVwZ352lI2Gsxc2KdfUWHVKgGzPQV8xkgdvVc1r4GXsDQq2p/eEX0lsjWc+VQAYNN6IbZDMCiSJ0C+ToCtA3fBP9ui6F5OTuMn4DWHw0BspHzgcAAAAAElFTkSuQmCC';
      cancelImg.className = 'img-grup-save';
      cancelImg.style.cursor = 'pointer';
      cancelImg.hidden= true;
      cancelImg.addEventListener('click', cancelItem);
      listItem.appendChild(cancelImg);

      inputBox.value = "";
      inputBox.select();

      //Create Date -- span --
      const addedDate = document.createElement('span');
      const liveDate1= new Date();
      const liveMonth = liveDate1.getMonth() + 1;
      addedDate.className = 'date small font-italic';
      addedDate.innerHTML = 'Eklendi: ' + liveDate1.getDate() + "." + liveMonth + "."+ liveDate1.getFullYear() + " - " + liveDate1.getHours() + ":" + liveDate1.getMinutes() + ":" + liveDate1.getSeconds();
			addedDate.hidden=false;
      listItem.appendChild(addedDate);
    }
  }

}

const checkItem = function(e) {
  const textItem = e.target.parentElement.getElementsByClassName('item-text')[0];
  if (e.target.checked) {
    textItem.style.textDecoration = 'line-through';
		
		e.target.parentElement.lastChild.hidden = true; 

		// Create Date -- span --
  	const complatedDate = document.createElement('span');
  	const liveDate3= new Date();
  	const liveMonth = liveDate3.getMonth() + 1;
  	complatedDate.className = 'date small font-italic';
  	complatedDate.innerHTML = 'Completed on: ' + liveDate3.getDate() + "." + liveMonth + "." + liveDate3.getFullYear() + " - " + liveDate3.getHours() + ":" + liveDate3.getMinutes() + ":" + liveDate3.getSeconds();
		complatedDate.hidden = false;
  	e.target.parentElement.appendChild(complatedDate);
  } else {
    textItem.style.textDecoration = 'none';

		e.target.parentElement.lastChild.hidden = true; 

		// Create Date -- span --
  	const complatedCancelDate = document.createElement('span');
  	const liveDate4= new Date();
  	const liveMonth = liveDate4.getMonth() + 1;
  	complatedCancelDate.className = 'date small font-italic';
  	complatedCancelDate.innerHTML = 'Complete canceled on: ' + liveDate4.getDate() + "." + liveMonth + "." + liveDate4.getFullYear() + " - " + liveDate4.getHours() + ":" + liveDate4.getMinutes() + ":" + liveDate4.getSeconds();
		complatedCancelDate.hidden = false;
  	e.target.parentElement.appendChild(complatedCancelDate);
  }
}

const editItem = function(e) {
  
  const textItem = e.target.parentElement.getElementsByClassName('item-text')[0];
  const textInput = e.target.parentElement.getElementsByClassName('item-input')[0];
  const editGroupButtons = e.target.parentElement.getElementsByClassName('img-grup-edit');
  const saveGroupButtons = e.target.parentElement.getElementsByClassName('img-grup-save');

  textInput.hidden = false;
  textItem.hidden = true;
  textInput.value = textItem.innerHTML;
  textInput.select();
  
  for (i of editGroupButtons) {
    i.hidden = true;
  }
  for (i of saveGroupButtons) {
    i.hidden = false;
  }
}

const removeItem = function(e) {
  // e.target.parentElement.remove();
  document.getElementById('task_list').removeChild(e.target.parentElement);
}


const saveItem = function(e) {

  const textItem = e.target.parentElement.getElementsByClassName('item-text')[0];
  const textInput = e.target.parentElement.getElementsByClassName('item-input')[0];

  const editGroupButtons = e.target.parentElement.getElementsByClassName('img-grup-edit');
  const saveGroupButtons = e.target.parentElement.getElementsByClassName('img-grup-save');

  if(textInput.value ==='') {
    alert('Please enter a value!');
    textInput.hidden = true;
    textItem.hidden = false;
  } else {
    textItem.innerHTML = textInput.value;
    textInput.hidden = true;
    textItem.hidden = false;
  }
  
	e.target.parentElement.lastChild.hidden = true; 

		//Create Date -- span --
  const editedDate = document.createElement('span');
  const liveDate2= new Date();
  const liveMonth = liveDate2.getMonth() + 1;
  editedDate.className = 'date small font-italic';
  editedDate.innerHTML = 'Düzenlendi: ' + liveDate2.getDate() + "." + liveMonth + "."+ liveDate2.getFullYear() + " - " + liveDate2.getHours() + ":" + liveDate2.getMinutes() + ":" + liveDate2.getSeconds();
	editedDate.hidden = false;
  e.target.parentElement.appendChild(editedDate);
	
  for (i of editGroupButtons) {
    i.hidden = false;
  }
  for (i of saveGroupButtons) {
    i.hidden = true;
  }

}

const cancelItem = function(e) {
  const textItem = e.target.parentElement.getElementsByClassName('item-text')[0];
  const textInput = e.target.parentElement.getElementsByClassName('item-input')[0];
  const editGroupButtons = e.target.parentElement.getElementsByClassName('img-grup-edit');
  const saveGroupButtons = e.target.parentElement.getElementsByClassName('img-grup-save');

  textInput.hidden = true;
  textItem.hidden = false;
	
  for (i of editGroupButtons) {
    i.hidden = false;
  }
  for (i of saveGroupButtons) {
    i.hidden = true;
  }
}




//document.getElementById('btn_add').onclick = addItem;

document.getElementById('btn_add').addEventListener('click', addItem);

//keypress --> bir butona basıldığında gerçekleşen işlem

inputBox.addEventListener('keypress', addItem);

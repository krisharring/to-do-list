
function newItem(){
//converting JavaSctipt to jQuery
//1. Adding a new item to the list of items: 
  //  let li = document.createElement("li");
  let li = $("<li></li>");
  //  let inputValue = document.getElementById("input").value;
  let inputValue = $("#input").val(); 
  //  let text = document.createTextNode(inputValue);
  //  li.appendChild(text);
  li.append(inputValue);


   if (inputValue === '') {
     alert("You must write something!");
   } else {
  //    let list = document.querySelector('#list');
     let list = $("#list");
     list.append(li);
   }

 //2. Crossing out an item from the list of items:
   function crossOut() {
 		// li.classList.toggle("strike");
     li.toggleClass("strike");
 	}

 	// li.addEventListener("dblclick",crossOut);
   li.on("dblclick", crossOut);

 //3(i). Adding the delete button "X": 
  //  let crossOutButton = document.createElement("crossOutButton");
  let crossOutButton = $("<crossOutButton></crossOutButton>");
 	// crossOutButton.appendChild(document.createTextNode("X"));
  crossOutButton.append(document.createTextNode("✖"));
 	// li.appendChild(crossOutButton);
   li.append(crossOutButton);

 	crossOutButton.on("click", deleteListItem);

 //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
   function deleteListItem(){
 		li.toggleClass("delete");
 	}
 // 4. Reordering the items: 
   $('#list').sortable();

}


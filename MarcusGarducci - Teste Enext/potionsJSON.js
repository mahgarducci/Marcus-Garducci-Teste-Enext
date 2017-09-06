var xobj = new XMLHttpRequest();
 
 xobj.overrideMimeType('application/json');
 
 xobj.open('GET', 'potions.json', true);
 
 xobj.onreadystatechange = function(){
 	if(xobj.readyState == 4 && xobj.status == "200"){
 		var potionsJSON = JSON.parse(xobj.responseText);
 

 		// Depois de não conseguir fazer funcionar, tirei as classes name e price
 		for(i = 0; i <= 6; i){
 			var s = i  1;
 			var nameTag = document.getElementsByClassName('name')[i];
 			var priceTag = document.getElementsByClassName('price')[i];
 
 
 			document.getElementsByClassName('img-thumbnail')[i].src = "products/"  [potionsJSON.potions[s].image];
 			nameTag.innerHTML = [potionsJSON.potions[s].name];
 			priceTag.innerHTML = " - $"  [potionsJSON.potions[s].price];
 
 
 		}
 		
 	}
 };
 
 xobj.send();
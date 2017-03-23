//variables
		//let x,xmlhttp,xmlDoc
		var x,xmlhttp,xmlDoc
	    xmlhttp = new XMLHttpRequest();
	    xmlhttp.open("GET", "produit.xml",false);
	    xmlhttp.send();
	    xmlDoc = xmlhttp.responseXML; 
	    vlist=String("");//variable de stockage
		var list=document.getElementById('liste');
	    x = xmlDoc.getElementsByTagName("produit");
        console.log(x[0].childNodes[1])
        //console.log(document.getElementsByTagName("h1")[0].childNodes[0].nodeValue);
       for(i=0; i<x.length; i++){
        	var nom=x[i].getElementsByTagName("nom")[0].childNodes[0].nodeValue;
        	var marque=x[i].getElementsByTagName("marque")[0].childNodes[0].nodeValue;
        	var prix=x[i].getElementsByTagName("prix")[0].childNodes[0].nodeValue;
        	
        	console.log(nom+","+marque+" , "+prix);

        	vlist+="<li>Nom : "+nom+"</li>";
        	vlist+="<li>Marque : "+marque+"</li>";
        	vlist+="<li>Prix : "+prix+"</li>";
        }
        list.innerHTML=vlist;
		
		









		//alert(xmlDoc);
		//x=xmlDoc.
		//document.getElementById('titre').textContent='Salut';
		//document.getElementsByTagName('h1')[1].textContent='Salut';
		//document.getElementsByClassName('titre')[0].textContent='Salut';
		//document.querySelector('h1').textContent='Salut';

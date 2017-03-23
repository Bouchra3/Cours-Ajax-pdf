$.ajax({
				url:'cmd.json',//stocké dans data
				type: 'GET',
				dataType:'json',
				success : function(data, statut){
					var list=$('.liste');
					for(i=0; i<data.commandes.length; i++){//itération pour les éléments de l'objet json
						console.log(data.commandes[i].titre+ ':'+data.commandes[i].action);

						list.append("<li>"+data.commandes[i].titre+" : "+data.commandes[i].action);


					}

				},
				error : function(resultat, statut, erreur){
						//alert('erreur de page');
						//document.querySelector('.commentaire').textContent('erreur');
						$('.commentaire').text(statut+" de page").addClass('warning');
						console.log("Erreur de fichier : "+statut);

					},
				complete : function(resultat, statut){
						console.log("Requete terminé "+statut);
					}


			});
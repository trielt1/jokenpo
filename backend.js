function jogar(user){
			
				var cpu = Math.floor(Math.random()*3),
					winner,
					nomes = ["mortar", "archers", "swordsman"],
					pontospc = document.getElementById("placar-pc").innerHTML - 0,
					pontoscpu = document.getElementById("placar-cpu").innerHTML -0;
					
				if(user == nomes[cpu]){
					winner = "Empate";
				}else{
					switch(user){
						case "mortar":
						
							if(cpu == 1){
								winner = "Você venceu";

							}else{
								winner = "Você perdeu";
							}
							
							break;
							
						case "archers": 
						
							if(cpu == 2){
								winner = "Você venceu";

							}else{
								winner = "Você perdeu";
							}
								
							break;
						case "swordsman": 
						
							if(cpu == 0){
								winner = "Você venceu";

							}else{
								winner = "Você perdeu";

							}
								
							break;
					}
				}
				
				switch(winner){
					case "Você venceu": 
							document.getElementById("placar-pc").innerHTML = pontospc + 1;
							break;
					case "Você perdeu":
							document.getElementById("placar-cpu").innerHTML = pontoscpu + 1;
							break;			
				}
				
				
				document.getElementById("pc").src = "img/"+user+".jpg";
				document.getElementById("cpu").src = "img/"+nomes[cpu] +".jpg";
				document.getElementById("vence").innerHTML = winner;
				
				document.getElementById("displayer").style.visibility = "visible";
				
			}
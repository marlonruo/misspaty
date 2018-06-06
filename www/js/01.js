var pagina=1
var pagina2=1
var pagina3=1
var pagina4=1
var pagina5=1
var pagina6=1
function keyDownTextField(e) {
	if (nivel==1){
		     var keyCode = e.keyCode;
		     if(keyCode==37) {
		     pagina--
			 $('#carga').load('01/p_'+pagina+'.html')

			 if (pagina==0){
					  $('#carga').load('01/p_1.html')
			 }

		     } else if(keyCode==39) {
		         pagina++

				 $('#carga').load('01/p_'+pagina+'.html')

		      }
	}else if (nivel==2){
			 var keyCode = e.keyCode;
			 if(keyCode==37) {
			  pagina2--
			  $('#carga').load('02/p_'+pagina2+'.html')

			  if (pagina2==0){
					  $('#carga').load('02/p_1.html')
			  }

			  } else 
			  if(keyCode==39) {
			  pagina2++

					 $('#carga').load('02/p_'+pagina2+'.html')

			  }
      }else if (nivel==3){
			 var keyCode = e.keyCode;
			 if(keyCode==37) {
			  pagina3--
			  $('#carga').load('03/p_'+pagina3+'.html')

			  if (pagina3==0){
					  $('#carga').load('03/p_1.html')
			  }

			  } else 
			  if(keyCode==39) {
			  pagina3++

					 $('#carga').load('03/p_'+pagina3+'.html')

			  }
      }else if (nivel==4){
			 var keyCode = e.keyCode;
			 if(keyCode==37) {
			  pagina4--
			  $('#carga').load('04/p_'+pagina4+'.html')

			  if (pagina4==0){
					  $('#carga').load('04/p_1.html')
			  }

			  } else 
			  if(keyCode==39) {
			  pagina4++

					 $('#carga').load('04/p_'+pagina4+'.html')

			  }
      }else if (nivel==5){
			 var keyCode = e.keyCode;
			 if(keyCode==37) {
			  pagina5--
			  $('#carga').load('05/p_'+pagina5+'.html')

			  if (pagina5==0){
					  $('#carga').load('05/p_1.html')
			  }

			  } else 
			  if(keyCode==39) {
			  pagina5++

					 $('#carga').load('05/p_'+pagina5+'.html')

			  }
      }else if (nivel==6){
			 var keyCode = e.keyCode;
			 if(keyCode==37) {
			  pagina6--
			  $('#carga').load('06/p_'+pagina6+'.html')

			  if (pagina6==0){
					  $('#carga').load('06/p_1.html')
			  }

			  } else 
			  if(keyCode==39) {
			  pagina6++

					 $('#carga').load('06/p_'+pagina6+'.html')

			  }
      }

}

document.addEventListener("keydown", keyDownTextField, false);


	

"use strict";

const postBuscarDestino = (destino, container) => {

    $.ajax({
           url: 'https://testsoat.interseguro.com.pe/talentfestapi/destinos',
           method: 'POST',
           contentType: 'application/json',
           crossOrigin: true,
           data: JSON.stringify({destino_input: destino
                                 }),
           success: function(response) {

                   if(response){
                     state.place = response;
                    reRender(container);
                   }

               },
            fail: function(request){
             if(request){
               alert(request.message);
             }
            }
       });
};

const postPlanes = (objecto, updated) => {

	 $.ajax({
          	url: 'https://testsoat.interseguro.com.pe/talentfestapi/cotizacion',
          	method: 'POST',
          	contentType: 'application/json',
          	data: objecto,
          	success: function(response) {
                	//console.log(response);
  						state.page = 1;
    				 	const pag =JSON.stringify(state.page);
    					localStorage.setItem("pagina",pag);
    					state.planes = response;
              state.action = 1;
    					// console.log(state.planes)
    					updated();
  				  },
				    fail: function(response){
    					if(request){
    						alert(request.message);
    					}
				    }

        });

}

'use strict';
const Formulario = (updated)=> {
  const section = $('<section></section>');
  const cotiza = $('<div class="row"></div>');
  const form = $('<div id="cotiza" class="col-sm-8 col-sm-offset-2 omnes-medium form"></div>');
  const div1 = $('<div class="col-sm-12"></div>');
  const subDiv1 = $('<div class="col-sm-1"><img src="assets/images/icon_cotizacion.png" class="maletin"></div><div class="col-sm-11"><h3 class="azul hidden-xs">Cotiza el seguro de tu próximo viaje</h3><h4 class="azul visible-xs">Cotiza el seguro de tu próximo viaje</h4></div>');

  const date = $('<div class="col-sm-12"></div>');
  const dateDiv1 = $('<div class="col-sm-5"></div>');
  const divDateOrigin = $('<div class="panel panel-default"></div>');
  const labelOrigin = $('<div class="panel-body"><small class="celeste">Partida</small><br></div>');
  const inputOrigin = $('<input type="text" class="input-coti" id="fecha_partida" placeholder="dd/mm/yy">');

  const arrow = $('<div class="col-sm-2 text-center hidden-xs"><img src="assets/images/icon_arrow_gray.png" alt="flecha"></div>');

  const dateDiv2 = $('<div class="col-sm-5"></div>');
  const divDateReturn = $('<div class="panel panel-default"></div>');
  const labelReturn = $('<div class="panel-body"><small class="celeste">Retorno</small><br></div>');
  const inputReturn = $('<input type="text" class="input-coti" id="fecha_retorno" placeholder="dd/mm/yy">');

  const place = $('<div class="col-sm-12"></div>');
  const placeDiv1 = $('<div class="col-sm-5"></div>');
  const divPlace = $('<div class="panel-default panel"></div>');
  const labelDestination = $('<div class="panel-body divAutocomplete"><small class="celeste">Destino</small></div>');
  const inputDestination = $('<input type="text" class="input-coti" id="destino" placeholder="Ingrese destino" autocomplete="off">');
  const autocomplete = $('<div class="autocomplete"></div>');

  const blankSpace = $('<div class="col-sm-2"></div>');

  const placeDiv2 = $('<div class="col-sm-5"></div>');
  const divEmail = $('<div class="panel-default panel"></div>');
  const labelEmail = $('<div class="panel-body"><small class="celeste">Correo electrónico</small></div>');
  const inputEmail = $('<input type="email" class="input-coti" id="correo" placeholder="Ingrese correo">');

  const pasajeros = $('<div class="col-sm-12"></div>');
  const divPasajeros = $('<div class="col-sm-2"><h4 class="celeste">Pasajeros  </h4></div>');
  const pasajerosDiv1 = $('<div class="col-sm-3"></div>');
  const divForAdults = $('<div class="panel-default panel"></div>');
  const adultsDiv = $('<div class="panel-body"><small class="celeste">Adultos</small><br></div>');
  const adults = $('<select class="input-coti" id="cantidad_adultos"></select>');

  const pasajerosDiv2 = $('<div class="col-sm-3"></div>');
  const divForChildren = $('<div class="panel-default panel"></div>');
  const childrenDiv = $('<div class="panel-body"><small class="celeste">Niños</small></div>');
  const children = $('<select class="input-coti" id="cantidad_niños"></select>');

  const button = $('<div class="col-sm-12 text-center"><button class="btn-cotizar">COTIZAR</button></div>');

  div1.append(subDiv1);

  labelOrigin.append(inputOrigin);
  divDateOrigin.append(labelOrigin);
  dateDiv1.append(divDateOrigin);

  labelReturn.append(inputReturn);
  divDateReturn.append(labelReturn);
  dateDiv2.append(divDateReturn);

  date.append(dateDiv1);
  date.append(arrow);
  date.append(dateDiv2);


  labelDestination.append(inputDestination);
  labelDestination.append(autocomplete);
  divPlace.append(labelDestination);
  placeDiv1.append(divPlace);
  labelEmail.append(inputEmail);
  divEmail.append(labelEmail);
  placeDiv2.append(divEmail);

  place.append(placeDiv1);
  place.append(blankSpace);
  place.append(placeDiv2);

  adultsDiv.append(adults);
  divForAdults.append(adultsDiv);
  pasajerosDiv1.append(divForAdults);
  childrenDiv.append(children);
  divForChildren.append(childrenDiv);
  pasajerosDiv2.append(divForChildren);
  pasajeros.append(divPasajeros);
  pasajeros.append(pasajerosDiv1);
  pasajeros.append(pasajerosDiv2);

  form.append(div1);
  form.append(date);
  form.append(place);
  form.append(pasajeros);
  form.append(button);

  cotiza.append(form);
  section.append(cotiza);

  Option(adults);
  Option(children);

  button.on("click",function(e){
 		 e.preventDefault();
    //  console.log(section.find('.input-coti'));
		jQuery.each(section.find('.input-coti'),(i,val)=>{
			let attr = section.find('.input-coti').eq(i).attr('id');
      // console.log(section.find('.input-coti').eq(i).val());
			state.cotizacion[attr] = section.find('.input-coti').eq(i).val();
		});

		const objSerialized = JSON.stringify(state.cotizacion);
		localStorage.setItem("cliente",objSerialized);
    console.log(objSerialized);
		postPlanes(objSerialized,updated);

	});
  inputDestination.on({
    keypress: validarLetra,
    keyup: function(e){
              if($(e.currentTarget).val() != ""){
                postBuscarDestino($(this).val(), autocomplete);
              }else{
                autocomplete.hide();
                autocomplete.empty();
              }
      }

  });

  inputEmail.on("blur", function(e){
     let regex = /[\w-\.]{2,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;
     if (regex.test($(this).val().trim())) {
     } else {
       inputEmail.val("");
       inputEmail.focus();
     }

   });

   inputOrigin.on("blur", function(e){
      let regex = /(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d/;
      if (!regex.test($(this).val().trim())) {
        inputOrigin.val("");
        inputOrigin.focus();
      }

    });

    inputReturn.on("blur", function(e){
       let regex = /(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d/;
       if (!regex.test($(this).val().trim())) {
         inputReturn.val("");
         inputReturn.focus();
       }

     });

     adults.on("change", function(e){
       let cant_adults = $("#cantidad_adultos option:selected").val();
       let cant_children = $("#cantidad_niños option:selected").val();
       if(parseInt(cant_adults)+parseInt(cant_children)>=1){
         let suma = parseInt(cant_adults)+parseInt(cant_children);
       }

     });
     children.on("change", function(e){
       let cant_adults = $("#cantidad_adultos option:selected").val();
       let cant_children = $("#cantidad_niños option:selected").val();
       if(parseInt(cant_adults)+parseInt(cant_children)>=1){
         let suma = parseInt(cant_adults)+parseInt(cant_children);
       }

     });

  return section;
}

"use strict";
const root = $(".root");
const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');

  switch (state.page) {
    case null:
                const header = $('<header id="header"></header>');
                header.append(Header(updated));
                wrapper.append(header);
                wrapper.append(Banner());
                wrapper.append(Formulario(updated));
      break;
    case 1:
                const header1 = $('<header class="cabecera"></header>');
                const div1 = $('<div class="container"></div>');
                div1.append(Header(updated));
                div1.append(Planes(updated));
                header1.append(div1);
                wrapper.append(header1);
  			        wrapper.append(DetallePlanes(updated));
        break;
    case 2:
                const header2 = $('<header class="cabecera"></header>');
                const div2 = $('<div class="container"></div>');
                div2.append(Header(updated));
                div2.append(Planes(updated));

                header2.append(div2);
                wrapper.append(header2);
  			        wrapper.append(Ofertas(updated));
        break;
    case 3:
                const header3 = $('<header class="cabecera"></header>');
                const div3 = $('<div class="container"></div>');
                div3.append(Header(updated));
                div3.append(Planes(updated));

                header3.append(div3);
                wrapper.append(header3);
  			        wrapper.append(Beneficios(updated));
        break;


  }


  root.append(wrapper);


}


const state = {
  page:null,
  place: null,
  cotizacion: {},
  planes: null,
  action: 0
};
const updated = function(){
  render(root);
}


$( _ => {
      const root = $(".root");
      $.ajax({
             url: 'https://testsoat.interseguro.com.pe/talentfestapi/ofertas',
             method: 'GET',
             contentType: 'application/json',
             crossOrigin: true,
             success: function(response) {
                         if(response){
                           state.ofertas = response;
                           console.log(state.ofertas);
                          render(root);
                          dataPicker();
                         }
                       },
              fail: function(request){
               if(request){
                 alert(request.message);
               }
              }
         });

});

'use strict';
const dataPicker = ()=>{

  $( function() {
    var dateFormat = "dd/mm/yy",
    from = $( "#fecha_partida" )
    .datepicker({
      dateFormat: "dd/mm/yy",
      firstDay: 0,
      dayNamesMin: ["L", "M", "M", "J", "V", "S", "D"],
      monthNames:
      ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
      "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
      defaultDate: "+1w",
      changeMonth: false,
      numberOfMonths: 1,
      minDate: 0
    })
    .on( "change", function() {
      to.datepicker( "option", "minDate", getDate( this ) );
    }),
    to = $( "#fecha_retorno" ).datepicker({
      dateFormat: "dd/mm/yy",
      firstDay: 0,
      dayNamesMin: ["L", "M", "M", "J", "V", "S", "D"],
      monthNames:
      ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
      "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
      defaultDate: "+1w",
      changeMonth: false,
      numberOfMonths: 1,
      minDate: 0
    })
    .on( "change", function() {
      from.datepicker( "option", "maxDate", getDate( this ) );
    });

    function getDate( element ) {
      var date;
      try {
        date = $.datepicker.parseDate( dateFormat, element.value );
      } catch( error ) {
        date = null;
      }

      return date;
    }
  } );

}

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

'use strict';

const validarLetra = (e)=>{
  if(e.which> 47 && e.which<58){
    e.preventDefault();
  }
}
const validarNumero = (e)=>{
  if(e.which< 47 || e.which>58){
    e.preventDefault();
  }
}
const reRender = (container) => {
    container.empty();
    state.place.forEach((item) => {

    container.append(placeItem(item, container));
  });
}
const placeItem = (item, container) => {
  const itemDiv = $('<div class="item-place"></div>');
  const img = $('<img src="assets/images/localization.jpg" class="item-place__img">');
  const span = $('<span class="item-place__title">'+ item +'</span>');

  itemDiv.append(img);
  itemDiv.append(span);

  itemDiv.on("click", (e) => {
    e.preventDefault();
    $('#destino').val(item);
    container.empty();
    container.hide();

  });
  container.show();
  return itemDiv;
}
const Option = (container)=> {
  var number = "";
  for(var i=0; i<=10; i++){
    if(i<10){
      number = "0" + i;
    }else { number = "10";}
    container.append('<option value="'+ i +'">'+ number +'</option>');

  }


}

'use strict';
 const Banner = ()=> {

   const section = $('<section id="banner"></section>');
   const row = $('<div class="row"></div>');
   const column = $('<div class="col-xs-7 col-xs-offset-5 col-sm-7 col-sm-offset-5"></div>');
   const texto = $('<p class="fucsia omnes-regular">Disfruta más de tu viaje sintiéndote</p><p class="azul omnes-semibold hidden-xs hidden-sm">SEGURO</p><h1 class="azul omnes-semibold visible-xs visible-sm">SEGURO</h1><p class="celeste omnes-regular hidden-xs">No importa el destino que elijas, cuidamos de ti <br>y de tus bienes personales en todo el mundo.</p>');

   column.append(texto);
   row.append(column);

   section.append(row);
   return section;
 }

'use strict';

const Beneficios = (update) => {
  const divBeneficios = $('<section id="beneficios" class="container omnes-regular"></section>');
  const row = $('<div class="row"></div>');

  const titleDiv = $('<div class="col-xs-12 col-sm-12 text-center"></div>');
  const title = $('<h3 class="azul">Personaliza tu asistencia sumando los siguientes</h3>');
  const titleBig = $('<h1 class="title omnes-semibold azul">BENEFICIOS</h1>');

  const divAsistencia = $('<div class="col-xs-12 col-sm-4"></div>');
  const imgAsistencia = $('<img src="assets/images/icon_beneficio_asistencia.png" alt="beneficio_asistencia">');
  const hr1 = $('<hr class="lines">');
  const titleAsistencia = $('<h1 class="azul">Asistencia Médica</h1>');
  const textAsistencia = $('<p>Amplia tu monto de cobertura de USD60,000 según el viaje que vas a realizar. Amplia tu monto de cobertura de USD60,000 según el viaje que vas a realizar.</p>');

  const divSeguros = $('<div class="col-xs-12 col-sm-4"></div>');
  const imgSeguros = $('<img src="assets/images/icon_beneficio_moviles.png"> alt="beneficio_moviles"');
  const hr2 = $('<hr class="lines">');
  const titleSeguros = $('<h1 class="azul">Seguros para Dispositivo Móviles</h1>');
  const textSeguros = $('<p>Reembolso de gasta USD1,000 para tus dispositivos (Smartphone, Tablet y notebook). Reembolso de gasta USD1,000 para tus dispositivos (Smartphone, Tablet y notebook)</p>');

  const divCobertura = $('<div class="col-xs-12 col-sm-4"></div>');
  const imgCobertura = $('<img src="assets/images/icon_beneficio_equipaje.png"> alt="beneficio_equipo"');
  const hr3 = $('<hr class="lines">');
  const titleCobertura = $('<h1 class="azul">Cobertura ante perdida de equipaje</h1>');
  const textCobertura = $('<p>Ante la posibilidad de pérdida de equipaje, te reembolsamos USD3,000. Ante la posibilidad de pérdida de equipaje, te reembolsamos USD3,000</p>');

  const divConsultas = $('<div class="col-xs-12 text-center"></div>');
  const titleConsultas = $('<h4 class="azul">Si aún tienes dudas o consultas</h4>');

  const buttonCall = $('<button class="btn-cotizar"></button>');
  const iconCall = $('<span class="glyphicon glyphicon-phone-alt"></span>');
  const textCallSmall = $('<span class="text-call small"> Llámanos al </span><br>');
  const textCallMedium  = $('<span class="text-call medium"> 500-00-00</span>');

  const buttonChat = $('<button class="btn-cotizar"></button>');
  const iconChat = $('<span class="glyphicon glyphicon-comment"></span>');
  const textChatSmall = $('<span class="text-chat small"> Conversa por nuestro </span><br>');
  const textChatMedium  = $('<span class="text-chat medium"> Chat de atencion</span>');

  divBeneficios.append(row);
  row.append(titleDiv);
  titleDiv.append(title);
  titleDiv.append(titleBig);

  row.append(divAsistencia);
  divAsistencia.append(imgAsistencia);
  divAsistencia.append(hr1);
  divAsistencia.append(titleAsistencia);
  divAsistencia.append(textAsistencia);

  row.append(divSeguros);
  divSeguros.append(imgSeguros);
  divSeguros.append(hr2);
  divSeguros.append(titleSeguros);
  divSeguros.append(textSeguros);

  row.append(divCobertura);
  divCobertura.append(imgCobertura);
  divCobertura.append(hr3);
  divCobertura.append(titleCobertura);
  divCobertura.append(textCobertura);

  row.append(divConsultas);
  divConsultas.append(titleConsultas);

  divConsultas.append(buttonCall);
  buttonCall.append(iconCall);
  buttonCall.append(textCallSmall);
  buttonCall.append(textCallMedium);

  divConsultas.append(buttonChat);
  buttonChat.append(iconChat);
  buttonChat.append(textChatSmall);
  buttonChat.append(textChatMedium);

  return divBeneficios;
}

"use strict";
const DetallePlanes = () => {
  const section = $('<section id="plan" class="container"></section>');
  const row1 = $('<div class="row"></div>');
  const title = $(' <div class="col-sm-12 azul"><h2 class="omnes-regular">Elige y compra en línea</h2><h1 class="omnes-semibold">EL PLAN A TU MEDIDA</h1></div>');

  const col = $('<div class="col-sm-12 "></div>');
  const div = $('<div class="detalle"></div>');
	const container = $('<div class="container"></div>');
	const row = $('<div class="row"></div>');


  container.append(row);
	div.append(container);

	row.append('<div class="caracteristicas col-xs-6 col-md-6"></div>');
	row.find('.caracteristicas').append('<ul class="beneficios"></ul>');
	jQuery.each(state.planes[0].caracteristicas,(i,val)=>{
		row.find('ul').append(`<li>${val.caracteristica}</li>`);
	})
	jQuery.each(state.planes,(i,val)=>{
		row.append(`<div class="planes col-xs-3 col-md-3"></div>`);
		row.find('.planes').eq(i).append(`<h1>${val.tipo_plan}</h1>`);
		row.find('h1').eq(i).append(`<span>${val.precio_plan}</span>`);
			jQuery.each(val.caracteristicas,(a,b)=>{
				row.find('.planes').eq(i).append(`<div class="icon-container"><div class="icon-${b.aplica}"></div></div>`);
			});

		});

    col.append(div);
    row1.append(title);
    row1.append(col);
    section.append(row1);
	return section;

}

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


'use strict';
 const Header = (updated)=> {

   const nav = $('<nav class="navbar"></nav>');
   const logo = $('<div class="navbar-left pull-left"><img src="assets/images/logo_interseguro.png" alt="logo interseguro"><span class="omnes-medium hidden-xs">SEGURO DE VIAJES</span></div>');
   const menuDiv = $('<div class="navbar-right omnes-regular hidden-xs"></div>');
   const beneficios = $('<a href="#">Beneficios</a>');
   const ofertas = $('<a href="#">Ofertas por destinos</a>');
   const divHamburger = $('<div class="navbar-right pull-right omnes-regular visible-xs dropdown"></div>');
   const boton = $('<button type="button" class="btn menu visible-xs dropdown-toggle" data-toggle="dropdown"></button>');
   const botonMenu = $('<small>MENU</small><span class="glyphicon glyphicon-menu-hamburger" aria-hidden="true"></span>');
   const lista = $('<ul class="dropdown-menu"></ul>');
   const listaBene = $('<li></li>');
   const linkBene = $('<a href="#">Beneficios</a>');
   const listaOferta = $('<li></li>');
   const linkOferta = $('<a href="#">Ofertas por destino</a>');

   menuDiv.append(beneficios);
   menuDiv.append(ofertas);
   boton.append(botonMenu);
   divHamburger.append(boton);
   listaBene.append(linkBene);
   listaOferta.append(linkOferta);
   lista.append(listaBene);
   lista.append(listaOferta);
   divHamburger.append(lista);

   nav.append(logo);
   nav.append(menuDiv);
   nav.append(divHamburger);

   linkOferta.on("click", function(e){
     e.preventDefault();
     state.page = 2;
     if(state.action==0){

     }
     updated();
   });
   linkBene.on("click", function(e){
     e.preventDefault();
     state.page = 3;
     console.log("hola");
     if(state.action==0){

     }
     updated();
   });
   ofertas.on("click", function(e){
     e.preventDefault();
     state.page = 2;
     if(state.action==0){

     }
     updated();
   });
   beneficios.on("click", function(e){
     e.preventDefault();
     state.page = 3;
     console.log("hola");
     if(state.action==0){

     }
     updated();
   });
   return nav;
 }

'use strict';
const destinoItem = (oferta, col, update) => {
  const contDiv = $('<div class="col-sm-4 '+col+'"></div>');
  const destinoDiv = $('<div class="destino"></div>');
  const imgDiv = $('<img src="'+oferta.imagen+'" alt="'+oferta.titulo+'" class="img-destino">');
  const descriptionDiv = $('<div class="caption"></div>');
  const detailTitle =$('<h3 class="azul"> ' +oferta.titulo+ ' </h3>');
  const promotion = $('<div class="col-sm-9"></div>');
  const paragraphPromo = $('<p class="omnes-regular">'+oferta.descripcion+'</p>');
  const moreSign = $('<div class="col-sm-3 text-right"><img src="assets/images/icon_more.png" width="30" alt="boton más"><span>ver más</span</div>');
  console.log(oferta.imagen);
  if(oferta.descuento!=0){
    const spanPromotion = $('<button class="btn-cotizar btn-oferta"> - '+oferta.descuento+' % </button>');
    detailTitle.append(spanPromotion);

  }
  descriptionDiv.append(detailTitle);
  descriptionDiv.append(promotion);
  promotion.append(paragraphPromo);
  descriptionDiv.append(moreSign);

  destinoDiv.append(imgDiv);
  destinoDiv.append(descriptionDiv);
  contDiv.append(destinoDiv);


  return contDiv;
}
const Ofertas = (update) => {

  var pag = JSON.parse(localStorage.getItem("pagina"));

  const section  = $('<section id = "oferta" class="container-fluid"></section>');
  const div = $('<div class="container"></div>');
  const row = $('<div class="row"></div>');
  const colTitle = $('<div class="col-sm-12 blanco"></div>');
  const title = $('<h1 class="omnes-regular">Aprovecha nuestra oferta por</h1>');
  const titleBig = $('<h1 class="omnes-semibold">DESTINO</h1>');

  const divGallery = $('<div class="col-sm-12"></div>');
  const rowGallery = $('<div class="row"></div>');


  state.ofertas.forEach((oferta,index) => {
    if(index==0){
      rowGallery.append(destinoItem(oferta, 'col-md-8', update));
    }else{
     
        rowGallery.append(destinoItem(oferta, 'col-md-4', update));

      
    }
  });

  colTitle.append(title);
  colTitle.append(titleBig);
  divGallery.append(rowGallery);
  row.append(colTitle);
  row.append(divGallery);
  div.append(row);
  section.append(div);
  $('body').css({"background":"none"});
  $('body').removeClass("container");
  return section;
}

"use strict";
const Planes = (update) => {

		var objetoDatos = JSON.parse(localStorage.getItem("cliente"));
		var pag = JSON.parse(localStorage.getItem("pagina"));
		state.page=pag;
    const div = $('<div class="row"></div>');
		const form = $('<form></form>');
    const destinoDiv = $('<div class="col-sm-3"></div>');
    const divDestino = $('<div class="form-group divAutocomplete"></div>');
    const labelDestino = $('<label><small class="">Destino</small></label>');
    const inputDestino = $('<input type="text" class="form-control input-consult" id="destino" placeholder="">');
    const correo = $('<input class="input-consult" id="correo" style="display:none">');
		const autocomplete = $('<div class="autocomplete"></div>');

    const dateDiv1 = $('<div class="col-sm-2"></div>');
    const divDateOrigin = $('<div class="form-group"></div>');
    const labelOrigin = $('<label><small class="">Partida</small></label>');
    const inputOrigin = $('<input type="text" class="form-control input-consult" id="fecha_partida" placeholder="dd/mm/yy">');

    const arrow = $(' <div class="col-sm-1 hidden-xs hidden-sm"><div class="form-group"><img src="assets/images/icon_arrow_blue.png" alt=""></div> </div></div>');

    const dateDiv2 = $('<div class="col-sm-2"></div>');
    const divDateRetorno = $('<div class="form-group"></div>');
    const labelRetorno = $('<label><small class="">Retorno</small></label>');
    const inputRetorno = $('<input type="text" class="form-control input-consult" id="fecha_retorno" placeholder="dd/mm/yy">');
    const pasajerosDiv1 = $('<div class="col-sm-1 col-xs-4"></div>');
    const adultsDiv = $('<div class="form-group"><label><small class="">Adultos</small></label></div>');
    const adults = $('<select class="btn input-consult" id="cantidad_adultos"></select>');
    const pasajerosDiv2 = $('<div class="col-sm-1 col-xs-3"></div>');
    const childrenDiv = $('<div class="form-group"><label><small class="">Niños</small></label></div>');
    const childrenSelect = $('<select class="btn input-consult" id="cantidad_niños"></select>');
    const button = $('<div class="col-sm-2 col-xs-12 text-center"><button class="btn-cotizar">COTIZAR</button></div>');


      divDestino.append(labelDestino);
      divDestino.append(inputDestino);
			divDestino.append(autocomplete);
      destinoDiv.append(divDestino);
      destinoDiv.append(correo);

      divDateOrigin.append(labelOrigin);
      divDateOrigin.append(inputOrigin);
      dateDiv1.append(divDateOrigin);

      divDateRetorno.append(labelRetorno);
      divDateRetorno.append(inputRetorno);
      dateDiv2.append(divDateRetorno);

      adultsDiv.append(adults);
      pasajerosDiv1.append(adultsDiv);
      childrenDiv.append(childrenSelect);
      pasajerosDiv2.append(childrenDiv);

      Option(adults);
      Option(childrenSelect);

      form.append(dateDiv1);
      form.append(arrow);
      form.append(dateDiv2);
      form.append(destinoDiv);
      form.append(pasajerosDiv1);
      form.append(pasajerosDiv2);
      form.append(button);
      div.append(form);

			jQuery.each(Object.keys(objetoDatos),(i,val)=>{
          div.find('.input-consult').eq(i).val(objetoDatos[val]);
			})

			form.on("submit",function(e){
 		 		e.preventDefault();
				state.page = pag;
				jQuery.each(form.children(),(i,val)=>{
					console.log(form.find('.input-consult').eq(i));
					let attr = form.find('.input-consult').eq(i).attr('id');
            state.cotizacion[attr] = $('.input-consult').eq(i).val();
				});
        // console.log(state.cotizacion);
				const objSerialized = JSON.stringify(state.cotizacion);
					localStorage.setItem("cliente",objSerialized);
					postPlanes(objSerialized,updated);
			});

			inputDestino.on({
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

			$('body').css({"background":"none"});
			$('body').removeClass("container");
		return div;
	}

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

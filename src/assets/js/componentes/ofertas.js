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

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

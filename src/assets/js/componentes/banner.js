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

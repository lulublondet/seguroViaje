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
		row.find('h1').eq(i).append(`<span>${val.precio_plan}</span><button>COMPRAR</button>`);
		row.find('.planes').eq(i).append('<button>COMPRAR</button>')
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

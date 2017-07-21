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

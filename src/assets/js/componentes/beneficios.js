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

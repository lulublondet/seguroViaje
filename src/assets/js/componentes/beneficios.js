'use strict';

const Beneficios = (update) => {
  const divBeneficios = $('<div class="beneficios"></div>');
  const row = $('<div class="row"></div>');

  const titleDiv = $('<div class="col-xs-12 col-sm-12"></div>');
  const title = $('<h1>Personaliza tu asistencia sumando los siguientes</h1>');
  const titleBig = $('<span class="title-big-beneficios"></span>');

  const divAsistencia = $('<div class="col-xs-3"></div>');
  const imgAsistencia = $('<img src="assets/images/icon_beneficio_asistencia.png"> alt="beneficio_asistencia"');
  const hr1 = $('<hr class="lines">');
  const titleAsistencia = $('<h1>Asistencia Médica</h1>');
  const textAsistencia = $('<p>Amplia tu monto de cobertura de USD60,000 según el viaje que vas a realizar. Amplia tu monto de cobertura de USD60,000 según el viaje que vas a realizar.</p>');

  const divSeguros = $('<div class="col-xs-3"></div>');
  const imgSeguros = $('<img src="assets/images/icon_beneficio_moviles.png"> alt="beneficio_moviles"');
  const hr2 = $('<hr class="lines">');
  const titleSeguros = $('<h1>Seguros para Dispositivo Móviles</h1>');
  const textSeguros = $('<p>Reembolso de gasta USD1,000 para tus dispositivos (Smartphone, Tablet y notebook). Reembolso de gasta USD1,000 para tus dispositivos (Smartphone, Tablet y notebook)</p>');

  const divCobertura = $('<div class="col-xs-3"></div>');
  const imgCobertura = $('<img src="assets/images/icon_beneficio_equipaje.png"> alt="beneficio_equipo"');
  const hr3 = $('<hr class="lines">');
  const titleCobertura = $('<h1>Cobertura ante perdida de equipaje</h1>');
  const textCobertura = $('<p>Ante la posibilidad de pérdida de equipaje, te reembolsamos USD3,000. Ante la posibilidad de pérdida de equipaje, te reembolsamos USD3,000</p>');

  const divConsultas = $('<div class="col-xs-4"></div>');
  const titleConsultas = $('<h4>Si aún tienes dudas o consultas</h4>');

  const buttonCall = $('<button class ="button-red"></button>');
  const iconCall = $('<i class="fa fa-phone-square" aria-hidden="true"></i>');
  const textCallSmall = $('<span class="text-call small">Llámanos al </span>');
  const textCallMedium  = $('<span class="text-call medium">500-00-00</span>');

  const buttonChat = $('<button class="button-red"></button>');
  const iconChat = $('<i class="fa fa-comments" aria-hidden="true"></i>');
  const textChatSmall = $('<span class="text-chat small">Conversa por nuestro </span>');
  const textChatMedium  = $('<span class="text-chat medium">Chat de atencion</span>');

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

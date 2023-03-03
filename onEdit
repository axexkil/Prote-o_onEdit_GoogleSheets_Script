function onEdit(event) {
  var range = event.range;
  var sheet = range.getSheet();
  var editedRow = range.getRow();
  var lastColumn = sheet.getLastColumn();
  var editedRange = sheet.getRange(editedRow, 1, 1, lastColumn);
  var allowedUsers = ['gilbertombj@gmail.com', 'atendimentojpe@gmail.com']; // Adicione os e-mails dos usuários permitidos aqui
  var flag = false;
  
  // Remove proteções existentes na linha
  var protections = sheet.getProtections(SpreadsheetApp.ProtectionType.RANGE);
  //verifica se possui regra para a linha
  for (var i = 0; i < protections.length; i++) {
    if (protections[i].getRange().getRow() == editedRow) {
      //Aciona a flag para não autorizar a adição da permissão pois ja existe regra para esta linha.
      flag = true;
    }
  }
  
  if(flag==false)
  {
    // Protege as células editadas pelo usuário atual
    var protection = editedRange.protect().setDescription('Protegido');
    protection.removeEditors(protection.getEditors());
    // Define as permissões para os usuários permitidos poderem editar as células protegidas
    var me = Session.getEffectiveUser();
    protection.addEditors(allowedUsers);
    protection.addEditors(me);
    if (protection.canDomainEdit()) {
      protection.setDomainEdit(false);
    }
  }
  
  
}

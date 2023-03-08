function verificaProtecaoLinhas() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Produção individual");
  var protections = sheet.getProtections(SpreadsheetApp.ProtectionType.RANGE);

  for (var i = 0; i < protections.length; i++) {
    var range = protections[i].getRange();
    if (range.isBlank()) {
      protections[i].remove(); // remove a proteção da linha vazia
      Logger.log("A proteção da linha " + range.getValues() + " foi removida.");
    }
    else if(range.getRow() == protections[i+1].getRange().getRow()) {
      protections[i].remove(); // remove a proteção da linha vazia
      Logger.log("A proteção  " + i + " esta duplicada e foi removida.");
    }
    else{  
      Logger.log("A Proteção " + i + " não esta vazia.");
      continue; // pula para a próxima linha se a linha já estiver protegida e editável
    }
  }
}

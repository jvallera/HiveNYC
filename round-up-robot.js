function formatItems() {
    
    var sheet = SpreadsheetApp.getActiveSheet();
    var roundUpData = sheet.getDataRange().getValues();
    var itemsHtml = "";
    var itemsPlain = "";
    var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
                     ];
     
    for (i = 1; i < 10; i++){
    
      //column index
      
      var timeStampIndex = 0;
      var dateSentIndex = 1;
      var statusIndex = 2;
      var orgIndex = 3;
      var descriptionIndex = 4;
      var dateIndex = 5;
      var ctaIndex  = 6;
      var ctaLinkIndex = 7;
      var deadlineIndex = 8;
      var submittedByIndex = 9;
      
      //status
      var statusPlain = '[' + roundUpData[i][statusIndex] + '] ';
      var statusHtml = '<span style="font-weight:bold;font-size:x-small;">' + statusPlain + '</span> ';
      
      //description
      var description = roundUpData[i][descriptionIndex] + ' ';
          
      //date
      var dateObj = roundUpData[i][dateIndex];
      var monthIndex = dateObj.getMonth();
      var monthName = monthNames[dateObj.getMonth()];
      
      //var date = dateObj.getDate();
      //var shortDate = monthName + ' ' + date + '. ';
      
      //link
      var itemLinkPlain = roundUpData[i][ctaLinkIndex];
      var itemLinkHtml = '<a href="' + itemLinkPlain + ' ">Learn more ></a>';
      
      //introduction
      var introGreetings = 'Hi Julia,';
      var introBody = 'Pleased to meet you! Soon I will be providing you with a list of opportunities happening across the Hive NYC community, formatted auto-magically from the information collected in this ';
      var spreadsheetPlain = 'https://docs.google.com/a/mozilla.com/spreadsheets/d/1BIGDGB5dbpmu9kQ4eZSpiWF3gcaWGG20Umbipm0lMVU/edit?usp=sharing';
      var spreadsheetHtml = '<a href="' + spreadsheetPlain + ' ">spreadsheet</a>';
      var introBody2 = 'How cool is that?!'
      var introValediction = 'Have a great weekend!';
      var introSig = 'The Hive NYC Round-up Robot';
      var roundupTitle = 'Hive NYC Round-up 4/29/16'; 
      var introHtml = introGreetings + '<br><br>' + introBody + spreadsheetHtml + '.' + '<br><br>' + introBody2 + '<br><br>' + introValediction + '<br><span style="font-style:italic;">' + introSig + '</span><br><br><span style="font-weight:bold;">## ' + roundupTitle + ' ##</span><br><br>';
      var introPlain = introGreetings + introBody + spreadsheetHtml + introValediction + introSig;
      
      //email
      itemsHtml += '<ul><li>' + statusHtml + description + dateObj + itemLinkHtml + '</li></ul>'
      itemsPlain += '* ' + statusPlain + description + dateObj + 'More: ' + itemLinkPlain +  "\r\n"
      
      var completeMessagePlain = introPlain + itemsPlain;
      var completeMessageHtml = introHtml + itemsHtml; 
      var subject = 'This is just a test';
      var recipient = 'joey@mozillafoundation.org';
    
    };

  //MailApp.sendEmail(recipient, subject, completeMessagePlain, {htmlBody: completeMessageHtml});
    
}

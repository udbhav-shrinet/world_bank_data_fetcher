function fetchEconomicData() {
  var countries = ['USA', 'CHN', 'JPN', 'DEU', 'IND', 'GBR', 'FRA', 'ITA', 'CAN', 'AUS', 
                   'BRA', 'KOR', 'RUS', 'MEX', 'IDN', 'TUR', 'SAU', 'ARG', 'ZAF', 'NLD']; // Add more countries as needed

  var indicators = {
    'NY.GDP.MKTP.KD.ZG': 'Real GDP Growth',
    'FP.CPI.TOTL.ZG': 'Inflation Rate',
    'SL.UEM.TOTL.ZS': 'Unemployment Rate',
    'NE.EXP.GNFS.ZS': 'Exports of Goods and Services',
    'NE.IMP.GNFS.ZS': 'Imports of Goods and Services',
    'GC.TAX.TOTL.GD.ZS': 'Total Tax Revenue',
    'FM.LBL.BMNY.ZG': 'Broad Money Growth',
    'SI.POV.DDAY': 'Poverty Headcount Ratio',
    'SI.POV.GINI': 'Income Inequality (Gini Index)',
    'EG.USE.PCAP.KG.OE': 'Energy Use per Capita',
    'SH.DYN.MORT': 'Under-5 Mortality Rate',
    'SL.TLF.TOTL.IN': 'Labor Force Participation Rate',
    'BX.KLT.DINV.WD.GD.ZS': 'FDI Net Inflows (% of GDP)',
    'IT.NET.USER.ZS': 'Internet Users (% of population)',
    'IT.CEL.SETS.P2': 'Mobile Cellular Subscriptions'
  };

  var startYear = 2000;
  var endYear = 2024;
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();

  // Loop over each indicator and create a sheet for it
  for (var indicator in indicators) {
    var sheet = spreadsheet.getSheetByName(indicators[indicator]);
    if (!sheet) {
      sheet = spreadsheet.insertSheet(indicators[indicator]); // Create a new sheet for the indicator
    } else {
      sheet.clear(); // Clear the existing data in case of re-run
    }
    
    // Write the headers (Countries and Years)
    var headers = ['Countries'];
    for (var year = startYear; year <= endYear; year++) {
      headers.push(year.toString());
    }
    sheet.appendRow(headers);

    // Loop over each country and fetch data for the indicator
    countries.forEach(function(country) {
      var rowData = [country];
      var data = getDataForCountryAndIndicator(country, indicator, startYear, endYear);
      if (data) {
        rowData = rowData.concat(data);
      } else {
        var noData = new Array(endYear - startYear + 1).fill('N/A');
        rowData = rowData.concat(noData);
      }
      sheet.appendRow(rowData);
    });
  }
}

function getDataForCountryAndIndicator(country, indicator, startYear, endYear) {
  var url = 'https://api.worldbank.org/v2/country/' + country + '/indicator/' + indicator + 
            '?format=json&date=' + startYear + ':' + endYear;
  
  var response = UrlFetchApp.fetch(url);
  var jsonResponse = JSON.parse(response.getContentText());

  if (jsonResponse[1]) {
    var yearsData = jsonResponse[1].map(function(item) {
      return item.value; // Get the data for each year
    });
    return yearsData;
  } else {
    return null; // No data available
  }
}

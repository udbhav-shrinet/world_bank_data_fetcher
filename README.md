<h1>Economic Data Fetcher for Google Sheets</h1>

<h2>Overview</h2>
<p>The Economic Data Fetcher script is designed to pull economic data from the World Bank API into a Google Sheets spreadsheet. It fetches data for various economic indicators across a list of countries for the years 2000 to 2024. This script automates the process of gathering economic data, making it easier for analysts, students, and researchers to analyze global economic trends.</p>

<h2>Features</h2>
<ul>
  <li>Fetches economic data for multiple countries.</li>
  <li>Supports a wide range of economic indicators, including GDP growth, inflation rate, unemployment, and more.</li>
  <li>Automatically adds a new sheet for each indicator in Google Sheets.</li>
  <li>Data is retrieved from the World Bank API for the years 2000 to 2024.</li>
  <li>Missing data is filled with 'N/A' for years with no available data.</li>
</ul>

<h2>Indicators Available</h2>
<p>The following economic indicators are fetched:</p>
<ul>
  <li><strong>Real GDP Growth</strong> (NY.GDP.MKTP.KD.ZG)</li>
  <li><strong>Inflation Rate</strong> (FP.CPI.TOTL.ZG)</li>
  <li><strong>Unemployment Rate</strong> (SL.UEM.TOTL.ZS)</li>
  <li><strong>Exports of Goods and Services</strong> (NE.EXP.GNFS.ZS)</li>
  <li><strong>Imports of Goods and Services</strong> (NE.IMP.GNFS.ZS)</li>
  <li><strong>Total Tax Revenue</strong> (GC.TAX.TOTL.GD.ZS)</li>
  <li><strong>Broad Money Growth</strong> (FM.LBL.BMNY.ZG)</li>
  <li><strong>Poverty Headcount Ratio</strong> (SI.POV.DDAY)</li>
  <li><strong>Income Inequality (Gini Index)</strong> (SI.POV.GINI)</li>
  <li><strong>Energy Use per Capita</strong> (EG.USE.PCAP.KG.OE)</li>
  <li><strong>Under-5 Mortality Rate</strong> (SH.DYN.MORT)</li>
  <li><strong>Labor Force Participation Rate</strong> (SL.TLF.TOTL.IN)</li>
  <li><strong>FDI Net Inflows (% of GDP)</strong> (BX.KLT.DINV.WD.GD.ZS)</li>
  <li><strong>Internet Users (% of Population)</strong> (IT.NET.USER.ZS)</li>
  <li><strong>Mobile Cellular Subscriptions</strong> (IT.CEL.SETS.P2)</li>
</ul>

<h2>Requirements</h2>
<ul>
  <li>Google Sheets with access to Google Apps Script.</li>
  <li>Internet connection for fetching data from the World Bank API.</li>
</ul>

<h2>How to Use</h2>
<ol>
  <li>Open a new Google Sheets document.</li>
  <li>Go to <strong>Extensions &gt; Apps Script</strong> to open the Google Apps Script editor.</li>
  <li>Paste the code from this repository into the script editor.</li>
  <li>Save the script.</li>
  <li>Run the <code>fetchEconomicData()</code> function to begin fetching the data. This will automatically create new sheets in your Google Sheets document, each containing the data for one economic indicator.</li>
</ol>

<h3>Permissions</h3>
<p>The script uses <code>UrlFetchApp</code> to request data from the World Bank API. Make sure to grant necessary permissions when prompted by Google.</p>

<h2>Example Output</h2>
<p>After running the script, your Google Sheet will contain a separate sheet for each economic indicator, populated with data for the countries and years 2000-2024.</p>

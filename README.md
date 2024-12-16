#Economic Data Fetcher for Google Sheets
Overview
The Economic Data Fetcher script is designed to pull economic data from the World Bank API into a Google Sheets spreadsheet. It fetches data for various economic indicators across a list of countries for the years 2000 to 2024. This script automates the process of gathering economic data, making it easier for analysts, students, and researchers to analyze global economic trends.

Features
Fetches economic data for multiple countries.
Supports a wide range of economic indicators, including GDP growth, inflation rate, unemployment, and more.
Automatically adds a new sheet for each indicator in Google Sheets.
Data is retrieved from the World Bank API for the years 2000 to 2024.
Missing data is filled with 'N/A' for years with no available data.
Indicators Available
The following economic indicators are fetched:

Real GDP Growth (NY.GDP.MKTP.KD.ZG)
Inflation Rate (FP.CPI.TOTL.ZG)
Unemployment Rate (SL.UEM.TOTL.ZS)
Exports of Goods and Services (NE.EXP.GNFS.ZS)
Imports of Goods and Services (NE.IMP.GNFS.ZS)
Total Tax Revenue (GC.TAX.TOTL.GD.ZS)
Broad Money Growth (FM.LBL.BMNY.ZG)
Poverty Headcount Ratio (SI.POV.DDAY)
Income Inequality (Gini Index) (SI.POV.GINI)
Energy Use per Capita (EG.USE.PCAP.KG.OE)
Under-5 Mortality Rate (SH.DYN.MORT)
Labor Force Participation Rate (SL.TLF.TOTL.IN)
FDI Net Inflows (% of GDP) (BX.KLT.DINV.WD.GD.ZS)
Internet Users (% of Population) (IT.NET.USER.ZS)
Mobile Cellular Subscriptions (IT.CEL.SETS.P2)

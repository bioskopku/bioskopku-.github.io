var cityId = ["", "AE", "AF", "AN", "AR", "AS", "AT", "AU", "BA", "BD", "BO", "BR", "CA", "CH", "CL", "CN", "CO", "CS", "CU", "DE", "DK", "EG", "ES", "FI", "FR", "GB", "GH", "GM", "GT", "GY", "HK", "ID", "IL", "IN", "IO", "IR", "IT", "JP", "KE", "KH", "KP", "KR", "KW", "LA", "LB", "LR", "LU", "LY", "MG", "MK", "MN", "MX", "MY", "NA", "NP", "PA", "PE", "PH", "PK", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SD", "SE", "SG", "SN", "SU", "SY", "TH", "TJ", "TN", "TR", "TW", "TZ", "UA", "US", "VE", "VN", "XG", "YE", "ZA"];
var cityName = ["", "United Arab Emirates", "Afghanistan", "Netherlands Antilles", "Argentina", "American Samoa", "Austria", "Australia", "Bosnia & Herzegovina", "Bangladesh", "Bolivia", "Brazil", "Canada", "Switzerland", "Chile", "China", "Colombia", "Serbia and Montenegro", "Cuba", "Germany", "Denmark", "Egypt", "Spain", "Finland", "France", "United Kingdom", "Ghana", "Gambia", "Guatemala", "Guyana", "Hong Kong SAR China", "Indonesia", "Israel", "India", "British Indian Ocean Territory", "Iran", "Italy", "Japan", "Kenya", "Cambodia", "North Korea", "South Korea", "Kuwait", "Laos", "Lebanon", "Liberia", "Luxembourg", "Libya", "Madagascar", "Macedonia", "Mongolia", "Mexico", "Malaysia", "Namibia", "Nepal", "Panama", "Peru", "Philippines", "Pakistan", "Palestinian Territories", "Portugal", "Paraguay", "Qatar", "Romania", "Serbia", "Russia", "Saudi Arabia", "Sudan", "Sweden", "Singapore", "Senegal", "Soviet Union", "Syria", "Thailand", "Tajikistan", "Tunisia", "Turkey", "Taiwan", "Tanzania", "Ukraine", "United States", "Venezuela", "Vietnam", "East Germany", "Yemen", "South Africa"];
var mCountry = '';
for (let i = 1; i < cityId.length; ) {
mCountry += '<a href="country.html?q='+cityId[i]+'&c='+cityName[i]+'">'+cityName[i]+'</a>, ';
i++;}
mCountry += '....';
document.getElementById("mCountry").innerHTML = mCountry;

var input = document.querySelector("#phone");
var errorMap = ["Invalid number", "Invalid country code", "Too short", "Too long", "Invalid number"];
    window.addEventListener("load", function () {
        
        errorMsg = document.querySelector("#error-msg"),
 validMsg = document.querySelector("#valid-msg");
        var iti = window.intlTelInput(input, {
            utilsScript:"https://cdn.jsdelivr.net/npm/intl-tel-input@16.0.2/build/js/utils.js"
        });
        window.intlTelInput(input, {
            // allowDropdown: false,
            // autoHideDialCode: false,
            // autoPlaceholder: "off",
            // dropdownContainer: document.body,
            // excludeCountries: ["us"],
            // formatOnDisplay: false,
             geoIpLookup: function(callback) {
         $.get("https://ipinfo.io", function() {}, "jsonp").always(function(resp) {
           var countryCode = (resp && resp.country) ? resp.country : "";
           callback(countryCode);
         });
       },
            // hiddenInput: "full_number",
            initialCountry: "auto",
           
            // localizedCountries: { 'de': 'Deutschland' },
            //nationalMode: false,
            // onlyCountries: ['us', 'gb', 'ch', 'ca', 'do'],
            placeholderNumberType: "MOBILE",
            // preferredCountries: ['cn', 'jp'],
            // separateDialCode: true,
            utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@16.0.2/build/js/utils.js",
        });
        $(validMsg).addClass("hide");
        input.addEventListener('blur', function () {
            reset();
            if (input.value.trim()) {
                if (iti.isValidNumber()) {
                    validMsg.classList.remove("hide");
                } else {
                    input.classList.add("error");
                    var errorCode = iti.getValidationError();
                    errorMsg.innerHTML = errorMap[errorCode];
                    errorMsg.classList.remove("hide");
                }
            }
        });
        
        input.addEventListener('change', reset);
        input.addEventListener('keyup', reset);
    });

    
    var reset = function () {
        input.classList.remove("error");
        errorMsg.innerHTML = "";
        errorMsg.classList.add("hide");
        validMsg.classList.add("hide");
    };
 $(document).ready(function () {
        $("#phone").val("+23408123456778");
    });

    var select = document.getElementById("selectCountry");
    
var countries = new Array("Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burma", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo, Democratic Republic", "Congo, Republic of the", "Costa Rica", "Cote d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Greenland", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, North", "Korea, South", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Mongolia", "Morocco", "Monaco", "Mozambique", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Samoa", "San Marino", " Sao Tome", "Saudi Arabia", "Senegal", "Serbia and Montenegro", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "Spain", "Sri Lanka", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe");
    
//console.log(countries);
//console.log(select);
    
for (var i = 0; i < countries.length; i++) {
    
    var option = document.createElement("option"); 
  //for every turn of the loop create an option tag
    //console.log(option);
    var txt = document.createTextNode(countries[i]); 
  //for every turn of the loop create the inner text
    //console.log(txt);
    option.appendChild(txt); 
  //for every turn of the loop put the words from txt inside the <option> tags
    //console.log(option);
    option.setAttribute("value",countries[i]); //for every turn of the loop set the value attribute to corresponding country name
    //console.log(option);
    select.insertBefore(option,select.lastChild);
    //console.log(select);
    
}

document.addEventListener ('DOMContentLoaded', function() {
    //console.log('DOM fully loaded and parsed');
    document.querySelector('select[name="selectCountry"]').onchange = alertCountry;
     }, false);
    
// function alertCountry(event) {
//     //console.log('DOM loaded');
//     //use "this" to refer to selected element
//     if(!event.target.value) alert('Please select a country');
//     else alert('You chose ' + event.target.value + '. Yay, grab a beer!');
// }


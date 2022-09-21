function telephoneCheck(str) {
  let validCountryCode=true;
  let countryCode;

  // copy country code from original number
  countryCode = str.slice(0,2);

  // if telno. has space, compare country codes
  if(typeof str.split(" ")[1]!="undefined"){
    // if countrycode is 1 and separated by space or parentheses. its valid
    validCountryCode = countryCode=="1 "||countryCode=="1("?true:false;
  }

  // strip away country code from original number for accurate regex
  if(countryCode=="1("){
    str=str.slice(1);
  }
  else if(countryCode=="1 "){
    str=str.slice(2);
  }

  // regex for ff. special cases
  // 555-555-5555 | 5555555555 | (555)555-5555 | (555) 555-5555 | 555 555 5555
  let regex = /^\d{3}-{1}\d{3}-{1}\d{4}$|^\d{3}\d{3}\d{4}$|^[(]\d{3}[)]\s{0,1}\d{3}-\d{4}$|^\d{3}\s\d{3}\s\d{4}$/;
  if(regex.test(str)){return validCountryCode&&true;}

  return false;
}
telephoneCheck("(555)555-5555");

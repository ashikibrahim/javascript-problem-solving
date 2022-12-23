

function myFunction(country) {
  console.log(country.toUpperCase);
  console.log(country.toLowerCase);
  console.log(country.split(" "));
  console.log(country.startsWith("U"));
  console.log(country.startsWith("u"));
  console.log(country.slice(2,6));
  console.log(country.substring(0,9));
  console.log(country.concat("s"))
  console.log(country.padStart(18,"$"))

  
}

myFunction("united states")
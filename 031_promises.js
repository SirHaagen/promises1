
let nombre= "pedro";

let promesa= new Promise((resolve, reject) => {
  
  if(nombre== "pedro") resolve(nombre);
  else reject("El nomnbre no es pedro, volver a intentarlo");

});

promesa
.then(resultado=> console.log(resultado))
.catch(error=> console.log(error));
// .then(resultado=> console.log(resultado),error=> console.log(error));
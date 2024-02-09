let infoCurso = {

  "titulo" : "Aprende Node.js",
  "numVistas" : 45642,
  "numLikes" : 21123,
  "temas" : [
     
     "JavaScript",
     "Node.js"
  ],

  "esPublico" : true

};

                         //conversiones del formato JSON
                         
   //lo convierte en cadena de caracteres en formato JSON para que sea mas entendible para el usuario #pasar de json a js

   //objeto --> cadena de caracteres
   
let infoCursoJSON = JSON.stringify(infoCurso);

console.log(infoCursoJSON);
console.log(typeof infoCursoJSON);

// cadena de caracteres -> Objeto usando parse()
let infoCursoObjeto = JSON.parse(infoCursoJSON);

console.log(infoCursoObjeto);
console.log(typeof infoCursoObjeto);

console.log('Numero de likes obtenidos =');
console.log(infoCursoObjeto.numLikes);
//Este sera el archivo inicial que mandar a traer todo el proyecto Node, puede llamarse tambien index

//---------- CODIGO USANDO YARGS ------------
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
require('colors'); //se manda a llamar colores

console.clear();

//console.log(process.argv); // este es el argv de los procesos propios de Node
//console.log(argv);        // este es el argv de yargs

crearArchivo( argv.b, argv.l, argv.h )
.then ( nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
.catch( err => console.log(err));























// --------- CODIGO TOMAR EL VALOR DE CONSOLA --------
/*
// Crear el package con el comando npm init en la ruta del archivo
// Para ejecutar los scripts es "npm run base3" en la ruta del proyecto
const { crearArchivo } = require('./helpers/multiplicar');

console.clear();
// En consola se ejecuta node app --base=9
// Este metodo tiene problema que toma la 3ra posicion como base aunque mande otra cosa
const [ , , arg3 = 'base=5' ] = process.argv;
const [ , base =5 ] = arg3.split('=');


crearArchivo( base )
.then ( nombreArchivo => console.log(nombreArchivo, 'creado'))
.catch( err => console.log(err));
*/


// ------------ CODIGO PARA MANDAR A TRAER LA FUNCION A TRAVES DE PROMESAS
/*
//const fs = require ('fs');//fs= file system
const { crearArchivo } = require('./helpers/multiplicar');
console.clear();
// console.log('=====================');
// console.log('  Tabla del: 5 ');
// console.log('=====================');

const base= 1;

crearArchivo( base )
.then ( nombreArchivo => console.log(nombreArchivo, 'creado'))
.catch( err => console.log(err));


// let salida = '';

//     for (let i=1; i<=10; i++) {
//         //console.log(`${ base } X ${ i } = ${ base * i}`); 
//         salida += `${ base } X ${ i } = ${ base * i}\n`; //Se concatena con += para imprimir el resultado y se agrega salto de linea 

//     }

// console.log(salida);
// //Mejor version, la diferencia es que si sucede un error se tiene que manejar con try y catch
// fs.writeFileSync( `tabla-${base}.txt`, salida);
// console.log( `tabla-${base}.txt creado`);



//Version mas larga
// fs.writeFile( `tabla-${ base }.txt`, salida, (err)=>{ //Toma de base la ruta donde se esta ejecutando la app
//     if (err) throw err;
//     console.log(`tabla-${ base }.txt creado`);
// } ) 
*/

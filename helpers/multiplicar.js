const colors = require('colors'); // se manda a llamar a color
const fs = require ('fs');//fs= file system
const crearArchivo = async ( base = 5, listar = false, hasta=1) => { //Con asyc digo que es una promesa
  try {
    let salida = '';
    let consola = '';

    for (let i=1; i<=hasta; i++) {
        //console.log(`${ base } X ${ i } = ${ base * i}`); 
        salida  += `${ base } X ${ i } = ${ base * i}\n`; //Se concatena con += para imprimir el resultado y se agrega salto de linea 
        consola += `${ base } ${'X'.green} ${ i } ${'='.green} ${ base * i}\n`; 
    }

    if (listar) {
      console.log('====================='.green);
      console.log(' Tabla del:'.green, colors.yellow(base) );
      console.log('====================='.green);

      console.log(consola);
    }
    
    //Mejor version, la diferencia es que si sucede un error se tiene que manejar con try y catch
    fs.writeFileSync( `./salida/tabla-${ base }.txt`, salida);
    return  `tabla-${ base }.txt creado` //Se quita el console log por la promesa
    //console.log( `tabla-${base}.txt creado`);
  } catch (err) {
    throw err;
  }
    

}

module.exports = { //Funcion propia de JS, para exportar
    //CrearArchivo: crearArchivo //Este metodo es redundante
    crearArchivo //Con esto indica que la funcion llamara a un metodo con el mismo nombre
}
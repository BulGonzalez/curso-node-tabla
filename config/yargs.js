const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        description: 'Es la base de la tabla de multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        description: 'muestra la tabla en consola'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        demandOption: true,
        description: 'Es el limite hsta donde mumltiplicar'
    })
    .check( (argv, options) => {
        if( isNaN( argv.b)){
            throw 'La bse tiene que ser numero'
        }
        return true // si no hay error continua
    })
    .argv;

    module.exports = argv;//Se exporta de esta manera no omo objeto si no como argv
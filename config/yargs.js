import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

export const argv = yargs(hideBin(process.argv))
  .option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Es la base de la tabla de multiplicar',
  })
  .option('l', {
    alias: 'listar',
    type: 'boolean',
    default: false,
    describe: 'Muestra la tabla en consola',
  })
  .option('h', {
    alias: 'hasta',
    type: 'number',
    default: 10,
    describe: 'Define hasta que numero se multiplica',
  })
  .check((argv, options) => {
    if (isNaN(argv.b) || isNaN(argv.h)) {
      throw new Error('La base y el hasta deben ser numeros.');
    } else {
      return true;
    }
  }).argv;

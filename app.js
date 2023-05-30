import { crearArchivo } from './helpers/multiplicar.js';
import { argv } from './config/yargs.js';
import colors from 'colors';

console.clear();

console.log(argv);

crearArchivo(argv.b, argv.l, argv.h)
  .then((nombreArchivo) => console.log(nombreArchivo.green, 'creado'))
  .catch((err) => console.log(err));

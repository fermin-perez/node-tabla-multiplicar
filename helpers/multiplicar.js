import { writeFileSync } from 'node:fs';
import colors from 'colors';

export const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
  try {
    let salida = '';
    let consola = '';

    for (let i = 1; i <= hasta; i++) {
      consola += `${colors.cyan(base)} ${'x'.green} ${colors.cyan(i)} ${
        '='.green
      } ${colors.cyan(base * i)}\n`;
      salida += `${base} x ${i} = ${base * i}\n`;
    }

    if (listar) {
      console.log('============'.green);
      console.log(`Tabla del:`.green, colors.cyan(base));
      console.log('============'.green);
      console.log(consola);
    }

    writeFileSync(`./salida/tabla-${base}.txt`, salida);

    return `tabla-${base}.txt`;
  } catch (error) {
    throw error;
  }
};

console.clear;

const fs = require('fs');


const grabarMultiplicacion = (titulo) => {

    return new Promise((resolve, reject) => {

        let cadena = '';

        for (i = 1; i < 11; i++) {

            for (s = 1; s < 11; s++) {
                cadena += `El multiplicador ${titulo} de ${i} por ${s} es igual a ${i * s } \n`;
            }

        }

        /*     fs.writeFile('archivo.txt', cadena, (err) => {
                if (err) throw err;
                console.log('archivo creado')
            })
            
        */

        try {
            fs.writeFileSync('archivo.txt', cadena)
            resolve('ok');
        } catch {
            reject('Error en la grabación del archivo');
        }


    })


}




const grabarMultiplicacion2 = async(titulo) => {



    let cadena = '';

    for (i = 1; i < 11; i++) {

        for (s = 1; s < 11; s++) {
            cadena += `El multiplicador ${titulo} de ${i} por ${s} es igual a ${i * s } \n`;
        }

    }

    /*     fs.writeFile('archivo.txt', cadena, (err) => {
            if (err) throw err;
            console.log('archivo creado')
        })
        
    */

    try {
        fs.writeFileSync('archivo2.txt', cadena)
        return ('ok');
    } catch {
        return ('Error en la grabación del archivo');
    }


}

module.exports = {

    grabarMultiplicacion,
    grabarMultiplicacion2
}
var imagenes = ['Img/IMG_20230120_131552_600.jpg', 'Img/IMG_20230123_200105_766.jpg', 'Img/IMG_20230120_204117_435.jpg']
/* Lo primeros que creamos para es una variable con arreglo de las imagenes */

var cont = 0

function carrouse1(contenedor){
    contenedor.addEventListenner('click', e => {
        let atras = contenedor.querySelector('.atras'),
            adelante = contenedor.querySelector('.adelante'),
            img = contenedor.querySelector('img'),
            tgt = e.target;

            if(tgt == atras){
                if(cont > 0){
                    img.src = imagenes[cont - 1];
                    cont--;
                }else {
                    img.src = imagenes[imagenes.length - 1];
                    cont = imagenes.length - 1; 
                }
            } else if(tgt == adelante) {
                if(cont > imagenes.length - 1){
                    img.src = imagenes[cont + 1];
                    cont++;
                }else {
                    img.src = imagenes[0];
                    cont = 0 
                }
            }
    });
}

document.addEventListenner("DOMContentLoaded", () => {
    let contenedor = document.querySelector('.contenedor');
    carrouse1(contenedor);
})
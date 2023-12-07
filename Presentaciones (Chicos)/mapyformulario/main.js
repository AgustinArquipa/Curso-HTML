const $input_check = document.getElementById("show_input_file");
const $contenedor = document.getElementById("contenedor"); 
const $contenedorImg = document.getElementById("contenedorImg");

$input_check.addEventListener('click', (e) => {
    
    if(e.target.checked) {
        let imagen = document.createElement("input");
        imagen.type = "file";
        imagen.id = "cargar";
        imagen.accept = "image/*";
        imagen.style = "width:100%";
        $contenedor.appendChild(imagen);
        //colback
        imagen.addEventListener('change', (event) => {
            //capturo el input
            let inputFile = event.target;
            //nombre de la imagen seleccionada
            let file = inputFile.files[0];

            // Falta validar si lo que se carga es realmente una imagen
            // lee lo capturado 
            let reader = new FileReader();
            reader.onload = (evento) => {
                
                let imagenPreview = document.getElementById("imgPreview");

                if(imagenPreview) {
                    imagenPreview.src = evento.target.result;
                } else {
                    imagenPreview = document.createElement("img");
                    imagenPreview.id= "imgPreview";
                    imagenPreview.width = "150";
                    imagenPreview.height = "150";
                    imagenPreview.style = "border-radius: 100%; object-fit: cover;";
                    imagenPreview.src = evento.target.result;
                    $contenedorImg.appendChild(imagenPreview);
                }
            };
            reader.readAsDataURL(file);
        });
    } else {
        $contenedor.removeChild(document.getElementById("cargar"));
        $contenedorImg.removeChild(document.getElementById("imgPreview"));
    }
});
<?php
// Verifica si se han enviado datos del formulario
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recibe los datos del formulario
    $nombre = $_POST['fullname'];
    $correo = $_POST['email'];
    $telefono = $_POST['phone'];
    $asunto = $_POST['affair'];
    $mensaje = $_POST['message'];

    // Dirección de correo a la que se enviará el formulario
    $destinatario = "juanarquipa6675@gmail.com";

    // Asunto del correo
    $asunto_email = "Nuevo mensaje de contacto: " . $asunto;

    // Cuerpo del correo
    $cuerpo_email = "Nombre: $nombre\n";
    $cuerpo_email .= "Correo: $correo\n";
    $cuerpo_email .= "Teléfono: $telefono\n\n";
    $cuerpo_email .= "Mensaje:\n$mensaje";

    // Envía el correo electrónico
    if (mail($destinatario, $asunto_email, $cuerpo_email)) {
        echo "¡El formulario se ha enviado con éxito!";
    } else {
        echo "Error al enviar el formulario. Por favor, intenta nuevamente.";
    }
}
?>

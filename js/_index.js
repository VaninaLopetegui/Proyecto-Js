const botonAyuda = document.getElementById("botonAyuda");

botonAyuda.onclick = () => {
    while (botonAyuda.onclick) {
        let respuesta = parseInt(prompt("Ingresa el numero que corresponda a tu duda: 1.De qué trata el juego 2.Como jugar 3.Quiero saber sobre quien creo esto 4.Aprete sin querer!"));
        if (respuesta === 1) {
            alert("Nuestro simulador de citas online es un juego donde podras interactuar con una waifu hablando con ella, tomando decisiones para caerle mejor y hasta poder enamorarla! Este juego tiene interacciones diferentes segun las decisiones que vayas tomando asi que ¡haz lo que creas correcto!");
            break
        } else if (respuesta === 2) {
            alert("Al darle al boton 'comenzar', podras comenzar a entablar dialogos con la waifu donde podras seleccionar opciones de acorde a que quieras decirle y crear un final en base a tus decisiones");
            break
        } else if (respuesta === 3) {
            alert("Apreta el boton que tienes debajo de 'Ayuda' para poder informarte de la creadora! :)");
            break
        } else if (respuesta===4){
            break
        } else {
            alert("Ups! creo que no has ingresado ninguna respuesta posible, intenta de nuevo!");
            respuesta = parseInt(prompt("Ingresa el numero que corresponda a tu duda: 1.De qué trata el juego 2.Como jugar 3.Quiero saber sobre quien creo esto"));
        }
    }
}; 


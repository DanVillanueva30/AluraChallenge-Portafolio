document.addEventListener('DOMContentLoaded', function() {

    const inputs = document.querySelectorAll('.form__input--validar');

        inputs.forEach( input => {
            input.addEventListener('blur', function() {

                if(input.value === '') {
                    mensajeError(input, 'Este campo es obligatorio');
                }
            });
        });


        function mensajeError(input, textoMensaje) {

            const mensaje = document.createElement('P');
            mensaje.innerText = textoMensaje;
            mensaje.classList.add('error');
            // console.log(mensaje)

            const contendorInput = input.parentElement;
            contendorInput.appendChild(mensaje);
            
            setTimeout(() => {
                mensaje.remove();
            }, 3000);
        }

    
    const form = document.querySelector('.form');
    form.addEventListener('submit', validarFormulario);

    function validarFormulario(e) {

        const inputs = form.querySelectorAll('.form__input--validar');
        let camposVacios = false;

        inputs.forEach( input => {
            if(input.value === '') {
                camposVacios = true;
                mensajeError(input, 'Este campo no puede estar vacío');
            }
        });

        if(camposVacios) {
            e.preventDefault();
        }
    }
});


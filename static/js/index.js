const API_URL = 'https://proyecto-iot-api-eb469e9ce75a.herokuapp.com';

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    
    // Agregar un evento de cambio a cada radio button
    radioButtons.forEach(function (radio) {
        radio.addEventListener('change', function (event) {
            event.preventDefault(); // Evitar el envío automático del formulario

            const selectedValue = document.querySelector('input[name="led"]:checked').value;

            const xhr = new XMLHttpRequest();

            xhr.open('PATCH', `${API_URL}/dispositivo/1`, true);
            xhr.setRequestHeader('Content-Type', 'application/json');

            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        console.log(JSON.parse(xhr.responseText));
                    } else {
                        console.error('Error al actualizar el valor:', xhr.statusText);
                    }
                }
            };

            xhr.send(JSON.stringify({ valor: selectedValue }));
        });
    });
});
let btn_submit = document.querySelector('input[type="submit"]');

btn_submit.addEventListener("click", getData);

function getData(argument) {
    const formData = new FormData();
    const fileField = document.querySelector('input[type="text"]');

    formData.append('texto', fileField.value);

    fetch('script.php', {
            method: 'PUT',
            body: formData
        })
        .then(response => response.json())
        .then(result => {
            console.log('Success:', result);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
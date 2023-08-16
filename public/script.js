const inputForm = document.getElementById('inputForm');
const textareaForm = document.getElementById('textareaForm');
const fileForm = document.getElementById('fileForm');

const url = "http://192.168.15.9:3000";

inputForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const inputElement = document.getElementById('inputElement');

    const body = {
        input: inputElement.value,
    };

    await postJSON('input', body);

    inputElement.value = "";
});

textareaForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const textareaElement = document.getElementById('textareaElement');

    const body = {
        textarea: textareaElement.value,
    };

    await postJSON('input', body);
    
    textareaElement.value = "";
});

fileForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData();
    const fileInput = document.getElementById('fileInput');

    formData.append('file', fileInput.files[0]);

    await upload('upload', formData);

    fileInput.value = "";
});

async function postJSON(path, data) {
    try {
        const response = await fetch(`${url}/${path}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        const result = await response.json();

        console.log("Success:", result);
    } catch (error) {
        console.error("Error:", error);
    }
}

async function upload(path, data) {
    try {
        const response = await fetch(`${url}/${path}`, {
            method: "POST",
            body: data,
        });

        const result = await response.json();

        console.log("Success:", result);
        alert('Enviado com sucesso!');
    } catch (error) {
        console.error("Error:", error);
    }
}
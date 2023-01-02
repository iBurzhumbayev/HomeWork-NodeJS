const createBtn = document.querySelector('#create_btn');

createBtn.addEventListener('click', () => {
    const name = document.querySelector('#name').value;

    const payload = {name};

    fetch('http://localhost:8080/category', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(() => alert('Категория успешно создана'))
      .catch(() => alert('Ошибка'));      
})
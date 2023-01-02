const createBtn = document.querySelector('#create_btn');

createBtn.addEventListener('click', () => {
    const name = document.querySelector('#name').value,
          price = document.querySelector('#price').value,
          categoryId = document.querySelector('#categoryId').value;
          

    const payload = {name, price, categoryId};

    fetch('http://localhost:8080/products', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(() => alert('Товар успешно добавлен'))
      .catch(() => alert('Ошибка'));      
})
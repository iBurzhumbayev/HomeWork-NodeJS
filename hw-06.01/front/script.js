const year = document.querySelector('#year'),
      form = document.querySelector('form');

year.addEventListener('input', () => {
    year.value = year.value.replace(/\D/, '').slice(0, 4);;
});

const clearInputs = () => {
    document.querySelectorAll('input').forEach(item => {
        item.value = '';
    });
    document.querySelector('textarea').value = '';
};

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const model = document.querySelector('#model').value,
          year = document.querySelector('#year').value,
          src = document.querySelector('#src_img').value;

    const payload = {model, year, src};

    fetch('http://localhost:8080/page', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(() => alert('Автомобиль добавлен'))
      .catch(() => alert('Ошибка'))
      .finally(() => clearInputs());
});

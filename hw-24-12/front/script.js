const carsBlock = document.querySelector('.cars_block');
const createCarBtn = document.querySelector('#create_car_btn');

const BASE_URL = 'http://localhost:8080';

const loaddata = async () => {
    carsBlock.innerHTML = '';
    carsBlock.innerHTML = '';
    document.querySelector('#new_car_model').value = '';

    const responsceCars = await fetch(BASE_URL + '/cars');
    const cars = await responsceCars.json();

    cars.forEach(element => {
        carsBlock.innerHTML += `
        <p>${element.model}</p>
        `
    });
};

loaddata();

createCarBtn.addEventListener('click', () => {
    const newCarModel = document.querySelector('#new_car_model').value;
    const payload = {
        model: newCarModel
    };

    fetch(BASE_URL + '/cars', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(() => alert('Car added!'))
      .then(() => {
        loaddata()
    })
      .catch(() => alert('Error'));
});




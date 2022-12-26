const usersBlock = document.querySelector('.users_block');
const createUserBtn = document.querySelector('#create_user_btn');
const carsBlock = document.querySelector('.cars_block');
const createCarBtn = document.querySelector('#create_car_btn');
const deleteAllUsersBtn = document.querySelector("#clear_all_users");
const deleteAllCarsBtn = document.querySelector("#clear_all_cars");

const BASE_URL = 'http://localhost:8080';

const loaddata = async () => {
    usersBlock.innerHTML = '';
    carsBlock.innerHTML = '';
    document.querySelector('#new_user_name').value = '';
    document.querySelector('#new_car_model').value = '';

    const responsceUsers = await fetch(BASE_URL + '/users');
    const users = await responsceUsers.json();

    for (const user of users) {
        usersBlock.innerHTML += `
        <div class='wrapper' style='width: 280px; display: flex; justify-content: space-between; margin-top: 20px'>
            <input class='name_input' value='${user.name}'></input>
            <button onclick='deleteUser(${user.id})'>Delete</button>
            <button onclick='editUser(${user.id}, event)'>Edit</button>
        </div>
        `
    }

    const responsceCars = await fetch(BASE_URL + '/cars');
    const cars = await responsceCars.json();

    cars.forEach(element => {
        carsBlock.innerHTML += `
        <div class='wrapper' style='width: 280px; display: flex; justify-content: space-between; margin-top: 20px'>
            <input class='model_input' value='${element.model}'></input>
            <button onclick='deleteCar(${element.id})'>Delete</button>
            <button onclick='editCar(${element.id}, event)'>Edit</button>
        </div>
        `
    });
};

loaddata();


createUserBtn.addEventListener('click', () => {
    const newUserName = document.querySelector('#new_user_name').value;
    const payload = {
        name: newUserName
    };

    fetch(BASE_URL + '/users', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(() => alert('User added!'))
      .then(() => {
        loaddata()
    })
      .catch(() => alert('error'));
});


const deleteUser = id => {
    fetch(BASE_URL + '/users/' + id, {method: 'delete'})
    .then(() => loaddata())
    .catch(() => alert('User delete error'));
}

const deleteAllUsers = () => {
    fetch(BASE_URL + '/users/', {method: 'delete'})
    .then(() => loaddata())
    .catch(() => alert('User delete error'));
}

const editUser = async (id, event)=> {
    const name = event.path[1].querySelector('.name_input').value

    await fetch(BASE_URL + '/users', {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({name, id})
    }).then(() => alert('User edit!'))
      .then(() => {
        loaddata()
    })
      .catch(() => alert('error'));
}


createCarBtn.addEventListener('click', () => {
    const newCarName = document.querySelector('#new_car_model').value;
    const payload = {
        model: newCarName
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
      .catch(() => alert('error'));
});


const deleteCar = id => {
    fetch(BASE_URL + '/cars/' + id, {method: 'delete'})
    .then(() => loaddata())
    .catch(() => alert('User delete error'));
}

const deleteAllCars = () => {
    fetch(BASE_URL + '/cars/', {method: 'delete'})
    .then(() => loaddata())
    .catch(() => alert('Car delete error'));
}

const editCar = async (id, event)=> {
    const model = event.path[1].querySelector('.model_input').value

    await fetch(BASE_URL + '/cars', {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({model, id})
    }).then(() => alert('Car edit!'))
      .then(() => {
        loaddata()
    })
      .catch(() => alert('error'));
}



const usersBlock = document.querySelector('.users_block');
const createUserBtn = document.querySelector('#create_user_btn');

const BASE_URL = 'http://localhost:8080';
// usersBlock.style.cssText = 'display: flex; flex-direction: column'
const loaddata = async () => {
    usersBlock.innerHTML = '';
    usersBlock.innerHTML = '';
    document.querySelector('#new_user_name').value = '';

    const responsceUsers = await fetch(BASE_URL + '/users');
    const users = await responsceUsers.json();

    for (const user of users) {
        usersBlock.innerHTML += `
        <div class='wrapper' style='width: 280px; display: flex; justify-content: space-between; margin-top: 20px'>
            <input class='model_input' value='${user.name}'></input>
            <button onclick='deleteUser(${user.id})'>Delete</button>
            <button onclick='editUser(${user.id}, event)'>Edit</button>
        </div>
        `
    }
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

const editUser = async (id, event)=> {
    const name = event.path[1].querySelector('.model_input').value

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



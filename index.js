const fs = require('fs');

const [, , action] = process.argv;
const usersSTR = fs.readFileSync('./users.json', 'utf-8');
const users = JSON.parse(usersSTR);


const writeUpdatedUsers = (updatedUsers) => {
    fs.writeFileSync('./users.json', JSON.stringify(updatedUsers, null, 2));
}
const addUser = () => {
    const [, , , name, age] = process.argv;
    const user = {
        id: Date.now(),
        name,
        age
    };
    users.push(user);
    writeUpdatedUsers(users);
}

const listUsers = () => {
    console.log(users);
}

const deleteUser = () => {
    const [, , , id] = process.argv;
    const afterDeleteUser = users.filter(user => user.id !== +id);
    writeUpdatedUsers(afterDeleteUser);
}
// const deleteUser = () => {
//     const [ , , , name] = process.argv;
//     const afterDeleteUser = users.filter(user => user.name !== name);
//     writeUpdatedUsers(afterDeleteUser);
// }
switch (action) {
    case 'add':
        addUser();
        break;
    case 'list':
        listUsers();
        break;
    case 'delete':
        deleteUser();
        break;

    default:
        throw new Error('Invalid action');
}

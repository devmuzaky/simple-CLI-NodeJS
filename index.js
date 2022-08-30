const fs = require('fs');
const { Command } = require('commander');
const program = new Command();

program
    .name('users-management')
    .description('CLI to manage users data')
    .version('0.8.0');


const usersSTR = fs.readFileSync('./users.json', 'utf-8');
const users = JSON.parse(usersSTR);

const writeUpdatedUsers = (updatedUsers) => {
    fs.writeFileSync('./users.json', JSON.stringify(updatedUsers, null, 2));
}

const addUser = (options) => {

    const {name, age} = options;

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

const deleteUser = (id) => {
    const afterDeleteUser = users.filter(user => user.id !== +id);
    writeUpdatedUsers(afterDeleteUser);
}


program
    .command('add')
    .description('add new user')
    .option('-n, --name <string>', " User's name ")
    // el AGE berg3 b STRING bdl mn NUMBER
    .option('-a, --age <number>', " User's age ")
    .action(addUser)

program
    .command('list')
    .description('display all users')
    .action(listUsers)

program
    .command('delete')
    .description('delete a user by ID')
    .argument('<string>', 'ID of the user')
    .action(deleteUser)


program.parse();






























/*
// OLD CLI.. before Updated
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
*/

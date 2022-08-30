const fs = require('fs');
const { Command } = require('commander');
const program = new Command();

program
    .name('users-management')
    .description('CLI to manage users data')
    .version('0.8.0');

// const [, , action] = process.argv;
// const usersSTR = fs.readFileSync('./users.json', 'utf-8');
// const users = JSON.parse(usersSTR);
//
// const writeUpdatedUsers = (updatedUsers) => {
//     fs.writeFileSync('./users.json', JSON.stringify(updatedUsers, null, 2));
// }
//
// const addUser = () => {
//     const [, , , name, age] = process.argv;
//     const user = {
//         id: Date.now(),
//         name,
//         age
//     };
//     users.push(user);
//     writeUpdatedUsers(users);
// }
//
// const listUsers = () => {
//     console.log(users);
// }
//
// const deleteUser = () => {
//     const [, , , id] = process.argv;
//     const afterDeleteUser = users.filter(user => user.id !== +id);
//     writeUpdatedUsers(afterDeleteUser);
// }

// switch (action) {
//     case 'add':
//         addUser();
//         break;
//     case 'list':
//         listUsers();
//         break;
//     case 'delete':
//         deleteUser();
//         break;
//     default:
//         throw new Error('Invalid action');
// }

program.parse();

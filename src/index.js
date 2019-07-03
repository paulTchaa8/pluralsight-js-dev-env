import {getUsers} from './api/userApi';

getUsers().then(result => {
    let userBody = "";

    result.forEach( user => {
      userBody += `<tr>
      <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
      <td>${user.id}</td>
      <td>${user.firstName}</td>
      <td>${user.lastName}</td>
      <td>${user.email}</td>
      </tr>`;
    });

    window.document.getElementById('users').innerHTML = userBody;
});



/*
import numeral from 'numeral';

const courseValue = numeral(1000).format('$0,0.00');
// debugger;
console.log(`I would pay ${courseValue} for this awesome course !`);  //eslint-disable-line no-console
*/

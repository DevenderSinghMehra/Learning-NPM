import axios from 'axios'

fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))

axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then(function (response) {
        console.log(response.data);
        console.log(response.status);
        console.log(response.statusText);
        console.log(response.headers);
        console.log(response.config);
    });

// setTimeout(()=>console.log('Devender Singh'),2000)
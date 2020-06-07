import { ajax } from 'rxjs/ajax';

const url = 'https://httpbin.org/delay/1';

// ajax.post(url, {
//     id: 1,
//     nombre: 'Lucas'
// }, {
//     'mi-token': 'AASDASN'
// }).subscribe(console.log);

ajax({
    url: url, // url
    method: 'POST',
    body: {
        id: 1,
        nombre: 'Lucas'
    },
    headers: {
        'mitoken': 29391
    }

}).subscribe(console.log);
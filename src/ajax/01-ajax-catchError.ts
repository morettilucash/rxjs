import { ajax, AjaxError } from 'rxjs/ajax';
import { catchError, pluck } from 'rxjs/operators';
import { of } from 'rxjs';

const url = 'https://api.github.com/users?per_page=5';

const handleError = (err: AjaxError) => {
    console.warn('Error en: ', err.message);
    return of([]); // retornamos un array obs vacio
}

ajax(url).pipe(
    pluck('response'),
    catchError(handleError)
).subscribe(console.log);


// ====================================
// ====================================

// const fetchPromise = fetch(url);

// fetchPromise
//     .then(handleError)
//     .then(res => res.json())
//     .then(data => console.log('data', data))
//     .catch(err => console.log(err))

// const handleError = (resp: Response) => {
//     if (!resp.ok) {
//         throw new Error(resp.statusText)
//     }
//     return resp;
// }

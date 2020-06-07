import { of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';
import { catchError } from 'rxjs/operators';

const url = 'https://httpbin.org/delay/1';

const handleError = (err: AjaxError) => {
    console.warn('Error en: ', err.message);
    return of({
        ok: false,
        usuarios: []
    });
}

// ===========================================================
// const obs1$ = ajax.getJSON(url).pipe(catchError(handleError));
// const obs2$ = ajax(url).pipe(catchError(handleError));

// obs1$.subscribe(data => console.log('data:', data));
// obs2$.subscribe(data => console.log('data:', data));

// ===========================================================
const obs1$ = ajax.getJSON(url);
const obs2$ = ajax(url);

obs1$.pipe(catchError(handleError))
    .subscribe(data => console.log('data:', data));

obs2$.pipe(catchError(handleError))
    .subscribe(data => console.log('data:', data));


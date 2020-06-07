import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('siguiente', value),
    error: error => console.warn('error', error),
    complete: () => console.info('Completado')
}

// const obs$ = Observable.create();

const obs$ = new Observable<string>(subs => {

    subs.next('Hola')
    subs.next('Mundo')
    // Forzar un error
    // const a = undefined;
    // a.nombre = 'Lucas';

    // subs.complete()
    subs.next('Hola')
    subs.next('Mundo')
});



// Utilizando la interfaz observer declarada al inicio
obs$.subscribe(observer)

// Sin utilizar la interfaz
// obs$.subscribe(
//     valor => console.log('next', valor),
//     error => console.warn('error', error),
//     () => console.log('Completado')
//      );

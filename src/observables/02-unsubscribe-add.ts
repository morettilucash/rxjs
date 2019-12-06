import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('next', value),
    error: error => console.warn('error', error),
    complete: () => console.info('Completado')
}


const intervalo$ = new Observable<number>(subscriber => {
    let cont = 0;

    // Crear contador 
    const interval = setInterval(() => {
        cont++;
        subscriber.next(cont);
        console.log(cont);

    }, 1000);

    setTimeout(() => {
        subscriber.complete()
    }, 2500);


    return () => {
        clearInterval(interval);
        console.log('Intervalo Destruido');
    }

})

const subs1 = intervalo$.subscribe(observer);
const subs2 = intervalo$.subscribe(observer);
const subs3 = intervalo$.subscribe(observer);

subs1.add(subs2).add(subs3);

setTimeout(() => {
    subs1.unsubscribe();
    // subs2.unsubscribe();
    // subs3.unsubscribe();
    console.log('Completado Timeout');

}, 3000);

// const subscription = intervalo$.subscribe(num => console.log(num))


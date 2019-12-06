import { Observable, Observer, Subject } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('next', value),
    error: error => console.warn('error', error),
    complete: () => console.info('Completado')
}


const intervalo$ = new Observable<number>(subscriber => {

    const intervalID = setInterval(
        () => subscriber.next(Math.random()), 1000
    );

    return () => {
        clearInterval(intervalID);
        console.log('Intervalo destruido');
        
    };
});

/**
 * SUBJECT: 
 * 1- Casteo multiple
 * 2- Tambien es un Observer
 * 3- Next, error, complete
 */

const subject$ = new Subject();
const subsIntervalo = intervalo$.subscribe( subject$ )


// const subs1 = intervalo$.subscribe(rnd => console.log('subs1',rnd));
// const subs2 = intervalo$.subscribe(rnd => console.log('subs2',rnd));

const subs1 = subject$.subscribe(rnd => console.log('subs1',rnd));
const subs2 = subject$.subscribe(rnd => console.log('subs2',rnd));

setTimeout(() => {
    subject$.next(10);

    subject$.complete();

    subsIntervalo.unsubscribe()
}, 3500);
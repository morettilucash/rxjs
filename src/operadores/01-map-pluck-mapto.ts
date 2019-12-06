import { range, fromEvent } from 'rxjs';
import { map, pluck, mapTo } from 'rxjs/operators'


range(1, 5).pipe(
    // map<number, number>(val => val * 10 )
    map<number, string>(val => (val * 10).toString() )
).subscribe(console.log);


const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');

const keyupCode$ = keyup$.pipe(
    map(event => event.code)
)
const keupPluck$ = keyup$.pipe(
    pluck('target', 'baseURI')
);

const keupMapTo$ = keyup$.pipe(
    mapTo('TeclaPresionada')
);


// keyup$.subscribe( val => { console.log( 'map', val)})
// keyupCode$.subscribe( code => { console.log( 'map', code)})
keupPluck$.subscribe( code => { console.log( 'pluck', code)})
keupMapTo$.subscribe( code => { console.log( 'mapTo', code)})


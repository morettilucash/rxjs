import { range} from 'rxjs'
import { tap, map } from 'rxjs/operators'

const numeros$ = range(1,3);

numeros$.pipe(
    tap(x => {console.log('antes', x)}),
    map( val => val * 10),
    tap({
        next: val => { console.log('despues', val) },
        complete: () => {console.log('Terminó todo');
        }
    })
)
.subscribe( val => console.log('subs', val));
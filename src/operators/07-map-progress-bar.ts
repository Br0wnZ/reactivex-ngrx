import { fromEvent, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

const text = document.createElement('div')
text.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod varius nunc, quis tristique risus viverra nec. Etiam sodales vel justo eu feugiat. Donec iaculis enim turpis, ac blandit elit ultricies vel. Proin vitae est eros. Aliquam auctor, lorem non facilisis hendrerit, turpis dui lobortis erat, nec lobortis leo metus in magna. Pellentesque est neque, feugiat vitae suscipit at, consectetur eu ligula. Mauris hendrerit tortor non massa dictum, nec suscipit lorem aliquam. Aenean non nibh nec nisl sagittis consequat. Donec vitae leo aliquam neque lacinia convallis at ac felis. Vivamus faucibus ligula non nisl viverra sodales. Etiam semper tellus fermentum auctor pretium. Integer non sem eleifend, facilisis velit sed, interdum velit.
<br><br>
Ut condimentum elit aliquet tristique rutrum. Phasellus eu lacus vitae dui tincidunt consectetur in eu libero. Cras iaculis risus elit. In mi metus, maximus ac hendrerit mattis, dignissim ut enim. Suspendisse interdum ligula vitae egestas tincidunt. Sed fermentum, velit a interdum ultrices, est mi tincidunt nunc, id rutrum velit magna in dolor. Suspendisse sapien lorem, hendrerit non faucibus ut, congue nec est. Sed a odio ut justo tempor aliquet at quis mauris. Phasellus in mi eu erat consequat efficitur.
<br><br>
Nulla molestie hendrerit consequat. Curabitur semper pretium nisl et vestibulum. Nunc vel ultrices dui. Etiam quis blandit nibh. Cras sit amet malesuada nibh, non tempor mauris. Ut id odio eu justo ullamcorper consequat at ac tortor. Suspendisse blandit imperdiet justo a faucibus.
<br><br>
Cras nec aliquam elit. Donec ut diam turpis. Pellentesque condimentum sem et ornare fringilla. Sed molestie massa at mollis blandit. Aenean et mi venenatis, rhoncus nisl ut, eleifend augue. Nullam aliquam iaculis tincidunt. Duis feugiat arcu sit amet tincidunt viverra. Aenean ultricies felis risus, vel mollis eros tincidunt quis. Morbi rhoncus diam volutpat nunc tincidunt, eget convallis sapien volutpat.
<br><br>
Nulla ac purus varius, finibus nulla ac, mattis augue. Nam eu erat ullamcorper, rutrum metus quis, ultrices lectus. Quisque vel lectus non velit sodales elementum et a neque. Nam porttitor tellus venenatis, fermentum felis at, vulputate odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent egestas porttitor erat id lacinia. Nullam justo sapien, interdum non condimentum a, pharetra at elit. Curabitur laoreet orci non lobortis pretium. Sed nec justo ac tellus volutpat pharetra.
`

const body: HTMLBodyElement = document.querySelector('body')
body.append(text)

const progessBar: HTMLDivElement = document.createElement('div')
progessBar.setAttribute('class', 'progress-bar')
body.append(progessBar)

// Calculate function
const getScrollPercentaje = ({target}): number => {
  const { scrollTop, scrollHeight, clientHeight } = target.documentElement
  return ( scrollTop / (scrollHeight - clientHeight)) * 100
}

// Streams
const scroll$: Observable<Event> = fromEvent<Event>(document, 'scroll')

const progress$: Observable<any> = scroll$.pipe(
  map( getScrollPercentaje ),
  tap( console.log ) 
)

progress$.subscribe( percentaje => {
  progessBar.style.width = `${ percentaje }%`
})


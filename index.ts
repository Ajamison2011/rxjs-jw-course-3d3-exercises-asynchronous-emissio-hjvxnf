import { Observable } from "rxjs";


const observable$ = new Observable<string>(subscriber => {
  console.log('Observable executed');
  subscriber.next('Alice');
  subscriber.next('Ben');
  setTimeout(() => {
    subscriber.next('Charlie');
  }, 2000);
  setTimeout(() => subscriber.error(), 4000)

  return () => {
    console.log('TearDown')
  }
}); 

console.log('Before subscribe');
observable$.subscribe({
  next: value => console.log(value),
  complete: () => console.log('Completed'),
  error: () => console.log('Error Message')
});
console.log('After subscribe');

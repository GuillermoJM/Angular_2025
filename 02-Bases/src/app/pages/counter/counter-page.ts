import { ChangeDetectionStrategy, Component, signal } from "@angular/core";

@Component({
  templateUrl: './counter-page.html',
  styles:`
    button{
      padding:5px;
      margin:5px 10px;
      width: 75px;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterPageComponent{

  // constructor(){
  //   setInterval(()=>{
  //     // this.counter+=2;
  //     this.counterSignal.update((v)=>v+1);
  //     console.log('thick');
  //   },4000);
  //   setInterval(()=>{
  //     this.counter+=1;
  //     // this.counterSignal.update((v)=>v+1);
  //     console.log('thick');
  //   },2000);
  // }
  counter=10;
  counterSignal=signal(10)

  increaseBy(value:number){
    this.counter+=value;
    // this.counterSignal.set(this.counterSignal()+value)
    this.counterSignal.update((current)=>current+value);
    // console.log('hola')
  }

  resetCounter(){
    this.counter=0;
    this.counterSignal.set(0);
  }
}

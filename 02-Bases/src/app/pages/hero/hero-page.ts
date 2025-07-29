import { Component,signal,ChangeDetectionStrategy, computed } from "@angular/core";
import { UpperCasePipe } from "@angular/common";

@Component({
  templateUrl: './hero-page.html',
  imports:[UpperCasePipe]

})

export class HeroPageComponent{

  name=signal('Ironman');
  age=signal(45);

  HeroDescription = computed(()=>{
    const description = `${this.name()}-${this.age()}`;
    return description
  })

  capitalizedName = computed(() => this.name())

  changeHero(){
    // this.name.update((current)=>"SpiderMan");
    // this.age.update((current)=>22);
    this.name.set("SpiderMan");
    this.age.set(22);
  }
  resetForm(){
    this.name.set("Ironman");
    this.age.set(45);
  }
  changeAge(){
    this.age.update((current)=>60);
  }
  getHeroUpper(){
    return (this.name() +" "+ this.age());
  }
}



export class Person{
    // public name:string;
    // private address:string;

    constructor(
        public firtsName:string,
        public lastName:string,
        private address:string ='Not Address'
    ){}
}
//con Extends en mi punto màs complicado pero mejor
export class HeroExtends extends Person{
    constructor(
        public alterEgo:string,
        public age:number,
        public realName:string,
    ){
        super(realName,'Stark','New York');
    }
}

const ironman2= new HeroExtends('Ironman',45,'Tony');
console.log(ironman2)
//sin extends , nada complicado funcional
export class Hero{
    // public person:Person;
    constructor(
        public alterEgo:string,
        public age:number,
        public realName:string,
        public person:Person,
    ){
        // this.person=new Person(realName)
    }
}
const tony=new Person('Tony','Stark','New York')
const ironman= new Hero('Ironman',45,'Tony',tony);
console.log(ironman);


export interface Passenger{
    name:string;
    children?:string[];
}

const passanger1:Passenger={
    name:'Guillermo',
}
const passanger2:Passenger={
    name:'Melissa',
    children:['Natalia','Elizabeth'],
}
const printChildrenNumber=(passenger:Passenger)=>{

    const hoyManyChildren=passenger.children?.length||0;
    // const hoyManyChildren=passenger.children!.length;

    console.log(passenger.name,hoyManyChildren);

    return hoyManyChildren;
}

printChildrenNumber(passanger1)
printChildrenNumber(passanger2)
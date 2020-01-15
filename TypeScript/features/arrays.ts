const carMakers: string[] = ['ford', 'otyota', 'chevy'];
const dates = [new Date(), new Date()];

const carByMake: string [][] = []
const myCar = carMakers.pop();

carMakers.map(
  (car: string): string =>{
    return car.toUpperCase();
  }
);

const importantDates: (Date | string)[] = [new Date(), '2015-02-03'];
importantDates.push('2030-10-10');
importantDates.push(new Date());



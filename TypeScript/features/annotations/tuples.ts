const dring = {
  color: 'brown',
  carbonated: true,
  sugar: 40
};

type Dring = [string, boolean, number];
const pepsi: Dring = ['brown', true, 40]; 
const sprite: Dring = ['clear', true, 30];
const tea: Dring = ['brown', false, 0];

const carSpecs: [number, number] = [400, 3354];

const carStats = {
  horsepower: 400,
  weight: 3354
}
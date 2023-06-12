// defines a test for the shape class
const {square, circle, triangle, Triangle} = require("./shapes")

// Circle
describe('Circle', () => {
    test('renders correctly', () => {
        const shape = new Circle();
        var color =('blue')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${color}"`);
    });
});

// Square
describe('Square', () => {
    test('renders correctly', () => {
        const shape = new Square();
        var color =('green')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<rect x="50" height="200" width="200" fill="${collor}">`);
    });
});

// Triangle 
describe('Triangle', () => {
    test('renders correctly', () => {
        const shape = new Triangle();
        var color =('orange')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${color}">`);
    });
});
//Imports the Shape and Triangle classes from shapes.js
const { Shape, Triangle } = require('../lib/shapes');

//Test for the Shape class to set the color of the shape correctly
describe('Shape class', () => {
  test('should set shape color correctly', () => {
    const shape = new Shape();
    const shapeColor = 'red';
    shape.setShapeColor(shapeColor);
    expect(shape.shapeColor).toBe(shapeColor);
  });

  //Testing to make sure the text is correctly set
  test('should set text correctly', () => {
    const shape = new Shape();
    const text = 'Hello';
    shape.setText(text);
    expect(shape.text).toBe(text);
  });

  //test to make sure the text color is correct
  test('should set text color correctly', () => {
    const shape = new Shape();
    const textColor = 'blue';
    shape.setTextColor(textColor);
    expect(shape.textColor).toBe(textColor);
  });

  //test to make sure the the shape and color is correct.
  test('should set shape color correctly', () => {
    const shape = new Triangle();
    shape.setShapeColor("blue");
    expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
  });
});

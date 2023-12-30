const { Shape, Triangle } = require('../lib/shapes');


describe('Shape class', () => {
  test('should set shape color correctly', () => {
    const shape = new Shape();
    const shapeColor = 'red';
    shape.setShapeColor(shapeColor);
    expect(shape.shapeColor).toBe(shapeColor);
  });

  test('should set text correctly', () => {
    const shape = new Shape();
    const text = 'Hello';
    shape.setText(text);
    expect(shape.text).toBe(text);
  });

  test('should set text color correctly', () => {
    const shape = new Shape();
    const textColor = 'blue';
    shape.setTextColor(textColor);
    expect(shape.textColor).toBe(textColor);
  });
  test('should set shape color correctly', () => {
    const shape = new Triangle();
    shape.setShapeColor("blue");
    expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
  });
});

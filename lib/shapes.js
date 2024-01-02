//Base class for a generic shape
class Shape {
    //constructor to initalize the properties for the shape
    constructor() {
      this.shapeColor = '';
      this.text = '';
      this.textColor = '';
    }
  
    //Method for updating the shape color
    setShapeColor(shapeColor) {
      this.shapeColor = shapeColor;
    }
  
    //method for updating the text
    setText(text) {
      this.text = text;
    }
  
    //method for updating the text color
    setTextColor(textColor) {
      this.textColor = textColor;
    }
  }
  
  //sub class for circle extending shape
  class Circle extends Shape {
    //method to render the circle as an SVG string
    render() {
      return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`;
    }
  }
  
  class Square extends Shape {
    //method to render the square as an SVG string
    render() {
      return `<rect x="40" y="40" width="120" height="120" fill="${this.shapeColor}" />`;
    }
  }
  
  class Triangle extends Shape {
    //method to render the triangle as an SVG string
    render() {
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`;
    }
  }
  
  //Exporting the different classes for use in other files
  module.exports = { Circle, Square, Triangle, Shape };
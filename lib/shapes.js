class Shape {
    constructor() {
      this.shapeColor = '';
      this.text = '';
      this.textColor = '';
    }
  
    setShapeColor(shapeColor) {
      this.shapeColor = shapeColor;
    }
  
    setText(text) {
      this.text = text;
    }
  
    setTextColor(textColor) {
      this.textColor = textColor;
    }
  }
  
  class Circle extends Shape {
    render() {
      return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`;
    }
  }
  
  class Square extends Shape {
    render() {
      return `<rect x="40" y="40" width="120" height="120" fill="${this.shapeColor}" />`;
    }
  }
  
  class Triangle extends Shape {
    render() {
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`;
    }
  }
  
  module.exports = { Circle, Square, Triangle, Shape };
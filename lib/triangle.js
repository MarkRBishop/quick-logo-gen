const Shape = require('./shapes');

class Triangle extends Shape {
  render() {
    return `<polygon points="150, 40 240, 160 60, 160" fill="${this.shapeColor}" />`;
  }
}

module.exports = Triangle;
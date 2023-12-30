const Shape = require('./shapes');

class Square extends Shape {
  render() {
    return `<rect x="40" y="40" width="120" height="120" fill="${this.shapeColor}" />`;
  }
}

module.exports = Square;
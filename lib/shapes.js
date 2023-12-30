class Shape {
    constructor(){
        this.shapeColor = ''
        this.text = ''
        this.textColor = ''
    }

    setShapeColor(shapeColor) {
        this.color = shapeColor
    }

    setText(text){
        this.text = text
    }

    setTextColor(textColor) {
        this.textColor = textColor
    }

}

module.exports = Shape;
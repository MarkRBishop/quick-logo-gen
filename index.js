const inquirer = require('inquirer')
const fs = require('fs')
const Triangle = require ('./lib/triangle')
const Square = require ('./lib/square')
const Circle = require ('./lib/circle')

const generateLogo = async () => {
    try {
        const userInput = await inquirer.prompt([
            {
                type: 'input',
                name: 'text',
                message: 'Enter the 3 desired characters for the text:',
            },
            {
                type: 'input',
                name: 'textColor',
                message: 'Enter text color (name or hex):',
                validate: validateColor,
            },
            {
                type: 'list',
                name: 'shape',
                message: 'Select a shape:',
                choices: ['Triangle', 'Circle', 'Square'],
            },
            {
                type: 'input',
                name: 'shapeColor',
                message: 'Enter shape color (name or hex):',
                validate: validateColor,
            }

        ]);

        const shape = new getShape(userInput.shape)
        
        shape.setText(userInput.text)
        shape.setTextColor(userInput.setTextColor)
        shape.setShapeColor(userInput.shapeColor)
        
        const svgString = shape.render()

        fs.writeFileSync('logo.svg', svgString)

        console.log('Generated logo.svg')
    }
    catch (error) {
        console.error('Error generating logo:', error.message)
    }
};

const validateColor = (input) => {
    const colorRegex = /^(#[0-9A-Fa-f]{6}|[a-zA-Z]+)$/

    return colorRegex.test(input) ? true: 'Please enter a valid color name or hex code.'
}

const getShape = (shapeName) => {
    switch (shapeName) {
        case 'Triangle':
            return new Triangle()
        case 'Square':
            return new Square()
        case 'Circle':
            return new Circle()
        default:
            throw new Error(`Invalid shape: ${shapeName}`)
    }

}

generateLogo()
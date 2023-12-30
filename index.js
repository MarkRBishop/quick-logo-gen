const inquirer = require('inquirer')
const fs = require('fs')
const { Circle, Square, Triangle} = require('./lib/shapes');

const generateSvg = (shape) => {
    return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shape.render()}
    <text x="150" y="125" font-size="60" fill="${shape.textColor}" text-anchor="middle" alignment-basline="middle">${shape.text}</text>
</svg>`;
};

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

        const shape = getShape(userInput.shape)
        
        shape.setText(userInput.text)
        shape.setTextColor(userInput.textColor)
        shape.setShapeColor(userInput.shapeColor)
        
        const svgString = generateSvg(shape)

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
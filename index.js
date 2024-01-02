//Required modules
const inquirer = require('inquirer')
const fs = require('fs')
const { Circle, Square, Triangle} = require('./lib/shapes');

//function to generate SVG content based on the shape thats selected
const generateSvg = (shape) => {
    let textX
    let textY
    let fontSize

    //Adjusts the text location and size based on the shape to make it look better
    switch (shape.constructor.name) {
        case 'Circle':
          textX = 150;
          textY = 120;
          fontSize = 60;
          break;
        case 'Square':
          textX = 100;
          textY = 110;
          fontSize = 40;
          break;
        case 'Triangle':
          textX = 150;
          textY = 125;
          fontSize = 30;
          break;
        default:
          break;
      }

    //construct SVG content with the selected options
    return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shape.render()}
    <text x="${textX}" y="${textY}" font-size="${fontSize}" text-anchor="middle" fill="${shape.textColor}">${shape.text}</text>
</svg>`;
};

//function to generate the logo based on user input
const generateLogo = async () => {
    try {

        //User input prompts
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

        //Get the shape based on the user input
        const shape = getShape(userInput.shape)
        
        //sets the shape properties
        shape.setText(userInput.text)
        shape.setTextColor(userInput.textColor)
        shape.setShapeColor(userInput.shapeColor)
        
        //Generate SVG based on the shape and write it to 'logo.svg'
        const svgString = generateSvg(shape)

        fs.writeFileSync('logo.svg', svgString)

        console.log('Generated logo.svg')
    }
    catch (error) {
        console.error('Error generating logo:', error.message)
    }
};

//Validates the color input
const validateColor = (input) => {
    const colorRegex = /^(#[0-9A-Fa-f]{6}|[a-zA-Z]+)$/

    return colorRegex.test(input) ? true: 'Please enter a valid color name or hex code.'
}

//Gets the corresponding shape based on the user input
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

//main function call to generate the logo
generateLogo()
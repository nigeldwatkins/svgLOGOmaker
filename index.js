// packages used for my logo maker
const filesystem = require("./node_modules/graceful-fs/graceful-fs");
const inquirer = require("inquirer");
const {Square, Circle, Triangle} = require("./lib/shapes");

class Svg{
    constructor(){
        this.textElement = ''
        this.shapeElement = ''
    }
    render(){
        
        return `<svg version="1.1" xmlns="https://www.w3.org/TR/SVG2/" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`
    }
    setTextElement(text, color){
        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
    }
    setShapeElement(shape){
        this.shapeElement = shape.render()
    }
}


// setting an array of questions that creats the logo

const questions = [
    {
        type: "input",
        name: "text",
        message:"TEXT: Enter up to 3 Characters:",
    },
    {
        type: "input",
        name: "text-color",
        message:"TEXT COLOR: Type in a color, this could be a keyword or hexadecimal number:",
    },
    {
        type: "input",
        name: "shape-color",
        message:"Color of Shape: Type in a color, this could be a keyword or hexadecimal number:",
    },
    {
        type: "list",
        name: "pixel-image",
        message:"Which pixel image would you like to use for your logo?",
        choices: ["Circle", "Square", "Triangle"],
    }
];

// a function that writes data to the file
function writeToFile(fileName, data) {
    console.log("Writing [" + data  + "] to file [" + fileName + "]")
    filesystem.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("Your logo.svg has been generated!");
    });
}

async function init() {
    console.log("Begining init");
    var svgString = "";
    var svg_file = "logo.svg";

    // This will create a prompt for my user to answer questions

    const answers = await inquirer.prompt(questions);

    // this is the text from users
    var user_text = "";
    // for valid entry 1-3 characters is recommended
    if (answers.text.length > 0 && answers.text.length < 4) {
        user_text = answers.text;
    } else {
        // if the count is below one or is at 4 or higher then this will be invalid entry
        console.log("Text field is INVALID! Enter 1-3 characters");
        return;
    }
    console.log("User text: [" + user_text + "]");
    
    user_font_color = answers["text-color"];
    console.log("User font color: [" + user_font_color + "]");

    user_shape_color = answers["shape-color"];
    console.log("User shape color: [" + user_shape_color + "]");

    user_shape_type = answers["pixel-image"];
    console.log("User entered shape = [" + user_shape_type + "]");

    // Shape

    let user_shape;
    if (user_shape_type === "Square" || user_shape_type === "square") {
        user_shape = new Square();
        console.log("User selected a Square");
    }
    else if (user_shape_type === "Circle" || user_shape_type === "circle") {
        user_shape = new Circle();
        console.log("User selected a Circle");
    }
    else if (user_shape_type === "Triangle" || user_shape_type === "Triangle") {
        user_shape = new Triangle();
        console.log("User selected a Triangle");
    } 
    else {
        console.log("Shape invalid");
    }
    user_shape.setColor(user_shape_color);

    // This will create the new logo which will add the shape and text elements 
    var svg = new Svg();
    svg.setTextElement(user_text, user_font_color);
    svg.setShapeElement(user_shape);
    svgString = svg.render();

    // I will then need to log my shape
    console.log("Shape:\n\n" + svgString);

    console.log("LOGO complete!");
    console.log("Writing shape to file. . . Enjoy :)");
    writeToFile(svg_file, svgString);
}
init()
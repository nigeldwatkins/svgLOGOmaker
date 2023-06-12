// packages used for my logo maker
const fs = require("fs");
const inquirer = require("inquirer");
const {square, circle, triangle} = require("./lib/shapes");


// setting an array of questions that creats the logo

const questions = [
    {
        type: "input",
        name: "text",
        messgae:"TEXT: Enter up to 3 Characters:",
    },
    {
        type: "input",
        name: "text-color",
        messgae:"TEXT COLOR: Type in a color, this could be a keyword or hexadecimal number:",
    },
    {
        type: "input",
        name: "shape",
        messgae:"Color of Shape: Type in a color, this could be a keyword or hexadecimal number:",
    },
    {
        type: "list",
        name: "pixel-image",
        messgae:"Which pixel image would you like to use for your logo?",
        choices: ["Circle", "Square", "Triangle"],
    }
];

// a function that writes data to the file
function writeToFile(fileName, data) {
    console.log("Writing [" + data  + "] to file [" + fileName + "]")
    FileSystem.writeFile(fileName, data, function (err) {
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

}
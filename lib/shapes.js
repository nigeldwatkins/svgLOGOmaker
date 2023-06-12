// this defines my shape class, the constructor intializes the color and then sets the color value
class shape{
    constructor(){
        this.color=''
    }
    setColor(color){
        this.color=(color);
    }
}

// defines my circle class it extends Shape and then renders the SVG circle with position.
class Circle extends shape{
    render(){
        return`<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}">`
    }
}

// defines my square class then it extends shape and then render the SVG square with position.

class Square extends shape{
    render(){
        return `<rect x="50" height="200" width="200" fill="${this.color}">`
    }
}

// defines my traingle (polygon) class then it extends shape and then render the SVG with position.

class Triangle extends shape{
    render(){
        return`<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.color}">`
    }
};

module.exports = {Circle, Square, Triangle}
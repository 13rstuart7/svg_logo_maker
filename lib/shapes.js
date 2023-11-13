class Shape{
// Defines a class called Shape which has a constructor intializing 'color' and sets the 'color' value.

    constructor(shapecolor,textcolor,text){
        this.shapecolor=shapecolor
        this.textcolor=textcolor
        this.text=text
    }
    
}
// Defines a Circle class that extends Shape and renders an SVG Circle with position, size, and fill color based on the current instance's properties.
class Circle extends Shape{
    constructor(shapecolor,textcolor,text){
        super(shapecolor,textcolor,text)
    }
    render(){
        return `<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.shapecolor}"/>
        <text x="100" y="125" fill="${this.textcolor}">${this.text}</text>
        </svg>`
    }
}
// Defines a Square class that extends Shape and renders an SVG Square with position, size, and fill color based on the current instance's properties.
class Square extends Shape{
    render(){
        return `<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <rect x="50" y="50" height="200" width="200" fill="${this.shapecolor}"/>
        <text x="10" y="10" fill="${this.textcolor}">${this.text}</text>
        </svg>`
    }
}
// Defines a Triangle(Polygon) class that extends Shape and renders an SVG Triangle(Polygon) with position, size, and fill color based on the current instance's properties.
class Triangle extends Shape{
    render(){
        //return `<polygon height="100%" width="100%" points="25,75 75,25 25,25" fill="${this.color}">'
        return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <polygon height="250" width="200" points="200,10 250,200 150,200" fill="${this.shapecolor}"/>
        <text x="180" y="100" fill="${this.textcolor}">${this.text}</text>
        </svg>`
    }
};

module.exports = {Circle, Square, Triangle}
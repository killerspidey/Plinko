const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 200;
var score = 0;

function setup() {
    createCanvas(1000, 1000);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(width / 2, height, width, 20);
    
    for(var k = 0; k <= width; k += 80) {
        divisions.push(new Divisions(k, height - divisionHeight / 2, 10, divisionHeight));
    }
    
    for(var j = 75; j <= width; j += 50) {
        plinkos.push(new Plinko(j, 75));
    }
    
    for(var j = 50; j <= width - 10; j += 50) {
        plinkos.push(new Plinko(j, 175));
    }
    
    for(var j = 75; j <= width; j += 50) {
        plinkos.push(new Plinko(j, 275));
    }
    
    for(var j = 50; j <= width - 10; j += 50) {
        plinkos.push(new Plinko(j, 375));
    }
}

function draw() {
    background("black");
    textSize(20);
    Engine.update(engine);
    ground.display();
    
    for(var i = 0; i < plinkos.length; i++) {
        plinkos[i].display();
    }
    
    if(frameCount % 60 === 0) {
        particles.push(new Particle(random(width / 2 - 30, width / 2 + 30), 10, 10));
        score++;
    }
    
    for(var j = 0; j < particles.length; j++) {
        particles[j].display();
    }
    
    for(var k = 0; k < divisions.length; k++) {
        divisions[k].display();
    }
}
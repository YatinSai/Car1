var car, wall;
var speed, weight;
var x = 0;
var die = 0;

function setup() {
    createCanvas(1600, 400);
    speed = random(55, 90)
    weight = random(400, 1500)

    car = createSprite(50, 200, 50, 50)
    if (frameCount % 100 === 0) {
        car.velocityX = speed
    }
    wall = createSprite(1500, 200, 60, 200)
    if (car.collide(wall)) {
        car.velocity = 0
        wall.shapeColor = "red"
    }

}

function draw() {
    background("red")
    if (car.x - wall.x < wall.width / 2 + car.width / 2 && wall.x - car.x < wall.width / 2 + car.width / 2 && car.y - wall.y < wall.width / 2 + car.width / 2 && wall.y - car.y < wall.width / 2 + car.width / 2) {
        die = 0.5 * weight * speed * speed
        car.velocityX = 0

    }
    drawSprites();
    textSize(40)
    text(die, 200, 200);
}
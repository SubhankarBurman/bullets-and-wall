var wall, thickness;
var bullet,speed,weight;

function setup(){

    createCanvas(800,600);
    speed = Math.round(random(223,321));
    weight = Math.round(random(30,52));
    thickness = Math.round(random(22,83));

    wall = createSprite(750,300,thickness,height/2);


    bullet = createSprite(100,300,40,20);
    bullet.velocityX = random(30,40);
}

function draw(){

    background("black");


    if(hasCollided(bullet,wall)){


        bullet.velocityX = 0;
        var damage = Math.round(0.5 * weight * speed * speed / (thickness*thickness*thickness));
        var colour;

        if(damage>=10){

            bullet.shapeColor = color(255,0,0);
            colour = "red";
        }

        if(damage<10){

            bullet.shapeColor = color(0,255,0);
            colour = "green";
        }

        textSize(20);
        fill("white");
        text("Bullet Weight = "+weight,300,300);
        text("Bullet Speed = "+speed,300,330);
        text("Wall Thickness = "+thickness,300,360);
        text("Damage = "+damage,300,390);
        text("Wall Color = "+colour,300,420);



    }

    drawSprites();

}
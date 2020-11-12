
class Flake{
    constructor(x,y,z, world) {
        this.x = x;
        this.y= y;
        this.z = z;
        this.xOffset = random(1000);
        this.zOffset = random(2000, 3000);
        this.myFlake = new Sphere({
            x:random(-25, 25), y:10, z:random(-25, 25),
            radius:0.09,
            red:100, green:255, blue:160
        });

        world.add(this.myFlake);
    }

	
	
	

	
	move() {
		let yMovement = -0.03;
		let xMovement = map(noise(this.xOffset), 0, 1, -0.05, 0.05);
		let zMovement = map(noise(this.zOffset), 0, 1, -0.05, 0.05);
		
		this.xOffset += 0.01;
		this.yOffset += 0.01;
		
		this.myFlake.nudge(xMovement, yMovement, zMovement);
		
		let flakeY = this.myFlake.getY();
		
		if (flakeY < -1) {
			world.remove(this.myFlake);
			return "gone";
		}
		
		else {
			return "ok";
		}
	}
}

const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = innerHeight;

class Player {
	constructor(x,y,img){
		this.x = x;
		this.y = y;
		this.img = img
		
		
	}
	//function to draw plane onto canvas
	draw(){
		c.drawImage(img,100,100);
	}
}

var img = new Image();
img.onload = function() {
   c.drawImage(img, 0, 0);
};
img.src = 'https://pbs.twimg.com/profile_images/1479479287728201729/oLv8NOtY_400x400.jpg';


	
	


	
	



console.log(img)
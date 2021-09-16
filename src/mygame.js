import Phaser from 'phaser';
class MyGame extends Phaser.Scene
{
 constructor ()
    {
        super();
    } 
    create(){
        
        let x=50;
        let y=50;
        let count=8  
         for(let m= 0; m<count;m++){
             x=50
             y+=60
             for(let n=0;n<count;n++){
                x+=70
                var graphics = this.add.graphics({ fillStyle: { color: 0xff0000 ,} });
                var circle = new Phaser.Geom.Circle(x, y, 20);
                graphics.fillCircleShape(circle);
                
                let text  = this.add.text(x,y,Phaser.Math.Between(-9,9),{color: 0x00ff00,fontSize: "20px" })
                
             }
        }
        }
    }  
export default MyGame;
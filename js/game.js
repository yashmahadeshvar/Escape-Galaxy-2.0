      class Game{
        constructor(){

        }
        // gameState = 0
      start(){

        bg = createSprite(200,300,400,800);
        bg.addImage(backgroundIMG);
        bg.scale = 2.5
        bg.velocityY = 2;
        bg.visible = true;

        alien = createSprite(200,50,10,10);
        alien.addImage(alienIMG);
        alien.scale = 0.15;
        alien.velocityY  = 4;
      
        ufo = createSprite(300,50,10,10);
        ufo.addImage(ufoIMG);
        ufo.scale = 0.3;
        ufo.velocityY  = 4;


       
         
          startButton = createSprite(200,400,50,10);
          startButton.addImage(startButtonIMG);
          startButton.scale = 0.3;

          
          fill("gold");
          textSize(30);
          text("-Escape Galaxy-",90,50);
          textSize(15);
          text("Level 1 : Instructions \n1. Use < and > To move\n2. Destroy aliens to proceed further",100,250);

          
          

          if (bg.y > 300){
            bg.y = 625;
          }

          //bg2.visible = false;
         // ufo.visible = false;
          //alien.visible = false;
          //astroJet.visible = true;
         
      }

      setLevel1(){

        //  bg2 = createSprite(200,300,400,625);
        //  bg2.addImage(backgroundIMG);
        //  bg2.scale = 2.5
        //  bg2.visible = false;
        //  bg2.velocityY = 2;

        astroJet = createSprite(200,550,10,10);
        astroJet.addImage(astroJetIMG);
        astroJet.scale = 0.5;

        
    
        fireBall = createSprite(300,500,10,10);
        fireBall.addImage(fireBallIMG);
        fireBall.scale = 0.1;

        fireBall.visible = false;

        fill("gold");
        textSize(10);
        text("score :"+score,350,30);

        

        //ufo.visible = true;
        //alien.visible = true;
      
       
      }
      // gameState = 1
       play(){

       }
      }
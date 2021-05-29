        class Form{
            constructor(){
                
                this.button = createButton('Info');
		        this.button.size(50);
		        this.button.style('background-color','yellow');

               
        
            }
            
            hide(){
                
               // this.button.hide();

            }

            display(){
               
                form = new Form();

                this.button.position(displayWidth/2 , displayHeight/2 );
                this.button.mousePressed(()=>{
                    this.button.hide();
                    textSize(15);
                    text("Level 1 : Instructions \n1. Use < and > To move\n2. Destroy aliens to proceed further",100,250);


                });

            }
        }
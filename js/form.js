class Form{
        constructor(){
            this.button = createButton("START");
        }
        display(){
            

            this.button.position(displayWidth/2-10,displayHeight/2+15);

            this.button.mousePressed(()=>{
                this.button.hide();
                gameState = "play";
            });
        }
};
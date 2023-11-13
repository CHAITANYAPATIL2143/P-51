class Game 
{
  constructor() {}
  
  getState(){
    var gameStateRef = database.ref("gameState")
    gameStateRef.on("value", function(data){
        gameState = data.val()
    })
  }
  
  update(state){
    database.ref("/").update({
        gameState: state
    })
  }

  start()
  {
    player = new Player()
    playerCount = player.getCount()

    form = new Form()
    form.display()
     
    //bike1
    bike1 = createSprite(width / 2 - 50, height - 100)
    bike1.addImage("bike1", bike1_img)
    bike1.scale = 0.07
    
    //bike2
    bike2 = createSprite(width / 2 + 100, height - 100)
    bike2.addImage("bike2", bike2_img)
    bike2.scale = 0.07

    bikes = [bike1, bike2]
  }
  
  handleElements() {
    form.hide();
    form.titleImg.position(40, 50);
    form.titleImg.class("gameTitleAfterEffect");
  }
  
  play() {
    this.handleElements();

      drawSprites();
      
    }
}
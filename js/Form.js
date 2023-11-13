class Form 
{
  constructor() 
  {
    this.input=createInput("").attribute("placeholder","Enter Yor Name")
    this.playbutton=createButton("play")
    this.titleImage = createImg("assets/title.png")
    this.greeting = createElement("h1")
  }

  setElementPosition()
  {
    this.titleImage.position(100,10)
    this.input.position(width/2-100,height/2-80)
    this.playbutton.position(width/2-100,height/2-20)
    this.greeting.position(width/2-300,height/2-20)
  }

  setElementsStyle(){
    this.titleImage.class("gametitle")

  }

  hide()
  {
    this.greeting.hide()
    this.input.hide()
    this.playbutton.hide()
  }

  handleMousePressed()
  {
    this.playbutton.mousePressed(()=>{
      this.input.hide()
      this.playbutton.hide()
      var message = `Hello ${this.input.value()}
                     Wait For Another Player To Join.......`
      this.greeting.html(message)
      playerCount+=1
      player.name=this.input.value()
      player.index = playerCount
      player.updateCount(playerCount)

    })
  }
  display()
  {
    this.setElementPosition()
    this.setElementsStyle()
    this.handleMousePressed()
  }

}
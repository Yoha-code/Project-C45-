class Form {
    constructor() {
        this.input = createInput("").attribute("placeholder", "Tell us what your issue is...");
        //this.greeting = createElement("h2");
        this.title = createImg("speed health.png");
        this.button1 = createButton("Submit");
    }

    setElementsPosition() {
       // this.greeting.html("Welcome!");
        this.input.position(width/2 - 150, height/2 - 200);

        this.button1.position(width/2 - 100, height/2 - 150)

        this.title.position(width/2 - 200, height/2 - 450);
        this.title.width = 50;
        this.title.height = 50;
        this.title.size(300, 150)

       // this.greeting.position(50, 50);
      }

      setElementsStyle() {
        this.input.class("customInput");
        //this.greeting.class("greeting");
        this.button1.class("customButton");
      }

      hide(){
        this.input.hide();
        this.button1.hide();
      }

      handleMousePressed(){
        this.button1.mousePressed(() => {
          this.input.hide();
          this.button1.hide();
        })
      }

      display() {
        this.setElementsPosition();
        this.setElementsStyle();
    }
}
class Game {

      constructor() {




      }


      getState() {
      var gameref = database.ref("gameState");
      //listener 
      gameref.on("value",function (data){
          gameState=data.val();
      });

      }

    update(state) {
      database.ref('/').update({
        gameState : state
      })


    }

  async start () {

    


    if(gameState===0){

    player= new Player();
    var playerCountRef= await database.ref('playerCount').once("value");
    if(playerCountRef.exists()){
        plCount=playerCountRef.val();
        player.getCount();
    }
    form = new Form();
    form.display();
    }

    car1 = createSprite(displayWidth/4 - 400, 100);
    car2 = createSprite(displayWidth/4 * 2 - 400, 100);
    car3 = createSprite(displayWidth/4 * 3 - 400, 100);
    car4 = createSprite(displayWidth - 400, 100);
    cars=[car1,car2,car3,car4];

  }

  play () {

    form.hide();
    
    Player.getpinfo();

    if (allp != undefined) {
      //index of the array
      var index=0;
      //x and y position of the cars
      var x=0;
      var y;

      for (var i in allp) {
       //add 1 to index for every loop
        index =index+1;
        
        //used data from database to display car at resp y position
        //position the cars a little away from each other in x direction
        x = x + 200;
        y = displayHeight - allp[i].distance;
        cars[index-1].x=x;
        cars[index-1].y=y;




        if(index ===  player.index)
        {
          cars[index-1].shapeColor= "red";
          camera.position.x=displayWidth/2;
          camera.position.y=cars[index-1].y;
       
        }
     
     


      }
}

    if (keyIsDown(UP_ARROW) && player.index!== null) {

        player.distance += 20;
        player.update();


    }


    }



}








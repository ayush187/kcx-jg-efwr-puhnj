class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    question.hide();
    //write code to change the background color here
    textSize(30); 
    text("Quiz Start", 220, 50) 
    Contestant.getPlayerInfo(); 
    if(allContestant !== undefined){ 
        var display_position = 130; 
        for(var cont in allContestant){ 
            if (cont === "contestant" + player.index) 
            fill("red") 
            else fill("black"); 
            display_position+=20; 
            textSize(15); 
            text(allContestant[cont].name + ": " + allContestant[cont].distance, 120,display_position)
         } } 
         if(keyIsDown(UP_ARROW) && contestant.index !== null){ 
             contestant.distance +=50 
             contestant.update(); } 
    //write code to show a heading for showing the result of Quiz

    //call getContestantInfo( ) here


    //write condition to check if contestantInfor is not undefined

    //write code to add a note here

    //write code to highlight contest who answered correctly
    
  }

}

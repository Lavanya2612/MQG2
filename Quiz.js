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
    question.question.hide() 
    question.option1.hide()
     question.option2.hide() 
     question.option3.hide()
     question.option4.hide()
    //write code to change the background color here
background('yellow')
textSize(25) 
strokeWeight(10) 
fill("black")
 text("Result of the Quiz", 320, 50)
  text("--------------------------", 310, 60) 

    //call getContestantInfo( ) here
    Contestant.getPlayerInfo()

    //write condition to check if contestantInfor is not undefined
if(allContestants!== undefined) {
  var display_pos= 130
fill('blue')
textSize(20)
text('*NOTE: Contestant who aswered correct are highlighted with green color!', 130,230)
}
    
for(var plr in allContestants){
  var CorrectAns= '2'
  if(CorrectAns===allContestants[plr].answer){
    fill('green')
  }
  
  else{fill('red')}
    
  }
    
    
    display_pos+=20
    textSize(15)
    text(allContestants[plr].name + ':' +allContestants[plr].answer, 120,display_pos )
    //write code to add a note here

    //write code to highlight contest who answered correctly
    
  }

  }


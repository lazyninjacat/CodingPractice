// CODE CHALLENGE

/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/
/*
  --- Expert level ---
  
  8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)
  
  9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.
  
  10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).
  
  11. Display the score in the console. Use yet another method for this.
  */

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SOLUTION ATTEMPT #1
//
//
//
//
//
//
//
//
//
//
//
//
(function() {
  function Question(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
  }

  var q1 = new Question(
    "What has it got in its pockets?",
    ["a: string", "b: nothing", "c: the precious"],
    "c"
  );

  var q2 = new Question(
    "What time is it Mr.Wolf?",
    ["a: no idea", "b: LUNCH TIME!!!"],
    "b"
  );

  var q3 = new Question(
    "What is the square root of the hypotenuse if the third brother has green eyes?",
    ["a: PIZZA!!", "b: 4.2 kerzics"],
    "a"
  );

  var questions = [q1, q2, q3];

  var n = Math.floor(Math.random() * questions.length);

  var score = 0;

  NextQuestion();

  // Prompt the user for the answer, and allow them to exit
  function PromptUserAnswer() {
    var submittedAnswer = prompt(
      "Answer?.......... pst. type 'exit' to, y'know, cut and run.",
      "enter answer here"
    );

    if (submittedAnswer === questions[n].correct) {
      console.log("CORRECT!!! THE ANSWER IS: " + questions[n].correct);
      score++;
      console.log("Score increased to " + score + "!!!!!!");
      NextQuestion();
    } else if (submittedAnswer === "exit" || submittedAnswer === "Exit") {
      console.log(
        "Okay, we're done here. You got a total of " + score + ". Big whoop."
      );
    } else {
      console.log("Nope! no points for you");
      console.log("Score stays at " + score + ", boo-urns.");
      NextQuestion();
    }
  }

  // Display the current score in the console
  function ShowScore() {
    console.log(score);
  }

  // Display the next Question
  function NextQuestion() {
    n = Math.floor(Math.random() * questions.length);
    console.log(questions[n].question);
    for (i = 0; i < questions.length; i++) {
      console.log(questions[n].answers[i]);
    }

    PromptUserAnswer();
  }
})();

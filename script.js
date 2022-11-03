var q1 = 0;
var q2 = 0;
var q3 = 0;
var q4 = 0;
var q5 = 0;
var q6 = 0;
var q7 = 0;
var q8 = 0;
var q9 = 0;
var q10 = 0;
var time=60;
var current = 1;
var attempted = 0;

//timer update
setInterval(() => date(),1000);
//end test
function end(){
  document.body.innerHTML='<center><h1 id="submitted1">QUIZ SUBMITTED</h1><h1 id="submitted2">'+attempted+' questions attempted out of 10'+'</h1></center>';
}
//timer
function datechange(){
  time--;
  document.getElementById("secs").innerHTML=time;
}
//check if timer ended
function date() {
  if(time>0){
    setTimeout(datechange(),1000); 
    console.log(attempted);
  }
  else{
    document.body.innerHTML='<center><h1 id="submitted1">QUIZ SUBMITTED</h1><h1 id="submitted2">'+attempted+' questions attempted out of 10'+'</h1></center>';
    
  }
}

const header = document.querySelector(".header");
const button = header.querySelectorAll("button");
//loading question with their respective indexes
function questionss(data) {
  ecques(data);
  button.forEach((ele) => {
    ele.style.background = "white";
    ele.style.color = "black";
  });
  switch (data) {
    case 1:
      current = 1;
      if (q1 == 0) {
        document.getElementById("k" + data).style.backgroundColor = "black";
        document.getElementById("k" + data).style.color = "white";
        document.getElementById("change1").innerHTML =
          '<div class="qno"><h1>QUESTION ' +
          current +
          '</h1></div><p class="task">WHAT IS MY STRENGTH???</p>';
        document.getElementById("change2").innerHTML =
          '<input type="radio" id="o1" name="option"><Label class="o11"> POSITIVE THINKING</Label><br><br><input type="radio" id="o2" name="option"><Label class="o22"> CONFIDENCE</Label><br><br><input type="radio" id="o3" name="option"><Label class="o33"> DISCPLINE</Label><br><br><input type="radio" id="o4" name="option"><Label class="o44"> OBSERVATION SKILLS</Label><br><br><button id="submit" onclick="questions_submit(1)">SUBMIT</button>';
        console.log("question 1");
      } else {
        document.getElementById("k" + data).style.backgroundColor = "black";
        document.getElementById("k" + data).style.color = "white";
        document.getElementById("change1").innerHTML =
          '<div class="qno"><h1>QUESTION ' +
          current +
          '</h1></div><p class="task"></p>';
        document.getElementById("change2").innerHTML =
          "<h1><b>SUBMITTED</b></h1>";
      }
      break;
    case 2:
      
      current = 2;
      if (q2 == 0) {
        document.getElementById("k" + data).style.backgroundColor = "black";
        document.getElementById("k" + data).style.color = "white";
        document.getElementById("change1").innerHTML =
          '<div class="qno"><h1>QUESTION ' +
          current +
          '</h1></div><p class="task">HOW MANY SIBLINGS DO I HAVE???</p>';
        document.getElementById("change2").innerHTML =
          '<input type="radio" id="o1" name="option"><Label class="o11"> 0</Label><br><br><input type="radio" id="o2" name="option"><Label class="o22"> 1</Label><br><br><input type="radio" id="o3" name="option"><Label class="o33"> 2</Label><br><br><input type="radio" id="o4" name="option"><Label class="o44"> 3</Label><br><br><button id="submit" onclick="questions_submit(2)">SUBMIT</button>';
        console.log("question 1");
      } else {
        document.getElementById("k" + data).style.backgroundColor = "black";
        document.getElementById("k" + data).style.color = "white";
        document.getElementById("change1").innerHTML =
          '<div class="qno"><h1>QUESTION ' +
          current +
          '</h1></div><p class="task"></p>';
        document.getElementById("change2").innerHTML =
          "<h1><b>SUBMITTED</b></h1>";
      }
      console.log("question 2");
      break;
    case 3:
      current = 3;
      if (q3 == 0) {
        document.getElementById("k" + data).style.backgroundColor = "black";
        document.getElementById("k" + data).style.color = "white";
        document.getElementById("change1").innerHTML =
          '<div class="qno"><h1>QUESTION ' +
          current +
          '</h1></div><p class="task">MY AGE?</p>';
        document.getElementById("change2").innerHTML =
          '<input type="radio" id="o1" name="option"><Label class="o11">21</Label><br><br><input type="radio" id="o2" name="option"><Label class="o22">18</Label><br><br><input type="radio" id="o3" name="option"><Label class="o33">19</Label><br><br><input type="radio" id="o4" name="option"><Label class="o44">20</Label><br><br><button id="submit" onclick="questions_submit(3)">SUBMIT</button>';
        console.log("question 1");
      } else {
        document.getElementById("k" + data).style.backgroundColor = "black";
        document.getElementById("k" + data).style.color = "white";
        document.getElementById("change1").innerHTML =
          '<div class="qno"><h1>QUESTION ' +
          current +
          '</h1></div><p class="task"></p>';
        document.getElementById("change2").innerHTML =
          "<h1><b>SUBMITTED</b></h1>";
      }
      console.log("question 3");
      break;
    case 4:
      current = 4;
      if (q4 == 0) {
        document.getElementById("k" + data).style.backgroundColor = "black";
        document.getElementById("k" + data).style.color = "white";
        document.getElementById("change1").innerHTML =
          '<div class="qno"><h1>QUESTION ' +
          current +
          '</h1></div><p class="task">WHAT CAN I PLAY??</p>';
        document.getElementById("change2").innerHTML =
          '<input type="radio" id="o1" name="option"><Label class="o11">GUITAR</Label><br><br><input type="radio" id="o2" name="option"><Label class="o22">PIANO</Label><br><br><input type="radio" id="o3" name="option"><Label class="o33">DRUMS</Label><br><br><input type="radio" id="o4" name="option"><Label class="o44">FLUTE</Label><br><br><button id="submit" onclick="questions_submit(4)">SUBMIT</button>';
        console.log("question 1");
      } else {
        document.getElementById("k" + data).style.backgroundColor = "black";
        document.getElementById("k" + data).style.color = "white";
        document.getElementById("change1").innerHTML =
          '<div class="qno"><h1>QUESTION ' +
          current +
          '</h1></div><p class="task"></p>';
        document.getElementById("change2").innerHTML =
          "<h1><b>SUBMITTED</b></h1>";
      }
      console.log("question 4");
      break;
    case 5:
      current = 5;
      if (q5 == 0) {
        
        document.getElementById("k" + data).style.backgroundColor = "black";
        document.getElementById("k" + data).style.color = "white";
        document.getElementById("change1").innerHTML =
          '<div class="qno"><h1>QUESTION ' +
          current +
          '</div><p class="task">WHY DO I COME TO COLLEGE?</p>';
        document.getElementById("change2").innerHTML =
          '<input type="radio" id="o1" name="option"><Label class="o11">ATTENDANCE</Label><br><br><input type="radio" id="o2" name="option"><Label class="o22">SOCILAZING</Label><br><br><input type="radio" id="o3" name="option"><Label class="o33">STUDYING</Label><br><br><input type="radio" id="o4" name="option"><Label class="o44">ALL OF THE ABOVE</Label><br><br><button id="submit" onclick="questions_submit(5)">SUBMIT</button>';
        console.log("question 1");
      } else {
        document.getElementById("k" + data).style.backgroundColor = "black";
        document.getElementById("k" + data).style.color = "white";
        document.getElementById("change1").innerHTML =
          '<div class="qno"><h1>QUESTION ' +
          current +
          '</h1></div><p class="task"></p>';
        document.getElementById("change2").innerHTML =
          "<h1><b>SUBMITTED</b></h1>";
      }
      console.log("question 5");
      break;
    case 6:
      current = 6;
      if (q6 == 0) {
        document.getElementById("k" + data).style.backgroundColor = "black";
        document.getElementById("k" + data).style.color = "white";
        document.getElementById("change1").innerHTML =
          '<div class="qno"><h1>QUESTION ' +
          current +
          '</h1></div><p class="task">WHEN IS MY BIRTHDAY??</p>';
        document.getElementById("change2").innerHTML =
          '<input type="radio" id="o1" name="option"><Label class="o11">7TH FEB</Label><br><br><input type="radio" id="o2" name="option"><Label class="o22">7TH DEC</Label><br><br><input type="radio" id="o3" name="option"><Label class="o33">7TH NOV</Label><br><br><input type="radio" id="o4" name="option"><Label class="o44">7TH JAN</Label><br><br><button id="submit" onclick="questions_submit(6)">SUBMIT</button>';
        console.log("question 1");
      } else {
        document.getElementById("k" + data).style.backgroundColor = "black";
        document.getElementById("k" + data).style.color = "white";
        document.getElementById("change1").innerHTML =
          '<div class="qno"><h1>QUESTION ' +
          current +
          '</h1></div><p class="task"></p>';
        document.getElementById("change2").innerHTML =
          "<h1><b>SUBMITTED</b></h1>";
      }
      console.log("question 6");
      break;
    case 7:
      current = 7;
      if (q7 == 0) {
        document.getElementById("k" + data).style.backgroundColor = "black";
        document.getElementById("k" + data).style.color = "white";
        document.getElementById("change1").innerHTML =
          '<div class="qno"><h1>QUESTION ' +
          current +
          '</h1></div><p class="task">WHAT IS MY FAV COLOR</p>';
        document.getElementById("change2").innerHTML =
          '<input type="radio" id="o1" name="option"><Label class="o11"> BLUE</Label><br><br><input type="radio" id="o2" name="option"><Label class="o22"> RED</Label><br><br><input type="radio" id="o3" name="option"><Label class="o33"> GREEN</Label><br><br><input type="radio" id="o4" name="option"><Label class="o44"> PINK</Label><br><br><button id="submit" onclick="questions_submit(7)">SUBMIT</button>';
        console.log("question 1");
      } else {
        document.getElementById("k" + data).style.backgroundColor = "black";
        document.getElementById("k" + data).style.color = "white";
        document.getElementById("change1").innerHTML =
          '<div class="qno"><h1>QUESTION ' +
          current +
          '</h1></div><p class="task"></p>';
        document.getElementById("change2").innerHTML =
          "<h1><b>SUBMITTED</b></h1>";
      }
      console.log("question 7");
      break;
    case 8:
      current = 8;
      if (q8 == 0) {
        document.getElementById("k" + data).style.backgroundColor = "black";
        document.getElementById("k" + data).style.color = "white";
        document.getElementById("change1").innerHTML =
          '<div class="qno"><h1>QUESTION ' +
          current +
          '</h1></div><p class="task">MY FAV SPORT</p>';
        document.getElementById("change2").innerHTML =
          '<input type="radio" id="o1" name="option"><Label class="o11"> FOOTBALL</Label><br><br><input type="radio" id="o2" name="option"><Label class="o22"> BADMINTON</Label><br><br><input type="radio" id="o3" name="option"><Label class="o33"> CRICKET</Label><br><br><input type="radio" id="o4" name="option"><Label class="o44"> VOLLEY BALL</Label><br><br><button id="submit" onclick="questions_submit(8)">SUBMIT</button>';
        console.log("question 1");
      } else {
        document.getElementById("k" + data).style.backgroundColor = "black";
        document.getElementById("k" + data).style.color = "white";
        document.getElementById("change1").innerHTML =
          '<div class="qno"><h1>QUESTION ' +
          current +
          '</h1></div><p class="task"></p>';
        document.getElementById("change2").innerHTML =
          "<h1><b>SUBMITTED</b></h1>";
      }
      console.log("question 8");
      break;
    case 9:
      current = 9;
      if (q9 == 0) {
        document.getElementById("k" + data).style.backgroundColor = "black";
        document.getElementById("k" + data).style.color = "white";
        document.getElementById("change1").innerHTML =
          '<div class="qno"><h1>QUESTION ' +
          current +
          '</h1></div><p class="task">WHERE DO I LIVE???</p>';
        document.getElementById("change2").innerHTML =
          '<input type="radio" id="o1" name="option"><Label class="o11"> ZIRAKPUR</Label><br><br><input type="radio" id="o2" name="option"><Label class="o22"> PANCHKULA</Label><br><br><input type="radio" id="o3" name="option"><Label class="o33"> CHANDIGARH</Label><br><br><input type="radio" id="o4" name="option"><Label class="o44"> AMBALA</Label><br><br><button id="submit" onclick="questions_submit(9)">SUBMIT</button>';
        console.log("question 1");
      } else {
        document.getElementById("k" + data).style.backgroundColor = "black";
        document.getElementById("k" + data).style.color = "white";
        document.getElementById("change1").innerHTML =
          '<div class="qno"><h1>QUESTION ' +
          current +
          '</h1></div><p class="task"></p>';
        document.getElementById("change2").innerHTML =
          "<h1><b>SUBMITTED</b></h1>";
      }
      console.log("question 9");
      break;
    case 10:
      current = 10;
      if (q10 == 0) {
        document.getElementById("k" + data).style.backgroundColor = "black";
        document.getElementById("k" + data).style.color = "white";
        document.getElementById("change1").innerHTML =
          '<div class="qno"><h1>QUESTION ' +
          current +
          '</h1></div><p class="task">WHATS MY PARENTS OCCUPATION</p>';
        document.getElementById("change2").innerHTML =
          '<input type="radio" id="o1" name="option"><Label class="o11"> BUSINESS MAN</Label><br><br><input type="radio" id="o2" name="option"><Label class="o22"> TEACHER</Label><br><br><input type="radio" id="o3" name="option"><Label class="o33"> GOV SERVICE</Label><br><br><input type="radio" id="o4" name="option"><Label class="o44"> DOC</Label><br><br><button id="submit" onclick="questions_submit(10)">SUBMIT</button>';
        console.log("question 1");
      } else {
        document.getElementById("k" + data).style.backgroundColor = "black";
        document.getElementById("k" + data).style.color = "white";
        document.getElementById("change1").innerHTML =
          '<div class="qno"><h1>QUESTION ' +
          current +
          '</h1></div><p class="task"></p>';
        document.getElementById("change2").innerHTML =
          "<h1><b>SUBMITTED</b></h1>";
      }
      console.log("question 10");
      break;
  }
}
//check if answers are submitted or not
function questions_submit(data) {
  if (q1 == 0 && data == 1) {
    q1++;
    questionss(data);
    attempted++;
  }
  if (q2 == 0 && data == 2) {
    q2++;
    questionss(data);
    attempted++;
  }
  if (q3 == 0 && data == 3) {
    q3++;
    questionss(data);
    attempted++;
  }
  if (q4 == 0 && data == 4) {
    q4++;
    questionss(data);
    attempted++;
  }
  if (q5 == 0 && data == 5) {
    q5++;
    questionss(data);
    attempted++;
  }
  if (q6 == 0 && data == 6) {
    q6++;
    questionss(data);
    attempted++;
  }
  if (q7 == 0 && data == 7) {
    q7++;
    questionss(data);
    attempted++;
  }
  if (q8 == 0 && data == 8) {
    q8++;
    questionss(data);
    attempted++;
  }
  if (q9 == 0 && data == 9) {
    q9++;
    questionss(data);
    attempted++;
  }
  if (q10 == 0 && data == 10) {
    q10++;
    questionss(data);
    attempted++;
  }
}
//previous
function prev() {
  if (current > 1) {
    current--;
  }
  questionss(current);
}
//next
function next() {
  if (current < 10) {
    current++;
  }
  questionss(current);
}
function ecques(data){
  document.getElementById("cques").innerHTML=data;
}

setInterval(radiocheck,500);

function radiocheck() { 
  if(document.getElementById('o1').checked) {
      document.getElementById('submit').style.display='block';
  }
  else if(document.getElementById('o2').checked) {
    document.getElementById('submit').style.display='block';
  }
  else if(document.getElementById('o3').checked) {
    document.getElementById('submit').style.display='block';
  }
  else if(document.getElementById('o4').checked) {
    document.getElementById('submit').style.display='block';
  }
  else {
    document.getElementById('submit').style.display='none';
  }
}

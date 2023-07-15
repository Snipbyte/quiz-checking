console.log("fffff");

const questions = [
  {
    Question: "what is your age ?",
    option1: "21",
    option2: "22",
    option3: "23",
    option4: "24",
  },
  {
    Question: "when",
    option1: "d",
    option2: "e",
    option3: "f",
    option4: "24",
  },
  {
    Question: "kashif",
    option1: "ff",
    option2: "rr",
    option3: "f",
    option4: "24",
  },
];
const correct_answers = ["22", "f", "rr"];
console.log(document.getElementById("quiz_form"));
let totalMarks = 0;
questions.map(({ Question, option1, option2, option3, option4 }) => {
  let r = (Math.random() + 1).toString(36).substring(7);

  const question = document.createElement("p");
  question.innerText = Question;
  document.getElementById("quiz_form").appendChild(question);
  document.write("<br>");
// for styling 
  question.style.fontSize = "18px";
  question.style.fontWeight = "bold";
  question.style.backgroundColor = "#082f49";
  question.style.color = "white";
  question.style.padding = "10px";
  question.style.borderRadius = "15px";
  question.style.marginBottom = "10px";
// for styling 
  const opt1_label = document.createElement("label");
  opt1_label.innerHTML = option1;
  const opt1 = document.createElement("input");
  opt1.setAttribute("type", "radio");
  opt1.setAttribute("value", "option1");
  opt1.setAttribute("name", r);

  opt1.value = option1;
  document.getElementById("quiz_form").append(opt1, opt1_label);
  document.write("<br />");

  const opt2_label = document.createElement("label");
  opt2_label.innerHTML = option2;
  const opt2 = document.createElement("input");
  opt2.setAttribute("type", "radio");
  opt2.setAttribute("value", "option2");
  opt2.setAttribute("name", r);

  opt2.value = option2;
  document.getElementById("quiz_form").append(opt2, opt2_label);

  const opt3_label = document.createElement("label");
  opt3_label.innerHTML = option3;
  const opt3 = document.createElement("input");
  opt3.setAttribute("type", "radio");
  opt3.setAttribute("value", "option3");
  opt3.setAttribute("name", r);

  opt3.value = option3;
  document.getElementById("quiz_form").append(opt3, opt3_label);
  document.write("<br />");

  const opt4_label = document.createElement("label");
  opt4_label.innerHTML = option4;
  const opt4 = document.createElement("input");
  opt4.setAttribute("type", "radio");
  opt4.setAttribute("value", "option4");
  opt4.setAttribute("name", r);

  opt4.value = option4;
  document.getElementById("quiz_form").append(opt4, opt4_label);
  document.write("<br />");

  totalMarks = totalMarks + 1;
});
console.log(totalMarks);

function displayRadioValue() {
  document.getElementById("result").innerHTML = " ";
  var myraido = document.getElementsByTagName("input");
  for (i = 0; i < myraido.length; i++) {
    if (myraido[i].checked) {
      for (j = 0; j < correct_answers.length; j++) {
        if (myraido[i].value == correct_answers[j]) {
          document.getElementById("result").innerHTML +=
            "Correct  " + myraido[i].value + "<br>";
        }
      }
    }
  }
}

function  Progress(num) {
    let indiceNum = document.getElementById("indiceNumber");
    let indice = document.getElementById("indice");
    indiceNum.style.width = (num + 1) + "%";
    indice.innerText = num + 1;
}



  // const btnSubmit = document.querySelector(".button-submit");
  // const qstForm = querySelectorAll(".form_question");
  // const ansForm = querySelectorAll(".form_ans");
  // const para = querySelector(".question-title");
  // const buttonPre = document.querySelector('#btn-pre');
  // const buttonSvt = document.querySelector('#btn-svnt');
  // let counter = 0;

  let h1, nextBtn, backBtn, div, mydiv, questions;

mydiv = document.querySelector("#Divcontent");
h1 = document.querySelector(".title");
nextBtn = document.getElementById("next");
backBtn = document.getElementById("back");
div = document.querySelector(".Test");

questions = [
  "Pensez-vous avoir ou avoir eu de la fièvre ces 10 derniers jours (frissons, sueurs) ?",
   "Quelle est votre température corporelle ?",
   "Ces derniers jours, avez-vous une toux ou une augmentation de votre toux habituelle ?",
   "Avez-vous eu des courbatures inhabituelles au cours des derniers jours ?",
   "Ces derniers jours, avez-vous un mal de gorge",
   "Ces dernières 24 heures, avez-vous de la diarrhée ? Avec au moins 3 selles molles.",
   "Avez-vous des difficultés importantes pour vous alimenter ou boire depuis plus de 24h ?",
   "Ces derniers jours, avez-vous une fatigue inhabituelle qui vous a obligé à vous reposer plus de la moitié de la journée ?",
   "Ces derniers jours, avez-vous une toux ou une augmentation de votre toux habituelle ?",
   "Dans les dernières 24 heures, avez-vous noté un manque de souffle inhabituel lorsque vous parlez ou faites un petit effort ?",
];
let counter;
counter = 0;

function nextchange() {
 if (h1.innerText === questions[counter] && counter !== 9) {
   counter++;
   h1.innerText = questions[counter];
 }
}

function backchange() {
 if (counter > 0) {
   counter--;
   h1.innerText = questions[counter];
 }
}





const myQuestions = [
    {
        question:
          "Pensez-vous avoir ou avoir eu de la fièvre ces 10 derniers jours (frissons, sueurs) ?",
        choices: ["Oui", "Non"],
        addInfo:
          "Anti-inflammatoires non stéroïdiens La prise d'anti-inflammatoires (ibuprofène, cortisone ...) pourrait être un facteur d'aggravation de l’infection. En cas de fièvre, prenez du paracétamol. Cette remarque concerte les traitements par gélules ou comprimés et ne concerne pas les formes inhalées. Si vous êtes déjà sous traitement, n'arrêtez pas ce traitement, demandez l'avis de votre médecin ou de votre pharmacien.",
      },
      {
        question: "Quelle est votre température corporelle ?",
        choices: [],
        label: "degre",
      },
      {
        question:
          "Ces derniers jours, avez-vous une toux ou une augmentation de votre toux habituelle ?",
        choices: ["Oui", "Non"],
      },
      {
        question:
          "Avez-vous eu des courbatures inhabituelles au cours des derniers jours ?",
        choices: ["Oui", "Non"],
      },
      {
        question: "Ces derniers jours, avez-vous un mal de gorge",
        choices: ["Oui", "Non"],
      },
      {
        question:
          "Ces dernières 24 heures, avez-vous de la diarrhée ? Avec au moins 3 selles molles.",
        choices: ["Oui", "Non"],
      },
      {
        question:
          "Ces derniers jours, avez-vous une fatigue inhabituelle qui vous a obligé à vous reposer plus de la moitié de la journée ?",
        choices: ["Oui", "Non"],
      },
      {
        question:
          "Avez-vous des difficultés importantes pour vous alimenter ou boire depuis plus de 24h ?",
        choices: ["Oui", "Non"],
      },
      {
        question:
          "Dans les dernières 24 heures, avez-vous noté un manque de souffle inhabituel lorsque vous parlez ou faites un petit effort ?",
        choices: ["Oui", "Non"],
      },
      {
        question: "Actuellement, comment vous vous sentez ?",
        choices: ["Bien", "Assez bien", "Fatigué(e)", "Très fatigué(e)"],
      },
      {
        question:
          "Quel est votre âge ? Ceci, afin de calculer un facteur de risque spécifique.",
        choices: [],
        label: "age",
      },
      {
        question:
          "Quel est votre poids ? Afin de calculer l’indice de masse corporelle qui est un facteur influençant le risque de complications de l’infection.",
        choices: [],
        label: "kg",
      },
      {
        question:
          "Quelle est votre taille ? Afin de calculer l’indice de masse corporelle qui est un facteur influençant le risque de complications de l’infection.",
        choices: [],
        label: "cm",
      },
      {
        question:
          "Avez-vous de l’hypertension artérielle mal équilibrée ? Ou avez-vous une maladie cardiaque ou vasculaire ? Ou prenez-vous un traitement à visée cardiologique ?",
        choices: ["Oui", "Non"],
      },
      { question: "Êtes-vous diabétique ?", choices: ["Oui", "Non"] },
      {
        question: "Avez-vous ou avez-vous eu un cancer ?",
        choices: ["Oui", "Non"],
      },
      {
        question:
          "Avez-vous une maladie respiratoire ? Ou êtes-vous suivi par un pneumologue ?",
        choices: ["Oui", "Non"],
      },
      {
        question: "Avez-vous une insuffisance rénale chronique dialysée ?",
        choices: ["Oui", "Non"],
      },
      {
        question: "Avez-vous une maladie chronique du foie ?",
        choices: ["Oui", "Non"],
      },
      { question: "Êtes-vous enceinte ?", choices: ["Oui", "Non", "Homme"] },
      {
        question:
          "Avez-vous une maladie connue pour diminuer vos défenses immunitaires ?",
        choices: ["Oui", "Non"],
      },
      {
        question:
          "Prenez-vous un traitement immunosuppresseur ? C’est un traitement qui diminue vos défenses contre les infections. Voici quelques exemples : corticoïdes, méthotrexate, ciclosporine, tacrolimus, azathioprine, cyclophosphamide (liste non exhaustive).",
        choices: ["Oui", "Non"],
      },
    ];
  
  //   buttonPre.addEventListener('click' , () =>{
  //      myQuestions.value = parseInt(myQuestions.value) - 1;
  //   });

  //   buttonSvt.addEventListener('click' , () =>{
  //     myQuestions.value = parseInt(myQuestions.value) + 1;
  //  });

  //get the next qst


 

  // buttonSvt.addEventListener('click',function(){
  //    div.style.backgroundColor = "red";
  // });



  //  buttonSvt.addEventListener("click", () => {
  //   if (counter < QUESTION.length + 1) {
  //     console.log("before", result);
  //     // collectAnswer(result, counter);
  //     console.log("after", result);
  //     counter++;

  //     }
      // addSiQs(counter, QUESTION, para, form, warning_cont);
      // updateProgress(counter);

    //   if (counter === QUESTION.length - 1) {
    //     nextBtn.innerText = "Submit";
    //     nextBtn.classList.add("add-green-backgr");
    //   }
    // } else if (counter === QUESTION.length - 1) {
    //   // for submit btn
    //   collectAnswer(result, counter);
    // }
 

 


    

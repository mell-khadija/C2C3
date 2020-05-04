window.addEventListener("load", () => {
  const start = document.getElementById("start_survey");
  const root = document.getElementById("start_test");
  let counter = 0;
  const app = document.createElement("div");
  

  // declaration of the variable;

  const question = [
    {
      q: `
          <div class="container">
            <h4 class="question">
            Quel est votre âge ? Ceci, afin de calculer un facteur de risque spécifique
            </h4>
            <form class="form" id="form">
              <div><input class="text" type="text" value="" name="QR" id="fievre" min="15" max="70" placeholder="your age" required/>
              <span> Ans </span></div>
            </form>
          </div> 
        `,
      id: 0,
    },
    {
      q: `
          <div class="container">
            <h4 class="question">
            Quelle est votre température corporelle ?
            </h4>
            <form class="form" id="form">
              <div><input class="text" type="number" name="step_value" id="fievre"  min="34" max="42" step=0.2 placeholder=34,0  required/>
              <span>Degré</span></di>
            </form>
          </div>
        `,
      id: 1,
    },
    {
      q: `
        <div class="container">
          <h4 class="question">
            Pensez-vous avoir ou avoir eu de la fièvre ces 10 derniers jours
            (frissons, sueurs) ?
          </h4>
          <form class="form" id="form">
          <div><input type="radio" name="CT" id="Oui" value="Oui"><label for="Oui"><span>Oui</span> </label></div>
          <div><input type="radio" name="CT" id="Non" value="Non"><label for="Non"><span>Non</span> </label></div>
          </form>
        </div>
      `,
      id: 2,
    },
    {
      q: `
          <div class="container">
            <h4 class="question">
            Ces derniers jours, avez-vous une toux ou une augmentation de votre toux habituelle ?
            </h4>
            <form class="form" id="form">
            <div><input type="radio" name="CT" id="Oui" value="Oui"><label for="Oui"><span>Oui</span></label></div>
            <div><input type="radio" name="CT" id="Non" value="Non"><label for="Non"><span>Non</span></label></div>
            </form>
          </div>
        `,
      id: 3,
    },
    {
      q: `
          <div class="container">
            <h4 class="question">
            Avez-vous eu des courbatures inhabituelles au cours des derniers jours ?
            </h4>
            <form class="form" id="form">
            <div><input type="radio" name="CT" id="Oui" value="Oui"><label for="Oui"><span>Oui</span> </label></div>
            <div><input type="radio" name="CT" id="Non" value="Non"><label for="Non"><span>Non</span> </label></div>
            </form>
          </div>
        `,
      id: 4,
    },
    {
      q: `
          <div class="container">
            <h4 class="question">
            Ces derniers jours, avez-vous un mal de gorge
            </h4>
            <form class="form" id="form">
            <div><input type="radio" name="CT" id="Oui" value="Oui"><label for="Oui"><span>Oui</span> </label></div>
            <div><input type="radio" name="CT" id="Non" value="Non"><label for="Non"><span>Non</span> </label></div>
            </form>
          </div>
        `,
      id: 5,
    },
    {
      q: `
          <div class="container">
            <h4 class="question">
            Ces dernières 24 heures, avez-vous de la diarrhée ? Avec au moins 3 selles molles.
            </h4>
            <form class="form" id="form">
            <div><input type="radio" name="CT" id="Oui" value="Oui"><label for="Oui"><span>Oui</span> </label></div>
            <div><input type="radio" name="CT" id="Non" value="Non"><label for="Non"><span>Non</span> </label></div>
            </form>
          </div>
        `,
      id: 6,
    },
    {
      q: `
          <div class="container">
            <h4 class="question">
            Ces derniers jours, avez-vous une fatigue inhabituelle ?
            </h4>
            <form class="form" id="form">
            <div><input type="radio" name="CT" id="Oui" value="Oui"><label for="Oui"><span>Oui</span> </label></div>
            <div><input type="radio" name="CT" id="Non" value="Non"><label for="Non"><span>Non</span> </label></div>
            </form>
          </div>
        `,
      id: 7,
    },
    {
      q: `
          <div class="container">
            <h4 class="question">
            cette fatigue vous oblige-t-elle à vous reposer plus de la moitié de la journée ?
            </h4>
            <form class="form" id="form">
            <div><input type="radio" name="CT" id="Oui" value="Oui"><label for="Oui"><span>Oui</span> </label></div>
            <div><input type="radio" name="CT" id="Non" value="Non"><label for="Non"><span>Non</span> </label></div>
            </form>
          </div>
        `,
      id: 8,
    },
    {
      q: `
          <div class="container">
            <h4 class="question">
            Avez-vous des difficultés importantes pour vous alimenter ou boire depuis plus de 24h ?
            </h4>
            <form class="form" id="form">
            <div><input type="radio" name="CT" id="Oui" value="Oui"><label for="Oui"><span>Oui</span> </label></div>
            <div><input type="radio" name="CT" id="Non" value="Non"><label for="Non"><span>Non</span> </label></div>
            </form>
          </div>
        `,
      id: 9,
    },
    {
      q: `
          <div class="container">
            <h4 class="question">
            Dans les dernières 24 heures, avez-vous noté un manque de souffle inhabituel lorsque vous parlez ou faites un petit effort ?
            </h4>
            <form class="form" id="form">
            <div><input type="radio" name="CT" id="Oui" value="Oui"><label for="Oui"><span>Oui</span> </label></div>
            <div><input type="radio" name="CT" id="Non" value="Non"><label for="Non"><span>Non</span> </label></div>
            </form>
          </div>
        `,
      id: 10,
    },
    {
      q: `
          <div class="container">
            <h4 class="question">
            Actuellement, comment vous vous sentez ?
            </h4>
            <form class="form" id="form">
            <div> <input type="radio" name="CT" id="Bien"><label for="Bien"><span>Bien</span> </label> </div>
            <div><input type="radio" name="CT" id="Assez bien"><label for="Assez bien"><span>Assez bien</span> </label> </div>
            <div> <input type="radio" name="CT" id="Fatigué(e)"> <label for="Fatigué(e)"> <span>Fatigué(e)</span> </label> </div>
            <div> <input type="radio" name="CT" id="Très fatigué"> <label for="Très fatigué"> <span>Très fatigué</span> </label>
            </form>
          </div>
        `,
      id: 11,
    },
    {
      q: `
          <div class="container">
            <h4 class="question">
            "Quel est votre poids ? Afin de calculer l’indice de masse corporelle qui est un facteur influençant le risque de complications de l’infection.",
            </h4>
            <form class="form" id="form">
            <div ><input type=" number" id="poid" min="30" max="200" placeholder=""><span>Kg</span></div>
            </form>
          </div>
        `,
      id: 12,
    },
    {
      q: `
          <div class="container">
            <h4 class="question">
            "Quelle est votre taille ? Afin de calculer l’indice de masse corporelle qui est un facteur influençant le risque de complications de l’infection.",
            </h4>
            <form class="form" id="form">
            <div><input type=" number" id="taille" min="100" max="260" placeholder=""><span>Cm</span></div>
            </form>
          </div>
        `,
      id: 13,
    },
    {
      q: `
          <div class="container">
            <h4 class="question">
            "Avez-vous de l’hypertension artérielle mal équilibrée ? Ou avez-vous une maladie cardiaque ou vasculaire ? Ou prenez-vous un traitement à visée cardiologique ?",
            </h4>
            <form class="form" id="form">
            <div><input type="radio" name="CT" id="Oui" value="Oui"><label for="Oui"><span>Oui</span> </label></div>
            <div><input type="radio" name="CT" id="Non" value="Non"><label for="Non"><span>Non</span> </label></div>
            </form>
          </div>
        `,
      id: 14,
    },
    {
      q: `
          <div class="container">
            <h4 class="question">
            Êtes-vous diabétique ?
            </h4>
            <form class="form" id="form">
            <div><input type="radio" name="CT" id="Oui" value="Oui"><label for="Oui"><span>Oui</span> </label></div>
            <div><input type="radio" name="CT" id="Non" value="Non"><label for="Non"><span>Non</span> </label></div>
            </form>
          </div>
        `,
      id: 15,
    },
    {
      q: `
          <div class="container">
            <h4 class="question">
            Avez-vous ou avez-vous eu un cancer ?
            </h4>
            <form class="form" id="form">
            <div><input type="radio" name="CT" id="Oui" value="Oui"><label for="Oui"><span>Oui</span> </label></div>
            <div><input type="radio" name="CT" id="Non" value="Non"><label for="Non"><span>Non</span> </label></div>
            </form>
          </div>
        `,
      id: 16,
    },
    {
      q: `
          <div class="container">
            <h4 class="question">
            Avez-vous une maladie respiratoire ? Ou êtes-vous suivi par un pneumologue ?
            </h4>
            <form class="form" id="form">
            <div><input type="radio" name="CT" id="Oui" value="Oui"><label for="Oui"><span>Oui</span> </label></div>
            <div><input type="radio" name="CT" id="Non" value="Non"><label for="Non"><span>Non</span> </label></div>
            </form>
          </div>
        `,
      id: 17,
    },
    {
      q: `
          <div class="container">
            <h4 class="question">
            Avez-vous une insuffisance rénale chronique dialysée ?
            </h4>
            <form class="form" id="form">
            <div><input type="radio" name="CT" id="Oui" value="Oui"><label for="Oui"><span>Oui</span> </label></div>
            <div><input type="radio" name="CT" id="Non" value="Non"><label for="Non"><span>Non</span> </label></div>
            </form>
          </div>
        `,
      id: 18,
    },
    {
      q: `
          <div class="container">
            <h4 class="question">
            Avez-vous une maladie chronique du foie ?
            </h4>
            <form class="form" id="form">
            <div><input type="radio" name="CT" id="Oui" value="Oui"><label for="Oui"><span>Oui</span> </label></div>
            <div><input type="radio" name="CT" id="Non" value="Non"><label for="Non"><span>Non</span> </label></div>
            </form>
          </div>
        `,
      id: 19,
    },
    {
      q: `
          <div class="container">
            <h4 class="question">
            Êtes-vous enceinte ?
            </h4>
            <form class="form" id="form">
            <div><input type="radio" name="CT" id="Oui" value="Oui"><label for="Oui"><span>Oui</span> </label></div>
            <div><input type="radio" name="CT" id="Non" value="Non"><label for="Non"><span>Non</span> </label></div>
            </form>
          </div>
        `,
      id: 20,
    },
    {
      q: `
          <div class="container">
            <h4 class="question">
            Avez-vous une maladie connue pour diminuer vos défenses immunitaires ?
            </h4>
            <form class="form" id="form">
            <div><input type="radio" name="CT" id="Oui" value="Oui"><label for="Oui"><span>Oui</span> </label></div>
            <div><input type="radio" name="CT" id="Non" value="Non"><label for="Non"><span>Non</span> </label></div>
            </form>
          </div>
        `,
      id: 21,
    },
    {
      q: `
          <div class="container">
            <h4 class="question">
            "Prenez-vous un traitement immunosuppresseur ? C’est un traitement qui diminue vos défenses contre les infections. Voici quelques exemples : corticoïdes, méthotrexate, ciclosporine, tacrolimus, azathioprine, cyclophosphamide (liste non exhaustive).",
            </h4>
            <form class="form" id="form">
            <div><input type="radio" name="CT" id="Oui" value="Oui"><label for="Oui"><span>Oui</span> </label></div>
            <div><input type="radio" name="CT" id="Non" value="Non"><label for="Non"><span>Non</span> </label></div>
            </form>
          </div>
        `,
      id: 22,
    },
  ];

const  cercles  =  document.querySelectorAll('.cercle');

const MAX_STEPS = 3;
let currentStep = 2;

start_survey.addEventListener('click',  ()  =>  {
  cercles[currentStep  -  1].classList.add('completed');
  cercles[0].classList.remove('color');
	currentStep  +=  1;
	if  (currentStep  ===  MAX_STEPS)  {
		start_survey.disabled  =  true;
	}
	
});



  // const btnQuiz = document.createElement("div");
  // btnQuiz.classList.add("btnQuiz");
  //   start the test;
  const next = document.createElement("button");
  next.classList.add("btn2","btn_next");
  // prev btn
  const prev = document.createElement("button");
  prev.classList.add("btn2","btn_back");
  const afficher = document.createElement("button");
  afficher.classList.add("btn2","btn_next");

 
  next.textContent = "Question suivant";
  prev.textContent = "Question président";
  afficher.textContent = "Afficher resultats";
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
 
  start.addEventListener("click", () => {
    start_test.innerHTML = "";
    app.innerHTML = question[0].q;
    start_test.appendChild(app);
    start_test.appendChild(next);
    start_test.appendChild(prev);
    inputs = document.querySelectorAll("form  input");
    prev.classList.add("hide");
    

   
    tabresultat(counter);
   

    
    
  });

  next.addEventListener("click", () => {
    counter++;
    console.log(counter);
    

    if (counter < question.length - 1) {
      app.innerHTML = question[counter].q;
    }
    if (counter == question.length - 1) {
      start_test.appendChild(afficher);
      next.classList.add("hide");
      afficher.classList.remove("hide");
    }
    app.innerHTML = question[counter].q;
    inputs = document.querySelectorAll("form  input");
    prev.classList.remove("hide");
    // next.setAttribute("disabled", "disabled");
    
    tabresultat(counter);
    
    
  });
  prev.addEventListener("click", (e) => {
   
    if (counter >= 0) {
      counter--;
      app.innerHTML = question[counter].q;
      // prev.classList.add("hide");
    }
    
    app.innerHTML = question[counter].q;
    inputs = document.querySelectorAll("form  input");
    afficher.classList.add("hide");
    next.classList.remove("hide");
    tabresultat(counter);
  });


  
  afficher.addEventListener('click', () => {
    const MAX_STEPS = 3;
    let currentStep = 3;
    cercles[currentStep  -  2].classList.add('completed');
    // cercles[currentStep  -  1].classList.remove('completed');
    currentStep  +=  2;
    if  (currentStep  ===  MAX_STEPS)  {
      afficher.disabled  =  true;
    }
  });
 
  

});
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
//
//
//
//

// function getAns(qs, result) {
//   let form = document.getElementById("form  input");

//   //   form element
//   if (form.elements.length > 1) {
//     // donc its a radio group;
//     for (let i = 0; i < form.elements.length; i++) {
//       if (form.elements[i]) {
//         result[qs.id] = form.elements[i].value;
//         console.log(result);
//       }
//     }
//   } else {
//     result[qs.id] = form.elements[0].value;
//   }
// }
var resultat = [];
inputs = document.querySelectorAll(".form input");
tabresultat = (e) => {
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("change", () => {
      if (inputs.length == 1) {
        resultat.splice(e, 1, inputs[0].value);
        
      } else {
        if (inputs[i].checked == true) {
          resultat.splice(e, 1, inputs[i].value);
        }
      }
    });
  }
};


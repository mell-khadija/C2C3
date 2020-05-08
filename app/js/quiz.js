window.addEventListener("load", () => {
  const start = document.getElementById("start_survey");
  const root = document.getElementById("start_test");
  let counter = 0;
  const app = document.createElement("div");
  const resp = document.getElementById("aff_result");
  const progresse = document.getElementById("progresse");
  let progres = document.getElementById("file");
  let afficheNum = document.getElementById("afficheNum");
  let valeur = 1;
  const repeter = document.getElementById("repeter");
  // const afficher = document.getElementById("resultat");
  

  // declaration of the variable;

  const question = [
    {
      q: `
        <div class="container">
          <h4 class="question">
            Pensez-vous avoir ou avoir eu de la fièvre ces 10 derniers jours
            (frissons, sueurs) ?
          </h4>
          <form class="form" id="form">
          <div><input class="form_choice" type="radio" name="CT" id="Oui" value="Oui"><label for="Oui"><span>Oui</span> </label></div>
          <div><input class="form_choice" type="radio" name="CT" id="Non" value="Non"><label for="Non"><span>Non</span> </label></div>
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
            Ces derniers jours, avez-vous une toux ou une augmentation de votre toux habituelle ?
            </h4>
            <form class="form" id="form">
            <div><input class="form_choice" type="radio" name="CT" id="Oui" value="Oui"><label for="Oui"><span>Oui</span></label></div>
            <div><input class="form_choice" type="radio" name="CT" id="Non" value="Non"><label for="Non"><span>Non</span></label></div>
            </form>
          </div>
        `,
      id: 2,
    },
    {
      q: `
          <div class="container">
            <h4 class="question">
            Avez-vous eu des courbatures inhabituelles au cours des derniers jours ?
            </h4>
            <form class="form" id="form">
            <div><input class="form_choice" type="radio" name="CT" id="Oui" value="Oui"><label for="Oui"><span>Oui</span> </label></div>
            <div><input class="form_choice" type="radio" name="CT" id="Non" value="Non"><label for="Non"><span>Non</span> </label></div>
            </form>
          </div>
        `,
      id: 3,
    },
    {
      q: `
          <div class="container">
            <h4 class="question">
            Ces derniers jours, avez-vous un mal de gorge ?
            </h4>
            <form class="form" id="form">
            <div><input class="form_choice" type="radio" name="CT" id="Oui" value="Oui"><label for="Oui"><span>Oui</span> </label></div>
            <div><input class="form_choice" type="radio" name="CT" id="Non" value="Non"><label for="Non"><span>Non</span> </label></div>
            </form>
          </div>
        `,
      id: 4,
    },
    {
      q: `
          <div class="container">
            <h4 class="question">
            Ces dernières 24 heures, avez-vous de la diarrhée ? Avec au moins 3 selles molles.
            </h4>
            <form class="form" id="form">
            <div><input class="form_choice" type="radio" name="CT" id="Oui" value="Oui"><label for="Oui"><span>Oui</span> </label></div>
            <div><input class="form_choice" type="radio" name="CT" id="Non" value="Non"><label for="Non"><span>Non</span> </label></div>
            </form>
          </div>
        `,
      id: 5,
    },
    {
      q: `
          <div class="container">
            <h4 class="question">
            Ces derniers jours, avez-vous une fatigue inhabituelle qui vous a obligé à vous reposer plus de la moitié de la journée ?
            </h4>
            <form class="form" id="form">
            <div><input class="form_choice" type="radio" name="CT" id="Oui" value="Oui"><label for="Oui"><span>Oui</span> </label></div>
            <div><input class="form_choice" type="radio" name="CT" id="Non" value="Non"><label for="Non"><span>Non</span> </label></div>
            </form>
          </div>
        `,
      id: 6,
    },
    {
      q: `
          <div class="container">
            <h4 class="question">
            Avez-vous des difficultés importantes pour vous alimenter ou boire depuis plus de 24h  ?
            </h4>
            <form class="form" id="form">
            <div><input class="form_choice" type="radio" name="CT" id="Oui" value="Oui"><label for="Oui"><span>Oui</span> </label></div>
            <div><input class="form_choice" type="radio" name="CT" id="Non" value="Non"><label for="Non"><span>Non</span> </label></div>
            </form>
          </div>
        `,
      id: 7,
    },
    {
      q: `
          <div class="container">
            <h4 class="question">
            Dans les dernières 24 heures, avez-vous noté un manque de souffle inhabituel lorsque vous parlez ou faites un petit effort ?
            </h4>
            <form class="form" id="form">
            <div><input class="form_choice" type="radio" name="CT" id="Oui" value="Oui"><label for="Oui"><span>Oui</span> </label></div>
            <div><input class="form_choice" type="radio" name="CT" id="Non" value="Non"><label for="Non"><span>Non</span> </label></div>
            </form>
          </div>
        `,
      id: 8,
    },
    {
      q: `
          <div class="container">
            <h4 class="question">
            Actuellement, comment vous vous sentez ?
            </h4>
            <form class="form" id="form">
            <div> <input class="form_choice" type="radio" name="CT" id="Bien"><label for="Bien"><span>Bien</span> </label> </div>
            <div> <input class="form_choice" type="radio" name="CT" id="Assez bien"><label for="Assez bien"><span>Assez bien</span> </label> </div>
            <div> <input class="form_choice" type="radio" name="CT" id="Fatigué(e)"> <label for="Fatigué(e)"> <span>Fatigué(e)</span> </label> </div>
            <div> <input class="form_choice" type="radio" name="CT" id="Très fatigué"> <label for="Très fatigué"> <span>Très fatigué</span> </label>
            </form>
          </div>
        `,
      id: 9,
    },
    {
      q: `
          <div class="container">
            <h4 class="question">
            Quel est votre âge ? Ceci, afin de calculer un facteur de risque spécifique.
            </h4>
            <form class="form" id="form">
            <div><input class="text" type="text" value="" name="QR" id="fievre" min="15" max="70" placeholder="your age" required/>
            <span> Ans </span></div>
            </form>
          </div>
        `,
      id: 10,
    },
    {
      q: `
          <div class="container">
            <h4 class="question">
            Quel est votre poids ? Afin de calculer l’indice de masse corporelle qui est un facteur influençant le risque de complications de l’infection.
            </h4>
            <form class="form" id="form">
            <div ><input  class="text" type=" number" id="poid" min="30" max="200" placeholder=""><span>Kg</span></div>
            </form>
          </div> 
        `,
      id: 11,
    },
    {
      q: `
          <div class="container">
            <h4 class="question">
            Quelle est votre taille ? Afin de calculer l’indice de masse corporelle qui est un facteur influençant le risque de complications de l’infection.
            </h4>
            <form class="form" id="form">
            <div><input  class="text" type=" number" id="taille" min="100" max="260" placeholder=""><span>Cm</span></div>
            </form>
          </div>
        `,
      id: 12,
    },
    {
      q: `
          <div class="container">
            <h4 class="question">
            Avez-vous de l’hypertension artérielle mal équilibrée ? Ou avez-vous une maladie cardiaque ou vasculaire ? Ou prenez-vous un traitement à visée cardiologique ?
            </h4>
            <form class="form" id="form">
            <div><input class="form_choice" type="radio" name="CT" id="Oui" value="Oui"><label for="Oui"><span>Oui</span> </label></div>
            <div><input class="form_choice" type="radio" name="CT" id="Non" value="Non"><label for="Non"><span>Non</span> </label></div>
            </form>
          </div>
        `,
      id: 13,
    },
    {
      q: `
          <div class="container">
            <h4 class="question">
            Êtes-vous diabétique ?
            </h4>
            <form class="form" id="form">
            <div><input class="form_choice" type="radio" name="CT" id="Oui" value="Oui"><label for="Oui"><span>Oui</span> </label></div>
            <div><input class="form_choice" type="radio" name="CT" id="Non" value="Non"><label for="Non"><span>Non</span> </label></div>
            </form>
          </div>
        `,
      id: 14,
    },
    {
      q: `
          <div class="container">
            <h4 class="question">
            Avez-vous ou avez-vous eu un cancer ?
            </h4>
            <form class="form" id="form">
            <div><input class="form_choice" type="radio" name="CT" id="Oui" value="Oui"><label for="Oui"><span>Oui</span> </label></div>
            <div><input class="form_choice" type="radio" name="CT" id="Non" value="Non"><label for="Non"><span>Non</span> </label></div>
            </form>
          </div>
        `,
      id: 15,
    },
    {
      q: `
          <div class="container">
            <h4 class="question">
            Avez-vous une maladie respiratoire ? Ou êtes-vous suivi par un pneumologue ?
            </h4>
            <form class="form" id="form">
            <div><input class="form_choice" type="radio" name="CT" id="Oui" value="Oui"><label for="Oui"><span>Oui</span> </label></div>
            <div><input class="form_choice" type="radio" name="CT" id="Non" value="Non"><label for="Non"><span>Non</span> </label></div>
            </form>
          </div>
        `,
      id: 16,
    },
    {
      q: `
          <div class="container">
            <h4 class="question">
            Avez-vous une insuffisance rénale chronique dialysée ?
            </h4>
            <form class="form" id="form">
            <div><input class="form_choice" type="radio" name="CT" id="Oui" value="Oui"><label for="Oui"><span>Oui</span> </label></div>
            <div><input class="form_choice" type="radio" name="CT" id="Non" value="Non"><label for="Non"><span>Non</span> </label></div>
            </form>
          </div>
        `,
      id: 17,
    },
    {
      q: `
          <div class="container">
            <h4 class="question">
            Avez-vous une maladie chronique du foie ?
            </h4>
            <form class="form" id="form">
            <div><input class="form_choice" type="radio" name="CT" id="Oui" value="Oui"><label for="Oui"><span>Oui</span> </label></div>
            <div><input class="form_choice" type="radio" name="CT" id="Non" value="Non"><label for="Non"><span>Non</span> </label></div>
            </form>
          </div>
        `,
      id: 18,
    },
    {
      q: `
          <div class="container">
            <h4 class="question">
            Êtes-vous enceinte ?
            </h4>
            <form class="form" id="form">
            <div><input class="form_choice" type="radio" name="CT" id="Oui" value="Oui"><label for="Oui"><span>Oui</span> </label></div>
            <div><input class="form_choice" type="radio" name="CT" id="Non" value="Non"><label for="Non"><span>Non</span> </label></div>
            </form>
          </div>
        `,
      id: 19,
    },
    {
      q: `
          <div class="container">
            <h4 class="question">
            Avez-vous une maladie connue pour diminuer vos défenses immunitaires ?
            </h4>
            <form class="form" id="form">
            <div><input class="form_choice" type="radio" name="CT" id="Oui" value="Oui"><label for="Oui"><span>Oui</span> </label></div>
            <div><input class="form_choice" type="radio" name="CT" id="Non" value="Non"><label for="Non"><span>Non</span> </label></div>
            </form>
          </div>
        `,
      id: 20,
    },
    {
      q: `
          <div class="container">
            <h4 class="question">
            Prenez-vous un traitement immunosuppresseur ? C’est un traitement qui diminue vos défenses contre les infections. Voici quelques exemples : corticoïdes, méthotrexate, ciclosporine, tacrolimus, azathioprine, cyclophosphamide (liste non exhaustive).
            </h4>
            <form class="form" id="form">
            <div><input class="form_choice" type="radio" name="CT" id="Oui" value="Oui"><label for="Oui"><span>Oui</span> </label></div>
            <div><input class="form_choice" type="radio" name="CT" id="Non" value="Non"><label for="Non"><span>Non</span> </label></div>
            </form>
          </div>
        `,
      id: 21,
    },
    // {
    //   q: `
    //       <div class="container">
    //         <h4 class="question">
    //         "Prenez-vous un traitement immunosuppresseur ? C’est un traitement qui diminue vos défenses contre les infections. Voici quelques exemples : corticoïdes, méthotrexate, ciclosporine, tacrolimus, azathioprine, cyclophosphamide (liste non exhaustive).",
    //         </h4>
    //         <form class="form" id="form">
    //         <div><input type="radio" name="CT" id="Oui" value="Oui"><label for="Oui"><span>Oui</span> </label></div>
    //         <div><input type="radio" name="CT" id="Non" value="Non"><label for="Non"><span>Non</span> </label></div>
    //         </form>
    //       </div>
    //     `,
    //   id: 22,
    // },
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



  
  //   start the test;
  const prev = document.createElement("button");
  prev.classList.add("btn2","btn_back");
  const next = document.createElement("button");
  next.classList.add("btn2","btn_next");
  // prev btn
 
  const afficher = document.createElement("button");
  afficher.classList.add("btn2","btn_next");
  afficher.id = "resultat";
  // const repeter = document.createElement("button");
  // repeter.classList.add("btn2","btn_next");
  // repeter.id = "repeter";
  
   
  prev.textContent = "Question président";
  next.textContent = "Question suivant";
 
  afficher.textContent = "Afficher resultats";
  // repeter.textContent = "Recommencer teste";
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
    progresse.classList.remove("hide");
    inputs = document.querySelectorAll("form  input");
    prev.classList.add("hide");
    repeter.classList.add("hide");
    progressBar(counter, valeur);
    

   
    tabresultat(counter);
   

    
    
  });
  progressBar = (e, x) => {
    progres.setAttribute("value", e + 1);
    afficheNum.innerHTML = x + "/" + question.length;
  };

  next.addEventListener("click", () => {
    // counter++;
    // valeur++;
    // console.log(counter);
    

    if (counter < question.length - 1) {
      app.innerHTML = question[counter].q;
      valeur++;
      counter++;
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
    progressBar(counter, valeur);
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
    app.classList.add("hide");
    resp.classList.remove("hide");
    prev.classList.add("hide");
    afficher.classList.add("hide");
    cercles[currentStep  -  2].classList.remove('completed');
    cercles[2].classList.add('color');
    progresse.classList.add("hide");
    repeter.classList.remove("hide");


    
    // cercles[currentStep  -  2].classList.add('color');
    
     trireponces(resultat);
     nombreDeFacteur(resultat);
     Algorithme(resultat);
  });
 
  repeter.addEventListener('click', ()=>{
    app.classList.remove("hide");
    resp.classList.add("hide");
    repeter.classList.add("hide");
    tabSymptome = [];
    tabfacteurPronostique = [];
    tabfacteurMineur = [];
    tabfacteurMajeur = [];
    resultSyptome = 0;
    resultFacteurPronostique = 0;
    resultfacteurMineur = 0;
    resultfacteurMajeur = 0;
    counter = 0;
    valeur = 1;
    next.classList.remove("hide");
    prev.classList.add("hide");
    afficher.classList.add("hide");
    app.innerHTML = question[counter].q;
    inputs = document.querySelectorAll(".form input");
    cercles[1].classList.add('color');
    cercles[2].classList.remove('color');
    progressBar(counter, valeur);
    tabresultat(counter);
    
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

tabSymptome = [];
tabfacteurPronostique = [];
tabfacteurMineur = [];
tabfacteurMajeur = [];

resultSyptome = 0;
resultFacteurPronostique = 0;
resultfacteurMineur = 0;
resultfacteurMajeur = 0;

trireponces = () => {
  for (let i = 0; i < resultat.length; i++) {
    if (i == 1) {
      tabfacteurMineur.push(resultat[i]);
      tabfacteurMajeur.push(resultat[i]);
    } else if (i >= 11 && i <= 21) {
      tabfacteurPronostique.push(resultat[i]);
    } else if (i == 7 || i == 8) {
      tabfacteurMajeur.push(resultat[i]);
    } else if (i == 6 || i == 9) {
      tabfacteurMineur.push(resultat[i]);
    }
    if (i >= 0 && i <= 9) {
      tabSymptome.push(resultat[i]);
    }
  }
};



nombreDeFacteur = () => {
  for (let i = 0; i < tabSymptome.length; i++) {
    if (tabSymptome[i] == "Oui") {
      resultSyptome++;
    }
  }
  for (let i = 0; i < tabfacteurPronostique.length; i++) {
    if (tabfacteurPronostique[i] >= 70 || tabfacteurPronostique[i] == "Oui") {
      resultFacteurPronostique++;
    }
  }
  for (let i = 0; i < tabfacteurMineur.length; i++) {
    if (
      tabfacteurMineur[i] >= 39 ||
      tabfacteurMineur[i] == "Oui" ||
      tabfacteurMineur[i] == "Très fatigué" ||
      tabfacteurMineur[i] == " fatigué"
    ) {
      resultfacteurMineur++;
    }
  }
  for (let i = 0; i < tabfacteurMajeur.length; i++) {
    if (tabfacteurMajeur[i] <= 35.4 || tabfacteurMajeur[i] == "Oui") {
      resultfacteurMajeur++;
    }
  }
};

let messageFinal = document.getElementById("afficher");

Algorithme = () => {
  if (
    resultat[0] == "Oui" ||
    (resultat[2] == "Oui" && resultat[4] == "Oui") ||
    (resultat[2] == "Oui" && resultat[3] == "Oui") ||
    (resultat[0] == "Oui" && resultat[5] == "Oui")
    //Patient avec fièvre, ou toux + mal de gorge, ou toux + courbatures ou fièvre + diarrhée :
  ) {
    if (resultFacteurPronostique == 0) {
      if (
        resultfacteurMajeur == 0 &&
        resultfacteurMineur == 0 &&
        resultat[10] < 50
      ) {
        messageFinal.innerText = messageAffiche[0];
      } else if (
        resultfacteurMajeur == 0 &&
        resultfacteurMineur >= 1 &&
        (resultat[10] >= 50 || resultat[10] <= 69)
      ) {
        messageFinal.innerText = messageAffiche[1];
      }
    } else {
      if (resultfacteurMajeur == 0 && resultfacteurMineur <= 1) {
        messageFinal.innerText = messageAffiche[1];
      } else if (resultfacteurMajeur == 0 && resultfacteurMineur >= 2) {
         messageFinal.innerText = messageAffiche[2];
      }
    }
    if (resultfacteurMajeur >= 1) {
        messageFinal.innerText = messageAffiche[2];
    }
  } else if (resultat[0] == "Oui" && resultat[2] == "Oui") {
    if (resultFacteurPronostique == 0) {
      if (resultfacteurMajeur == 0 && resultfacteurMineur >= 1) {
          messageFinal.innerText = messageAffiche[3];
      }
    } else {
      if (resultfacteurMajeur == 0 && resultfacteurMineur <= 1) {
        messageFinal.innerText = messageAffiche[3];
      } else if (resultfacteurMajeur == 0 && resultfacteurMineur > 1) {
        messageFinal.innerText = messageAffiche[2];
      }
    }
    if (resultfacteurMajeur > 0) {
        messageFinal.innerText = messageAffiche[2];
    }
  } else if (
    resultat[0] == "Oui" ||
    resultat[2] == "Oui" ||
    resultat[3] == "Oui" ||
    resultat[4] == "Oui"
  ) {
    if (resultfacteurMajeur == 0 && resultfacteurMineur == 0) {
      messageFinal.innerText = messageAffiche[4];
    } else {
      if (resultFacteurPronostique > 0) {
         messageFinal.innerText = messageAffiche[4] + " " + messageAffiche[2];
      }
    }
  } else if (resultSyptome == 0) {
       messageFinal.innerText = messageAffiche[5];
  } else if (resultat[10] < 15) {
       messageFinal.innerText = messageAffiche[6];
  }
};


messageAffiche = [
  ` nous vous conseillons de rester à votre domicile et de contacter votre médecin en cas d’apparition de nouveaux symptômes. Vous pourrez aussi utiliser à nouveau l’application pour réévaluer vos symptômes. `,
  `téléconsultation ou médecin généraliste ou visite à domicile  préciser “appelez le 141 si une gêne respiratoire ou des difficultés importantes pour s’alimenter ou boire pendant plus de 24h apparaissent.” 
 `,
  `appel 141 `,
  ` téléconsultation ou médecin généraliste ou visite à domicile  `,
  `Votre situation ne relève probablement pas du Covid-19. Consultez votre médecin au moindre doute`,
  `Votre situation ne relève probablement pas du Covid-19. N’hésitez pas à contacter votre médecin en cas de doute. Vous pouvez refaire le test en cas de nouveau symptôme pour réévaluer la   situation.   Pour   toute information concernant   le   Covid-19 allez vers la page d’accueil. 
 `,
  ` Prenez contact avec votre médecin généraliste au moindre doute. Cette application n’est pour l’instant pas adaptée aux personnes de moins de 15 ans. En cas d’urgence, appeler le 15. `,
];

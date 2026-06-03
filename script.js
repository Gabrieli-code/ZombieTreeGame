class Node {

    constructor(text){

        this.text = text;

        this.yes = null;

        this.no = null;
    }
}

const root = new Node(
    "Você deseja lutar contra o zumbi?"
);

root.yes = new Node(
    "Você possui uma arma?"
);

root.no = new Node(
    "Você deseja correr?"
);

root.yes.yes = new Node(
    "🎉 Você sobreviveu!"
);

root.yes.no = new Node(
    "☠️ Você foi derrotado!"
);

root.no.yes = new Node(
    "🏃 Você conseguiu escapar!"
);

root.no.no = new Node(
    "🧟 O zumbi alcançou você!"
);

let current = root;

const question =
document.getElementById("question");

function updateScreen(){

    question.innerText =
    current.text;
}

updateScreen();

function answer(choice){

    if(choice){

        current = current.yes;

    }else{

        current = current.no;
    }

    if(current.yes === null &&
       current.no === null){

        question.innerText =
        current.text;

        return;
    }

    updateScreen();
}

function restartGame(){

    current = root;

    updateScreen();
}
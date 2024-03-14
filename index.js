//accessing the important element from html
let userChoice = document.getElementById('userImg');
let compimg = document.getElementById('compSide');
let resultChoice = document.getElementById('resultImg');
let resultPoint = document.getElementById('resultScore');
//declaring global variable
const imgArr = ["/rock_paper_seccior/img/rock.png", "/rock_paper_seccior/img/papper.png", "/rock_paper_seccior/img/seccior.png"];
let userScore = 0;
let compScore = 0;
//getting the user input
const getUser = (value) => {
    //showing the user selected choice in other box
    let userSelectedImg = document.getElementById(value).getAttribute("src");
    userChoice.setAttribute("src", userSelectedImg);
    //showing the computer selected choice in the box
    let compChoice = Math.floor(Math.random() * 3)
    compimg.style.animationName = 'hshsh';
    compimg.style.background = `url(${imgArr[compChoice]})`
    compimg.style.backgroundSize = 'cover';
    //showing the result in the score board
    let imgValue;
    switch (compChoice) {
        //if computer is rock
        case 0:
            imgValue = (value + ' ~~~~~~ rock');
            resultChoice.innerText = imgValue;
            if (value == 'PAPER') {
                userScore++;
            } else if (value == 'ROCK') {
                return 0;
            } else if (value == 'SECCIOR') {
                compScore++;
            }
            break;
        //if computer is paper
        case 1:
            imgValue = (value + ' ~~~~~~ paper');
            resultChoice.innerText = imgValue;
            if (value == 'PAPER') {
                return 0;
            } else if (value == 'ROCK') {
                compScore++;
            } else if (value == 'SECCIOR') {
                userScore++;
            }
            break;
        //if computer is seccior
        case 2:
            imgValue = (value + ' ~~~~~~ seccior');
            resultChoice.innerText = imgValue;
            if (value == 'PAPER') {
                compScore++;
            } else if (value == 'ROCK') {
                userScore++;
            } else if (value == 'SECCIOR') {
                return 0;
            }
            break;
    }
    resultPoint.innerText = `${userScore} ~~~~~ ${compScore}`;
}
//creating a reset button 
const reset = () => {
    resultPoint.innerText = '0 ~~~~ 0';
    resultChoice.innerText = ' ';
    userScore = 0;
    compChoice = 0;
    compimg.style.animationName = 'compImg';
}
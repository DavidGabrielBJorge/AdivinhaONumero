let computerNumber;
let userNumbers = [];
let attempts = 0;
let maxguesses = 10;
let usedNumbers =[];
let sameNumbers =[];

function newRound(){
    window.location.reload();
}

function begin(){
    computerNumber= Math.floor(Math.random()*100+1);
    document.getElementById('inputNumber').value='';
    console.log(computerNumber);
}

function guessNumbers(){
    const userNumber = Number(document.getElementById('inputNumber').value);

    userNumbers.push(userNumber);

    if(sameNumbers.includes(userNumber)){
        sameNumber=userNumbers.pop();
        document.getElementById('textOutput').innerHTML = 'Você já usou esse número: '+sameNumber;
    }
    else{
        sameNumbers.push(userNumber);
        document.getElementById('guesses').innerHTML = userNumbers;

        if(userNumber>100 || userNumber<1){
            overHundred=userNumbers.pop();
            document.getElementById('textOutput').innerHTML = 'Tem que ser um número entre 1 e 100';
        }
        else{
            if(attempts < maxguesses){
                if(userNumber  > computerNumber){
                    document.getElementById('textOutput').innerHTML = 'Seu número é alto';
                    document.getElementById('inputNumber').value='';
                    attempts++;
                    document.getElementById('attempts').innerHTML=attempts;
                }
                else if(userNumber < computerNumber){
                    document.getElementById('textOutput').innerHTML = 'Seu número é baixo';
                    document.getElementById('inputNumber').value='';
                    attempts++;
                    document.getElementById('attempts').innerHTML=attempts;
                }
                
                else{
                    document.getElementById('textOutput').innerHTML = 'PARABÉNS VOCÊ GANHOU';
                    attempts++;
                    document.getElementById('attempts').innerHTML=attempts;
                    document.getElementById('inputNumber').setAttribute('Readonly', 'Readonly');
                }
            }
            else{
                document.getElementById('textOutput').innerHTML = 'VOCÊ PERDEU ! O número era: '+computerNumber ;
                document.getElementById('inputNumber').setAttribute('Readonly', 'Readonly');
            }
        }
        
    }
    document.getElementById('guesses').innerHTML = userNumbers;
    console.log(userNumber)
    
    
}
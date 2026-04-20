
let heads = 0;
let tails = 0;

// function generatenumber(){
//     let odd = Math.random() < 0.5;
//     let number;
//     if(odd){
//         number = Math.floor(Math.random()*5)*2+1;
//     }
//     else{
//         number = Math.floor(Math.random()*5)*2+2;
//     }
//     document.getElementById(result).innerText = number;
// }
function flipCoin() {
    const coin = document.getElementById("coin");
    const result = document.getElementById("result");

    coin.classList.add("flip");

    setTimeout(() => {
        let number = Math.floor(Math.random() * 10) + 1;

        let flip;
        if (number % 2 === 1) {
            flip = "Heads";
            heads++;
            coin.style.backgroundImage = "url('heads.svg')";
        } else {
            flip = "Tails";
            tails++;
            coin.style.backgroundImage = "url('tails.svg')";
        }

        result.innerText = "Number: " + number;
        document.getElementById("heads").innerText = heads;
        document.getElementById("tails").innerText = tails;

        coin.classList.remove("flip");
    }, 1000);
}

document.getElementById("coin").style.backgroundImage = "url('heads.svg')";
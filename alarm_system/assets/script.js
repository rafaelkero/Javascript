
// Recupera do HTML o elemento com base no ID
let display = document.getElementById('display'); 
let min = document.getElementById('min');
let sec = document.getElementById('sec');
let start = document.getElementById('start');

//loop minutes
for (let i = 0; i<= 60; i++) {
    
    min.innerHTML+='<option value="'+ i + '">' + i + '</option>';
    
};
//loop seconds
for (let i = 1; i<= 60; i++) {

    sec.innerHTML+='<option value="'+i+'">'+i+'</option>';

};
// click event
start.addEventListener('click', function() {

    let minAtual = min.value;
    let secAtual = sec.value;
    
    display.childNodes[1].innerHTML = minAtual + ":" + secAtual;

    let interval = setInterval(function() {

        secAtual--;
        
        if(secAtual <= 0) {

            if(minAtual > 0) {

                minAtual--;

                secAtual = 59;

            } else {

                document.getElementById('sound').play();
                clearInterval(interval);
                alert("Acabou");
            };

        };

        display.childNodes[1].innerHTML = minAtual + ":" + secAtual;

    },1000);

});
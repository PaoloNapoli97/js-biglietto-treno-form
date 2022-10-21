

btnSubmit.addEventListener('click' , function() {
    var km = document.getElementById('km').value;
    console.log("Numero chilometri da percorrere: " , km);
    var person = document.getElementById('person').value;
    console.log("Nome e cognome passggero: " , person);

    let price = 0.21 * km;

    if(document.getElementById('selectage').value == "minorenne"){
        price = price * ( (100 - 20) / 100);
    }
    else if(document.getElementById('selectage').value == "over_65"){
        price =  price * ( (100 - 40) / 100);
    }



    const pricefix = price.toFixed(2);
    console.log("Costo biglietto: " , pricefix);
    document.querySelector("h4").innerHTML = pricefix;
});


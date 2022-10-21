

btnSubmit.addEventListener('click' , function() {
    var km = document.getElementById('km').value;
    console.log("Numero chilometri da percorrere: " , km);
    var person = document.getElementById('person').value;
    console.log("Nome e cognome passggero: " , person);

    let price = 0.21 * km;

    if(document.getElementById('selectage').value == "minorenne"){
        price = price * ( (100 - 20) / 100);
        document.getElementById('ticket-type').innerHTML = "Biglietto Minorenni";
    }
    else if(document.getElementById('selectage').value == "over_65"){
        price =  price * ( (100 - 40) / 100);
        document.getElementById('ticket-type').innerHTML = "Biglietto Over 65";
    }
    else{
        document.getElementById('ticket-type').innerHTML = "Biglietto Standard";
    }

    var name = person;

    const numberRandom = Math.floor(Math.random() * 10) + 1;
    const numberRandomCP = Math.floor(Math.random() * 999) + 9000;


    const pricefix = price.toFixed(2);
    console.log("Costo biglietto: " , pricefix);
    if(km == 0 ){
        document.getElementById('ticket').style.display = "none";
    }
    else{
        document.getElementById('pricefix').innerHTML = pricefix;
        document.getElementById('wagon').innerHTML = numberRandom;
        document.getElementById('cp-gen').innerHTML = numberRandomCP;
        document.getElementById('name').innerHTML = name;
        document.getElementById('ticket').style.display = "block";
    }      
});

btnRefresh.addEventListener('click', function() {
    window.location.reload();
});


let potatoprice1 = 0;
let onionprice2 = 0;
let tomatoprice3 = 0;

const vegPrices = {
    potato: 30,
    onion: 40,
    tomato: 25
};

let meatprice1 = 0;
let fishprice2 = 0;
let eggprice3 = 0;

const nonVegPrices = {
    meat: 120,
    fish: 80,
    egg: 86
};

let appleprice1 = 0;
let orangeprice2 = 0;
let mangoprice3 = 0;

const fruitPrices = {
    apple: 120,
    orange: 100,
    mango: 200
};



const potatoQtyInput = document.getElementById("potatoqty");
const potatoCheckbox = document.getElementById("potato");

potatoCheckbox.addEventListener("change", function() {
    if (potatoCheckbox.checked) {
        potatoQtyInput.removeAttribute("disabled");
    } else {
        potatoQtyInput.setAttribute("disabled", "true");
        potatoQtyInput.value = "";
    }
});



const onionQtyInput = document.getElementById("onionqty");
const onionCheckbox = document.getElementById("onion");

onionCheckbox.addEventListener("change", function() {
    if (onionCheckbox.checked) {
        onionQtyInput.removeAttribute("disabled");
    } else {
        onionQtyInput.setAttribute("disabled", "true");
        onionQtyInput.value = "";
    }
});



const tomatoQtyInput = document.getElementById("tomatoqty");
const tomatoCheckbox = document.getElementById("tomato")

tomatoCheckbox.addEventListener("change", function(){
    if(tomatoCheckbox.checked){
        tomatoQtyInput.removeAttribute("disabled");
    }else{
        tomatoQtyInput.setAttribute("disabled",true);
        tomatoQtyInput.value = "";
    }
});



const meatQtyInput = document.getElementById("meatqty");
const meatCheckbox = document.getElementById("meat");

meatCheckbox.addEventListener("change", function() {
    if (meatCheckbox.checked) {
        meatQtyInput.removeAttribute("disabled");
    } else {
        meatQtyInput.setAttribute("disabled", "true");
        meatQtyInput.value = "";
    }
});



const fishQtyInput = document.getElementById("fishqty");
const fishCheckbox = document.getElementById("fish")

fishCheckbox.addEventListener("change", function(){
    if(fishCheckbox.checked){
        fishQtyInput.removeAttribute("disabled");
    }else{
        fishQtyInput.setAttribute("disabled",true);
        fishQtyInput.value = "";
    }
});



const eggQtyInput = document.getElementById("eggqty");
const eggCheckbox = document.getElementById("egg")

eggCheckbox.addEventListener("change", function(){
    if(eggCheckbox.checked){
        eggQtyInput.removeAttribute("disabled");
    }else{
        eggQtyInput.setAttribute("disabled",true);
        eggQtyInput.value = "";
    }
});



const appleQtyInput = document.getElementById("appleqty");
const appleCheckbox = document.getElementById("apple")

appleCheckbox.addEventListener("change", function(){
    if(appleCheckbox.checked){
        appleQtyInput.removeAttribute("disabled");
    }else{
        appleQtyInput.setAttribute("disabled",true);
        appleQtyInput.value = "";
    }
});



const orangeQtyInput = document.getElementById("orangeqty");
const orangeCheckbox = document.getElementById("orange")

orangeCheckbox.addEventListener("change", function(){
    if(orangeCheckbox.checked){
        orangeQtyInput.removeAttribute("disabled");
    }else{
        orangeQtyInput.setAttribute("disabled",true);
        orangeQtyInput.value = "";
    }
});



const mangoQtyInput = document.getElementById("mangoqty");
const mangoCheckbox = document.getElementById("mango")

mangoCheckbox.addEventListener("change", function(){
    if(mangoCheckbox.checked){
        mangoQtyInput.removeAttribute("disabled");
    }else{
        mangoQtyInput.setAttribute("disabled",true);
        mangoQtyInput.value = "";
    }
});

potatoerror1 = document.getElementById('');
meaterror2 = document.getElementById('');
apple3 = document.getElementById('');



function submitform(action) {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    let atLeastOneChecked = false;
    
    checkboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            // document.getElementById('greet').innerHTML = "Please Visit Next Time";
            atLeastOneChecked = true;
        }
        
    });
    if (!atLeastOneChecked) {
        document.getElementById('error10').innerHTML = "Please Select at least one Item..................!";
        return;
    }
    if(action === 'submit'){
            if (potatoCheckbox.checked && (isNaN(parseFloat(potatoQtyInput.value)))){
                // selectcount++;
                let error1 = document.getElementById('error1').innerHTML = "Please Enter a Amount: ";
                alert("Please enter a valid quantity for Potatoes.");
                return;
            }

            if(onionCheckbox.checked &&(isNaN(parseFloat(onionQtyInput.value)))){
                // selectcount++;
                let error2 = document.getElementById('error2').innerHTML = "Please Enter a Amount: ";
                alert("Please enter a valid quantity for Onions.");
                return;
            }


            if(tomatoCheckbox.checked &&(isNaN(parseFloat(tomatoQtyInput.value)))){
                // selectcount++;
                let error3 = document.getElementById('error3').innerHTML = "Please Enter a Amount: ";
                alert("Please enter a valid quantity for Tomatos.");
                return;
            }

            if (meatCheckbox.checked && (isNaN(parseFloat(meatQtyInput.value)))){
                // selectcount++;
                let error4 = document.getElementById('error4').innerHTML = "Please Enter a Amount: ";
                alert("Please enter a valid quantity for Meats.");
                return;
            }
            if(fishCheckbox.checked &&(isNaN(parseFloat(fishQtyInput.value)))){
                // selectcount++;
                let error5 = document.getElementById('error5').innerHTML = "Please Enter a Amount: ";
                alert("Please enter a valid quantity for Fishs.");
                return;
            }

            if(eggCheckbox.checked &&(isNaN(parseFloat(eggQtyInput.value)))){
                // selectcount++;
                let error6 = document.getElementById('error6').innerHTML = "Please Enter a Amount: ";
                alert("Please enter a valid quantity for Eggs.");
                return;
            }

            if(appleCheckbox.checked && (isNaN(parseFloat(appleQtyInput.value)))){
                // selectcount++;
                let error7 = document.getElementById('error7').innerHTML = "Please Enter a Amount: ";
                alert("Please enter a valid quantity for Apples");
                return;
            }
            if(orangeCheckbox.checked &&(isNaN(parseFloat(orangeQtyInput.value)) )){
                // selectcount++;
                let error8 = document.getElementById('error8').innerHTML = "Please Enter a Amount: ";
                alert("Please enter a valid quantity for Oranges.");
                return;
            }

            if(mangoCheckbox.checked &&(isNaN(parseFloat(mangoQtyInput.value)))){
                // selectcount++;
                let error9 = document.getElementById('error9').innerHTML = "Please Enter a Amount: ";
                alert("Please enter a valid quantity for Mangos.");
                return;
            }

            let totalVegPrice = 0;

            if (document.getElementById("potato").checked) {
                if(potatoQtyInput.value){
                    potatoprice1 = vegPrices.potato * parseFloat(document.getElementById("potatoqty").value) || 0;
                    document.getElementById('pricepotato').innerHTML = "Potato Rs: "  + (potatoprice1.toFixed(2));
                    console.log(potatoprice1);
                }
                totalVegPrice += vegPrices.potato * parseFloat(document.getElementById("potatoqty").value) || 0;
            }

            if (document.getElementById("onion").checked) {
                if(onionQtyInput.value){
                    onionprice2 = vegPrices.onion * parseFloat(document.getElementById("onionqty").value) || 0;
                    document.getElementById("priceonion").innerHTML = "Onion Rs: " + (onionprice2.toFixed(2));
                    console.log(onionprice2);
                }
                totalVegPrice += vegPrices.onion * parseFloat(document.getElementById("onionqty").value) || 0;
                
            }

            if (document.getElementById("tomato").checked) {
                if(tomatoQtyInput.value){
                    tomatoprice3 = vegPrices.tomato * parseFloat(document.getElementById("tomatoqty").value) || 0;
                    document.getElementById('pricetomato').innerHTML = "Tomato Rs: " + (tomatoprice3.toFixed(2));
                    console.log(tomatoprice3);
                }
                totalVegPrice += vegPrices.tomato * parseFloat(document.getElementById("tomatoqty").value) || 0;
            }
            document.getElementById("veg1").innerHTML=totalVegPrice.toFixed(2);
            
            let totalNonVegPrice = 0;

            if (document.getElementById("meat").checked) {
                if(meatQtyInput.value){
                    meatprice1 = nonVegPrices.meat * parseFloat(document.getElementById("meatqty").value) || 0;
                    document.getElementById('pricemeat').innerHTML ="Meat Rs: " + (meatprice1.toFixed(2));
                    console.log(meatprice1);
                }
                totalNonVegPrice += nonVegPrices.meat * parseFloat(document.getElementById("meatqty").value) || 0;
            }

            if (document.getElementById("fish").checked) {
                if(fishQtyInput.value){
                    fishprice2 = nonVegPrices.fish * parseFloat(document.getElementById("fishqty").value) || 0;
                    document.getElementById('pricefish').innerHTML ="Fish Rs: " + (fishprice2.toFixed(2));
                }
                totalNonVegPrice += nonVegPrices.fish * parseFloat(document.getElementById("fishqty").value) || 0;
            }

            if (document.getElementById("egg").checked) {
                if(eggQtyInput.value){
                    eggprice3 = nonVegPrices.egg * parseFloat(document.getElementById("eggqty").value) || 0;
                    document.getElementById("priceegg").innerHTML ="Egg Rs: " + (eggprice3.toFixed(2));
                }
                totalNonVegPrice += nonVegPrices.egg * parseFloat(document.getElementById("eggqty").value) || 0;
            }

            document.getElementById("Nveg1").innerHTML=totalNonVegPrice


            let totalFruitPrice = 0;
            if (document.getElementById("apple").checked) {
                if(appleQtyInput.value){
                    appleprice1 = fruitPrices.apple * parseFloat(document.getElementById("appleqty").value) || 0;
                    document.getElementById("priceapple").innerHTML ="Apple Rs: " + (appleprice1.toFixed(2));
                }
                totalFruitPrice += fruitPrices.apple * parseFloat(document.getElementById("appleqty").value) || 0;
            }

            if (document.getElementById("orange").checked) {
                if(orangeQtyInput.value){
                    orangeprice2 = fruitPrices.orange * parseFloat(document.getElementById("orangeqty").value) || 0;
                    document.getElementById("priceorange").innerHTML ="Orange Rs: " + (orangeprice2.toFixed(2));
                }
                totalFruitPrice += fruitPrices.orange * parseFloat(document.getElementById("orangeqty").value) || 0;
            }

            if (document.getElementById("mango").checked) {
                if(mangoQtyInput.value){
                    mangoprice3 = fruitPrices.mango * parseFloat(document.getElementById("mangoqty").value) || 0;
                    document.getElementById("pricemango").innerHTML ="Mango Rs: " + (mangoprice3.toFixed(2));
                }
                totalFruitPrice += fruitPrices.mango * parseFloat(document.getElementById("mangoqty").value) || 0;
            }

            document.getElementById("Fruit2").innerHTML=totalFruitPrice


            let discount = 0;
            const Total1 = totalVegPrice + totalNonVegPrice + totalFruitPrice;
            const gstRate = 18;
            // let discount = (Total1 * 10) / 100;

            let discountinfo1 = "";
            // console.log(typeof Total1);

            if(Total1 >= 1000){
                // console.log("ENTER1");
                discount = (Total1 * 25) / 100;
                discountinfo1 = "-25% of discount applied for your order of Rs: " + discount;
                document.getElementById('discountinfo').textContent = discountinfo1;
            } else if(Total1 >= 300){
                // console.log("ENTER2");
                discount = (Total1 * 15)/ 100;
                discountinfo1 = "-15% of discount applied for your order of Rs: " + discount;
                document.getElementById('discountinfo').textContent = discountinfo1;
            } else if(Total1 >= 200){
                // console.log("ENTER3");
                discount = (Total1 * 10) / 100;
                discountinfo1 = "-10% of discount applied for your order of Rs: " + discount;    
                document.getElementById('discountinfo').textContent = discountinfo1;
            } else{
                // console.log("Enter4");
                discountinfo1 = "There is no discount below 200 if you placed an Order: " + discount;
                document.getElementById('discountinfo').textContent = discountinfo1
            }
            // console.log(discountinfo1);
            let discountedvalue = Total1 - discount;




        let gstAmount = (discountedvalue * gstRate) / 100;
        const grandTotalWithGST = discountedvalue + gstAmount;
        document.getElementById('totAmt').textContent = Total1.toFixed(2).toString();
        document.getElementById('discount').textContent = discount.toFixed(2).toString();
        // document.getElementById('discountinfo').textContent = discountinfo1;
        document.getElementById('GST').textContent = gstAmount.toFixed(2).toString();
        document.getElementById('Grand').textContent = grandTotalWithGST.toFixed(2).toString();
    } else if(action === 'reset'){
        window.location.reload();

        potatoQtyInput.value = "";
        potatoQtyInput.setAttribute("disabled", true);

        onionQtyInput.value = "";
        onionQtyInput.setAttribute("disabled", true);

        tomatoQtyInput.value = "";
        tomatoQtyInput.setAttribute("disabled", true);

        meatQtyInput.value = "";
        meatQtyInput.setAttribute("disabled", true);

        fishQtyInput.value = "";
        fishQtyInput.setAttribute("disabled", true);

        eggQtyInput.value = "";
        eggQtyInput.setAttribute("disabled", true);

        appleQtyInput.value = "";
        appleQtyInput.setAttribute("disabled", true);

        orangeQtyInput.value = "";
        orangeQtyInput.setAttribute("disabled", true);

        mangoQtyInput.value = "";
        mangoQtyInput.setAttribute("disabled", true);

        document.getElementById('pricepotato').innerHTML = "";
        document.getElementById('priceonion').innerHTML = "";
        document.getElementById('pricetomato').innerHTML = "";

        document.getElementById('pricemeat').innerHTML = "";
        document.getElementById('pricefish').innerHTML = "";
        document.getElementById('priceegg').innerHTML = "";

        document.getElementById('priceapple').innerHTML = "";
        document.getElementById('priceorange').innerHTML = "";
        document.getElementById('pricemango').innerHTML = "";

        document.getElementById('GST').innerHTML = "";

        document.getElementById('Fruit2').innerHTML = "";

        // const error10 = document.getElementById("error10");
        // error10.textContent = "";

        vegTotalSpan.innerHTML = "";
        nonVegTotalSpan.textContent = "";
        fruitTotalSpan.textContent = "";
        
        totalSpan.textContent = "";
        discountSpan.textContent = "";
        fruitTotalSpan.textContent = "";

        discountinSpan.textContent = "";
        grandTotalWithGST.textContent = "";

        potatoCheckbox.checked = false;
        onionCheckbox.checked = false;
        tomatoCheckbox.checked = false;
        
        meatCheckbox.checked = false;
        fishCheckbox.checked = false;
        eggCheckbox.checked = false;
        
        appleCheckbox.checked = false;
        mangoCheckbox.checked = false;
        orangeCheckbox.checked = false;

        clearErrorMessages();
    }
}


const vegTotalSpan = document.getElementById("veg1");
const nonVegTotalSpan = document.getElementById("Nveg1");
const fruitTotalSpan = document.getElementById("Fruit2");

const totalSpan = document.getElementById('totAmt');
const discountSpan = document.getElementById('discount');
const grandTotalSpan = document.getElementById("Grand");

const discountinSpan = document.getElementById("discountinfo");
const grandTotalWithGST = document.getElementById("Grand")


// const potatoCheckbox = document.getElementById("potato");
// const potatoQtyInput = document.getElementById("potatoqty");

// const onionCheckbox = document.getElementById("onion");
// const onionQtyInput = document.getElementById("onionqty");

// Add similar declarations for other checkboxes and quantity inputs


function clearErrorMessages() {
    const error1 = document.getElementById("error1");
    const error2 = document.getElementById("error2");
    const error3 = document.getElementById("error3");

    const error4 = document.getElementById("error4");
    const error5 = document.getElementById("error5");
    const error6 = document.getElementById("error6");

    const error7 = document.getElementById("error7");
    const error8 = document.getElementById("error8");
    const error9 = document.getElementById("error9");


    error1.textContent = "";
    error2.textContent = "";
    error3.textContent = "";

    error4.textContent = "";
    error5.textContent = "";
    error6.textContent = "";

    error7.textContent = "";
    error8.textContent = "";
    error9.textContent = "";

    const error10 = document.getElementById("error10");
    error10.textContent = "";
}
 
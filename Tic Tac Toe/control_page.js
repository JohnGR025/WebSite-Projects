let change = 0;
let win = [];

    document.getElementById("box1").onclick = function() {
        if(change % 2 === 0){
            document.getElementById("text1").textContent = "x";
            win.push("box1x");
            const color1 = document.getElementById("text1")
            color1.style.color = "red";
        };
        if(change % 2 !== 0){
            document.getElementById("text1").textContent = "o";
            win.push("box1o");
            const color1 = document.getElementById("text1")
            color1.style.color = "blue";
        }
        change+=1
        box1.onclick = null;
        checkwinner1();
        checkwinner2();
    };

    document.getElementById("box2").onclick = function() {
        if(change % 2 === 0){
            document.getElementById("text2").textContent = "x";
            win.push("box2x");
            const color2 = document.getElementById("text2")
            color2.style.color = "red";
        };
        if(change % 2 !== 0){
            document.getElementById("text2").textContent = "o";
            win.push("box2o");
            const color2 = document.getElementById("text2")
            color2.style.color = "blue";
        }
        change+=1
        box2.onclick = null;
        checkwinner1();
        checkwinner2();
    };

    document.getElementById("box3").onclick = function() {
        if(change % 2 === 0){
            document.getElementById("text3").textContent = "x";
            win.push("box3x");
            const color3 = document.getElementById("text3")
            color3.style.color = "red";
        };
        if(change % 2 !== 0){
            document.getElementById("text3").textContent = "o";
            win.push("box3o");
            const color3 = document.getElementById("text3")
            color3.style.color = "blue";
        }
        change+=1
        box3.onclick = null;
        checkwinner1();
        checkwinner2();
    };

    document.getElementById("box4").onclick = function() {
        if(change % 2 === 0){
            document.getElementById("text4").textContent = "x";
            win.push("box4x");
            const color4 = document.getElementById("text4")
            color4.style.color = "red";
        };
        if(change % 2 !== 0){
            document.getElementById("text4").textContent = "o";
            win.push("box4o");
            const color4 = document.getElementById("text4")
            color4.style.color = "blue";
        }
        change+=1
        box4.onclick = null;
        checkwinner1();
        checkwinner2();
    };

    document.getElementById("box5").onclick = function() {
        if(change % 2 === 0){
            document.getElementById("text5").textContent = "x";
            win.push("box5x");
            const color5 = document.getElementById("text5")
            color5.style.color = "red";
        };
        if(change % 2 !== 0){
            document.getElementById("text5").textContent = "o";
            win.push("box5o");
            const color5 = document.getElementById("text5")
            color5.style.color = "blue";
        }
        change+=1
        box5.onclick = null;
        checkwinner1();
        checkwinner2();
    };

    document.getElementById("box6").onclick = function() {
        if(change % 2 === 0){
            document.getElementById("text6").textContent = "x";
            win.push("box6x");
            const color6 = document.getElementById("text6")
            color6.style.color = "red";
        };
        if(change % 2 !== 0){
            document.getElementById("text6").textContent = "o";
            win.push("box6o");
            const color6 = document.getElementById("text6")
            color6.style.color = "blue";
        }
        change+=1
        box6.onclick = null;
        checkwinner1();
        checkwinner2();
    };

    document.getElementById("box7").onclick = function() {
        if(change % 2 === 0){
            document.getElementById("text7").textContent = "x";
            win.push("box7x");
            const color7 = document.getElementById("text7")
            color7.style.color = "red";
        };
        if(change % 2 !== 0){
            document.getElementById("text7").textContent = "o";
            win.push("box7o");
            const color7 = document.getElementById("text7")
            color7.style.color = "blue";
        }
        change+=1
        box7.onclick = null;
        checkwinner1();
        checkwinner2();
    };

    document.getElementById("box8").onclick = function() {
        if(change % 2 === 0){
            document.getElementById("text8").textContent = "x";
            win.push("box8x");
            const color8 = document.getElementById("text8")
            color8.style.color = "red";
        };
        if(change % 2 !== 0){
            document.getElementById("text8").textContent = "o";
            win.push("box8o");
            const color8 = document.getElementById("text8")
            color8.style.color = "blue";
        }
        change+=1
        box8.onclick = null;
        checkwinner1();
        checkwinner2();
    };

    document.getElementById("box9").onclick = function() {
        if(change % 2 === 0){
            document.getElementById("text9").textContent = "x";
            win.push("box9x");
            const color9 = document.getElementById("text9")
            color9.style.color = "red";
        };
        if(change % 2 !== 0){
            document.getElementById("text9").textContent = "o";
            win.push("box9o");
            const color9 = document.getElementById("text9")
            color9.style.color = "blue";
        }
        change+=1
        box9.onclick = null;
        checkwinner1();
        checkwinner2();
    };

function checkwinner1(){
    if((win.includes("box1x") && win.includes("box2x") && win.includes("box3x")) || 
    (win.includes("box4x") && win.includes("box5x") && win.includes("box6x")) || 
    (win.includes("box7x") && win.includes("box8x") && win.includes("box9x")) ||
    (win.includes("box1x") && win.includes("box4x") && win.includes("box7x")) ||
    (win.includes("box2x") && win.includes("box5x") && win.includes("box8x")) ||
    (win.includes("box3x") && win.includes("box6x") && win.includes("box9x")) ||
    (win.includes("box1x") && win.includes("box5x") && win.includes("box9x")) ||
    (win.includes("box3x") && win.includes("box5x") && win.includes("box7x"))){
        document.getElementById("winner").innerHTML = "Winner: Player 1";
}
}
function checkwinner2(){
    if((win.includes("box1o") && win.includes("box2o") && win.includes("box3o")) || 
    (win.includes("box4o") && win.includes("box5o") && win.includes("box6o")) || 
    (win.includes("box7o") && win.includes("box8o") && win.includes("box9o")) ||
    (win.includes("box1o") && win.includes("box4o") && win.includes("box7o")) ||
    (win.includes("box2o") && win.includes("box5o") && win.includes("box8o")) ||
    (win.includes("box3o") && win.includes("box6o") && win.includes("box9o")) ||
    (win.includes("box1o") && win.includes("box5o") && win.includes("box9o")) ||
    (win.includes("box3o") && win.includes("box5o") && win.includes("box7o"))){
        document.getElementById("winner").innerHTML = "Winner: Player 2";
}
}
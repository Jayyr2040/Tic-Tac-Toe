let isItX = true;
let counter = [1,4,7];

const isIt = (event) => {
    const $target = $(event.currentTarget);
    if (isItX === true) {
        $target.text("X");
        isItX = false;
        }
        else if (isItX === false){
        $target.text("O");
        isItX = true;
        }
    checkWinner(event);
    
 
}

const isFilled = (event) => {
    const $target = $(event.currentTarget);
    if ($target.text() !== "") {
        }
    else if ($target.text() === ""){
        isIt(event);
        }
}

const checkWinner = (event) => {
    const $target = $(event.currentTarget);
    const result = checkHorizontal(event);
    const result2 = checkVertical(event);
    const result3 = checkDiagonal(event);
    if (result !== ""){
    alert(result);
    render();
    }
    if (result2 !== ""){
    alert(result2);
    render();
    }
    if (result3 !== ""){
    alert(result3);
    render();
        }
    if (checkfull()) {
    alert("Draw, restart");
    render();
    }
 
}

const checkfull = () => {
    let checkcounter = 0;
    for (let i=1;i<10;i++){
        if ($(`#${i}`).text() !== "" ) { checkcounter += 1}
    }
    if (checkcounter === 9) {
        return true
    }
    return false
}

const checkHorizontal = (event) => {
    const $target = $(event.currentTarget);
    const position = $target.attr("id");
    const row = Math.ceil(position / 3);
    if (($(`#${counter[row-1]}`).text() === 'X') && ($(`#${counter[row-1]+1}`).text() === 'X' ) && ($(`#${counter[row-1]+2}`).text() === 'X' )){
            return ("X Win!") 
        }
    else if (($(`#${counter[row-1]}`).text() === 'O') && ($(`#${counter[row-1]+1}`).text() === 'O' ) && ($(`#${counter[row-1]+2}`).text() === 'O' )){
            return ("O Win!") 
        }

        return "";

    }

const checkVertical = (event) => {
        const $target = $(event.currentTarget);
        const position = $target.attr("id");
        const col = position - (3* (Math.ceil(position / 3) - 1));
        if (($(`#${col}`).text() === 'X') && ($(`#${col+3}`).text() === 'X' ) && ($(`#${col+6}`).text() === 'X' )){
                return ("X Win!") 
            }
        else if (($(`#${col}`).text() === 'O') && ($(`#${col+3}`).text() === 'O' ) && ($(`#${col+6}`).text() === 'O' )){
                return ("O Win!") 
            }
            return "";
        }

const checkDiagonal = () => {
    //const $target = $(event.currentTarget);
    //const position = $target.attr("id");
    if (($("#1").text() === 'X') && ($("#5").text() === 'X' ) && ($("#9").text() === 'X' )){
        return ("X Win!") 
    }
else if (($("#1").text() === 'O') && ($("#5").text() === 'O' ) && ($("#9").text() === 'O' )){
        return ("O Win!") 
    }
    else if (($("#3").text() === 'X') && ($("#5").text() === 'X' ) && ($("#7").text() === 'X' )){
        return ("X Win!") 
    }
    else if (($("#3").text() === 'O') && ($("#5").text() === 'O' ) && ($("#7").text() === 'O' )){
        return ("O Win!") 
    }
    return "";

}



const printX = (event) => {
    const $target = $(event.currentTarget);
    isFilled(event);

    //isIt(event);
    $target.css("font-size","90px");
    $target.css("text-align","center");
    $target.css("display","flex");
    $target.css("align-items","center");
    $target.css("justify-content","center");
    $target.css("flex-direction","column");
    $target.css("overflow","hidden");
    

}


const render = () => {
    const $body = $('body');
    $body.empty();
    $body.append($('<h1>').text("Tic Tac Toe"));
    for (let i = 10; i < 13; i++){
        const $div = $('<div>');
        $body.append($div.addClass("gameBoard").attr("id",`${i}`));
        for (let j = counter[i-10]; j < (counter[i-10] + 3); j++){
            const $div = $('<div>');
            $(`#${i}`).append($div.addClass("gameBox").on("click", printX).attr("id",j));
        }
}
}

const main = () => {
render();

}

$(main);
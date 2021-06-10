let isItX = true;

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
}

const isFilled = (event) => {
    const $target = $(event.currentTarget);
    if ($target.text() !== "") {
        }
    else if ($target.text() === ""){
        isIt(event);
        }
}

const printX = (event, isItX) => {
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
    for (let i = 10; i < 13; i++){
        const $div = $('<div>');
        $body.append($div.addClass("gameBoard").attr("id",`${i}`));
        for (let j = 1; j < 4; j++){
            const $div = $('<div>');
            $(`#${i}`).append($div.addClass("gameBox").on("click", printX));
    }
}
}



const main = () => {
render();

}

$(main);
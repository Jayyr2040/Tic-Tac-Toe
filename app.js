const render = () => {
    const $body = $('body');
    for (let i = 10; i < 13; i++){
        const $div = $('<div>');
        $body.append($div.addClass("gameBoard").attr("id",`${i}`));
        for (let j = 1; j < 4; j++){
            const $div = $('<div>');
            $(`#${i}`).append($div.addClass("gameBox").on("click", () => {console.log("hi")}));
    }
}
}

const main = () => {
render();

}

$(main);
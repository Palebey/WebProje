function SakaGetir(){
    const settings = {
    async: true,
    crossDomain: true,
    url: 'https://official-joke-api.appspot.com/random_joke',
    method: 'GET',
};

$.ajax(settings).done(function (response) {
    $("#saka").text(response.punchline);
});
}
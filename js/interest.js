function SakaGetir(){
<<<<<<< HEAD
    const jokeApiUrl = 'https://official-joke-api.appspot.com/random_joke';
    const translateApiUrl = 'https://libretranslate.de/translate';

    // İlk olarak şakayı İngilizce olarak çekiyoruz
    $.ajax({
        url: jokeApiUrl,
        method: 'GET',
        success: function(response) {
            const jokeInEnglish = response.setup + " " + response.punchline;

            // Şakayı Türkçeye çevirmek için LibreTranslate API'ına istek gönderiyoruz
            $.ajax({
                url: translateApiUrl,
                method: 'POST',
                contentType: 'application/json',
                data: JSON.stringify({
                    q: jokeInEnglish,
                    source: 'en',
                    target: 'tr',
                    format: 'text'
                }),
                success: function(translationResponse) {
                    const translatedJoke = translationResponse.translatedText;
                    $("#saka").text(translatedJoke);
                },
                error: function(error) {
                    console.error("Çeviri API hatası:", error);
                    $("#saka").text("Şaka getirilemedi. Lütfen daha sonra tekrar deneyin.");
                }
            });
        },
        error: function(error) {
            console.error("Şaka API hatası:", error);
            $("#saka").text("Şaka getirilemedi. Lütfen daha sonra tekrar deneyin.");
        }
    });
=======
    const settings = {
    async: true,
    crossDomain: true,
    url: 'https://official-joke-api.appspot.com/random_joke',
    method: 'GET',
};

$.ajax(settings).done(function (response) {
    $("#saka").text(response.punchline);
});
>>>>>>> 0430bccebc594ae93253509c18a19e9a98e71e97
}
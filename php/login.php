<?php

if ($_POST) {
    $username = $_POST["username"];
    $password = $_POST["password"];

    $usernameKey = "akif.yaman@sakarya.edu.tr";
    $passwordKey = "b221210003";

    if ($username == $usernameKey && $password == $passwordKey) {
        
        echo "<h1>Hoşgeldiniz $username</h1>";
        header("refresh:3 ; url= ../about.html");
    } else {
        // Başarısız giriş durumunda
        echo "<h1>Hatalı kullanıcı adı veya şifre. Lütfen tekrar deneyin.</h1>";
        header("refresh:3 ; url= ../login.html");
    }
}

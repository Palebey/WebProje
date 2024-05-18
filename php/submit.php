<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // JSON verisini al
    $data = json_decode(file_get_contents('php://input'), true);

    // Verileri işleyin (örneğin, veritabanına kaydedin, e-posta gönderin vs.)
    // Bu örnekte, sadece başarı mesajı döndürülecek.

    echo json_encode(['message' => 'Form başarıyla gönderildi.', 'data' => $data]);
} else {
    echo json_encode(['message' => 'Geçersiz istek.']);
}

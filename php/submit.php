<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // JSON verisini al
    $data = json_decode(file_get_contents('php://input'), true);


    echo json_encode(['message' => 'Form başarıyla gönderildi.', 'data' => $data]);
} else {
    echo json_encode(['message' => 'Geçersiz istek.']);
}

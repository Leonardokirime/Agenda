function gerarQRCode() {
    const qrInput = document.getElementById("qrInput").value.trim();
    const qrImage = document.getElementById('qrCodeImage'); // ID corrigido para 'qrCodeImage'

    if(qrInput === "") {
        alert("Por favor, insira o texto ou URL para gerar o código QR");
        return;
    }
    
    const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(qrInput)}`;

    qrImage.src = apiUrl;
}
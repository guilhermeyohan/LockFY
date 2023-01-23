function encryptMessage() {
    var plaintext = document.getElementById("plaintext").value;
    var ciphertext = CryptoJS.AES.encrypt(plaintext, 'password');
    document.getElementById("ciphertext").innerHTML = ciphertext;
  }
  function decryptMessage() {
var ciphertext = document.getElementById("ciphertext").innerHTML;
var bytes  = CryptoJS.AES.decrypt(ciphertext.toString(), 'password');
var plaintext = bytes.toString(CryptoJS.enc.Utf8);
document.getElementById("dec").value = plaintext;
}

function copyText() {
  var text = document.getElementById("ciphertext");
  var textArea = document.createElement("textarea");
  textArea.value = text.textContent;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  textArea.remove();
  alert("Texto copiado com sucesso!");
}
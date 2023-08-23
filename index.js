const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzضصثقفغعهخحجدذطكمنتالبيسشئءؤرلاىةوزظ0123456789.,?!'_-&@#$%*()/:<>|+= ";

// Encryption function
function encryptText(text, key) {
    let encryptedText = "";

    for (let i = 0; i < text.length; i++) {
        const textChar = text[i];
        const keyChar = key[i % key.length];

        const textIndex = alphabet.indexOf(textChar);
        const keyIndex = alphabet.indexOf(keyChar);

        if (textIndex === -1) {
            encryptText += textChar;
        } else {
            const newIndex = (textIndex + keyIndex) % alphabet.length;
            encryptedText += alphabet[newIndex];
        }
    }

    return encryptedText;
}

// Decrypt function
function decryptText(encryptedText, key) {
    let decryptedText = "";

    for (let i = 0; i < encryptedText.length; i++) {
        const encryptedChar = encryptedText[i];
        const keyChar = key[i % key.length];

        const encryptedIndex = alphabet.indexOf(encryptedChar);
        const keyIndex = alphabet.indexOf(keyChar);

        if (encryptedText === -1) {
            decryptedText += encryptedChar;
        } else {
            let newIndex = encryptedIndex - keyIndex;
            if (newIndex < 0) newIndex += alphabet.length;
            decryptedText += alphabet[newIndex];
        }
    }

    return decryptedText;
}

// Update result based on selected operation (enc or dec)
function updateResult(isEncrypting) {
    const text = document.getElementById("message").value;
    const key = document.getElementById("key").value;

    let result = "";

    if (isEncrypting) {
        result = encryptText(text, key);
    } else {
        result = decryptText(text, key);
    }

    document.getElementById("result").textContent = result;
}

// Add event listeners to buttons
document.getElementById("enc-btn").addEventListener('click', function () {
    updateResult(true);
});

document.getElementById("dec-btn").addEventListener('click', function () {
    updateResult(false);
});

// Initialize the result with encrypted text when page loads
document.addEventListener('DOMContentLoaded', () => {
    updateResult(true);
});
////////Button copie
const copyText = document.querySelector(".copy-text");
const btnCopy = document.querySelector(".btn-copy");
const pasteText = document.querySelector(".pasteText");
btnCopy.addEventListener('click', function() {
    copyText.select();
    if (document.execCommand("copy")) {
        // 
        
    } else {
        alert("حدث خطأ أثناء النسخ.");
    }
});
//ticop()
function ticop(){
const originalText = 'COPY';
const newText = 'COPIED';

// تعيين النص الأصلي للزر
btnCopy.textContent = originalText;

// التبديل بين النصوص بعد النقر
btnCopy.addEventListener('click', function() {
    // قم بتحديث نص الزر إلى النص الجديد
    btnCopy.textContent = newText;
    btnCopy.style.border = '1px solid #4444ca';
    btnCopy.style.color = '#4444ca';
    btnCopy.style.backgroundColor = 'white';

    // استرجاع النص الأصلي بعد فترة زمنية قصيرة (مثلاً 2 ثواني)
    setTimeout(function() {
        btnCopy.textContent = originalText;
        btnCopy.style.color = 'white';
        btnCopy.style.backgroundColor = '#4444ca';
        
    }, 2000); // تعيين المدة بالمللي ثانية (هنا 2000 مللي ثانية أي ما يعادل 2 ثانية)
});
}
//language



function loadGoogleTranslate()
{

	google.translate.TranslateElement("myid")

}









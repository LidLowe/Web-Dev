function checkSpam(text) {
    text = text.toLowerCase();

    return text.toLowerCase().includes("viagra") ||
        text.toLowerCase().includes("xxx");
}

alert(checkSpam('buy ViAgRA now'));
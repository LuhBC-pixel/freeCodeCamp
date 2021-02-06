function rot13(str) {
    const arr = str.split('');

    let stringDecode = '';

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].charCodeAt() >= 65 && arr[i].charCodeAt() <= 90) {
            if (arr[i].charCodeAt() > 77) {
                stringDecode += String.fromCharCode(arr[i].charCodeAt() - 13);
            } else {
                stringDecode += String.fromCharCode(arr[i].charCodeAt() + 13);
            }
        } else {
            stringDecode += arr[i];
        }
    }

    return stringDecode;
}

rot13("SERR PBQR PNZC");
rot13("SERR CVMMN!");
rot13("SERR YBIR?");
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");
const APICall = {
    callAPI() {
        fetch("https://myAPI.com/clients");
    }
}

function greedyGame(slice1, slice2) {
    if(slice1 + slice2 > 100) {
        return 0
    }else{
        return slice1 + slice2;
    }
}

function getFirstClient(){
    //call API
    const call = APICall.callAPI();

    return call[0];
}

function shortenString(str, maxLength = 10) {
    if(str.length <= maxLength){
        return str;
    }else {
        return str.slice(0, maxLength - 3) + "...";
    }
}

function formatFileSize (size) {
    var format = ["Bytes", "KB", "MB", "GB"];
    let i = 0;

    while(size > 900) {
        size /= 1024;
        i++;
    }

    return Math.round(size * 100)/100 + " " + format[i];
}

module.exports = {APICall, formatFileSize, greedyGame, getFirstClient, shortenString}
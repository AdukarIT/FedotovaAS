function getTime (day, hour, min) {
    result = day * 86400 +  hour * 3600 + min * 60;
    displaySeconds(result);
}
function displaySeconds(second) {
    return console.log(second);
}
// хорошо

function isitmonday() {
    var date = new Date();
    var day = date.getDay()
    console.log(date);
    console.log(day);
    if (day == 1) {
        document.getElementById('answer').innerHTML = "YES";
    } else {
        document.getElementById('answer').innerHTML = "NO";
    }
}

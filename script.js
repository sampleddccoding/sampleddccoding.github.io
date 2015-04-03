function findSchool(cityName) {
    console.log(cityName);
    if (cityName == "New York") {
       return "You should go to Columbia!";
    } else if (cityName == "Washington") {
        return "You should go to Georgetown!";
    } else if (cityName == "Boston") {
        return "You should go to BU!";
    } else {
        return "I don't know where you should go!";
    }
}

$("#findschool").click(function() {
    var cityName = $("#schoolname").val();
    var school = findSchool(cityName);
    $("#school").text(school);
});

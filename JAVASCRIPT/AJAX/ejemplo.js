let url = "php.php";
let data = {
    "firstName": "John",
    "lastName": "Doe"
}
$.ajax({
    type: "POST",
    url: url,
    data: data,
    success: function(argument) {
        console.log(argument.Peter);
    },
    dataType: "json"
});
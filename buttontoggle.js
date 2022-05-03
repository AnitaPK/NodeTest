$(document).ready(function() {
        $("button").click(function() {
            console.log($(this).text())
            if ($(this).text() == "ON") {
                $(this).text("OFF");
            } else if ($(this).text() == "OFF") {
                $(this).text("ON");
            }
        });
 });

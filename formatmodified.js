    var dates = "<data:post.lastUpdatedISO8601/>";
    var dateu = new Date(dates);
    var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    document.getElementById("updatedateinfo").innerHTML = "" + dateu.getDate() + months[dateu.getMonth()] + dateu.getFullYear();

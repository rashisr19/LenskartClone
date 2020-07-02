function sortPrice()
{
    var list = document.getElementById("sorting");
    var i;
    var arr = [];
    
    arr[0] = document.getElementById("card1");
    arr[1] = document.getElementById("card2");
    arr[2] = document.getElementById("card3");
    arr[3] = document.getElementById("card4");
    arr[4] = document.getElementById("card5");
    arr[5] = document.getElementById("card6");
    arr[6] = document.getElementById("card7");
    arr[7] = document.getElementById("card8");
    arr[8] = document.getElementById("card9");

    arr.sort(function(a,b) {
        if(list.options[list.selectedIndex].value == "lth")
            return (a.getAttribute("value") - b.getAttribute("value")) ;
        if(list.options[list.selectedIndex].value == "htl")
        return (b.getAttribute("value") - a.getAttribute("value")) ;

    });

    console.log(arr);

    $(document).ready(function() {
        $('.new').html('');
        i = 0;
        arr.forEach(function() {
            $('.new').append('<div class="col mb-4">'+arr[i++].outerHTML+'');
        });
    });
}
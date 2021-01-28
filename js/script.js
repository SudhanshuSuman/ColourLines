// Palette
const p1 = ["#002447", "#003F7D", "#E1E3E7", "#FF8E00", "#FF5003"];
const p2 = ["#CC2DAC", "#FF0250", "#00FF65", "#6A9997", "#0CCCC5"];
const p3 = ["#34c8d5","#fb5607","#ff006e","#ffbe0b","#3ec300"]
const p4 = ["#ffbe0b","#fb5607","#ff006e","#8338ec","#3a86ff"];
const p5 = ["#390099","#9e0059","#ff0054","#ff5400","#ffbd00"];
const p6 = ["#471ca8","#884ab2","#ff930a","#f24b04","#d1105a"];
const p7 = ["#002447", "#003F7D", "#E1E3E7", "#FF8E00", "#FF5003",
            "#CC2DAC", "#FF0250", "#00FF65", "#6A9997", "#0CCCC5",
            "#ffbe0b","#fb5607","#ff006e","#8338ec","#3a86ff"]


// To pick colour from the palette
function randomPicker(a) {
    return a[Math.floor(Math.random() * a.length)];
}
function colorSelector(s) {
    if(s==1)
        return randomPicker(p1);
    else if(s==2)
        return randomPicker(p2);
    else if(s==3)
        return randomPicker(p3);
    else if(s==4)
        return randomPicker(p4);
    else if(s==5)
        return randomPicker(p5);
    else if(s==6)
        return randomPicker(p6);
    else
        return randomPicker(p7);
}


// Forms lines of specified size
var formLines = function () {
    var all = document.getElementsByClassName("line");
    for(var el of all)
    {
        var type = parseFloat($(el).attr("class").split(" ")[1].replace("s", ""));
        var temp = (type*13)+"%";
        $(el).css('width', temp);
        $(el).css('background-color', colorSelector(type));
        // console.log(colorSelector(type));
    }
}


// To change colour of the lines
var changeColour = function () {
    var all = document.getElementsByClassName("line");
    for(var el of all)
    {
        var type = parseFloat($(el).attr("class").split(" ")[1].replace("s", ""));
        // var temp = (type*13)+"%";
        // $(el).css('width', temp);
        $(el).css('background-color', colorSelector(type));
        // console.log(colorSelector(type));
    }
}
formLines();
changeColour();
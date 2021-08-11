function is_between(number, left, right){

    return number > left && number < right;
}

function change_bckg_color(elem){

    var html = document.documentElement;
    var limits_and_colors = [[600, 600, "rgb(220, 230, 268)"], 
                             [500, 500, "red"], 
                             [400, 400, "rgb(240, 250, 288)"], 
                             [300, 300, "rgb(250, 260, 298)"]];

    var default_color = "rgb(217, 220, 248)";

    if (html.clientHeight > limits_and_colors[0][0] && html.clientWidth > limits_and_colors[0][1]) {

        elem.style.backgroundColor = default_color;
        //return;
        
    }

    for (let index = 0; index < limits_and_colors.length - 1; index++) 
    {  
       
        if (is_between(html.clientWidth, limits_and_colors[index + 1][0], limits_and_colors[index][0])) {

            
            
        }
        
    }
}


var body = document.querySelector("body");

window.addEventListener("resize", event => {change_bckg_color(body);});

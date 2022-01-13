
    let item1 = document.getElementById('item_1').style;
    let item2 = document.getElementById('item_2').style;

    item2.display="none"

function burger_button_clicked() {


 
let go = document.getElementById('responsive_child_menu').style;

if(go.display == "none"){
    go.display = "flex";

    item1.display="none"
    item2.display="flex"
}else{
    go.display = "none";

    item1.display="flex"
    item2.display="none"
}


}  


/*


item1.display="none"
    item2.display="flex"


*/
var menu_list_array=["Chicken Tandoori","Extra Cheese Fun","Yummy Spice","Manchow Tandka"]
function getmenu(){
    var htmldata;
    htmldata="<ol class='menulist'>"
    menu_list_array.sort();
    for(i=0;i<menu_list_array;i++){
        htmldata=htmldata+"<li>"+menu_list_array[i]+"</li>"
    }
    htmldata=htmldata+"</ol>"
    document.getElementById("display_menu").innerHTML=htmldata;
}

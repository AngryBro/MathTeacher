function OpenList(id) {              
    var list = document.getElementById(id);
    if(list.hidden) {
        list.hidden = false;
    }
    else {
        list.hidden = true;
    }
}
function OpenList(id) {              
    var list = document.getElementById(id);
    if(list.hidden) {
        list.hidden = false;
    }
    else {
        list.hidden = true;
    }
}

function CloseLists(id1, id2, id3) {
    var lists = [3];
    lists[0] = document.getElementById(id1);
    lists[1] = document.getElementById(id2);
    lists[2] = document.getElementById(id3);
    for(var i = 0; i<3; i++) {
        lists[i].hidden = true;
    }
}

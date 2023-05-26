var item=(document.getElementsByClassName('title'))
item[0].style.fontWeight='bold';
item[0].style.color='green';

var itemgrp=(document.getElementsByClassName('list-group-item'))
itemgrp[2].style.backgroundColor='green'
for(var i=0;i<itemgrp.length;i++){
    itemgrp[i].style.fontWeight='bold'; 
}
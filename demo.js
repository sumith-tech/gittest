// var item=(document.getElementsByClassName('title'))
// item[0].style.fontWeight='bold';
// item[0].style.color='green';

// var itemgrp=(document.getElementsByClassName('list-group-item'))
// itemgrp[2].style.backgroundColor='green'
// for(var i=0;i<itemgrp.length;i++){
//     itemgrp[i].style.fontWeight='bold'; 
// }

var list2=document.querySelectorAll('.list-group-item')
list2[1].style.color='green'
var odd=document.querySelectorAll('li:nth-child(odd)')
var thirditem=document.querySelector('.list-group-item:nth-child(3)');
thirditem.style.color='green'

for(var i=0;i<odd.length;i++)
{
    odd[i].style.backgroundColor='green'
}


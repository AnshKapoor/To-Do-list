function adder(){
var value = document.getElementById('list').value;
if(value){
creator(value);




}


}
function creator(value){
var list= document.createElement('li');
list.innerText=value;
var parent= document.getElementById('todo');
parent.appendChild(list);
var buttons= document.getElementById(buttons);
buttons.appendChild(list);






}
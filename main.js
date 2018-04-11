function adder(){
var value = document.getElementById('list').value;
if(value){
    console.log(value);
creator(value);
}
else{alert('Please enter some task')}

}
function creator(value){
var list= document.createElement('li');
list.innerText=value;
var button1= document.createElement('button');
var button2= document.createElement('button');
button1.classList.add("remove");
button2.classList.add("delete");
button1.innerHTML='<svg  height="20px" id="Layer_1" version="1.1" viewBox="0 0 512 512" width="20px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><path d="M444.852,66.908h-99.339V47.04c0-21.943-17.792-39.736-39.736-39.736h-99.339   c-21.944,0-39.736,17.793-39.736,39.736v19.868H67.363v19.868h20.47l19.887,377.489c0,21.944,17.792,39.736,39.736,39.736h218.546   c21.944,0,39.736-17.792,39.736-39.736l19.538-377.489h19.577V66.908z M186.57,47.04c0-10.962,8.926-19.868,19.868-19.868h99.339   c10.962,0,19.868,8.906,19.868,19.868v19.868H186.57V47.04z M385.908,463.236l-0.039,0.505v0.524   c0,10.943-8.906,19.868-19.868,19.868H147.455c-10.942,0-19.868-8.925-19.868-19.868v-0.524l-0.019-0.523L107.72,86.776h297.669   L385.908,463.236z" fill="#37404D"/><rect fill="#37404D" height="317.885" width="19.868" x="246.173" y="126.511"/><polygon fill="#37404D" points="206.884,443.757 186.551,126.493 166.722,127.753 187.056,445.017  "/><polygon fill="#37404D" points="345.649,127.132 325.82,125.891 305.777,443.776 325.606,445.017  "/></g></svg>';
button2.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" height="20px" width="20px" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve"><g><path fill-rule="evenodd" clip-rule="evenodd" d="M39.363,79L16,55.49l11.347-11.419L39.694,56.49L72.983,23L84,34.085L39.363,79z"></path></g></svg>';
list.appendChild(button1);
list.appendChild(button2);
list.classList.add('listyle');
list.id="parentDiv";
button2.id="childDiv";

document.body.appendChild(list);
button2.onclick=function(){

  var x=  document.getElementById('parentDiv');
 if(confirm('Do you want to remove this item?'))
  x.parentNode.removeChild(x);
    
}



var parent = document.getElementById('todo');
parent.appendChild(list);

}


const btn = document.querySelector('.addBtn'),
   list = document.querySelector('#list');
let myLis;
function local() {
   myLis = list.innerHTML;
   localStorage.setItem('myLis', myLis);
}
list.addEventListener('click', (e) => {
   let li = document.querySelector('li');
   if(e.target.tagName === 'LI') {
      e.target.classList.toggle('checked');
      local();
   } else if(e.target.tagName === 'SPAN') {
      let div = e.target.parentNode;
      div.remove();
      local();
   }
});
const newElements = () => {
   let li = document.createElement('li');
   let input = document.querySelector('#enter').value;
   let t = document.createTextNode(input);
   li.appendChild(t);
   if(input == '') {
      alert('Надо что-то набрать');
   } else {
      list.appendChild(li);

   }
   document.querySelector('#enter').value = '';
   let span = document.createElement('SPAN');
   let txt = document.createTextNode('X');
   span.classList.add('close');
   span.appendChild(txt);
   li.appendChild(span);
   local()
}

if(localStorage.getItem('myLis')) {
   list.innerHTML = localStorage.getItem('myLis');
}
btn.addEventListener('click', () => newElements());

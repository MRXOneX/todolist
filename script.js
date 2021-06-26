const btn = document.querySelector('.addBtn');
const list = document.querySelector('#list');

list.addEventListener('click', (e) => {
      if(e.target.tagName === 'LI') {
         e.target.classList.toggle('checked')
      } else if (e.target.tagName === 'SPAN') {
         let div = e.target.parentNode;
      div.remove();
   }
});
const newElements = () => {
   let li = document.createElement('li');
   let input = document.querySelector('#enter').value;
   let t = document.createTextNode(input);
   li.appendChild(t);
   if(input == '') {
      alert('Чтобы что нибудь получить, нужно что нибудь набрать!');
   } else {
      list.appendChild(li);
   }
   document.querySelector('#enter').value = '';
   let span = document.createElement('SPAN');
   let txt = document.createTextNode('\u2716');
   span.className = 'close';
   span.appendChild(txt);
   li.appendChild(span);
}
btn.addEventListener('click', () => newElements());
const btn = document.querySelector('.addBtn');

let list = document.querySelector('ul');
list.addEventListener('click', (e) => {
   if(e.target.tagName ==='LI') {
      e.target.classList.toggle('checked');
   } else if (e.target.tagName === "SPAN") {
      let div = e.target.parentNode;
      div.remove();
   }
}, false);

function newElements() {
   let li = document.createElement('li');
   let input = document.querySelector('#enter').value;
   let t = document.createTextNode(input);
   li.appendChild(t);
   if(input == '') {
      alert('Чтобы что нибудь добавить, нужно что нибудь ввести!');
   }  else {
      document.querySelector('#list').appendChild(li);
   }
   localStorage.setItem('list', li);
   if(localStorage.getItem('list')) {
      document.querySelector('#list').appendChild(li);
   }
   input = '';
   let span = document.createElement('SPAN');
   let txt = document.createTextNode('\u2716');
   span.className = 'close';
   span.appendChild(txt);
   li.appendChild(span);
}
btn.addEventListener('click', () => newElements());

const lists = document.querySelector('#read-book ul');

lists.addEventListener('click', function(e){
  
  
  if(e.target.className === 'delete'){
    const li = e.target.parentElement;
    li.remove();
    
    
  }
});



const list = document.querySelector('#read-book ul')
const addbook = document.forms[2];



addbook.addEventListener('submit', function(e){
  e.preventDefault();
  const value = addbook.querySelector('input[type = "text"]');
  

  const li = document.createElement('li');
  
  const bookName = document.createElement('span');
  const deleteBtn = document.createElement('a');
  deleteBtn.setAttribute ('class', 'delete');
  
  

  // const icon = document.createElement('ion-icon');
  // icon.setAttribute('class','icon');
  // icon.setAttribute('name','close-outline');
  deleteBtn.appendChild(document.createTextNode('delete'));
  li.appendChild(bookName);
  li.appendChild(deleteBtn);
  list.appendChild(li);
  
  bookName.textContent = value.value;
  value.value = '';

  

});

const hide = document.querySelector('#hide');
hide.addEventListener('change', function(e){
  if(hide.checked === true){
    list.style.display = 'none';
  }else{
    list.style.display = 'block';
  }
});

const searchBook = document.forms[0].querySelector('input');
searchBook.addEventListener('keyup',function(e){
  const term = e.target.value.toLowerCase();
  const books = list.getElementsByTagName('li');
  Array.from(books).forEach(function(book){
    const title = book.firstElementChild.textContent;
    if(title.toLowerCase().indexOf(term) !== -1){
      book.style.display = 'block';
    }else{
      book.style.display = 'none';
    }
    
  });
  
  e.preventDefault;
  
  
});



// const list = document.querySelectorAll('li');
// console.log(list);
// list.forEach(function(book){
//   book.textContent += '(Book list)';
// });

// const heading = document.querySelector('#read-book');

//   heading.previousElementSibling.querySelector('p').innerHTML += "<br/> Too cool for everyone else!"

// heading.innerHTML = '<h2>Kazi book list</h2>';
  // console.log(heading.hasChildNodes());
  // const clonedheading = heading.cloneNode(true);
  // console.log(clonedheading);

// const li = document.getElementsByTagName('li');
// console.log(li);




// const removeLi = document.querySelectorAll('#read-book .icon');
// Array.from (removeLi).forEach(function(btn){
//   btn.addEventListener('click',function(e){
//     const li = e.target.parentElement.parentElement;
//     confirm('Are you sure ?');
//     li.remove();

//   });
// });



// const add = document.querySelector('#add-book ion-icon');
//   add.addEventListener('click',function(){
   
//    const value = addbook.querySelector('input[type = "text"]').value;
//    value = bookName.textContent;
//    value.value = '';
    
  
//   });


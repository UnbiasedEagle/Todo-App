const addForm = document.querySelector(".add");
const list=document.querySelector(".todos");
const search = document.querySelector('.search');

const generateTemplate=(todo)=>{
    const html=`
    <li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${todo}</span>
    <svg class="delete"
role="img" 
xmlns="http://www.w3.org/2000/svg" 
width="1000mm"
height="1000mm"
viewBox="0 0 1000 1000"
style="max-width:1.6em; height: auto;">

<path 
id="path" 
style="opacity:1;vector-effect:none;fill:#fff;fill-opacity:1;"
d=" M 357 378C 344 378 332 390 333 403C 333 403 329 848 329 848C 329 857 333 866 341 870C 349 875 359 875 366 870C 374 866 379 858 379 849C 379 849 383 404 383 404C 383 397 380 391 375 386C 371 381 364 378 357 378C 357 378 357 378 357 378M 650 375C 636 375 625 386 625 400C 625 400 625 850 625 850C 625 859 630 867 637 872C 645 876 655 876 663 872C 670 867 675 859 675 850C 675 850 675 400 675 400C 675 393 672 387 668 382C 663 377 656 375 650 375C 650 375 650 375 650 375M 500 375C 486 375 475 386 475 400C 475 400 475 850 475 850C 475 859 480 867 487 872C 495 876 505 876 513 872C 520 867 525 859 525 850C 525 850 525 400 525 400C 525 393 522 387 518 382C 513 377 506 375 500 375C 500 375 500 375 500 375M 198 299C 198 299 800 299 800 299C 800 299 800 850 800 850C 800 913 759 950 700 950C 700 950 300 950 300 950C 238 950 200 911 201 855C 201 855 198 299 198 299M 438 138C 438 138 438 187 438 187C 438 187 563 187 563 187C 563 187 563 138 563 138C 563 138 438 138 438 138M 425 63C 425 63 575 63 575 63C 609 63 638 91 638 125C 638 125 638 187 638 187C 638 187 849 187 849 187C 870 187 887 204 887 225C 887 245 870 262 849 262C 849 262 151 263 151 263C 130 263 113 246 113 225C 113 205 130 188 151 188C 151 188 363 188 363 188C 363 188 363 125 363 125C 363 125 362 125 362 125C 362 91 391 63 425 63C 425 63 425 63 425 63"
transform="">
</path>    
</svg>
</li>
    `;
    list.innerHTML+=html;
};
addForm.addEventListener('submit',e=>{
    e.preventDefault();
    const todo=addForm.add.value.trim();
    if(todo.length){
        generateTemplate(todo);
        addForm.reset();
    }
    
});

list.addEventListener('click',e=>{
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});

const filterTodos=(term)=>{
        
    Array.from(list.children)
    .filter((todo)=> !todo.textContent.toLowerCase().includes(term))
    .forEach((todo)=> todo.classList.add('filtered'));

    Array.from(list.children)
    .filter((todo)=> todo.textContent.toLowerCase().includes(term))
    .forEach((todo)=> todo.classList.remove('filtered'));

};

search.addEventListener('keyup',()=>{
    const term = search.value.trim().toLowerCase();
    filterTodos(term);
});
const searchBtn = document.querySelector('.search-btn');
const searchForm = document.querySelector('.search-form');
const icon = document.querySelector('.fas');
const searchInput = document.querySelector('.search-input');

searchBtn.addEventListener('click', ()=> {
    if(icon.className == 'fas fa-search'){
        icon.classList.remove('fa-search')
        icon.classList.add('fa-times')
        searchForm.classList.remove('hidden')
        searchInput.focus()
    }else{
        icon.classList.remove('fa-times')
        icon.classList.add('fa-search')
        searchForm.classList.add('hidden') 
    }
   
});

const searchBtn = document.querySelector('.search-btn');
const searchForm = document.querySelector('.search-form');
const icon = document.querySelector('.fas');
const searchInput = document.querySelector('.search-input');
const postDescription = document.querySelectorAll('.post-description')

for (const item of postDescription) {
  const description = item.firstElementChild.textContent 
  item.innerHTML = null
  const newElement = document.createElement('p')
  newElement.textContent = description
  item.appendChild(newElement)  
}

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

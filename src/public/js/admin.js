const menuBtn = document.querySelector('.menu-btn')
const aside = document.querySelector('.aside')
const logo = document.querySelector('.logo-text')
const main = document.querySelector('.main')
const pageLink = document.querySelectorAll('.page-link')
const pageName = document.querySelectorAll('.page-name')
const notificationBtn = document.querySelector('.notification-btn')

menuBtn.addEventListener('click', () => {
    if(logo.classList[1] != 'hidden'){

            aside.style.cssText = 'width: auto !important; ease-in-out;'
            main.style.cssText = 'width: 100% !important; '
            logo.classList.add('hidden')
            pageName.forEach(item => {
                item.classList.add('hidden')
            })
            pageLink.forEach(item => {
                item.style.cssText = 'justify-content: center'
            })

            i = 1
    } else {
        aside.style.cssText = ''
        main.style.cssText = ''
        logo.classList.remove('hidden')
        pageName.forEach(item => {
            item.classList.remove('hidden')
        })
        pageLink.forEach(item => {
            item.style.cssText = ''
        })
        }   
})

$('#summernote').summernote({
    tabsize: 2,
    height: 120,
    toolbar: [
      ['style', ['style']],
      ['font', ['bold', 'underline', 'clear']],
      ['color', ['color']],
      ['para', ['ul', 'ol', 'paragraph']],
      ['table', ['table']],
      ['insert', ['link', 'picture', 'video']],
      ['view', ['fullscreen', 'codeview', 'help']]
    ]
  });
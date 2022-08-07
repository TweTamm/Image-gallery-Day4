const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const images = $$('.image img');
const prevBtn = $('.prev')
const afterBtn = $('.after')
const closeBtn = $('.close')
const galleryImg = $('.gallery__inner img')
const gallery = $('.gallery')

var currentIndex = 0;

function showGallery(){
    if(currentIndex == 0){
        prevBtn.classList.add('hide')
    }else{
        prevBtn.classList.remove('hide')
    }

    if(currentIndex == images.length -1){
        afterBtn.classList.add('hide')
    }else{
        afterBtn.classList.remove('hide')
    }
    // display
    galleryImg.src = images[currentIndex].src
    gallery.classList.add('show')
}
images.forEach((item, index)=>{
    item.addEventListener('click', function(){
       currentIndex = index
       showGallery()
    })
})

closeBtn.addEventListener('click', function(){
    gallery.classList.remove('show')
})

document.addEventListener('keydown', function(e){
    if(e.keyCode == 27){
        gallery.classList.remove('show')
    } 
})

prevBtn.addEventListener('click', function(){
    if(currentIndex > 0){
        currentIndex--
        showGallery()
    }
})

afterBtn.addEventListener('click', function(){
    if(currentIndex < images.length-1){
        currentIndex++
        showGallery()
    }
})
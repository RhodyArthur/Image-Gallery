import  { artsGallery}   from './data.js'


const containerEl = document.querySelector('.container')
const lightBoxEl = document.querySelector('.lightbox')

let currentIndex = 0

function getGalleryHtml(){
const gallery = artsGallery.map((image, index) => {
    const { img, caption } = image
    return `
            <img src="${img}" alt="${caption}" class="thumbnail" data-index="${index}">`
})
return gallery.join('')
}

containerEl.innerHTML = getGalleryHtml()

containerEl.addEventListener('click', function(e){
    // disable click when background is blur
    if (containerEl.classList.contains('blur')){
        return;
    }

    if (e.target && e.target.classList.contains('thumbnail')){
        currentIndex = Number(e.target.getAttribute('data-index'))
        displayLightBox(currentIndex)
    }
})


// display lightbox
const displayLightBox = index => {
    const selectedImg = artsGallery[index]
    lightBoxEl.innerHTML = 
    ` 
    <div class="close-modal-btn-container">
    <button class="modal-close-btn" id="modal-close-btn">&times;</button>
    </div>
    <div class="lightbox-content">
    <i class="fa-solid fa-caret-left" id="prev-icon"></i>
    <div>
    <img src="${selectedImg.img}" alt="${selectedImg.caption}" class="box-img">
    <h3 class="caption">${selectedImg.caption}</h3>
    </div>
    <i class="fa-solid fa-caret-right" id="next-icon"></i>
    </div>
    `
    lightBoxEl.style.display = 'block'
    containerEl.classList.add('blur')

    document.querySelector('.modal-close-btn').addEventListener('click', function(){
        lightBoxEl.style.display = 'none'
        containerEl.classList.remove('blur')
    })

    document.querySelector('#prev-icon').addEventListener('click', function(){
        if (currentIndex > 0){
            currentIndex = currentIndex - 1
            displayLightBox(currentIndex)
        }
    })

    document.querySelector('#next-icon').addEventListener('click', function(){
        if (currentIndex < artsGallery.length -1){
            currentIndex = currentIndex + 1
            displayLightBox(currentIndex)
        }

    })
    // Hide buttons if at the start or end of the gallery
    document.querySelector('#prev-icon').style.display = currentIndex === 0 ? 'none' : 'block'
    document.querySelector('#next-icon').style.display = currentIndex === artsGallery.length - 1 ? 'none' : 'block'

}

import  { artsGallery}   from './data.js'


const containerEl = document.querySelector('.container')
const thumbnailEl = document.getElementById('thumbnail')
const lightBoxEl = document.querySelector('.lightbox')


function getGalleryHtml(){
const gallery = artsGallery.map(person => {
    const { img, caption } = person
    return `
            <img src="${img}" alt="${caption}" id="thumbnail">`
})
return gallery.join('')
}

containerEl.innerHTML = getGalleryHtml()

thumbnailEl.addEventListener('click', function(){
    lightBoxEl.style.display = 'block'
})

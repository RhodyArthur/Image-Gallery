import  { artsGallery}   from './data.js'


const containerEl = document.querySelector('.container')
// thumbnail = document.getElementById('thumbnail')


function getGalleryHtml(){
const gallery = artsGallery.map(person => {
    const { img, caption } = person
    return `
            <img src="${img}" alt="${caption}" id="thumbnail">`
})
return gallery.join('')
}

containerEl.innerHTML = getGalleryHtml()

// thumbnail.addEventListener('click', function(){

// })

// import  {sportsGallery}  from './data.js'
const sportsGallery = [
    {id : 1,
    img:'https://images.pexels.com/photos/15845935/pexels-photo-15845935/free-photo-of-deer-baby-walking-in-forest.jpeg',
    caption:'Serena Williams serves during her third-round match against Qiang Wang in the Australian Open on Jan. 24.',
    'name':'Serena Williams',
    thumbnail_url: ''},
    
    // {
    // id:2,
    // img:'images/cristiano-ronaldo.webp',
    // caption:'Cristiano Ronaldo scores last-minute winner on record-breaking 200th appearance for Portugal',
    // 'name':'Cristiano Ronaldo',
    // thumbnail_url: ''},
    
    // {
    // id:3,
    // img:'images/lionel-messi.jpg',
    // caption:'Lionel Messi and defending champion Argentina still hungry for titles ahead of Copa America',
    // name:'Lionel Messi',
    // thumbnail_url: ''},
    
    // {id:4,
    // img:'images/mbappe.jpg',
    // caption:'Kylian Mbappé Tells P.S.G. He Won’t Extend Contract in 2024',
    // name:'Kylian Mbappe',
    // thumbnail_url: ''},
    
    // {id:5,
    // img:'images/jude.jpg',
    // caption:'A 20-year-old Englishman fueled Real Madrid’s record-extending La Liga title and became one of the world’s best players',
    // name:'Jude Bellingham',
    // thumbnail_url: ''},
    
    // {id:6,
    // img:'images/alex.jpg',
    // caption:'Washington QB Alex Smith will take time to ponder NFL future',
    // name:'Alex Smith',
    // thumbnail_url: ''},
    
    // {id:7,
    // img:'images/lebron.jiff',
    // caption:'LeBron James considering retirement after Los Angeles Lakers swept by Denver Nuggets',
    // name:'Lebron James',
    // thumbnail_url: ''},
    
    // {id:8,
    // img:'images/reece.jpg',
    // caption:'Reece James and sister Lauren aim for new FA Cup record with Chelsea this weekend',
    // name:'James and Lauren Reece',
    // thumbnail_url: ''},
    
    // {id:9,
    // img:'images/tennis.jiff',
    // caption:'Best Current Male Tennis Player',
    // name:'Roger Federer',
    // thumbnail_url: ''},
    
    // {id:10,
    // img:'images/athlete.jiff',
    // caption:'Tokyo 2020: Joseph Amoah qualifies for semi-final after finishing 3rd in men’s 200m heat',
    // name:'Joseph Paul Amoah',
    // thumbnail_url: ''}
    ]


const containerEl = document.querySelector('.container')
// thumbnail = document.getElementById('thumbnail')


sportsGallery.forEach((image, index) => {
    const imgDiv = document.createElement('div')
    imgDiv.classList.add('img-div')
    imgDiv.setAttribute('data-index', index)

    const imgElement = document.createElement('img')
    imgElement.src = image.img
    imgElement.alt = image.caption

    imgDiv.appendChild(imgElement)
    containerEl.appendChild(imgDiv)
    
})

// function getGalleryHtml(){
// const gallery = sportsGallery.map(person => {
//     const { img, caption } = person
//     return `
//             <img src="images/jude.jpg" alt="${caption}" id="thumbnail">`
// })
// return gallery.join('')
// }

// containerEl.innerHTML = getGalleryHtml()

// thumbnail.addEventListener('click', function(){

// })

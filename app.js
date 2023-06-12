let genres = {
    musiqueConcrete: {
        name: "musiqueConcrete",
        genreImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXdl4TtHad-VQ-ua-9pVsC0ei27l8ry7qqr89XLMGBMg&s",
        description: "Musique concrète (French: [myzik kɔ̃kʁɛt]; lit. 'concrete music')[nb 1] is a type of music composition that utilizes recorded sounds as raw material.[1] Sounds are often modified through the application of audio signal processing and tape music techniques, and may be assembled into a form of sound collage.",
        musicGif: "https://media.tenor.com/-lvvkUueO3UAAAAd/delia-derbyshire-bbc-docu.gif",
        artists: "Pierre Henry, Luc Ferrari, Pierre Boulez, Karlheinz Stockhausen, Edgard Varèse, and Iannis Xenakis"
    },
    lowercase: {
        name: "lowercase",
        genreImage: "https://viennesewaltz.files.wordpress.com/2017/04/mikavainio.jpg",
        description: "Lowercase is an extreme form of ambient[1][2] minimalism where very quiet, usually unheard sounds are amplified to extreme levels. Minimal artist Steve Roden popularized the movement with an album entitled Forms of Paper, in which he made recordings of himself handling paper in various ways. These recordings were commissioned by the Hollywood branch of the Los Angeles Public Library",
        musicGif: "https://images.e-flux-systems.com/183981_b6abbe3d2b63645ea78dfa3387e87b02.gif,1600",
        artists: "Richard Chartier, Jeremy Leafey, and Carsten Nicolai, a.k.a. Alva Noto"
    },
    electroAcoustic: {
        name: "electroacoustic",
        genreImage: "https://cdn8.openculture.com/wp-content/uploads/2016/03/Stockhausen_1994_WDR.jpg",
        description: "Electroacoustic music is a genre of popular and Western art music in which composers use technology to manipulate the timbres of acoustic sounds, sometimes by using audio signal processing, such as reverb or harmonizing, on acoustical instruments",
        musicGif: "https://arts.ufl.edu/site/assets/files/114619/hometest2.1840x1036p50x50.jpg",
       arists: "Milton Babitt, John Cage, Halim el-Dabh, Jean-Michelle Jarre, Alvin Lucier, Pauline Oliveros, Henri Posseur"
    }
}

// Target all of the changeable ele
let title = document.querySelector('.genre')
// change innerHTML
let icecreamPic = document.querySelector('.iceC')
// change SRC
let description = document.querySelector('.textbox')
// change innerHTML

let recipe = document.querySelector('.smContainer')
// add Recipe txt
let shaker = document.querySelector('.description')
// add image




const changeGenres = (genre) =>{
    // Determine what genre
    if(genre === "musiqueConcrete"){
        let body = document.querySelector('body')
        body.style.backgroundColor = "rgba(60, 53, 108, 0.4)"
        addText(title,genres.musiqueConcrete.name)
        addImage(icecreamPic,genres.musiqueConcrete.genreImage)
        addText(description,genres.musiqueConcrete.description)
        uploadImage(recipe,genres.musiqueConcrete.musicGif)
        addImage(shaker,genres.musiqueConcrete.recipe)
        // ------------------------------
    }else if(genre === "lowercase"){
        let body = document.querySelector('body')
        body.style.backgroundColor = "rgba(139, 111, 51, 0.4)"
        addText(title,genres.lowercase.name)
        addImage(icecreamPic,genres.lowercase.genreImage)
        addText(description,genres.lowercase.description)
        uploadImage(recipe,genres.lowercase.musicGif)
        addImage(shaker,genres.lowercase.recipe)
    }else if(genre === "electroAcoustic"){
        let body = document.querySelector('body')
        body.style.backgroundColor = "grey"
        addText(title,genres.electroAcoustic.name)
        addImage(icecreamPic,genres.electroAcoustic.genreImage)
        addImage(description,genres.electroAcoustic.description)
        uploadImage(recipe,genres.electroAcoustic.musicGif)
        addText(shaker,genres.electroAcoustic.recipe)

    }else{
        addText(title,"Genres")
    }
}


const addText =(target, text)=>{
    target.innerHTML = text
}

const addImage =(target, url)=>{
    target.setAttribute('src',url)
}

// target.innerHTML = "";
const uploadImage = (target,flav)=>{
let newImage = document.createElement('img')
newImage.setAttribute('src',flav)
newImage.setAttribute('class','lowerImage')
target.append(newImage)
}
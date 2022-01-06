
const tagsEl = document.getElementById('tags')
const textarea = document.getElementById('textarea')

textarea.focus()

textarea.addEventListener('keyup',(e) => {var data=e.target.value

   var str=data.split(",").map(t=>t.trim()).filter(e=>e!='')
   tagsEl.innerHTML=''
      str.forEach(t=>{
       const tagEl=document.createElement("span")
       tagEl.classList.add('tag')
      tagEl.innerText=t
       tagsEl.appendChild(tagEl)
     }
     )
     if(e.key==='Enter'){
         setTimeout(()=>{
e.target.value=''
         },30)
    randomSelect()

    }
}


)

function randomSelect() {
    const times = 30

    const interval = setInterval(() => {
        const randomTag = pickRandomTag()
	
	if (randomTag !== undefined) {
        highlightTag(randomTag)

        setTimeout(() => {
            unHighlightTag(randomTag)
        }, 100)
	}
    }, 100);

    setTimeout(() => {
        clearInterval(interval)

        setTimeout(() => {
            const randomTag = pickRandomTag()

            highlightTag(randomTag)
        }, 100)

    }, times * 100)
}

function pickRandomTag() {
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag) {
    tag.classList.add('highlight')
}

function unHighlightTag(tag) {
    tag.classList.remove('highlight')
}
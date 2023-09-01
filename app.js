const initialText = document.querySelector('.initialText')
const translatedText = document.querySelector('.translatedText')
const selectTag = document.querySelectorAll('select')
const btn = document.querySelector('button')


function setCountries() {
    selectTag.forEach((selectTag, index) => {
        for (const [key, value] of Object.entries(countries)) {
            let option;
            if (index == 0 && key == 'en-GB') {
                option = `<option value="${key}"selected>${value}</option>`
            } else if (index == 1 && key == 'fa-IR') {
                option = `<option value="${key}"selected>${value}</option>`
            } else {
                option = `<option value="${key}">${value}</option>`
            }
            selectTag.insertAdjacentHTML('beforeend', option)
        }
    })
    btn.addEventListener('click', translate)
}
setCountries()



// const api = `https://api.mymemory.translated.net/get?q=${}&langpair=${}|${}` 

async function translate() {
    const res = await fetch(`https://api.mymemory.translated.net/get?q=${initialText.value}&langpair=${selectTag[0].value}|${selectTag[1].value}`)
    const data = await res.json()
    console.log(data.responseData.translatedText);
    translatedText.textContent = data.responseData.translatedText

}






const inp = document.querySelector('.menu input')
const option = document.querySelector('.menu .option')
const item = document.querySelectorAll('.item')

inp.addEventListener('click', () => {
    option.classList.toggle('active')
})

item.forEach((item) => {
    item.onclick = (event) => {
        inp.value =  event.target.textContent 
        option.classList.toggle('active')
    }
})



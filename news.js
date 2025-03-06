const APIKey = ' jNdX21vMmEN2NPR97D69XHUizDpFr0TW4avgsZgd'
const cardsContainer = document.getElementById('cardsContainer')
const sportButt = document.getElementById('sportButt')
const entertainmentButt = document.getElementById('entertainmentButt')
const healthButt = document.getElementById('healthButt')
const scienceButt = document.getElementById('scienceButt')
const technologyButt = document.getElementById('technologyButt')
const economicsButt = document.getElementById('economicsButt')
const searchButt = document.getElementById('searchButt')
const searchInput = document.getElementById('searchInput')


async function onLoad(){
    try{
        const response = await fetch(`https://api.thenewsapi.com/v1/news/top?api_token=${APIKey}&locale=us&limit=6`)
        if(!response.ok){
            console.log('ERROR')
            throw new Error('couldnt fetch')
            }
        
        const data = await response.json()
        const newsarr = data.data
        console.log(newsarr)
        var cardsHTML = ''

        newsarr.forEach((newsobj)=>{
            cardsHTML += `<div class='cards'>                                                                                                         
                <img class='cardImg' src="${newsobj.image_url}"/>              
                <div class="cardDesc">                                                       
                    <h2 id='title'>${newsobj.title}</h2>
                    <p id='description'>${newsobj.description}</p>
                    <button class="tryButt" onclick="location.href='${newsobj.url}'";>Read</button>
                </div>
            </div>`})

        cardsContainer.innerHTML=cardsHTML
    }
    catch(error){
        console.log(error)
    }}
onLoad()



async function fetchSports(){
    try{
        const response = await fetch(`https://api.thenewsapi.com/v1/news/all?api_token=${APIKey}&language=en&categories=sports`)
        if(!response.ok){
            console.log('ERROR')
            throw new Error('couldnt fetch')
            }
        const data = await response.json()
        const sportsarr = data.data
        console.log(sportsarr)
        var sportsCardHTML = ''

        sportsarr.forEach((sportsobj)=>{
            sportsCardHTML += `<div class='cards'>                                                                                                         
            <img class='cardImg' src="${sportsobj.image_url}"/>              
            <div class="cardDesc">                                                       
                <h2 id='title'>${sportsobj.title}</h2>
                <p id='description'>${sportsobj.description}</p>
                <button class="tryButt" onclick="location.href='${sportsobj.url}'";>Try</button>
            </div>
        </div>`})
        cardsContainer.innerHTML = sportsCardHTML
        }
        catch(error){
            console.log(error)
        }}

sportButt.addEventListener('click',fetchSports)

async function fetchEntertainment(){
    try{
        const response = await fetch(`https://api.thenewsapi.com/v1/news/all?api_token=${APIKey}&language=en&categories=entertainment`)
        if(!response.ok){
            console.log('ERROR')
            throw new Error('couldnt fetch')
            }
        const data = await response.json()
        const entertainmentarr = data.data
        console.log(entertainmentarr)
        var entertainmentCardHTML = ''

        entertainmentarr.forEach((entobj)=>{
            entertainmentCardHTML += `<div class='cards'>                                                                                                         
            <img class='cardImg' src="${entobj.image_url}"/>              
            <div class="cardDesc">                                                       
                <h2 id='title'>${entobj.title}</h2>
                <p id='description'>${entobj.description}</p>
                <button class="tryButt" onclick="location.href='${entobj.url}'";>Try</button>
            </div>
        </div>`})
        cardsContainer.innerHTML = entertainmentCardHTML
        
        }
        catch(error){
            console.log(error)
        }}

entertainmentButt.addEventListener('click',fetchEntertainment)

async function fetchHealth(){
    try{
        const response = await fetch(`https://api.thenewsapi.com/v1/news/all?api_token=${APIKey}&language=en&categories=health`)
        if(!response.ok){
            console.log('ERROR')
            throw new Error('couldnt fetch')
            }
        const data = await response.json()
        const healtharr = data.data
        console.log(healtharr)
        var healthCardHTML = ''

        healtharr.forEach((healthobj)=>{
            healthCardHTML += `<div class='cards'>                                                                                                         
            <img class='cardImg' src="${healthobj.image_url}"/>              
            <div class="cardDesc">                                                       
                <h2 id='title'>${healthobj.title}</h2>
                <p id='description'>${healthobj.description}</p>
                <button class="tryButt" onclick="location.href='${healthobj.url}'";>Try</button>
            </div>
        </div>`})
        cardsContainer.innerHTML = healthCardHTML
        
        }
        catch(error){
            console.log(error)
        }}

healthButt.addEventListener('click',fetchHealth)

async function fetchScience(){
    try{
        const response = await fetch(`https://api.thenewsapi.com/v1/news/all?api_token=${APIKey}&language=en&categories=science`)
        if(!response.ok){
            console.log('ERROR')
            throw new Error('couldnt fetch')
            }
        const data = await response.json()
        const sciencearr = data.data
        console.log(sciencearr)
        var scienceCardHTML = ''

        sciencearr.forEach((scienceobj)=>{
            scienceCardHTML += `<div class='cards'>                                                                                                         
            <img class='cardImg' src="${scienceobj.image_url}"/>              
            <div class="cardDesc">                                                       
                <h2 id='title'>${scienceobj.title}</h2>
                <p id='description'>${scienceobj.description}</p>
                <button class="tryButt" onclick="location.href='${scienceobj.url}'";>Try</button>
            </div>
        </div>`})
        cardsContainer.innerHTML = scienceCardHTML
        }
        catch(error){
            console.log(error)
        }}

scienceButt.addEventListener('click',fetchScience)

async function fetchTechnology(){
    try{
        const response = await fetch(`https://api.thenewsapi.com/v1/news/all?api_token=${APIKey}&language=en&categories=tech`)
        if(!response.ok){
            console.log('ERROR')
            throw new Error('couldnt fetch')
            }
        const data = await response.json()
        const techarr = data.data
        console.log(techarr)
        var techCardHTML = ''

        techarr.forEach((techobj)=>{
            techCardHTML += `<div class='cards'>                                                                                                         
            <img class='cardImg' src="${techobj.image_url}"/>              
            <div class="cardDesc">                                                       
                <h2 id='title'>${techobj.title}</h2>
                <p id='description'>${techobj.description}</p>
                <button class="tryButt" onclick="location.href='${techobj.url}'";>Try</button>
            </div>
        </div>`})
        cardsContainer.innerHTML = techCardHTML
        }
        catch(error){
            console.log(error)
        }}

technologyButt.addEventListener('click',fetchTechnology)

async function fetchEconomics(){
    try{
        const response = await fetch(`https://api.thenewsapi.com/v1/news/all?api_token=${APIKey}&language=en&categories=business`)
        if(!response.ok){
            console.log('ERROR')
            throw new Error('couldnt fetch')
            }
        const data = await response.json()
        const econarr = data.data
        console.log(econarr)
        var econCardHTML = ''

        econarr.forEach((econobj)=>{
            econCardHTML += `<div class='cards'>                                                                                                         
            <img class='cardImg' src="${econobj.image_url}"/>              
            <div class="cardDesc">                                                       
                <h2 id='title'>${econobj.title}</h2>
                <p id='description'>${econobj.description}</p>
                <button class="tryButt" onclick="location.href='${econobj.url}'";>Try</button>
            </div>
        </div>`})
        cardsContainer.innerHTML = econCardHTML
        }
        catch(error){
            console.log(error)
        }}

economicsButt.addEventListener('click',fetchEconomics)

async function searchNews(){
    const searchVal = searchInput.value
    try{
        const response = await fetch(`https://api.thenewsapi.com/v1/news/all?api_token=${APIKey}&language=en&search=${searchVal}`)
        if(!response.ok){
            console.log('ERROR')
            throw new Error('couldnt fetch')
            }
        const data = await response.json()
        const searcharr = data.data
        var searchCardHTML = ''
        console.log(searcharr)
        if (searcharr.length < 1){
            alert('Inalid Search')
        }
        else{
            searcharr.forEach((schobj)=>{
                searchCardHTML += `<div class='cards'>                                                                                                         
                <img class='cardImg' src="${schobj.image_url}"/>              
                <div class="cardDesc">                                                       
                    <h2 id='title'>${schobj.title}</h2>
                    <p id='description'>${schobj.description}</p>
                    <button class="tryButt" onclick="location.href='${schobj.url}'";>Try</button>
                </div>
            </div>`})
            cardsContainer.innerHTML = searchCardHTML
            searchInput.value =''
        }
        

        
        }
        catch(error){
            console.log(error)
        }}
    
searchButt.addEventListener('click', searchNews)




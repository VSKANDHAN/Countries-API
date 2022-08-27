let countries;
let select=document.getElementById('select');


select.addEventListener('input',e=>{showInfo(e.target.value)})

let list=document.getElementById('countryList');
let pic=document.getElementById('countries');
const fetchdata=async()=>{
    try{
        let response=await fetch("https://restcountries.com/v2/all");
        let data=await response.json();
       

        getCountries(data);
       
        console.log(data);
    }catch(err){
        console.log(err)
    }
}
fetchdata()
function getCountries(fetchedData){
    countries=fetchedData;
    
    let option="";
    let div;
    let divpic;
    let divp;
    countries.forEach(c => {
        option +=`<option value="${c.name}"></option>`;
        list.innerHTML=option;
       
       
        divpic=document.createElement('img');
        divpic.src=c.flag;
        divp=document.createElement('p')
        divp.className='cname'
        divp.textContent=c.name;
        pic.appendChild(divpic)
        pic.appendChild(divp)
     
      
     });
     


}
showInfo(list[104])
function showInfo(cname){
const selectedCountry = countries.find(country=>country.name === cname)

document.getElementById('region').innerHTML=selectedCountry.region
document.getElementById('capital').innerHTML=selectedCountry.capital
document.getElementById('currency').innerHTML=selectedCountry.currencies.map(c=>`${c.name} (${c.symbol})`)
document.getElementById('callingcode').innerHTML="+"+selectedCountry.callingCodes
document.getElementById('population').innerHTML=selectedCountry.population

document.getElementById('languages').innerHTML=selectedCountry.languages.map(l=>`${l.name}`)
document.getElementById('cimgs').src=selectedCountry.flag
document.getElementById('cimgs').alt="Flag of "+selectedCountry.name
}




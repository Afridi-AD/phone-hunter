
// search text section 

const SearchPhone = ()=>{
    const searchInput = document.getElementById('search-input');
    const searchText = searchInput.value;
    searchInput.value = '';
    
    if(searchText == ''){
        const emptyString = document.getElementById('empty-string-error-message');
       emptyString.style.display = 'block';
    }
   else{
    
    // call api 
    
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}
    `;
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data));

     }
    
   }
   
//  display search result section 

const displaySearchResult = data => {
    const searchResult = document.getElementById('search-result');
    
    if(data.status== false){
        document.getElementById('no-phone-error-message').style.display = 'block';
        searchResult.innerHTML ='';
    }
    else{
        document.getElementById('no-phone-error-message').style.display = 'none';
        searchResult.innerHTML ='';
        const info = data.data.slice(0,20);
    
    
        searchResult.textContent = '';
        info.forEach(phone => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div class="card">
                <img src="${phone.image}" class="card-img-top w-50 " alt="...">
                <div class="card-body">
                <h4>${phone.brand}</h4>  
                <h5 class="card-title">${phone.phone_name}</h5>
                  
                  <button onclick = 'LoadphoneDetails("${phone.slug}")' id="details-button" class ="rounded-pill px-3 bg-success">Details</button>
            </div>
           
          </div>
            
            `;
            searchResult.appendChild(div);
        })
        }  
}

//load  single phone details section 

const LoadphoneDetails = phoneId =>{
    console.log(phoneId);
    const url = `
    https://openapi.programming-hero.com/api/phone/${phoneId}
    `;
    fetch(url)
    .then(res => res.json())
    .then(data => displayPhoneDetail(data));
    

}

// display  single phone details section 

const displayPhoneDetail = phone => {
   console.log(phone);
   const phoneDetails = document.getElementById('phone-details');
   
   phoneDetails.textContent = '';
   const div = document.createElement('div')
   div.classList.add('card');
   div.innerHTML =`
   
   <img src="${phone.data.image}" class="card-img-top w-25 mx-auto mt-4" alt="...">
            <div class="card-body">
              <h5 class="card-title"> Name : ${phone.data.name}</h5>
              <h5 class="card-title"> Brand: ${phone.data.brand}</h5>
              <p class="card-text"><span class = "fw-bold">Release date :</span>  ${phone.data.releaseDate ? phone.data.releaseDate:"No release date found"}</p>
              <p class="card-text"><span class = "fw-bold">Chip :</span>  ${phone.data.mainFeatures.chipSet}</p>
              <p class="card-text"><span class = "fw-bold">Screen size :</span>  ${phone.data.mainFeatures.displaySize}</p>
              <p class="card-text"><span class = "fw-bold">Memory :</span>  ${phone.data.mainFeatures.memory}</p>
              <p class="card-text"> <span class = "fw-bold">Sensor :</span>  ${phone.data.mainFeatures.sensors}</p>
              <h3 class ="text-primary">Others</h3>
              <p class="card-text"><span class = "fw-bold">Bluetooth :</span>  ${phone.data.others.Bluetooth}</p>
              <p class="card-text"><span class = "fw-bold">GPS :</span>   ${phone.data.others.GPS}</p>
              <p class="card-text"><span class = "fw-bold">NFC :</span>${phone.data.others.NFC}</p>
              <p class="card-text"><span class = "fw-bold">Radio :</span> ${phone.data.others.Radio}</p>
              <p class="card-text"><span class = "fw-bold">USB :</span> ${phone.data.others.USB}</p>
              <p class="card-text"><span class = "fw-bold">WLAN :</span> ${phone.data.others.WLAN}</p>
              

              
              </div>
             
              `;

   phoneDetails.appendChild(div);
}
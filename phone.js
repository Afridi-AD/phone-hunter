

const SearchPhone = ()=>{
    const searchInput = document.getElementById('search-input');
    const searchText = searchInput.value;
    // console.log(searchText);
    searchInput.value = '';
    const errorMessage = document.getElementById('error-message').style.display = 'none';
    if(searchText == ''){
       errorMessage.style.display = 'block';
    }
    else
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}
    `;
    // console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data.data));

}


const displaySearchResult = data => {
    const info = data.slice(0,20);
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    info.forEach(phone => {
        // console.log(phone);

        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card">
            <img src="${phone.image}" class="card-img-top w-50 " alt="...">
            <div class="card-body">
            <h4>${phone.brand}</h4>  
            <h5 class="card-title">${phone.phone_name}</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <button onclick = 'LoadphoneDetails("${phone.slug}")' id="details-button" class ="rounded-pill px-3 bg-success">Details</button>
        </div>
       
      </div>
        
        `;
        searchResult.appendChild(div);

    })
}


const LoadphoneDetails = phoneId =>{
    console.log(phoneId);
    const url = `
    https://openapi.programming-hero.com/api/phone/${phoneId}
    `;
    fetch(url)
    .then(res => res.json())
    .then(data => displayMealDetail(data));
    

}


const displayMealDetail = phone => {
   console.log(phone);
   const phoneDetails = document.getElementById('phone-details');
   
   phoneDetails.textContent = '';
   const div = document.createElement('div')
   div.classList.add('card');
   div.innerHTML =`
   
   <img src="${phone.data.image}" class="card-img-top w-25 mx-auto mt-4" alt="...">
            <div class="card-body">
              <h5 class="card-title"> Brand: ${phone.data.brand}</h5>
              <p class="card-text">Release date : ${phone.data.releaseDate ? phone.data.releaseDate:"No release date found"}</p>
              <p class="card-text">Chip : ${phone.data.mainFeatures.chipSet}</p>
              <p class="card-text">Screen size : ${phone.data.mainFeatures.displaySize}</p>
              <p class="card-text">Memory : ${phone.data.mainFeatures.memory}</p>
              <p class="card-text"> sensor : ${phone.data.mainFeatures.sensors}</p>
              <h6>Others</h6>
              <p class="card-text">Bluetooth : ${phone.data.others.Bluetooth}</p>
              <p class="card-text">GPS :  ${phone.data.others.GPS}</p>
              <p class="card-text">NFC : ${phone.data.others.NFC}</p>
              <p class="card-text">Radio : ${phone.data.others.Radio}</p>
              <p class="card-text"> USB : ${phone.data.others.USB}</p>
              <p class="card-text">WLAN : ${phone.data.others.WLAN}</p>
              

              
              </div>
             
              `;

   phoneDetails.appendChild(div);
}
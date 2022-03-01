

const SearchPhone = ()=>{
    const searchInput = document.getElementById('search-input');
    const searchText = searchInput.value;
    // console.log(searchText);
    searchInput.value = '';
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}
    `;
    // console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data.data));

}


const displaySearchResult = data => {
    const searchResult = document.getElementById('search-result');
    data.forEach(phone => {
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
   const div = document.createElement('div')
   div.classList.add('card');
   div.innerHTML =`
   
   <img src="${phone.data.image}" class="card-img-top w-50" alt="...">
            <div class="card-body">
              <h5 class="card-title">${phone.phone_name}</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
             
   `

   phoneDetails.appendChild(div);
}
const SearchPhone = ()=>{
    const searchInput = document.getElementById('search-input');
    const searchText = searchInput.value;
    console.log(searchText);
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
        console.log(phone);

        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card">
            <img src="${phone.image}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${phone.phone_name}</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
      </div>
        
        `;
        searchResult.appendChild(div);

    })
}
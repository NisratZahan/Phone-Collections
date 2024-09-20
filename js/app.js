const loadPhones=async(searchText)=>{
    const url=`https://openapi.programming-hero.com/api/phones?search=${searchText}`

    const res= await fetch(url);
    const data=await res.json();
    const phones=data.data;
    displayPhones(phones);
}

const displayPhones=phones=>{
    const phoneContainer=document.getElementById('phone-container');
    // clear container cards before adding new cards
    phoneContainer.textContent='';
    //step 1: to display the component using loop
    phones.forEach(phones => {
    console.log(phones);
    // step 2:create a div
    const phoneCards=document.createElement('div');
    phoneCards.classList=`card bg-gray-100 p-4  w-96 shadow-xl`;
    // step 3:set content 
    phoneCards.innerHTML=`
    <figure>
        <img
        src="${phones.image}">
    </figure>
    <div class="card-body">
        <h2 class="card-title">${phones.phone_name}</h2>
        <p>${phones.brand}</p>
        <div class="card-actions justify-end">
        <button class="btn btn-primary">Buy Now</button>
        </div>
    </div>
   
    `;
    // step 4:
    phoneContainer.appendChild(phoneCards);
});
}

// manage search button

const searchClick=(phones)=>{
   const searchFeild=document.getElementById('search-field');
   const searchText=searchFeild.value;
    console.log(searchText);
    loadPhones(searchText);
}
// loadPhones();
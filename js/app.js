const loadPhones=async(searchText)=>{
    const url=`https://openapi.programming-hero.com/api/phones?search=${searchText}`

    const res= await fetch(url);
    const data=await res.json();
    const phones=data.data;
    displayPhones(phones);
}

const displayPhones=phones=>{
    const phoneContainer=document.getElementById('phone-container');
    // clear container cards before adding new cards(to clear extisting elements)
    phoneContainer.textContent='';
    // display show all button if there are more than sliced number elements
    const showContainer=document.getElementById('show-all');
    if(phones.length > 10)
    {
showContainer.classList.remove('hidden');
    }
    else{
        showContainer.classList.add('hidden');
    }

    // to fix length 
   phones=phones.slice(0,10);
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
// stop toggle-spiner
toggleSpinner(false);
}

// manage search button

const searchClick=()=>{
   const searchFeild=document.getElementById('search-field');
   const searchText=searchFeild.value;
    console.log(searchText);
    loadPhones(searchText);
    toggleSpinner(true);
}
// manage search button recap
// const searchClick2=()=>{
//    const searchFeild=document.getElementById('search-field2');
//    const searchText=searchFeild.value;
//     loadPhones(searchText);
// }
// togglespinner
const toggleSpinner=(isLoading)=>{
    const loadSpinner=document.getElementById('loading-spinner');
    if(isLoading){
        loadSpinner.classList.remove('hidden');
    }
    else{
        loadSpinner.classList.add('hidden');
    }
}
// loadPhones();
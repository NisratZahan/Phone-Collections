const loadPhones=async()=>{
    const url=`https://openapi.programming-hero.com/api/phones?search=iphone`

    const res= await fetch(url);
    const data=await res.json();
    const phones=data.data;
    displayPhones(phones);
}

const displayPhones=phones=>{
    const phoneContainer=document.getElementById('phone-container');
    //step 1: to display the component using loop
    phones.forEach(phones => {
    console.log(phones);
    // step 2:create a div
    const phoneCards=document.createElement('div');
    phoneCards.classList=`card bg-base-100 w-96 shadow-xl`;
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
loadPhones();
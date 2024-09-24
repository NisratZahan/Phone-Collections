const loadPhones=async(searchText,isShowAll)=>{
    const url=`https://openapi.programming-hero.com/api/phones?search=${searchText}`

    const res= await fetch(url);
    const data=await res.json();
    const phones=data.data;
    displayPhones(phones,isShowAll);
}

const displayPhones=(phones,isShowAll)=>{
    const phoneContainer=document.getElementById('phone-container');
    // clear container cards before adding new cards(to clear extisting elements)
    phoneContainer.textContent='';
    // display show all button if there are more than sliced number elements
    const showAllContainer=document.getElementById('show-all');
    if(phones.length > 10 && !isShowAll)
    {
    showAllContainer.classList.remove('hidden');
    }
    else{
        showAllContainer.classList.add('hidden');
    }
    // console.log('is show All',isShowAll);
    // to fix length /display only 10 phones if not show all
    if(!isShowAll)
   {phones=phones.slice(0,10);}
    //step 1: to display the component using loop
    phones.forEach(phones => {
    // console.log(phones);
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
        <div class="card-actions justify-center">
        <button onclick="phoneDetails('${phones.slug}');
        show_details_modal.showModal()
        " class="btn btn-primary ">Show Details</button>
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

const searchClick=(isShowAll)=>{
   const searchFeild=document.getElementById('search-field');
   const searchText=searchFeild.value;
    // console.log(searchText);
    loadPhones(searchText,isShowAll);
    toggleSpinner(true);
}
// manage search button recap
// const searchClick2=()=>{
//    const searchFeild=document.getElementById('search-field2');
//    const searchText=searchFeild.value;
//     loadPhones(searchText);
// }

// toggleSpinner
const toggleSpinner=(isLoading)=>{
    const loadSpinner=document.getElementById('loading-spinner');
    if(isLoading){
        loadSpinner.classList.remove('hidden');
    }
    else{
        loadSpinner.classList.add('hidden');
    }
}

// handle show details

const phoneDetails=async(id)=>{
    // console.log('phone details',id);
    // load single phone data

    const res=await fetch(` https://openapi.programming-hero.com/api/phone/${id}`);
    const data=await res.json();
    const phone=data.data;
    showPhoneDetails(phone);
}

// handle show all button
const handleShowAll=()=>{
searchClick(true);
}

// show phone details
const showPhoneDetails=(phone)=>{
    console.log(phone);
    
    // show the modal
    show_details_modal.showModal();
    const phoneName=document.getElementById('phone-name');
    phoneName.innerText=phone.name;
    const showDetailsContainer=document.getElementById('phonedetails-comment');
    showDetailsContainer.innerHTML=`
     <img src="${phone.
        image}">
      <p>Storage : ${phone.mainFeatures.storage} </p> 
      <h3>Display Size : ${phone.mainFeatures.displaySize}</h3> 
      <h3>ChipSet : ${phone.mainFeatures.chipSet}</h3> 
      <h3>Display Size : ${phone.mainFeatures.displaySize}</h3> 
      <h3>ChipSet : ${phone.mainFeatures.chipSet}</h3> 
      <h3>Memory : ${phone.mainFeatures.memory}</h3> 
      <h3>Sensors : ${phone.mainFeatures.sensors}</h3> 
      <h3>Slug : ${phone.
       slug}</h3> 
      <h3>Brand : ${phone?.
       brand}</h3>
      <h3>GPS : ${phone?.others?.GPS}</h3>  
      <h3>ReleaseDate : ${phone.
     releaseDate}</h3> 
      `;
}
 
// loadPhones(); 
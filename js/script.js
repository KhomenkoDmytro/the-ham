/*services section */
let tabLinks=document.querySelectorAll('.service-link-item');
let tabContentItems=document.querySelectorAll('.service-description-item');

tabLinks.forEach(tabLink=>{
    tabLink.addEventListener('click', ()=>{ 
        let tabName=tabLink.getAttribute('data-tab');
        // change active tab link
        deleteActiveClass(tabLinks);
        addActiveClass(tabLink);
        //change active tab content
        deleteActiveClass(tabContentItems);
        let activeTabContent=document.querySelector(`.service-description-item[data-tab=${tabName}]`);
        addActiveClass(activeTabContent);
    })
})

function deleteActiveClass(tabItemSet){
    tabItemSet.forEach(tabItem=>{
        tabItem.classList.remove('active');
    })
}

function addActiveClass(tabItem){
    tabItem.classList.add('active');
}
/* amazing work links */
let amazingWorkLinks=document.querySelectorAll('.amazing-work-link-item');
let amazingWorkImages=document.querySelectorAll('.amazing-work-images>img');

let amazingWorkMaxImg=12;
let amazingWorkMaxImgStart=amazingWorkMaxImg;
let currentAmazingWorkImgType='all';
amazingWorkLinks.forEach(amazingWorkLink=>amazingWorkLink.addEventListener('click', ()=>{
    let amazingWorkImgType=amazingWorkLink.getAttribute('data-link-type');
    currentAmazingWorkImgType=amazingWorkImgType;

    //change active link
    deleteActiveClass(amazingWorkLinks);
    addActiveClass(amazingWorkLink);

    //change active images
    deleteActiveClass(amazingWorkImages);
    amazingWorkMaxImg=amazingWorkMaxImgStart;
    let amazingWorkImgCounter=0;
    amazingWorkImages.forEach(amazingWorkImage=>{
        let amazingWorkImageCurrent=amazingWorkImage.getAttribute('data-img-type');
        if(amazingWorkImageCurrent===amazingWorkImgType){
            amazingWorkImgCounter++;
            if(amazingWorkImgCounter<=amazingWorkMaxImg){
                addActiveClass(amazingWorkImage);
            }
        } else if(amazingWorkImgType==='all'){
            if(amazingWorkMaxImgStart===amazingWorkMaxImg){
                amazingWorkButton.style.display='inline-block';
            }
            amazingWorkImgCounter++;
            if(amazingWorkImgCounter<=amazingWorkMaxImg){
            addActiveClass(amazingWorkImage);
        }
        }
    })
}))

//amazing work button
let amazingWorkButton=document.querySelector('.amazing-work-button');
/* let amzWrkBtn
 */amazingWorkButton.addEventListener('click',()=>{

     
    amazingWorkMaxImg+=amazingWorkMaxImgStart;
   
    let amazingWorkImages=document.querySelectorAll('.amazing-work-images>img');

    deleteActiveClass(amazingWorkImages);
    let amazingWorkImgCounter=0;
    amazingWorkImages.forEach(amazingWorkImage=>{
        let amazingWorkImageCurrent=amazingWorkImage.getAttribute('data-img-type');
        if(amazingWorkImageCurrent===currentAmazingWorkImgType){
            amazingWorkImgCounter++;
            if(amazingWorkImgCounter<=amazingWorkMaxImg){
                addActiveClass(amazingWorkImage);

            }
        } else if(currentAmazingWorkImgType==='all'){
            amazingWorkImgCounter++;
            if(amazingWorkImgCounter<=amazingWorkMaxImg){
            addActiveClass(amazingWorkImage);
            if(amazingWorkImgCounter>=amazingWorkImages.length){
                amazingWorkButton.style.display='none';
            }
        }
        }
    })
})

/* carrousel */
let backwardBtn=document.querySelector('.carrousel .backward');
let forwardBtn=document.querySelector('.carrousel .forward');
let personalImages=document.querySelectorAll('.carrousel > .personal-photo');
let personalReviews=[
    {
        name: 'Alice Rame',
        jobPosition: 'Project manager',
        reviewText: "TheHam provided absolutely outstanding customer service throughout my entire shopping experience, and I was thoroughly impressed by the unparalleled level of care and attention to detail that they showed in every interaction. Not only was their service truly exceptional, but the quality of their products surpassed all of my expectations, leaving me feeling incredibly satisfied and eager to recommend their brand to anyone in search of superior merchandise."
    },
    {
        name: 'Rafael Thiem',
        jobPosition: 'Backend developer',
        reviewText: "My experience with TheHam was absolutely fantastic from start to finish. Not only was their website incredibly user-friendly, making it a breeze to find exactly what I was looking for, but their prompt and reliable shipping ensured that my order arrived in no time at all. I was thoroughly impressed by the seamless and hassle-free shopping experience that they provided, and I would highly recommend their brand to anyone in search of top-notch products and exceptional customer service."
    },
    {
        name: 'Hasan Ali',
        jobPosition: 'UX Designer',
        reviewText: "TheHam truly went above and beyond to surpass all of my expectations with their unparalleled commitment to innovation and style. Their unique and creative designs left me feeling thoroughly impressed and inspired, and I was thrilled to discover a brand that so perfectly aligned with my personal tastes and preferences. As a result of my exceptional shopping experience, I am already eagerly anticipating my next purchase from TheHam and can confidently say that I will remain a loyal and devoted customer for years to come."
    },
    {
        name: 'Olivia Collins',
        jobPosition: 'Business analyst',
        reviewText: "I cannot recommend TheHam highly enough for their exceptional level of professionalism and helpfulness throughout my entire shopping experience. Their dedicated team went above and beyond to assist me with my purchase, providing invaluable advice and guidance that truly made all the difference. What's more, the product that I received was in absolutely perfect condition, a true testament to the care and attention to detail that TheHam puts into everything they do. Overall, I was thoroughly impressed by the caliber of their service and products, and I would confidently recommend their brand to anyone in search of an unparalleled shopping experience."
    }
];

backwardBtn.addEventListener('click', ()=>{    

    let newActiveIndex=findNewActiveIndex('down');
    wpplsBtnClick(newActiveIndex)
    });


forwardBtn.addEventListener('click', ()=>{ 
    let newActiveIndex=findNewActiveIndex('up');
    wpplsBtnClick(newActiveIndex)
});

function findNewActiveIndex(direction){
    let currentActiveReview=document.querySelector('.carrousel > .personal-photo.active');
    let currentActiveReviewIndex;
    personalImages.forEach(personalImage=>{
        if(personalImage===currentActiveReview){
            currentActiveReviewIndex =Array.from(personalImages).indexOf(currentActiveReview);
                }
    });
    if(direction==='down'){
        currentActiveReviewIndex--;
        if(currentActiveReviewIndex<0){
            currentActiveReviewIndex=personalImages.length-1;
        }


    } else if(direction==='up'){
        currentActiveReviewIndex++;
        if(currentActiveReviewIndex>personalImages.length-1){
            currentActiveReviewIndex=0;
        }
    }
    return currentActiveReviewIndex;
}

function wpplsBtnClick(newActiveIndex){
    let currentPersonalImage=personalImages[newActiveIndex];

    deleteActiveClass(personalImages);
    addActiveClass(currentPersonalImage);
    
    let oldTextElement=document.querySelector('.what-people-say-text');
    if(oldTextElement!=null){
        oldTextElement.remove();
    }

    let oldImageElement=document.querySelector('.bigger-personal-img');
    if(oldImageElement!=null){
        oldImageElement.remove();
    }

    let oldJobPosition=document.querySelector('.wppls-job-position');
    if(oldJobPosition!=null){
        oldJobPosition.remove();
    }

    let oldWpplsName=document.querySelector('.wppls-name');
    if(oldWpplsName!=null){
        oldWpplsName.remove();
    }

    let newTextElement=document.createElement('p');
    newTextElement.textContent=personalReviews[newActiveIndex].reviewText;
    newTextElement.className="what-people-say-text";

    let referenceElement= document.querySelector(".what-ppl-say-icon-wrapper");
    referenceElement.insertAdjacentElement('afterend', newTextElement);

    let newNameElement=document.createElement('span');
    newNameElement.textContent=personalReviews[newActiveIndex].name;
    newNameElement.className="wppls-name";

    referenceElement= document.querySelector(".personal-information");
    referenceElement.insertAdjacentElement('afterbegin', newNameElement);

    let newJobElement=document.createElement('span');
    newJobElement.textContent=personalReviews[newActiveIndex].jobPosition;
    newJobElement.className="wppls-job-position";

    referenceElement= document.querySelector(".personal-information");
    referenceElement.insertAdjacentElement('beforeend', newJobElement);

    let imageSrc=currentPersonalImage.src;
    let newImageElement=document.createElement('img');
    newImageElement.src=imageSrc;
    newImageElement.classList.add('bigger-personal-img');
    referenceElement=document.querySelector('.personal-information');
    referenceElement.insertAdjacentElement('afterend', newImageElement);

}
// gallery grid
let grid=document.querySelector('.gallery-grid');
let msnry=new Masonry(grid,{
    itemSelector:'.gallery-grid-item',
    columnWidth: 378,
    gutter: 10
});
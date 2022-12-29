window.addEventListener("click", (event) => {
    const shareBtn = document.getElementById("share-btn");
    const shareLogo = shareBtn.firstElementChild;
    const shareContainer = document.getElementById("share-container");
    const shareBtnMobile = document.getElementById("share-btn-mobile");
    const shareLogoMobile = shareBtnMobile.firstElementChild;
    const shareContainerMobile = document.getElementById("share-container-mobile");
    const userContainer = document.getElementById("user-container");

    if(event.target != shareBtn && event.target != shareContainer && event.target != shareBtnMobile && event.target != shareContainerMobile){
        shareBtn.classList.remove("share-btn-active");
        shareLogo.classList.remove("share-logo-active");
        shareContainer.classList.remove("share-container-active");
        shareContainerMobile.classList.remove("share-container-mobile-active");
        userContainer.style.display = "flex";
    }
    else if(window.innerWidth >= 480){
        shareBtn.classList.add("share-btn-active");
        shareLogo.classList.add("share-logo-active");
        shareContainer.classList.add("share-container-active");
    }
    else{
        shareContainerMobile.classList.add("share-container-mobile-active");
        userContainer.style.display = "none";
        shareLogoMobile.classList.add("share-logo-active");
        shareBtnMobile.classList.add("share-btn-active");
    }
    
});



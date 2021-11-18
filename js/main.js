const openButton = document.getElementById("burger");
let dropdownContent = document.getElementById("drop-down-box");
let isHidden = true;

//Hamburger menu function
function openDropdown(){
    if(isHidden === true){
        dropdownContent.style.display = 'block';
        //dropdownContent.classList.add('drop-down-box--visible');
        isHidden = false;
    }else{
        dropdownContent.style.display = 'none';
        //dropdownContent.classList.remove('drop-down-box--visible');
        isHidden = true;
    }
}
openButton.addEventListener('click', openDropdown);


// Automatically sliding carousel

function autoSlide(){
    let current = document.querySelector('.carousel__item--current');
    let next = current.nextElementSibling;
    if(next === null){
        next = document.querySelector('.carousel__item');
    }
    current.classList.remove('carousel__item--current');
    next.classList.add('carousel__item--current');
}

// SLIDER IMG BOYS
const slider = document.querySelector(".slider-1");
const sliderItem = document.querySelectorAll(".slider__item-1");
let sliderItemLast = sliderItem[sliderItem.length-1];
const sliderBtnRight = document.querySelector(".slider-btn-right-1");
const sliderBtnLeft = document.querySelector(".slider-btn-left-1");
console.log(slider)
slider.insertAdjacentElement("afterbegin",sliderItemLast);

const next =()=>{
    let sliderFirst = document.querySelectorAll(".slider__item-1")[0];
    slider.style.marginLeft="-200%";
    slider.style.transition="margin 0.5s";
    setTimeout(()=>{
        slider.insertAdjacentElement("beforeend",sliderFirst);
        slider.style.transition="none"
        slider.style.marginLeft="-100%";
    },500);
};
const prev =()=>{
    let sliderItem = document.querySelectorAll(".slider__item-1");
    let sliderItemLast = sliderItem[sliderItem.length-1]
    slider.style.marginLeft="0%";
    slider.style.transition="margin 0.5s";
    setTimeout(()=>{
        slider.insertAdjacentElement("afterbegin",sliderItemLast);
        slider.style.transition="none"
        slider.style.marginLeft="-100%";
    },500);
};
sliderBtnRight.addEventListener("click",()=>{
    next();
});
sliderBtnLeft.addEventListener("click",()=>{
    prev();
});

// SLIDER IMG BOYS-2
const sliderTwo = document.querySelector(".slider-2");
const sliderItemTwo = document.querySelectorAll(".slider__item-2");
let sliderItemLastTwo = sliderItemTwo[sliderItemTwo.length-1];
const sliderBtnRightTwo = document.querySelector(".slider-btn-right-2");
const sliderBtnLeftTwo = document.querySelector(".slider-btn-left-2");
console.log(slider)
sliderTwo.insertAdjacentElement("afterbegin",sliderItemLastTwo);

const nextTwo =()=>{
    let sliderFirst = document.querySelectorAll(".slider__item-2")[0];
    sliderTwo.style.marginLeft="-200%";
    sliderTwo.style.transition="margin 0.5s";
    setTimeout(()=>{
        sliderTwo.insertAdjacentElement("beforeend",sliderFirst);
        sliderTwo.style.transition="none"
        sliderTwo.style.marginLeft="-100%";
    },500);
};
const prevTwo =()=>{
    let sliderItem = document.querySelectorAll(".slider__item-2");
    let sliderItemLast = sliderItem[sliderItem.length-1]
    sliderTwo.style.marginLeft="0%";
    sliderTwo.style.transition="margin 0.5s";
    setTimeout(()=>{
        sliderTwo.insertAdjacentElement("afterbegin",sliderItemLast);
        sliderTwo.style.transition="none"
        sliderTwo.style.marginLeft="-100%";
    },500);
};
sliderBtnRightTwo.addEventListener("click",()=>{
    nextTwo();
});
sliderBtnLeftTwo.addEventListener("click",()=>{
    prevTwo();
});

// SLIDER IMG BOYS-3
const sliderTri = document.querySelector(".slider-3");
const sliderItemTri = document.querySelectorAll(".slider__item-3");
let sliderItemLastTri = sliderItemTri[sliderItemTri.length-1];
const sliderBtnRightTri = document.querySelector(".slider-btn-right-3");
const sliderBtnLeftTri = document.querySelector(".slider-btn-left-3");
console.log(slider)
sliderTri.insertAdjacentElement("afterbegin",sliderItemLastTri);

const nextTri =()=>{
    let sliderFirst = document.querySelectorAll(".slider__item-3")[0];
    sliderTri.style.marginLeft="-200%";
    sliderTri.style.transition="margin 0.5s";
    setTimeout(()=>{
        sliderTri.insertAdjacentElement("beforeend",sliderFirst);
        sliderTri.style.transition="none"
        sliderTri.style.marginLeft="-100%";
    },500);
};
const prevTri =()=>{
    let sliderItem = document.querySelectorAll(".slider__item-3");
    let sliderItemLast = sliderItem[sliderItem.length-1]
    sliderTri.style.marginLeft="0%";
    sliderTri.style.transition="margin 0.5s";
    setTimeout(()=>{
        sliderTri.insertAdjacentElement("afterbegin",sliderItemLast);
        sliderTri.style.transition="none"
        sliderTri.style.marginLeft="-100%";
    },500);
};
sliderBtnRightTri.addEventListener("click",()=>{
    nextTri();
});
sliderBtnLeftTri.addEventListener("click",()=>{
    prevTri();
});


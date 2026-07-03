const mainButton = document.getElementById("mainButton");

const buttons = document.querySelectorAll(".contact-btn");

let opened = false;

mainButton.addEventListener("click",()=>{

    opened=!opened;

    buttons.forEach((button,index)=>{

        setTimeout(()=>{

            button.classList.toggle("show");

        },index*70);

    });

    if(opened){

        mainButton.innerHTML='<i class="fa-solid fa-xmark"></i>';

    }else{

        mainButton.innerHTML='<i class="fa-solid fa-comment-dots"></i>';

    }

});
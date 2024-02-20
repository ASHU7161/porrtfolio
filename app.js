let menu = document.querySelector( '.menu-icon' );
let navbar = document.querySelector( '.navbar' );


menu.onclick=()=>{
    navbar.classList.toggle( "open-menu" )
    menu.classList.toggle('move');
};

menu.onscroll=()=>{
    navbar.classList.remove("open-menu" )
    menu.classList.remove('move');
};

// email

function validate(){
    let name = document.querySelector( ".name" )
    let email = document.querySelector( ".email" )
    let message = document.querySelector( ".message" )
    let sendbtn = document.querySelector(".send-btn")
    sendbtn.addEventListener("click", (e) => {
    e.preventDefault ();
    if (name.value == "" || email.value == "" || msg == "") {
    emptyerror();
    } else {
    sendmail(name.value, email.value, msg.value);
    success();
    }
    });
}
    validate();


    function emptyerror(){
        swal({
            title: "Oh No....",
            text: "Fields cannot be empty",
            icon:"sucess",
        });
    }

// header background change on scroll

let header = document.querySelector('header');
window.addEventListener( 'scroll', () => {
    header.classList.toggle('header-active',window.scrollY>0)
})



let scrollTop = document.querySelector('.scroll-top');
window.addEventListener( 'scroll', () => {
    scrollTop.classList.toggle('scroll-active',window.scrollY>=400)
})



$("#header").load("/shared/header.html");
$("#footer").load("/shared/footer.html");
$("#productNav").load("/shared/productNav.html",function(){
    const categoryTab = document.querySelectorAll('.category span').forEach(function(elem){
        elem.addEventListener('click', function(){
            slideToggle(elem.nextElementSibling);
        });
    });
});

if(window.location.href.includes('product')){
    setTimeout(function(){
        document.querySelector('footer').classList.add('fixed');
    },400)
}
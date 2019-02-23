$("#header").load("/shared/header.html",function(){
    document.querySelectorAll('nav a').forEach(elem =>{
        const text = elem.textContent.toLocaleLowerCase();
        if(window.location.href.includes(text)){
            elem.classList.add('active');
        }
    });
});
$("#footer").load("/shared/footer.html");
$("#productNav").load("/shared/productNav.html",function(){
    document.querySelectorAll('.productNav .category span').forEach(elem =>{
        const reg = new RegExp(' ', 'g');
        const urlCategory = elem.textContent.replace(reg, '-').toLocaleLowerCase();
        if(window.location.href.includes(urlCategory)){
            elem.parentElement.classList.add('active');
        }
    });
    document.querySelectorAll('.productNav .category .link a').forEach(elem =>{
        const urlCategory = elem.textContent.replace(' ', '-').toLocaleLowerCase();
        if(window.location.href.includes(urlCategory)){
            elem.classList.add('active');
        }
    });

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


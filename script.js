$("#header").load("/shared/header.html",function(){
    document.querySelectorAll('nav a').forEach(elem =>{
        const text = elem.textContent.toLocaleLowerCase();
        if(window.location.href.includes(text)){
            elem.classList.add('active');
        }
    });
});
$("#footer").load("/shared/footer.html",function(){
    if(window.location.href.includes('products') || window.location.href.includes('contact')){
        document.querySelector('footer').classList.add('fixed');
    }
});
$("#productNav").load("/shared/productNav.html",function(){
    document.querySelectorAll('.productNav .category .header').forEach(elem =>{
        const reg = new RegExp(' ', 'g');
        const urlCategory = elem.textContent.replace(reg, '-').toLocaleLowerCase();
        if(window.location.href.includes(urlCategory)){
            elem.classList.add('active');
            elem.setAttribute('data-open', 'true');
            slideDown(elem.nextElementSibling, true);
        }
    });
    document.querySelectorAll('.productNav .category .content a').forEach(elem =>{
        const urlCategory = elem.getAttribute('data-url');
        if(window.location.href.includes(urlCategory)){
            elem.classList.add('active');
        }
    });
    document.querySelectorAll('.productNav .category .header').forEach(function(elem){
        elem.addEventListener('click',function($event){
            document.querySelectorAll('.productNav .category .header').forEach(function(elem){
                if($event.currentTarget === elem){
                    const open = elem.getAttribute('data-open');
                    elem.setAttribute('data-open', (open === 'true') ? 'false' : 'true');
                    slideToggle(elem.nextElementSibling);
                } else{
                    elem.setAttribute('data-open', 'false');
                    slideUp(elem.nextElementSibling);
                }
            });
        });
    });
});




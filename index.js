
const menuProductList = document.getElementById('MenuProductList');
const productCategories = document.getElementById('ProductCategories');
const productsSection = document.querySelectorAll('.products__section');
const productListLinks = document.querySelectorAll('.product__list--link');

menuProductList.addEventListener('mouseover', () => {
    productCategories.classList.add('shown');
});

menuProductList.addEventListener('mouseleave', () =>{
    productCategories.classList.remove('shown');
});

productListLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        console.log(document.querySelector(e.target.href.slice( e.target.href.indexOf('#')  )).children[0]);
        document.querySelector(e.target.href.slice( e.target.href.indexOf('#')  )).children[0].click();
    })
});

//Click to pop the category sublist
productsSection.forEach((section) =>{
    section.children[0].addEventListener('click', (e) => {
        section.children[1].classList.toggle('hideSubList');
    });
});
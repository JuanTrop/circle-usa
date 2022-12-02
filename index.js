
const menuProductList = document.getElementById('MenuProductList');
const productCategories = document.getElementById('ProductCategories');
const productsSection = document.querySelectorAll('.products__section');

menuProductList.addEventListener('mouseover', () => {
    productCategories.classList.add('shown');
});

menuProductList.addEventListener('mouseleave', () =>{
    productCategories.classList.remove('shown');
});

//Click to pop the category sublist
productsSection.forEach((section) =>{
    section.children[0].addEventListener('click', (e) => {
        section.children[1].classList.toggle('hideSubList');
    });
});
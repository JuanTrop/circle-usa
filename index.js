
const menuProductList = document.getElementById('MenuProductList');
const productCategories = document.getElementById('ProductCategories');

menuProductList.addEventListener('mouseover', () => {
    productCategories.classList.add('shown');
});

menuProductList.addEventListener('mouseleave', () =>{
    productCategories.classList.remove('shown');
});
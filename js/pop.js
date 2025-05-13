const box = document.querySelectorAll('.show-products-content');
const navBox = document.querySelectorAll('.nav-bar div')

const filterFn = (filterClass) => {

    navBox.forEach((item) => item.classList.remove('move--active'));
    const active = document.querySelector(`[data-f=${filterClass}]`);
    if (active) active.classList.add('move--active')

    box.forEach((item) => {
        item.classList.remove('hidder');
        if (!item.classList.contains(filterClass) && filterClass !== 'all-products') {
            item.classList.add('hidder');
        }
    });
};

document.querySelector('.nav-bar').addEventListener("click", (e) => {
    console.log('click');

    if (!e.target.classList.contains('move')) return;

    let filterClass = e.target.dataset['f'];
    filterFn(filterClass);
    window.location.hash = e.target.dataset['f'];
});

if (window.location.hash) {
    console.log(window.location.hash)
    filterFn(window.location.hash.slice(1))
}
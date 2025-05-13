const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const toggleBtn = document.querySelector('.toggle-btn');

function openSidebar() {
    sidebar.classList.add('show');
    overlay.classList.add('show');
}

function closeSidebar() {
    sidebar.classList.remove('show');
    overlay.classList.remove('show');
}

toggleBtn.addEventListener('click', openSidebar);
overlay.addEventListener('click', closeSidebar);

// Открываем сайдбар автоматически при загрузке
window.addEventListener('load', openSidebar);

function openSidebar() {
    sidebar.classList.add('show');
    overlay.classList.add('show');
    document.body.classList.add('sidebar-open');
}

function closeSidebar() {
    sidebar.classList.remove('show');
    overlay.classList.remove('show');
    document.body.classList.remove('sidebar-open');
}

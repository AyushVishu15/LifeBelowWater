document.addEventListener('DOMContentLoaded', function () {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-list');

    burger.addEventListener('click', () => {
        nav.classList.toggle('active');
        // Hide the nav-list if it's not active
        if (!nav.classList.contains('active')) {
            nav.style.display = 'none';
        } else {
            nav.style.display = 'flex';
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('subscribeButton');

    button.addEventListener('click', function() {
        if (button.classList.contains('subscribed')) {
            button.classList.remove('subscribed');
            button.classList.remove('grey');
            button.textContent = 'Subscribe';
            button.style.backgroundColor = 'red';
        } else if (button.classList.contains('grey')) {
            button.classList.remove('grey');
            button.classList.add('subscribed');
            button.textContent = 'Subscribed';
            button.style.backgroundColor = 'green';
        } else {
            button.classList.add('grey');
            button.textContent = 'Subscribed';
            button.style.backgroundColor = 'grey';
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const updatesContent = document.querySelector(".updates-content");
    const updateHeight = updatesContent.scrollHeight;

    updatesContent.style.animationDuration = `${updateHeight / 30}s`; // Adjust 30 for speed
});

let panel   = document.getElementById('panel'),
    rate    = document.querySelectorAll('.rate'),
    button  = document.querySelector('.btn'),
    container = document.querySelector('.rating-container'); // Fixed typo

let selectRating = 'somthin';
container.addEventListener('click', e => { // Fixed typo
    if (e.target.parentNode.classList.contains('rate')) {
        changeActive();
        e.target.parentNode.classList.add('active');

        selectRating = e.target.nextElementSibling.innerHTML;
    }
});
button.addEventListener('click', ()=>{
    panel.innerHTML = `
    <p class="heart"><3</p>
    <strong> thank you ! </strong>
    <br>
    <strong>FeedBack: ${selectRating} </strong>
    `;
})
function changeActive() {
    for (let i = 0; i < rate.length; i++) { // Declare 'i' inside the loop
        rate[i].classList.remove('active');
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const socialButtons = document.querySelectorAll('.social button');

    socialButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const socialNetwork = this.querySelector('i').classList[1];
            alert('Você clicou no botão da rede social ' + socialNetwork);
        });
    });
});
function toggleCardScroll(card) {
    card.classList.toggle('scrolled');
}
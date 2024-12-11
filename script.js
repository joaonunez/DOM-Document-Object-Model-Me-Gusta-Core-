document.querySelectorAll('.like-button').forEach(button => {
    button.addEventListener('click', () => {
        const likesSpan = button.previousElementSibling;
        let likesCount = parseInt(likesSpan.textContent);
        likesCount += 1;
        likesSpan.textContent = `${likesCount} like(s)`;
    });
});

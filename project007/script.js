
const btn = document
    .querySelector('.read-more-btn');

const text = document
    .querySelector('.card_read-more');

const cardHolder = document
    .querySelector('.container');

cardHolder
    .addEventListener('click', e => {
        const current = e.target;

        const isReadMoreBtn = current.className.includes('read-more-btn');
        if (!isReadMoreBtn)
            return;

        const currentText = e.target.parentNode.querySelector('.card_read-more')

        currentText.classList.toggle('.card_read-more--open');

        current.textContent = current.textContent.includes('Read more...') ? 'Read less...' : 'Read more...';
    });
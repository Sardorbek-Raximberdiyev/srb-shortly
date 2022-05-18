const elJsForm = document.querySelector('.js-form');
const elFormCopyLinkBlock = document.querySelector('.form__copy-link-block');
const elJsCopyBlock = document.querySelector('.js-copy-block');
const elCopyButton = document.querySelector('.copy-button');

elJsForm.addEventListener('submit', function (evt) {
  evt.preventDefault();

  elFormCopyLinkBlock.classList.add('form__copy-link-block-open');
});


elJsCopyBlock.addEventListener('click', function (evt) {
  if (evt.target.matches('.copy-button')) {
    evt.target.textContent = 'Copied';

    evt.target.classList.add('js-copy-button');
    setTimeout((elJsCopyBlock) => {
      evt.target.textContent = 'Copy';
      evt.target.classList.remove('js-copy-button');
    }, 1000);
  };
});

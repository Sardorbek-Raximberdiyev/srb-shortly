const elFormButton = document.querySelector('.js-form-button');
const elFormCopyLinkBlock = document.querySelector('.form__copy-link-block');
const elCopyButton = document.querySelectorAll('.copy-button');





elFormButton.addEventListener('click', function () {
  elFormCopyLinkBlock.classList.add('form__copy-link-block-remove');

  elCopyButton.addEventListener('click', function () {
    elCopyButton.textContent = 'Copied!';
  });
});

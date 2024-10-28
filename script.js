const submit = document.querySelector('.submit');
const buttonsReview = document.querySelectorAll('.btn--review');
const selected = document.querySelector('.review__selecte');
const article = document.querySelector('.article__container');
const review = document.querySelector('.review');
let buttonValue = 0;

buttonsReview.forEach((element) => {
  element.addEventListener('click', function () {
    buttonValue = element.textContent;
    console.log(buttonValue);
  });
});
submit.addEventListener('click', function () {
  if (!buttonValue) {
    buttonsReview.forEach((element) => {
      element.style.border = '1px solid red';

      setTimeout(() => {
        element.style.border = 'none';
      }, 2000);
    });
  } else {
    article.classList.toggle('press');
    review.classList.toggle('active');
    selected.textContent = `You selected ${buttonValue} of 5`;
  }
});

const submitBtn = document.querySelector(".submit-btn");
const ratingOptions = document.querySelectorAll(".rating-options input");
const container = document.querySelector(".container");

submitBtn.addEventListener("click", (event) => {
  ratingOptions.forEach((option) => {
    if (!option.checked) {
      event.preventDefault();
      return;
    }

    if (option.checked) {
      container.classList.remove("container");
      container.classList.add("thank-you-container");
      container.innerHTML = `
                    <article>
                        <div class="online-payment-container">
                            <img src="./images/illustration-thank-you.svg" alt="online-payment">
                        </div>
                        <p class="selected-rating">You selected ${option.value} out of 5</p>
                        <h2>Thank you!</h2>
                        <p>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
                    </article>
            `;
    }
  });
});

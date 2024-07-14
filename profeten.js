let matches = document.querySelectorAll('div[id*="kamp"]');
let setScore = () => {
  matches.forEach((match) => {
    const parent = match.parentElement;
    const plusButtons = parent.querySelectorAll("button[adjust='plus']");
    plusButtons.forEach((plusButton) => {
      const randomAmount = Math.floor(Math.random() * 5);
      for (let index = 0; index < randomAmount; index++) {
        setTimeout(() => {
          plusButton.click();
        }, 100);
      }
    });
  });
};

let reset = () => {
  matches.forEach((match) => {
    const parent = match.parentElement;
    const minusButtons = parent.querySelectorAll('button[adjust="minus"]');
    minusButtons.forEach((minusButton) => {
      for (let index = 0; index < 5; index++) {
        minusButton.click();
      }
    });
  });
};

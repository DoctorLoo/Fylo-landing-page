const form = document.querySelector("form");

form.onsubmit = (e) => {
  e.preventDefault();

  const inputValue = document.querySelector("input");
  const label = document.querySelector("label");

  if (checkVaildEmail(inputValue.value)) {
    label.style.opacity = 0;
    alert("Email is vaild");
  } else {
    label.style.opacity = 1;
  }
};

const checkVaildEmail = (email) => {
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  return emailRegex.test(email);
};

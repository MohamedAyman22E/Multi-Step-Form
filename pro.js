window.addEventListener("load", () => {
  let form = document.getElementById("multi-step-form");
  let next1 = document.getElementById("step-next-1");
  let next2 = document.getElementById("step-next-2");
  let next3 = document.getElementById("step-next-3");

  let prev1 = document.getElementById("step-prev-1");
  let prev2 = document.getElementById("step-prev-2");
  let prev3 = document.getElementById("step-prev-3");

  let gorup1 = document.getElementById("step-gorup-1");
  let gorup2 = document.getElementById("step-gorup-2");
  let gorup3 = document.getElementById("step-gorup-3");
  let gorup4 = document.getElementById("step-gorup-4");

  let step1 = document.querySelector(".step1");
  let step2 = document.querySelector(".step2");
  let step3 = document.querySelector(".step3");

  form.addEventListener("click", (e) => {
    e.preventDefault();
  });

  next1.addEventListener("click", () => {
    gorup1.style.display = "none";
    gorup2.style.display = "block";
    step2.classList.add("active");
  });
  next2.addEventListener("click", () => {
    gorup1.style.display = "none";
    gorup2.style.display = "none";
    gorup3.style.display = "block";
    step2.classList.add("active");
    step3.classList.add("active");
  });
  next3.addEventListener("click", () => {
    gorup1.style.display = "none";
    gorup2.style.display = "none";
    gorup3.style.display = "none";
    gorup4.style.display = "block";
    form.style.display = "none";
  });

  prev3.addEventListener("click", () => {
    gorup1.style.display = "none";
    form.style.display = "block";
    gorup3.style.display = "block";
    gorup4.style.display = "none";
  });

  prev2.addEventListener("click", () => {
    gorup1.style.display = "none";
    form.style.display = "block";
    gorup2.style.display = "block";
    gorup3.style.display = "none";
    step2.classList.add("active");
    step3.classList.remove("active");
  });
  prev1.addEventListener("click", () => {
    gorup1.style.display = "block";
    form.style.display = "block";
    gorup2.style.display = "none";
    step1.classList.add("active");
    step2.classList.remove("active");
  });
});

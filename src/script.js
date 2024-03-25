const multiStepForm = document.querySelector("[data-multi-step]");
console.log(multiStepForm);
const formSteps = [...multiStepForm.querySelectorAll("[data-step]")];

let currentStep = formSteps.findIndex((step) => {
  return step.classList.contains("active");
});

if (currentStep < 0) {
  currentStep = 0;
  showCurrentStep();
}

multiStepForm.addEventListener("click", (event) => {
  let incromentor;
  if (event.target.matches("[data-next]")) {
    incromentor = 1;
  } else if (event.target.matches("[data-previous]")) {
    incromentor = 1;
  }

  if (incromentor == null) return;

  const inputs = [...formSteps[currentStep].querySelectorAll("input")];
  const allvalid = inputs.every((input) => input.reportValidity());
  if (allvalid) {
    currentStep += incromentor;
    showCurrentStep();
  }
});

function showCurrentStep() {
  formSteps.forEach((step, index) => {
    step.classList.toggle("active", index === currentStep);
  });
}

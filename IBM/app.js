const form = document.getElementById("ibm-calculator");
const wight = document.getElementById("weight");
const height = document.getElementById("height");
const output = document.getElementById("output");

function calculator(h, w) {
  return (w / (h * h)) * 10000;
}

function calculateIBM() {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let h = height.value;
    let w = wight.value;

    const result = calculator(h, w);
    console.log(result);
    console.log(output);

    output.innerHTML = result.toFixed(2);
  });
}

calculateIBM();

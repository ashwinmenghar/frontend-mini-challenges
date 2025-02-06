const form = document.getElementById("colorForm");
const input = document.querySelector("input");
const nums = document.querySelectorAll(".num");

function colorMe() {
  let prevIdx = -1;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const index = input.value - 1;

    if (prevIdx != -1) {
      nums[prevIdx].classList.remove("active");
    }

    nums[index].classList.add("active");
    prevIdx = index;
  });
}

colorMe();

document.getElementById("mode").addEventListener("click", invertColor);
function invertColor() {
  if (
    document.getElementsByTagName("body")[0].className == "bg-light text-dark"
  ) {
    document.getElementsByTagName("body")[0].className = "bg-dark text-light";
    document.getElementById("mode").innerHTML = "Light Mode";
  } else {
    document.getElementsByTagName("body")[0].className = "bg-light text-dark";
    document.getElementById("mode").innerHTML = "Dark Mode";
  }
}

const alertPlaceholder = document.getElementById("liveAlertPlaceholder");
const appendAlert = (message, type) => {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    "</div>",
  ].join("");

  alertPlaceholder.append(wrapper);
};

const alertTrigger = document.getElementById("liveAlertBtn");
if (alertTrigger) {
  alertTrigger.addEventListener("click", () => {
    appendAlert("you have successfully bought your ticket", "success");
  });
}

let cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", moveCursor);

function moveCursor(e) {
  let x = e.clientX;
  let y = e.clientY;

  cursor.style.left = `${x}px`;
  cursor.style.top = `${y}px`;
}

let links = Array.from(document.querySelectorAll("a"));

links.forEach((link) => {
  link.addEventListener("mouseover", () => {
    cursor.classList.add("grow");
  });
  link.addEventListener("mouseleave", () => {
    cursor.classList.remove("grow");
  });
});

function ValidateEmail(mail) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  }
  alert("You have entered an invalid email address!");
  return false;
}

function openResume() {
  let email = prompt("Enter Email to verify you not a bot 🤖 ");
  let flag = ValidateEmail(email);

  if (flag === true) {
    window.open(
      "https://drive.google.com/file/d/1joZuaRM6V1pWxYdwqVEaDQty7DfTZaQI/view?usp=sharing",
      "_blank"
    );
  } else {
    alert("Sorry ☹️ ");
  }
}

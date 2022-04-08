// JS for Simple Modal
const showModalSimple = document.querySelector("#showModal-simple");
const appModalSimple = document.querySelector("#appModal-simple");

showModalSimple.addEventListener("click", () => {
  appModalSimple.style.display = "block";
});

document.body.addEventListener("click", closeBasicModal);

function closeBasicModal(event) {
  if (event.target === appModalSimple) {
    appModalSimple.style.display = "none";
  }
}

// JS for Alert Modal
const showModalAlert = document.querySelector("#showModal-alert");
const appModalAlert = document.querySelector("#appModal-alert");
const cancelModalAlert = document.querySelector("#cancelModal-alert");

showModalAlert.addEventListener("click", () => {
  appModalAlert.style.display = "block";
});

document.body.addEventListener("click", closeAlertModal);
cancelModalAlert.addEventListener("click", closeAlertModal);

function closeAlertModal(event) {
  if (event.target === appModalAlert || event.target === cancelModalAlert) {
    appModalAlert.style.display = "none";
  }
}

// JS for Confrim Modal
const showModalConfrim = document.querySelector("#showModal-confirm");
const appModalConfrim = document.querySelector("#appModal-confirm");
const cancelModalConfrim = document.querySelector("#cancelModal-confirm");

showModalConfrim.addEventListener("click", () => {
  appModalConfrim.style.display = "block";
});

document.body.addEventListener("click", closeConfrimModal);
cancelModalConfrim.addEventListener("click", closeConfrimModal);

function closeConfrimModal(event) {
  if (event.target === appModalConfrim || event.target === cancelModalConfrim) {
    appModalConfrim.style.display = "none";
  }
}

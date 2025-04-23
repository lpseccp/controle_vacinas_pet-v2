document.getElementById("addPet").addEventListener("click", () => {
  const template = document.getElementById("pet-template");
  const clone = template.content.cloneNode(true);
  document.getElementById("petsContainer").appendChild(clone);
});

document.getElementById("backup").addEventListener("click", () => {
  const data = document.getElementById("petsContainer").innerHTML;
  const blob = new Blob([data], { type: "text/html" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "backup.html";
  a.click();
});

document.getElementById("restoreFile").addEventListener("change", (e) => {
  const file = e.target.files[0];
  const reader = new FileReader();
  reader.onload = function (event) {
    document.getElementById("petsContainer").innerHTML = event.target.result;
  };
  reader.readAsText(file);
});

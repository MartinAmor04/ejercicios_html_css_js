const photoContainer = document.getElementById("photoContainer");
const quitPhotoInp = document.getElementById("numFoto");

const photoUrls = [
  "https://raw.githubusercontent.com/MartinAmor04/DWES/main/apocalypse-now-(edited).jpg",
  "https://raw.githubusercontent.com/MartinAmor04/DWES/main/the%20lighthouse(edited).jpg",
  "https://raw.githubusercontent.com/MartinAmor04/DWES/main/evangelion(edited).jpg",
  "https://raw.githubusercontent.com/MartinAmor04/DWES/main/le%20haine(edited).jpg",
  "https://raw.githubusercontent.com/MartinAmor04/DWES/main/the%20lobster(edited).jpg"
];
let photoCount = 0;

document.getElementById("quitPhoto").addEventListener("click", function() {
  const index = parseInt(quitPhotoInp.value);
  if (index < 1 || index > photoCount) { 
    alert("Por favor, introduce un número válido entre 1 y " + photoCount);
  } else {
    photoContainer.removeChild(photoContainer.children[index - 1]); 
    photoCount--;
  }
});

document.getElementById("addPhoto").addEventListener("click", function() {
  if (photoCount < photoUrls.length) {
    const imgFilm = document.createElement("img");
    imgFilm.src = photoUrls[photoCount];
    photoContainer.appendChild(imgFilm);
    photoCount++;
  } else {
    alert("Ya has agregado todas las fotos disponibles.");
  }
});

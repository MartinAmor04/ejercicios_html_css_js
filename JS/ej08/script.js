document.addEventListener("DOMContentLoaded", function() {
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  
    console.table(usuarios);
  
    console.log("Tabla de Usuarios:");
    console.table(usuarios);
  
    usuarios.forEach(usuario => {
      const enlaceDetalle = document.createElement("a");
      enlaceDetalle.href = `ejercicio8.html?id=${usuario.id}`; 
      enlaceDetalle.textContent = "Ver detalle";
  
      console.log("Usuario:", usuario);
      console.log("Ver detalle:", enlaceDetalle.href);
    });
  });
  
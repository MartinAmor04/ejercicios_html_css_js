document.addEventListener("DOMContentLoaded", function() {
    const table = document.getElementById("datosTabla");
    const rows = table.getElementsByTagName("tr");
  
    if (!localStorage.getItem("nextUserId")) {
      localStorage.setItem("nextUserId", "1");
    }
  
    for (let i = 1; i < rows.length; i++) {
      const row = rows[i];
      const cells = row.getElementsByTagName("td");
  
      if (cells.length === 6) {
        const datos = {
          id: localStorage.getItem("nextUserId"), // Obtener el próximo ID único
          Nombre: cells[0].innerText,
          Apellidos: cells[1].innerText,
          Dirección: cells[2].innerText,
          "Fecha de nacimiento": cells[3].innerText,
          Teléfono: cells[4].innerText,
          "Correo electrónico": cells[5].innerText
        };
  
        let nextUserId = parseInt(localStorage.getItem("nextUserId")) + 1;
        localStorage.setItem("nextUserId", nextUserId.toString());
  
        const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
        usuarios.push(datos);
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
      }
    }
  });
  
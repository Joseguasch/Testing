fetch("./data.json")
  .then(response => {
    if (!response.ok) {
      throw new Error("No se pudo cargar data.json");
    }
    return response.json();
  })
  .then(data => {
    const tbody = document.querySelector("#tabla-proyectos tbody");

    data.forEach(item => {
      const row = document.createElement("tr");

      row.innerHTML = `
        <td>${item.proyecto}</td>
        <td class="${item.estado === "Riesgo" ? "estado-riesgo" : ""}">
          ${item.estado}
        </td>
        <td>${item.avance}%</td>
      `;

      tbody.appendChild(row);
    });

    const activos = data.filter(x => x.estado === "Activo").length;
    const riesgo = data.filter(x => x.estado === "Riesgo").length;

    const promedio = data.length
      ? data.reduce((total, item) => total + item.avance, 0) / data.length
      : 0;

    document.querySelector("#activos").textContent = activos;
    document.querySelector("#riesgo").textContent = riesgo;
    document.querySelector("#promedio").textContent = Math.round(promedio) + "%";
  })
  .catch(error => {
    console.error(error);
    document.body.insertAdjacentHTML(
      "beforeend",
      "<p>No se pudieron cargar los datos del dashboard.</p>"
    );
  });

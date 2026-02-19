function openModal(product) {
  const modal = document.getElementById("modal");
  const body = document.getElementById("modalBody");

  const data = {
    dishwasher: "Biodegradable anionic detergent. Removes grease and leaves crystal clear finish.",
    window: "Light-duty glass cleaner for windows and surfaces.",
    handsoap: "Liquid hand washing solution.",
    pinegel: "Deep cleansing gel for bathrooms and kitchens.",
    bleach: "Sodium Hypochlorite disinfectant. Do not mix with acids.",
    thickbleach: "1.5–2.5% Sodium Hypochlorite heavy-duty bleach.",
    toilet: "Removes tough bacteria and stains inside toilet bowls.",
    degreaser: "Thick gel suitable for ovens, grills, fryers and braais.",
    multipurpose: "Cream-based ammonia cleaner for general surfaces.",
    blood: "Ethanol-based disinfectant for blood stain removal."
  };

  body.innerHTML = `
    <h2>${product.replace(/^\w/, c => c.toUpperCase())}</h2>
    <p>${data[product]}</p>
    <p><strong>Emergency:</strong> 066 322 5828</p>
    <button onclick="alert('Attach MSDS PDF here')">Download MSDS</button>
  `;

  modal.style.display = "block";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

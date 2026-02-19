
function openModal(product) {
  const modal = document.getElementById("productModal");
  const body = document.getElementById("modalBody");

  const products = {

    dishwasher: {
      title: "Dishwasher Liquid",
      description: "Biodegradable anionic detergent with lemon fresh aroma. Removes grease leaving crystal clear finish.",
      safety: "Avoid eye contact. Keep out of reach of children.",
      emergency: "066 322 5828"
    },

    window: {
      title: "Window Cleaner",
      description: "Light duty liquid cleaner for windows and glass surfaces. Leaves sparkling finish.",
      safety: "Avoid ingestion. Rinse eyes immediately if exposed.",
      emergency: "066 322 5828"
    },

    handsoap: {
      title: "Hand Soap",
      description: "Liquid hand washing solution containing Aqua and skin-safe ingredients.",
      safety: "Not for ingestion. Avoid eye contact.",
      emergency: "066 322 5828"
    },

    pinegel: {
      title: "Pine Gel (Green)",
      description: "Deep cleanser and deodorizer for bathrooms, toilets and kitchen surfaces.",
      safety: "Dilute before use. Avoid ingestion.",
      emergency: "066 322 5828"
    },

    bleach: {
      title: "Bleach",
      description: "Sodium Hypochlorite disinfectant for toilets, sinks and hard surfaces.",
      safety: "Do not mix with acids. Corrosive. Toxic to aquatic life.",
      emergency: "066 322 5828"
    },

    thickbleach: {
      title: "Thick Bleach",
      description: "1.5–2.5% Sodium Hypochlorite disinfectant for heavy cleaning.",
      safety: "Wear PPE. Do not mix with chemicals.",
      emergency: "066 322 5828"
    },

    toilet: {
      title: "Toilet Bowl Cleaner",
      description: "Penetrates and removes tough dirt and bacteria inside toilet bowls.",
      safety: "Harmful if swallowed. Keep container closed.",
      emergency: "066 322 5828"
    },

    degreaser: {
      title: "Degreaser",
      description: "Thick gel suitable for ovens, grills, fryers and braais. Safe on stainless steel, enamel and aluminium.",
      safety: "Avoid eye contact. Store in cool place.",
      emergency: "066 322 5828"
    },

    multipurpose: {
      title: "Multi-Purpose Cleaner",
      description: "Cream-based ammonia cleaner for kitchens and bathrooms.",
      safety: "Harmful if swallowed. Avoid skin contact.",
      emergency: "066 322 5828"
    },

    blood: {
      title: "Blood Stain Remover",
      description: "Ethanol-based disinfectant for removing blood stains and bacteria.",
      safety: "Highly flammable. Avoid inhalation.",
      emergency: "066 322 5828"
    }

  };

  const p = products[product];

  body.innerHTML = `
    <h2>${p.title}</h2>
    <p><strong>Description:</strong> ${p.description}</p>
    <p><strong>Safety:</strong> ${p.safety}</p>
    <p><strong>Emergency Contact:</strong> ${p.emergency}</p>
    <br>
    <button onclick="window.open('#')">Download MSDS</button>
  `;

  modal.style.display = "block";
}

function closeModal() {
  document.getElementById("productModal").style.display = "none";
}

// Sample cultural data (you can later connect this to an API)
const culturalTips = [
  {
    country: "Japan",
    title: "Bowing Etiquette",
    description: "A slight bow is used for casual greetings; a deeper bow shows respect. Avoid hugs unless close friends.",
    category: "Greetings"
  },
  {
    country: "India",
    title: "Eating with Right Hand",
    description: "Traditionally, food is eaten with the right hand. The left hand is considered unclean for eating.",
    category: "Food Etiquette"
  },
  {
    country: "France",
    title: "Greeting with Cheek Kisses",
    description: "In France, friends often greet each other with cheek kisses (la bise). The number of kisses varies by region.",
    category: "Greetings"
  },
  {
    country: "UAE",
    title: "Dress Modestly in Public",
    description: "In the UAE, dress conservatively in public areas. Women should cover shoulders and knees.",
    category: "Clothing"
  }
];

let badgeCount = 0;

function searchTips() {
  const countryInput = document.getElementById('countryInput').value.trim().toLowerCase();
  const tipsContainer = document.getElementById('tipsContainer');
  tipsContainer.innerHTML = "";

  const results = culturalTips.filter(tip => tip.country.toLowerCase().includes(countryInput));

  if (results.length === 0) {
    tipsContainer.innerHTML = "<p>No cultural tips found. Try another country!</p>";
    return;
  }

  results.forEach(tip => {
    const card = document.createElement('div');
    card.className = 'tip-card';
    card.innerHTML = `
      <h3>${tip.title}</h3>
      <p><strong>Country:</strong> ${tip.country}</p>
      <p>${tip.description}</p>
      <p><em>Category: ${tip.category}</em></p>
      <button onclick="earnBadge('${tip.country}')">Learned ✔️</button>
    `;
    tipsContainer.appendChild(card);
  });
}

function earnBadge(country) {
  badgeCount++;
  document.getElementById('badgeCount').textContent = `Badges Earned: ${badgeCount}`;
  alert(`You earned a Cultural Explorer badge for learning about ${country}! 🏅`);
}

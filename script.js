// === CONFIG ===
const API_URL = "https://jsonplaceholder.typicode.com"; // Ejemplo gratuito

// === LOGIN ===
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value.trim();
    const pass = document.getElementById("password").value.trim();

    // Ejemplo de login simulado (sin API real)
    if (email && pass.length >= 3) {
      localStorage.setItem("user", JSON.stringify({ email }));
      window.location.href = "dashboard.html";
    } else {
      alert("Credenciales inválidas.");
    }
  });
}

// === DASHBOARD ===
const user = JSON.parse(localStorage.getItem("user"));
const userEmail = document.getElementById("userEmail");
if (userEmail && user) {
  userEmail.textContent = user.email;
}

// Logout
const logoutBtn = document.getElementById("logoutBtn");
if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("user");
    window.location.href = "index.html";
  });
}

// === EJEMPLO DE CONEXIÓN A API ===
const apiExampleBtn = document.getElementById("apiExampleBtn");
const apiOutput = document.getElementById("apiOutput");

if (apiExampleBtn) {
  apiExampleBtn.addEventListener("click", async () => {
    try {
      const res = await fetch(API_URL + "/posts/1");
      const data = await res.json();
      apiOutput.textContent = JSON.stringify(data, null, 2);
    } catch (err) {
      apiOutput.textContent = "Error al conectar con la API.";
    }
  });
}
// === POKEAPI ===
const pokeInput = document.getElementById("pokeInput");
const searchPokeBtn = document.getElementById("searchPokeBtn");
const pokeResult = document.getElementById("pokeResult");

if (searchPokeBtn) {
  searchPokeBtn.addEventListener("click", async () => {
    const query = pokeInput.value.trim().toLowerCase();
    if (!query) {
      alert("Escribe el nombre o número de un Pokémon");
      return;
    }

    pokeResult.innerHTML = "<p>Cargando...</p>";

    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`);
      if (!res.ok) {
        pokeResult.innerHTML = `<p>No se encontró el Pokémon <strong>${query}</strong>.</p>`;
        return;
      }
// === CONFIGURACIÓN ===
const API_URL = "https://jsonplaceholder.typicode.com"; // API pública de prueba

// === LOGIN ===
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value.trim();
    const pass = document.getElementById("password").value.trim();

    // Simulación de login (sin backend)
    if (email && pass.length >= 3) {
      localStorage.setItem("user", JSON.stringify({ email }));
      window.location.href = "dashboard.html";
    } else {
      alert("Credenciales inválidas. Escribe un correo y una contraseña válida.");
    }
  });
}

// === DASHBOARD ===
const user = JSON.parse(localStorage.getItem("user"));
const userEmail = document.getElementById("userEmail");
if (userEmail && user) {
  userEmail.textContent = user.email;
}

// Logout
const logoutBtn = document.getElementById("logoutBtn");
if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("user");
    window.location.href = "index.html";
  });
}

// === EJEMPLO DE CONEXIÓN A API ===
const apiExampleBtn = document.getElementById("apiExampleBtn");
const apiOutput = document.getElementById("apiOutput");

if (apiExampleBtn) {
  apiExampleBtn.addEventListener("click", async () => {
    try {
      const res = await fetch(API_URL + "/posts/1");
      const data = await res.json();
      apiOutput.textContent = JSON.stringify(data, null, 2);
    } catch (err) {
      apiOutput.textContent = "Error al conectar con la API.";
    }
  });
}

// === POKEAPI ===
const pokeInput = document.getElementById("pokeInput");
const searchPokeBtn = document.getElementById("searchPokeBtn");
const pokeResult = document.getElementById("pokeResult");

if (searchPokeBtn) {
  searchPokeBtn.addEventListener("click", async () => {
    const query = pokeInput.value.trim().toLowerCase();
    if (!query) {
      alert("Escribe el nombre o número de un Pokémon");
      return;
    }

    pokeResult.innerHTML = "<p>Cargando...</p>";

    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`);
      if (!res.ok) {
        pokeResult.innerHTML = `<p>No se encontró el Pokémon <strong>${query}</strong>.</p>`;
        return;
      }

      const data = await res.json();
      const name = data.name.toUpperCase();
      const img = data.sprites.front_default;
      const type = data.types.map(t => t.type.name).join(", ");
      const hp = data.stats.find(s => s.stat.name === "hp").base_stat;
      const attack = data.stats.find(s => s.stat.name === "attack").base_stat;
      const defense = data.stats.find(s => s.stat.name === "defense").base_stat;

      pokeResult.innerHTML = `
        <div style="background:#1e293b;padding:15px;border-radius:10px;text-align:center">
          <h3>${name}</h3>
          <img src="${img}" alt="${name}" width="120" />
          <p><strong>Tipo:</strong> ${type}</p>
          <p><strong>HP:</strong> ${hp} | <strong>Ataque:</strong> ${attack} | <strong>Defensa:</strong> ${defense}</p>
        </div>
      `;
    } catch (err) {
      pokeResult.innerHTML = "<p>Error al conectar con la API.</p>";
    }
  });
}

      const data = await res.json();
      const name = data.name.toUpperCase();
      const img = data.sprites.front_default;
      const type = data.types.map(t => t.type.name).join(", ");
      const hp = data.stats.find(s => s.stat.name === "hp").base_stat;
      const attack = data.stats.find(s => s.stat.name === "attack").base_stat;
      const defense = data.stats.find(s => s.stat.name === "defense").base_stat;

      pokeResult.innerHTML = `
        <div style="background:#1e293b;padding:15px;border-radius:10px;text-align:center">
          <h3>${name}</h3>
          <img src="${img}" alt="${name}" width="120" />
          <p><strong>Tipo:</strong> ${type}</p>
          <p><strong>HP:</strong> ${hp} | <strong>Ataque:</strong> ${attack} | <strong>Defensa:</strong> ${defense}</p>
        </div>
      `;
    } catch (err) {
      pokeResult.innerHTML = "<p>Error al conectar con la API.</p>";
    }
  });
}
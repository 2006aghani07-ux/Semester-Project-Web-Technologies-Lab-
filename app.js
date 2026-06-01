const API_URL = "http://localhost:5021/api";

console.log("APP JS LOADED");

/* =========================
   AUTO INIT (SAFE)
========================= */
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM READY");

    if (document.getElementById("userList")) loadUsers();
    if (document.getElementById("dietList")) loadDiet();
    if (document.getElementById("progressList")) loadProgress();
});

/* =========================
   USERS
========================= */
window.addUser = async function () {
    const name = document.getElementById("userName")?.value?.trim();
    const email = document.getElementById("userEmail")?.value?.trim();

    if (!name || !email) return alert("Enter name & email");

    const user = { name, email };

    try {
        const res = await fetch(`${API_URL}/User`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user)
        });

        if (!res.ok) throw new Error(await res.text());

        alert("✅ User Added");
        loadUsers();
    } catch (err) {
        alert("❌ " + err.message);
    }
};

window.loadUsers = async function () {
    const list = document.getElementById("userList");
    if (!list) return;

    try {
        const res = await fetch(`${API_URL}/User`);
        const data = await res.json();

        list.innerHTML = data.map(u =>
            `<li><b>${u.name}</b> - ${u.email}</li>`
        ).join("");

    } catch {
        list.innerHTML = "<li>Error loading users</li>";
    }
};

/* =========================
   DIET
========================= */
window.addDiet = async function () {
    const name = document.getElementById("dietName")?.value?.trim();
    const calories = document.getElementById("calories")?.value;

    if (!name) return alert("Enter diet name");

    try {
        const res = await fetch(`${API_URL}/DietPlan`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, calories })
        });

        if (!res.ok) throw new Error(await res.text());

        alert("🍽 Diet Added");
        loadDiet();
    } catch (err) {
        alert("❌ " + err.message);
    }
};

window.loadDiet = async function () {
    const list = document.getElementById("dietList");
    if (!list) return;

    try {
        const res = await fetch(`${API_URL}/DietPlan`);
        const data = await res.json();

        list.innerHTML = data.map(p =>
            `<li><b>${p.name}</b> | ${p.calories} kcal</li>`
        ).join("");

    } catch {
        list.innerHTML = "<li>Error loading diet</li>";
    }
};

/* =========================
   PROGRESS
========================= */
window.addProgress = async function () {
    const user = document.getElementById("pUser")?.value?.trim();
    const date = document.getElementById("pDate")?.value;
    const weight = document.getElementById("pWeight")?.value;

    if (!user || !date) return alert("Enter user & date");

    try {
        const res = await fetch(`${API_URL}/Progress`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ user, date, weight })
        });

        if (!res.ok) throw new Error(await res.text());

        alert("📊 Progress Added");
        loadProgress();
    } catch (err) {
        alert("❌ " + err.message);
    }
};

window.loadProgress = async function () {
    const list = document.getElementById("progressList");
    if (!list) return;

    try {
        const res = await fetch(`${API_URL}/Progress`);
        const data = await res.json();

        list.innerHTML = data.map(p =>
            `<li><b>${p.user}</b> | ${p.date} | ${p.weight}kg</li>`
        ).join("");

    } catch {
        list.innerHTML = "<li>Error loading progress</li>";
    }
};
const API_URL =
    window.location.protocol === "file:"
        ? "http://localhost:5021/api"
        : `${window.location.protocol}//${window.location.host}/api`;


// ========================
// 👤 USERS
// ========================

export async function getUsers() {
    const res = await fetch(`${API_URL}/User`);

    if (!res.ok) {
        throw new Error(`Failed to fetch users: ${res.status}`);
    }

    return await res.json();
}

export async function addUser(user) {
    const res = await fetch(`${API_URL}/User`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    });

    if (!res.ok) {
        const text = await res.text();
        throw new Error(`Failed to add user: ${res.status} - ${text}`);
    }

    return await res.json();
}


// ========================
// 🍽 DIET PLANS
// ========================

export async function getDietPlans() {
    const res = await fetch(`${API_URL}/DietPlan`);

    if (!res.ok) {
        throw new Error(`Failed to fetch diet plans: ${res.status}`);
    }

    return await res.json();
}

export async function addDietPlan(plan) {
    const res = await fetch(`${API_URL}/DietPlan`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(plan)
    });

    if (!res.ok) {
        const text = await res.text();
        throw new Error(`Failed to add diet plan: ${res.status} - ${text}`);
    }

    return await res.json();
}


// ========================
// 📊 PROGRESS
// ========================

export async function getProgress() {
    const res = await fetch(`${API_URL}/Progress`);

    if (!res.ok) {
        throw new Error(`Failed to fetch progress: ${res.status}`);
    }

    return await res.json();
}

export async function addProgress(data) {
    const res = await fetch(`${API_URL}/Progress`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    if (!res.ok) {
        const text = await res.text();
        throw new Error(`Failed to add progress: ${res.status} - ${text}`);
    }

    return await res.json();
}
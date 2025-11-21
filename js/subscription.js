function buyPlan(plan) {

    const cost = {
        basic: 199,
        pro: 499,
        promax: 999
    };

    const credits = {
        basic: 30,
        pro: 70,
        promax: 9999
    };

    let wallet = Number(localStorage.getItem("wallet") || 250);

    if (wallet < cost[plan]) {
        alert("Not enough balance. Please recharge wallet.");
        window.location = "wallet.html";
        return;
    }

    wallet -= cost[plan];

    localStorage.setItem("wallet", wallet);
    localStorage.setItem("subscriptionPlan", plan);
    localStorage.setItem("leadCredits", credits[plan]);

    alert("Subscription activated! Your plan: " + plan.toUpperCase());
    window.location = "wallet.html";
}

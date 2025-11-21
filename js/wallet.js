let wallet = Number(localStorage.getItem("wallet") || 250);

document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("balance")) {
        document.getElementById("balance").innerText = wallet;
    }
});

function rechargeWallet() {
    let amt = Number(document.getElementById("amount").value);
    if (amt <= 0) return alert("Enter valid amount");

    wallet += amt;
    localStorage.setItem("wallet", wallet);
    document.getElementById("balance").innerText = wallet;

    alert("Wallet recharged!");
}

const hitungBtn = document.querySelector("#hitung");
const ulangBtn = document.querySelector("#ulang");

function getHargaTiket() {
    const destination = document.querySelector("#tujuan-perjalanan").value;
    let ticketPrice = 0;

    switch (destination) {
        case "Bogor":
            ticketPrice = 100000;
            break;
        case "Cirebon":
            ticketPrice = 150000;
            break;
        case "Bandung":
            ticketPrice = 120000;
            break;
        case "Bali":
            ticketPrice = 500000;
            break;
        default: // Jakarta
            ticketPrice = 200000;
            break;
    }

    return ticketPrice;
}

function calculateSubTotal(ticketPrice) {
    const ticketQuantity = parseInt(document.querySelector("#jumlah-tiket-penumpang").value);

    return ticketPrice * ticketQuantity;
}

function getDiscount() {
    const isMember = document.querySelector("#member").checked;

    let discount = 0;

    if (isMember)
        discount = 45000;

    return discount;
}

function calculateTotalPayment(subTotal, discount) {
    return subTotal - discount;
}

function displayResult() {
    document.querySelector("#harga-tiket-perjalanan").value = getHargaTiket();
    document.querySelector("#sub-total-harga").value = calculateSubTotal(getHargaTiket());
    document.querySelector("#diskon-harga").value = getDiscount();
    document.querySelector("#total-bayar-harga").value = calculateTotalPayment(calculateSubTotal(getHargaTiket()), getDiscount());
}

hitungBtn.addEventListener("click", displayResult);

ulangBtn.addEventListener("click", () => {
    const inputs = document.querySelectorAll("input");
    for (const input of inputs) {
        input.value = "";
    }
    document.querySelector("#member").checked = false;

    document.querySelector("#tujuan-perjalanan").selectedIndex = -1;
});
function invoice(gstrate = 0.18, ...items) {
    let subtotal = 0;
    for (let i = 0; i < items.length; i++) {
        let item = items[i];
        if (item.name === "stop") {
            break;
        }
        if (typeof item.price !== "number" || typeof item.qty !== "number" ) {
            continue;
        }
        subtotal += item.price * item.qty;
    }
    let gst = subtotal * gstrate;
    let total = subtotal + gst;
    return {
        Subtotal: subtotal,
        Gst: gst,
        Total: total
    };
}
let result = invoice(0.18,{ name: "book", price: 50, qty: 2 },);
console.log(result);
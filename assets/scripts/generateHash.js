function generateHash(e) {
  e.preventDefault();
  
  const sessionID = document.querySelector("#session-id").value;
  const senderHash = document.querySelector("#sender-hash");
  const creditCardToken = document.querySelector("#credit-card-token");

  PagSeguroDirectPayment.setSessionId(sessionID);

  PagSeguroDirectPayment.onSenderHashReady(response => {
    if (response.status == "error") {
      return false;
    } else {
      senderHash.innerHTML = response.senderHash;
    }
  });

  PagSeguroDirectPayment.createCardToken({
    cardNumber: "4111111111111111",
    brand: "visa",
    cvv: "123",
    expirationMonth: "12",
    expirationYear: "2030",
    success: response => {
      creditCardToken.innerHTML = response.card.token;
    },
    error: response => {},
    complete: response => {}
  });
}
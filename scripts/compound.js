const setElement = (id, value) => {
  document.getElementById(id).textContent = value;
};
function calculateInterest() {
  const initial = parseFloat(document.getElementById("initial").value);
  const rate = parseFloat(document.getElementById("rate").value) / 100;
  const time = parseFloat(document.getElementById("time").value);
  const frequency = parseInt(document.getElementById("frequency").value);
  const contribution = parseFloat(
    document.getElementById("contribution").value
  );

  const rateFactor = rate / frequency;
  const contributionWithFrequency = contribution * (12 / frequency);
  const timeFactor = time * frequency;
  const compoundFactor =
    (Math.pow(1 + rateFactor, timeFactor) - 1) / rateFactor;
  const contributionWithCompound = contributionWithFrequency * compoundFactor;
  const futureValue =
    initial * Math.pow(1 + rateFactor, timeFactor) + contributionWithCompound;

  const interest =
    futureValue - initial - contributionWithFrequency * timeFactor;
  const totalContribution = contributionWithFrequency * timeFactor;
  //M = P(1 + r)^n + Aporte * [((1 + r)^n - 1) / r]
  /*Onde:
  
  P é o capital inicial.
  r é a taxa de juros por período.
  n é o número total de períodos.
  Aporte é o valor dos aportes mensais.
  */

  setElement("futureValue", returnMoney(futureValue));
  setElement("interestEarned", returnMoney(interest));
  setElement("totalContribution", returnMoney(totalContribution));
}

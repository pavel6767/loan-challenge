function get_days_of_power(R1, D1, R2, D2, R3, D3, K) {
  // arranging subroutine
  const rawLoans = [
    {
      amount: R1,
      day: D1
    },
    {
      amount: R2,
      day: D2
    },
    {
      amount: R3,
      day: D3
    },
  ].sort((a,b) => a.day-b.day)

  let i = 0
  while(i < rawLoans.length-1) {
    let temp = 1
    let j = i+1
    while(j < rawLoans.length && rawLoans[i].day === rawLoans[j].day) {
      rawLoans[i].amount += rawLoans[j].amount
      rawLoans[j].day = -1
      j++
      temp++
    }
    i+=temp
  }

  const loans = rawLoans.filter(loan => loan.day !== -1)

  // counting days
  let totalDays = 0
  let currentLoan = 0

  for(let i=0; i<loans.length; i++) {
    const loan = loans[i]
    currentLoan += loan.amount
    if(K < currentLoan) break;

    // figure max days for this loan
    let maxInterval
    if (i === loans.length-1) {
      maxInterval = Infinity
    } else {
      maxInterval = loans[i+1].day - loan.day
    }
    
    if(K >= maxInterval*currentLoan && i < loans.length -1) {
      K -= maxInterval*currentLoan
      totalDays += maxInterval
    } else {
      totalDays += Math.floor(K/(currentLoan))
      break;
    }
  }
  return totalDays
}

module.exports = get_days_of_power;
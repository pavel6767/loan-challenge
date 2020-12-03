/*
get_days_of_power(R1=3000, D1=3, R2=500, D2=10, R3=1500, D3=7, K=700000)
get_days_of_power(R1=500, D1=3, R2=500, D2=10, R3=500, D3=7, K=21000)
get_days_of_power(R1=1300, D1=0, R2=500, D2=0, R3=1500, D3=7, K=10000)
get_days_of_power(R1=10000, D1=3, R2=500, D2=10, R3=1500, D3=7, K=11000)
*/

const get_days_of_power = require("./index")
const cases = [
  {
    input: [1000, 3, 500, 10, 1500, 7, 21000],
    expected: 10
  },
  {
    input: [3000, 3, 500, 10, 1500, 7, 700000],
    expected: 141
  },
  {
    input: [500, 3, 500, 10, 500, 7, 21000],
    expected: 17
  },
  {
    input: [1300, 0, 500, 0, 1500, 7, 10000],
    expected: 5
  },
  {
    input: [10000, 3, 500, 10, 1500, 7, 11000],
    expected: 1
  }
]
for (let i in cases) {
  console.log("\n=========== case ", Number(i)+1)
  console.log(get_days_of_power(...cases[i].input) === cases[i].expected ? "pass" : `fail:\n - got ${get_days_of_power(...cases[i].input)}\n - expected ${cases[i].expected}`)
}
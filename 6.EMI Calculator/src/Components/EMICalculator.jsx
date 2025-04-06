import React from 'react'

function EMICalculator() {
  let [assetCost, setAssetCost] = React.useState(0);
  let [downPayment, setDownPayment] = React.useState(0);
  let [loanAmount, setLoanAmount] = React.useState(0);
  let [tenure, setTenure] = React.useState(12);
  let [interestRate, setInterestRate] = React.useState(0);
  let [emi, setEmi] = React.useState(0);

  let assetCostRef = React.useRef();
  let downPaymentRef = React.useRef();
  let loanAmountRef = React.useRef();
  let interestRateRef = React.useRef();

  let handleAssetCostChange = () =>{
      if(isNaN(assetCostRef.current.value)){
        return;
      }
      setAssetCost(assetCostRef.current.value);
  }

  let handleDownPaymentChange = () =>{
    if(isNaN(downPaymentRef.current.value)){
      return;
    }

    setDownPayment(downPaymentRef.current.value);
    setLoanAmount((assetCost - downPaymentRef.current.value));
  }

  let handleLoanAmountChange = () =>{
    if(isNaN(loanAmountRef.current.value)){
      return;
    }
    setLoanAmount(loanAmountRef.current.value);
    setDownPayment(assetCost - loanAmountRef.current.value);
  }
  
  let handleTenureChange = (item) =>{
    setTenure(item);
  }


  let handleInterestRateChange = () =>{
    if(isNaN(interestRateRef.current.value)){
      return;
    }

    setInterestRate(interestRateRef.current.value);
  }


  let calculateEMI = () => { 
    let principal = loanAmount;
    let interest = interestRate / 100 /12;
    let t = tenure;
    let emi = (principal * interest * Math.pow(1 + interest, t)) / (Math.pow(1 + interest, t) - 1);
    setEmi(emi);
    
  }





  return (
    <div>
    
    <div>EMICalculator</div>
    <div>
      <h1>Total Cost of asset</h1>
      <input ref={assetCostRef} onChange={handleAssetCostChange} value={assetCost} type="text" placeholder="Enter the total cost of asset" />
      <h1>Interest Rate</h1>
      <input type="text" onChange={handleInterestRateChange} ref={interestRateRef} value={interestRate} placeholder="Enter the interest rate" />

      <h1>Down Payment {downPayment}</h1>
      <input type="range" ref={downPaymentRef} min={0} max={assetCost}  value={downPayment} onChange={handleDownPaymentChange} />

      <h1>Loan Amount {loanAmount}</h1>
      <input 
        type="range" 
        value={loanAmount} 
        onChange={handleLoanAmountChange} 
        ref={loanAmountRef} 
        max={assetCost}
      />
      
      <h1>Tenure {tenure}</h1>
      <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
        {[12,24,36,48,60].map((item) => (
          <div key={item}  onClick={() => handleTenureChange(item)} style={{border: "1px solid black", padding: "10px", margin: "5px", cursor: "pointer"}}>
            {item}
          </div>
        ))}
      </div>

      <div><button onClick={calculateEMI}>Calculate EMI</button></div>
      <h1>EMI {emi}</h1>
    </div>
    
    </div>
  )
}

export default EMICalculator
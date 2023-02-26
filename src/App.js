import BillInput from "./components/Inputs/BillInput";
import Tipcontainer from "./components/Tips/TipContainer";
import PeopleCountInput from "./components/Inputs/PeopleCountInput";
import PriceContainer from "./components/Price/PriceContainer";
import {useState, useEffect} from "react";

function App() {
  const tips = [5, 10, 15, 25, 50];
  const[bill, setBill] = useState(0);
  const[tip, setTip] = useState('');
  const[people, setPeople] = useState(0);
  const[selectedTip, setselectedTip] = useState(10);
  const[errorMessage, setErrorMessage] = useState('');
  const[tipPerPerson, setTipPerPerson] = useState('');
  const[totalPerPerson, setTotalPerPerson] = useState('');

  useEffect(()=>{
    calculate();
  }, [tip, selectedTip, bill, people]);

  function calculate(){
    if(bill > 0 && people > 0){
      const finalTip = selectedTip == '' ? tip : selectedTip;
      const total = bill + (bill/100 * finalTip);
      const totalPerPerson = (total/people).toFixed(2);
      const tipPerPerson = ((bill/100 * finalTip)/people).toFixed(2);
      setTotalPerPerson(totalPerPerson);
      setTipPerPerson(tipPerPerson);
    }else{ // clear out the fields
      setTotalPerPerson('');
      setTipPerPerson('');
    }
  }

  function checkPeople(e){
    const value=parseInt(e.target.valueAsNumber);
    if(!isNaN(value) && value > 0){
      setPeople(value);
      setErrorMessage('');
    }
    else if(value === 0){
        setErrorMessage("can't be zero");
        setPeople(NaN);
    }else{
      setPeople(NaN);
      setErrorMessage('');
    }
  }       
  function checkselectedTip(e){
    const value = parseFloat(e.target.innerHTML.slice(0,-1));
    setselectedTip(value);
    setTip('');
  }
  function checkTip(e){
    const value = e.target.valueAsNumber;
    if(value===0) return;
    setselectedTip('');
    setTip(value);
  }
  function resetAll(){
    setBill('');
    setPeople('');
    setTip('');
    setselectedTip('');
  }
  
  return (
    <div className="app">
      <div className="container">
        <div>
          <BillInput onChange={(e)=>{setBill(e.target.valueAsNumber)}} value={bill}/>
          <Tipcontainer 
            tips={tips} 
            onClick={(e)=>checkselectedTip(e)} 
            onChange={(e)=>checkTip(e)}
            value = {tip}
            selectedTip={selectedTip}
          />
          <PeopleCountInput 
            onChange={(e)=>checkPeople(e)}
            errorMessage={errorMessage}
            value={people}
          />
        </div>
        <div>
          <PriceContainer onClick={resetAll} tipPerPerson={tipPerPerson} totalPerPerson={totalPerPerson}/> 
        </div>
      </div>
    </div>

  );
}

export default App;

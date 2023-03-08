import logo from './images/t-shirt.jpg';
import logo1 from './images/back.jpg';
import logo2 from './images/trousers.jpg';
import logo3 from './images/shoes.jpg';
import React, { useState } from "react";

export default function Fortextes(){
    const [count, setCount] = useState(0);
    function increment() {
        setCount(function (Counter) {
          return (Counter += 1);
        });
      }


      function decrement() {
        setCount(function (Counter) {
          if (Counter > 0) {
            return (Counter -= 1); 
          } else {
            return (Counter = 0);
          }
        });
      }
    



    return(
    <div className='container'>
            <div className='bck'>
        
        <nav>
            <ul>
            <input type='checkbox' id='forchekbox'></input>
                <li>პროდუქტების დასახელება</li>
                <li>რაოდენობა</li>
                <li>ფასი</li>
                <li>ჯამი</li>
                <div className="chekboxes">
                <input type ='checkbox'></input>
                <br></br>
                <input type ='checkbox'></input>
                <br></br>
                <input type ='checkbox'></input>
                <br></br>
                <input type ='checkbox'></input>
            
        </div>
            </ul>
        </nav>

        <div className='img1'>
            <img src={logo}></img>
        </div>
        <div className='img1'>
            <img src={logo1}></img>
        </div>
        <div className='img1'>
            <img src={logo2}></img>
        </div>
        <div className='img1'>
            <img src={logo3}></img>
        </div>

        <div className='firsth4'>
        <h4>Shoes</h4>
        <br></br></div>

        <div className='firsth5'>
        <h4>Trousers</h4>
        <br></br>
        </div>
        <div className='firsth6'>
        <h4>Backpack</h4>
        <br></br>
        </div>
        <div className='firsth7'>
        <h4>T-shirt</h4>
        </div>
        
          
        
    <div className="App">
        <h5>{count}</h5>
        <div className='btn'>
        <button onClick={increment}>+</button>
        </div>
        <div className='btn1'>
        <button onClick={decrement}>-</button>
        </div>
        
        </div>




        


        <div className="App1">
        <h5>{count}</h5>
        <div className='btn2'>
        <button onClick={increment}>+</button>
        </div>
        <div className='btn3'>
        <button onClick={decrement}>-</button>
        </div>
        
        </div>




        


        <div className="App2">
        <h5>{count}</h5>
        <div className='btn4'>
        <button onClick={increment}>+</button>
        </div>
        <div className='btn5'>
        <button onClick={decrement}>-</button>
        </div>
        
        </div>






        <div className="App3">
        <h5>{count}</h5>
        <div className='btn6'>
        <button onClick={increment}>+</button>
        </div>
        <div className='btn7'>
        <button onClick={decrement}>-</button>
        </div>
        
        </div>


       



      <div className='fasi'>

        <h6>5 799$</h6>
        <h6>2 099$</h6>
        <br></br>
        <h6>3 899$</h6>
        <br></br>
        <h6>1 299$</h6>


        </div>





        <div className='jami'>

          <h6>17 397$</h6>
          <h6>2 099$</h6>
          <br></br>
          <h6>7 798$</h6>
          <br></br>
          <h6>1 299$</h6>


          </div>




          <div className='clean'>
            <button>კალათის გასუფთავება</button>
          </div>

        </div>

        
       
        
    </div>
    )
    
    
}
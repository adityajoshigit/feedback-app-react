import React, { useState } from 'react'

function RatingSelect({
  onRatingSelect,
  defaultSelectedValue
}) {
  const [selected, setSelected] = useState(defaultSelectedValue);
  
  const eventHandlers = {
    handleSelect: function(selectedNum) {
      setSelected(selectedNum);
      onRatingSelect(selectedNum);
    }
  };
  return (
    <ul className='rating'>
      <li>
        <input 
          type="radio" 
          name="rating" 
          id="num1" 
          value='1'
          checked={selected === 1}
          onChange={ () => eventHandlers.handleSelect(1) }
        />
        <label htmlFor='num1'>
          1
        </label>
      </li>
      <li>
        <input 
          type="radio" 
          name="rating" 
          id="num2" 
          value='2'
          checked={selected === 2}
          onChange={ () => eventHandlers.handleSelect(2) }
        />
        <label htmlFor='num2'>
          2
        </label>
      </li>
      <li>
        <input 
          type="radio" 
          name="rating" 
          id="num3" 
          value='3'
          checked={selected === 3}
          onChange={ () => eventHandlers.handleSelect(3) }
        />
        <label htmlFor='num3'>
          3
        </label>
      </li>
      <li>
        <input 
          type="radio" 
          name="rating" 
          id="num4" 
          value='4'
          checked={selected === 4}
          onChange={ () => eventHandlers.handleSelect(4) }
        />
        <label htmlFor='num4'>
          4
        </label>
      </li>
      <li>
        <input 
          type="radio" 
          name="rating" 
          id="num5" 
          value='5'
          checked={selected === 5}
          onChange={ () => eventHandlers.handleSelect(5) }
        />
        <label htmlFor='num5'>
          5
        </label>
      </li>
      <li>
        <input 
          type="radio" 
          name="rating" 
          id="num6" 
          value='6'
          checked={selected === 6}
          onChange={ () => eventHandlers.handleSelect(6) }
        />
        <label htmlFor='num6'>
          6
        </label>
      </li>
      <li>
        <input 
          type="radio" 
          name="rating" 
          id="num7" 
          value='7'
          checked={selected === 7}
          onChange={ () => eventHandlers.handleSelect(7) }
        />
        <label htmlFor='num7'>
          7
        </label>
      </li>
      <li>
        <input 
          type="radio" 
          name="rating" 
          id="num8" 
          value='8'
          checked={selected === 8}
          onChange={ () => eventHandlers.handleSelect(8) }
        />
        <label htmlFor='num8'>
          8
        </label>
      </li>
      <li>
        <input 
          type="radio" 
          name="rating" 
          id="num9" 
          value='9'
          checked={selected === 9}
          onChange={ () => eventHandlers.handleSelect(9) }
        />
        <label htmlFor='num9'>
          9
        </label>
      </li>
      <li>
        <input 
          type="radio" 
          name="rating" 
          id="num10" 
          value='10'
          checked={selected === 10}
          onChange={ () => eventHandlers.handleSelect(10) }
        />
        <label htmlFor='num10'>
          10
        </label>
      </li>
    </ul>
  )
}

export default RatingSelect
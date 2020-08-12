import React from 'react';

class Lab extends React.Component {
    state = {  }
    render() { 
        return(
        <div class="ui form segment">
        <div class="two fields">
          <div class="field">
      <label>Selection Dropdown</label>
      <div class="ui selection dropdown">
        <div class="default text">Select</div>
        <i class="dropdown icon"></i>
        <input name="hidden-field" type="hidden"/>
        <div class="menu">
          <div class="item" data-value="1">Choice 1</div>
          <div class="item" data-value="2">Choice 2</div>
        </div>
      </div>
          </div>
          <div class="field">
      <label>HTML Select</label>
      <select>
        <option value="">Select</option>
        <option value="1">1</option>
        <option value="2">2</option>
      </select>
          </div>
        </div>  
    </div>
        );
    }
}
 
export default Lab;
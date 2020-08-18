import React from 'react';
import Monster from './Monster';
import EditBand from './EditBand';

const TEST_API_BANDS = [
  {
    id: 1,
    name: "Band A"
  }
]

class Band extends React.Component {

  state = {
    bands: TEST_API_BANDS,
    editBand: "",
    name: ""
  }

  
    handleEditClick = (id) => {
      console.log("ID of Band being edited:", id)
      let newArr = [...this.state.bands]
      let bandX = newArr.find(obj => obj.id === id)
      this.setState({editBand: bandX})
    };

    handleEditChange = (e) => {
      console.log("Band Editing in progress.. ")
      this.setState({[e.target.name]: e.target.value})
    };

    handleEditSubmit = (e) => {
      console.log("HandleEditSubmit")
    };

    render() {
      console.log(this.state.editBand)
        return (
          <div>
          <p></p>
            <h2 style={{ color: 'green' }}>My Bands</h2>
            <div class="ui horizontal segments">
              {this.state.bands.map(band => <Monster editBand={this.handleEditClick} band={band} />)}
            </div>
            <div className="edit-band">
            <p></p>
              <EditBand bandX={this.state.editBand} handleEditChange={this.handleEditChange} handleEditSubmit={this.handleEditSubmit} />
            </div>
          </div>
        );
    };
};

export default Band;


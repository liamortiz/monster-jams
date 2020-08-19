import React from 'react';
import Monster from './Monster';
import EditBand from './EditBand';

class Band extends React.Component {

  state = {
    bands: [],
    editBand: "",
    name: ""
  }

  monsters = []

  componentDidMount() {
    const token = localStorage.getItem('token')
    fetch('http://localhost:8080/users/1', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        accepts: 'application/json'
      }
    }).then(resp => resp.json())
      .then(data => {
        console.log(data);
        this.setState({
          bands: data
        })
      })
  }

    handleDelete = (id) => {
      fetch(`http://localhost:8080/playlists/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            }).then(() => {
                console.log("deleted.");
                const newBands = this.state.bands.filter(band => band.id !== id);
                this.setState({bands: newBands})
            })
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
              {this.state.bands.map(band => <Monster editBand={this.handleEditClick} handleDelete={this.handleDelete} band={band} />)}
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


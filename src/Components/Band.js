import React from 'react';
import Monster from './Monster'

class Band extends React.Component {
  state = {
    bands: [],
    editBand: "",
    name: ""
  };

  editing = false;

  componentDidMount() {
    const token = localStorage.getItem('token')
    fetch(`http://localhost:8080/users/${localStorage.getItem('user')}`, {
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
  };

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
  };

  handleEditClick = (id, newName="") => {
    let editedBand = this.state.bands.find(band => band.id === id);
    editedBand.band_name = newName;
    this.setState({bands: [...this.state.bands] })

    fetch(`http://localhost:8080/playlists/${id}`, {
              method: 'PATCH',
              headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${localStorage.getItem('token')}`
              },
              body: JSON.stringify(editedBand)
      }).then(() => {
        console.log("Success");
      })

  };

  render() {
    return (
      <div>
      <p></p>
        <h2 style={{ color: 'green' }}>My Bands</h2>
        <div class="ui horizontal segments">
          {this.state.bands.map(band => <Monster editBand={this.handleEditClick} handleDelete={this.handleDelete} band={band} />)}
        </div>
        <div className="edit-band">
        <p></p>
          
        </div>
      </div>
    );
  };
};

export default Band;


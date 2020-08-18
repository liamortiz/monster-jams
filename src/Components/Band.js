import React from 'react';
import Monster from './Monster';
import EditBand from './EditBand';
import { Link } from 'react-router-dom';

const TEST_API_BANDS = [
  {
    id: 1,
    name: "Band A"
  },
  {
    id: 2,
    name: "Band B"
  },
  {
     id: 3,
     name: "Band C"
  } 
]

class Band extends React.Component {

  state = {
    bands: TEST_API_BANDS,
    editBand: "",
    name: ""
  }

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //       currentMonsters: []
    //     }

    //     this.currentSet = 0;
    //     this.monsters = ['beans', 'potato', 'squids', 'bubble']
    //     this.sounds = [['A1', 'B1', 'C1'], ['A2', 'C2', 'B2']]
    // }
    // componentDidMount() {
    //   console.log(this.state)
    //     this.setMonsters();
    // }

    // setMonsters() {
    //     const newMonsters = [];        
    //     this.monsters.map((monsterName, index) => {
    //       newMonsters.push(<Monster key = {index} name = {monsterName} />)
    //     })
    //     this.setState({ currentMonsters: newMonsters })
    // }

    // handleDelete = (name) => {
    //   fetch(// API, 
    //     { 
    //     method: "DELETE",
    //     headers: {
    //       "Content-Type": "application/json",
    //       Accept: "application/json"
    //     }
    //   })
    //   .then(r => r.json())
    //   .then(() => {
    //     let newArr = this.state.monsters.filter(monster => monster.name !== name)
    //     this.setState({monsters: newArr})
    //   })
    // }

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
      // e.preventDefault()
      // fetch(//`??/${this.state.editBand.id}`, 
      // {
      //   method: "PATCH",
      //   headers: {
      //     "Content-Type": "application/json",
      //     Accept: "application/json"
      //   }, 
      //   body: JSON.stringify({
      //     name: this.state.name
      //   })})
      //   .then(r => r.json())
      //   .then(updatedBandObject => {
      //     let newArray = [...this.state.bands]
      //     let updatedBand = newArray.find(obj => obj.id === updatedBandObject.id)
      //     this.setState({bands: newArray})
      //     this.setState({
      //       editBand: "",
      //       name: ""
      //     })
      //   })
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


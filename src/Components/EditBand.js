import React from 'react';

class EditBand extends React.Component {

    render() { 
        console.log(this.props.bandX)
        return (  
            <div>
                <div className="form-row">
                    <h2 style={{ color: 'green' }}>Edit Your Band</h2>
                    <div className="col-5">
                        <input type="text" className="form-control" placeholder={this.props.bandX.name} name="editBand" value={this.props.bandX.name} onChange={this.props.handleEditChange} style={{width: "250px"}} ></input><br></br><br></br>
                    </div>
                    <div className="col">
                        <button type="submit" className="btn btn-success" onClick={this.props.handleEditSubmit}>Submit Changes</button>
                    </div>          
                </div>
            </div>
        );
    };
};
 
export default EditBand;


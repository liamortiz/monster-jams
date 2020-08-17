import React from 'react';

class EditBand extends React.Component {

    render() { 
        return (  
            <div>
                <form class="ui form">
                    <h2 style={{ color: 'green' }}>Edit Your Band</h2>
                    <input style={{width: "250px"}} type="text" placeholder="Band Name"></input><br></br><br></br>
                    <button class="ui mini yellow button" type="submit">Submit Changes</button>
                </form>
            </div>
        );
    }
}
 
export default EditBand;


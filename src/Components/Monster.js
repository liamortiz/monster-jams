import React from 'react';

const monsterImages = require.context('../images/');

class Monster extends React.Component {
    render() {
        return (
          <>
            <img src = {monsterImages(`./${this.props.name}.svg`)} alt = "" />
          </>
        );
    };
};
export default Monster;
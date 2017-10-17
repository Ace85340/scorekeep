import React from 'react';
import PropTypes from 'prop-types';

import Player from './Player.js';

export default class PlayerList extends React.Component {
  renderPlayers() {
    console.log(`Players: ${this.props.players}`);
    return this.props.players.map((player) => {
      console.log(`Player: ${player}`);
      return <Player key={player._id} player={player}/>;
    });
  }
  render() {
    return (
      <div>
        {this.renderPlayers()}
      </div>
    );
  }
};

PlayerList.propTypes ={
  players: PropTypes.array.isRequired
}

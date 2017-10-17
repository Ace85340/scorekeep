import React from 'react';
import PropTypes from 'prop-types';

import {Players} from './../api/players.js';

export default class Player extends React.Component {

  render() {
    return (
      <div>
        <hr />
        <p>Name: {this.props.player.name}</p>
        <p>Score: {this.props.player.score}</p>
        <button onClick={() => Players.update({_id: this.props.player._id}, {$inc: {score: 1}})}>+1</button>
        <button onClick={() => Players.update({_id: this.props.player._id}, {$inc: {score: -1}})}>-1</button>
        <button onClick={() => Players.remove({_id: this.props.player._id})}>X</button>
      </div>
    );
  }


};

Player.propTypes = {
  player: PropTypes.object.isRequired,
  // subtitle: PropTypes.string.isRequired
};

Player.defaultProps = {
  // title: 'Default Title'
};

var React = require('react');
var RRouter = require('react-router');

module.exports = React.createClass({
  render() {
    return (
      <div>
        <h2>Index Page</h2>
        <div><RRouter.Link to="/signin">Sign In</RRouter.Link></div>
        <div><RRouter.Link to="/game">Game</RRouter.Link></div>
      </div>
    )
  }
})
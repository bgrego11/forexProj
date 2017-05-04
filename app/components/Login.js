// Include React
var React = require("react");

// Create the Header component
// Notice how the header uses React.createClass
// Notice how it uses a render function which specifies what will be displayed by the component
var Login  = React.createClass({
  getInitialState: function() {
    return {
      user: '',
      password: '',
      email: ''
    };
  },
  render: function() {
    return (
    
      <div id="login">
      <form action="" id="logDiv" method="POST" className="panel panel-default animated bounceInLeft" role="form">
    <legend>Login</legend>

    <div className="panel-body form-group">
        <label for="">User Name</label>
        <input value={this.state.user} onChange={this.updateUser} type="text" className="form-control" id="" placeholder="jill123" />
        <label for="">Password</label>
        <input value={this.state.password} onChange={this.updatePw} type="Password" className="form-control" id="" placeholder="****" />
    </div>
    <button type="submit" id="logBtn" onClick={this.login} className="btn btn-success">Login</button>
    <button type="submit" id="logBtn" onClick={this.create} className="btn btn-success">Create</button>
    </form>
</div>



    );
  },
  updateUser: function(evt) {
    this.setState({
      user: evt.target.value
    });
  },
  updatePw: function(evt) {
    this.setState({
      password: evt.target.value
    });
  },
  login: function(e) {
    e.preventDefault();
    console.log(this.state)
  }

});

// Export the component back for use in other files
module.exports = Login;
import { ref, firebaseAuth } from './firebase-ref'

const Save = React.createClass({
  handleCommentSubmit: function (comment) {
    return firebaseAuth().createUserWithEmailAndPassword(comment.email, comment.pass)
      .then((user) => {
        return ref.child(`users/${user.uid}`)
          .set({
            email: user.email,
            uid: user.uid,
            name: comment.name,
            address: comment.address
          })
          .then(() => console.log(user))
      })
      .catch((error) => alert(error.message))
  },
  render: function () {
    return (
      <div className='commentBox'>
        <Register onCommentSubmit={this.handleCommentSubmit} />
      </div>
    );
  }
})

const Register = React.createClass({
  handleSubmit(event) {
    event.preventDefault()

    this.props.onCommentSubmit({
      email: this.refs.email.value.trim(),
      pass: this.refs.pass.value.trim(),
      name: this.refs.name.value,
      address: this.refs.address.value
    });
  },
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label><input ref="email" placeholder="email" defaultValue="mani@example.com" /></label>
        <label><input ref="pass" placeholder="password" /></label>
        <label><input ref="name" placeholder="Your name" defaultValue="Majid Ashraf" /></label>
        <label><input ref="address" placeholder="Your address" defaultValue="karachi" /></label>
        <button type="submit">Register</button>
      </form>
    )
  }
})

ReactDOM.render(
  <Save />,
  document.getElementById('root')
);

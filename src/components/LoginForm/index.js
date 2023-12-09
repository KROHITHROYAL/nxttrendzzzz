// Write your JS code here
import {Component} from 'react'

class LoginForm extends Component {
  state = {
    userName: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChnageUserName = event => {
    this.setState({userName: event.target.value})
  }

  onSubmitSuccess = () => {
    const {history} = this.props

    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {userName, password} = this.state
    const userDetails = {userName, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const resposnse = await fetch(url, options)
    const data = await resposnse.json()
    if (resposnse.ok === true) {
      this.onSubmitSuccess()
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  renderPasswordFeild = () => {
    const {password} = this.state

    return (
      <>
        <label className="label" htmlFor="password">
          Password
        </label>
        <input
          type="text"
          id="password"
          className="input-password-feild"
          value={password}
          onChange={this.onChangePassword}
          placeholder="Password"
        />
      </>
    )
  }

  renderUserNameFeild = () => {
    const {userName} = this.state

    return (
      <>
        <label className="label" htmlFor="userName">
          USERNAME
        </label>

        <input
          type="text"
          id="username"
          className="input-usernmae-feild"
          value={userName}
          onChange={this.onChnageUserName}
          placeholder="Username"
        />
      </>
    )
  }

  render() {
    const {showSubmitError, errorMsg} = this.state
    return (
      <div className="login-form-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website-logo"
          className="website-logo"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="login-form-image"
        />
        <form className="form-container" onSubmit={this.onSubmitFailure}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png "
            alt="website logo"
            className="form-website-logo"
          />
          <div className="input-container">{this.renderUserNameFeild()}</div>
          <div className="password-container">{this.renderPasswordFeild()}</div>
          <button type="button" className="login-btn">
            Login
          </button>
          {showSubmitError && <p className="error-msg">*{errorMsg}</p>}
        </form>
      </div>
    )
  }
}

export default LoginForm

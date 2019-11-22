import React from 'react';

const AZURE_CODE = 'GlW01LTr9nBaPo1w9z3y59GCNq9Q9Wy652Fllm51l7pn4/8q83ep6Q=='
const SUBSCRIBE_URI = 'https://holidaze.azurewebsites.net/api/subscribe';

class Subscription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      subscribing: false,
      placeholder: 'Your Email',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ email: event.target.value })
  }

  handleSubmit(event) {
    console.log(`Subscribe: ${this.state.email}`);
    event.preventDefault();

    this.setState({
      ...this.state,
      subscribing: true,
    });

    const email = encodeURIComponent(this.state.email);
    const uri = `${SUBSCRIBE_URI}?code=${AZURE_CODE}&email=${email}`;

    fetch(uri)
      .then(({ ok }) => {
        if(ok) {
          this.setState({
            email: '',
            subscribing: false,
            placeholder: 'You have subscribed!',
          });
          document.activeElement.blur();
        } else {
          this.setState({
            email: '',
            subscribing: false,
            placeholder: 'Issue subscribing',
          });
        }
      })
  }

  render() {
    return (
      <form
        id="subscribe"
        className="subscription"
        onSubmit={this.handleSubmit}
      >
        <fieldset disabled={this.state.subscribing}>
          <input
            type="text"
            placeholder={this.state.placeholder}
            value={this.state.email}
            onChange={this.handleChange}
          />
          <button type="submit">Subscribe</button>
        </fieldset>
      </form>
    );
  }
}

export default Subscription;

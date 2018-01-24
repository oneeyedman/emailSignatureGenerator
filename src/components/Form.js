import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.updatePreview(event.target.name, event.target.value);
  }

  render() {
    return (
      <section className="form col-12 col-lg-6">
        <form className="form__item">
          <div className="form__row">
            <input id="fullName" name="fullName" type="text" className="form__field form__field--text" placeholder="Nombre" title="Nombre" onChange={this.handleChange} />
          </div>
          <div className="form__row">
            <input id="email" name="email" type="email" className="form__field form__field--email" placeholder="e-mail" title="e-mail" onChange={this.handleChange} />
          </div>
          <div className="form__row">
            <input id="role" name="role" type="text" className="form__field form__field--text" placeholder="role" title="role" onChange={this.handleChange} />
          </div>
        </form>
      </section>
    );
  }
}

export default Form;

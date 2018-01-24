import React from 'react';

class Preview extends React.Component {
  render(){
    return (
      <section className="preview col-12 col-lg-6">
        <table className="table">
          <tbody>
            <tr>
              <td className="table__td table__td--name">
                <a href={ `mailto:${this.props.email}` }>{this.props.fullname}</a>
              </td>
            </tr>
            <tr>
              <td className="table__td table__td--role">{this.props.role}</td>
            </tr>
          </tbody>
        </table>
      </section>
    );
  }
}

Preview.defaultProps = {
  fullname: 'Full name',
  email: 'paco@paco.com',
  role: 'Role'
}

export default Preview;

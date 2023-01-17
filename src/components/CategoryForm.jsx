import { Field, reduxForm } from 'redux-form';
import { Component } from 'react';


class CategoryForm extends Component {
  render() {
   const { handleSubmit } = this.props;
   return (
      <form onSubmit={handleSubmit}>
        <Field name='name' component='input' placeholder='Nombre de categoria' />
      </form>
    );
  }
}

export default reduxForm({
  form: 'category',
})(CategoryForm)
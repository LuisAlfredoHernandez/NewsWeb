import {Field, reduxForm} from 'redux-form';
;

  function CategoryForm(props) {
    const { handleSubmit } = props;
    return (
        <form onSubmit={handleSubmit}>
           <Field name='name' component='input' placeholder='Nombre de categoria'/> 
        </form>
    )
  }
  
  export default reduxForm({
      form:'category',
  })(CategoryForm)
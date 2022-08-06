import CategoryForm from './CategoryForm';
import CategoryList from './CategoryList';


export default function Category(props) {
  const { handleSubmit, categories } = props;
  
    return (
    <div className="App">
      <CategoryForm handleSubmit={handleSubmit}/>
      <CategoryList categories={categories}/>
    </div>
  );
}


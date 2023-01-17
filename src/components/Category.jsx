import CategoryForm from './CategoryForm';
import CategoryList from './CategoryList';
import { Component } from 'react';

export default class Category extends Component {
  render() {
    const { addCategory, categories, selectCategory } = this.props;
    return (
      <div className="App">
        <CategoryForm onSubmit={addCategory} />
        <CategoryList categories={categories} selectCategory={selectCategory} />
      </div>
    );
  }
}
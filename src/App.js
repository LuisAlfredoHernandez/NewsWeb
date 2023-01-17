import './App.css';
import { Component } from 'react';
import { connect } from 'react-redux';
import { reset } from 'redux-form';
import Category from './components/Category';
import News from './components/News';
import { addCategory, selectCategory } from './reducers/Categories'
import { addNews } from './reducers/News'


class App extends Component {
  render() {
    const {
      categories,
      addCategory,
      news,
      addNews,
      selected,
      selectCategory
    } = this.props

    return (
      <div className="App">
        <Category
          addCategory={addCategory}
          categories={categories}
          selectCategory={selectCategory}
        />
        <News
          addNews={addNews}
          selectedCategory={selected}
          news={news}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { Categories: { data: categories, selected } } = state
  const { News: { data: news } } = state
  return {
    categories,
    news: news.filter(x => x.categoryId === selected),
    selected
  }
}

const mapDispatchToProps = dispatch => ({
  addCategory: payload => {
    dispatch(addCategory(payload))
    dispatch(reset('category'))
  },
  addNews: payload => {
    dispatch(addNews(payload))
    dispatch(reset('news'))
  },
  selectCategory: payload => {
    dispatch(selectCategory(payload))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
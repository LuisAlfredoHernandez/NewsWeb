import './App.css';
import {connect} from 'react-redux';
import Category from './components/Category';
import News from './components/News';


function App(props) {
  const { categories } = props
  return (
    <div className="App">
      <Category categories = {categories}/>
      <News/>
    </div>
  );
}

const mapStateToProps = state => {
  const { Categories: { data: categories }} = state
  return {
    categories
  }
}

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(App);
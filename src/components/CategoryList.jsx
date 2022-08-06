
export default function CategoryList(props) {
    const {categories} = props
    return (
        <ul>
            { categories.map(x=> <li key={x.id}>{x.name}</li>) }
        </ul>
    );
  }
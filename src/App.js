import './App.css';
import { useQuery, gql } from "@apollo/client";


const MyQuery = gql`
query{
  book {
    pages {
      content
      pageIndex
      tokens {
        position
        value
      }
    }
    author
    title
  }
}

`

function App() {
  const {data, loading, error } = useQuery(MyQuery);

  if(loading) return "Loading...";
  if(error) return <pre>{error.message}</pre>
  console.log(data)
  return (
    <div className="App">
      <h1> Hello World </h1>
      <ul>
      {data.book.pages.map((page) => (
        <li key={page.pageIndex}>{page.content}</li>
      ))}
      </ul>
    </div>
  );
}

export default App;

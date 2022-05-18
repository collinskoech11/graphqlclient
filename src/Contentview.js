import React from 'react'
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

function Contentview() {
    const {data, loading, error } = useQuery(MyQuery);

    if(loading) return "Loading...";
    if(error) return <pre>{error.message}</pre>
    console.log(data)
  return (
    <div>
    <div className="App">
        <div className="title">
            <h1> {data.book.author} </h1>
        </div>
        
        <ul>
            {data.book.pages.map((page) => (
                <div className="content">
                <li key={page.pageIndex}><div className="identifier">Page Index : {page.pageIndex}</div><br/>{page.content}</li>
                </div>
            ))}
        </ul>
    </div>
    </div>
  )
}

export default Contentview

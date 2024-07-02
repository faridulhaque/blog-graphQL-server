import logo from './logo.svg';
import './App.css';
import { gql, useQuery } from '@apollo/client';

function App() {
  const GET_POSTS = gql`
  query postData {
    posts {
      title
      content
      created_at
      
    }
    author {
      name
    }
  }
`;

const { loading, error, data } = useQuery(GET_POSTS);

if(loading){
  return <>Loading...</>
}
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

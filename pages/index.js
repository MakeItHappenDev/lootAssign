import axios from "axios";

const query = `{ 
  bosses{
    name
    loots{
      name
      quality
    }
    zone{
      name
    }
  }
}`;

const App = props => 
  <>
    <h1>The response from the server is:</h1>
    <pre>{JSON.stringify(props.bosses,null,1)}</pre>
  </>;

App.getInitialProps = async () => {
  const response = await axios.post(`http://localhost:4000/api/graphql`, {
    query
  });

  return { ...response.data.data };
};

export default App;
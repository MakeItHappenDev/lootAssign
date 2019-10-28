import axios from "axios";
import url from '../helpers/url'

const query = `{ 
  loots{
    name
    quality
    roles{
      name
    }
    zone{
      name
    }
    from{
      name
    }
  }
}`;

const App = props => 
  <>
    <h1>The response from the server is:</h1>
    <pre>{JSON.stringify(props.bosses,null,1)}</pre>
  </>;

App.getInitialProps = async ({req}) => {
  const baseURL = url(req)
  const response = await axios.post(`${baseURL}/api/graphql`, {
    query
  });

  return { ...response.data.data };
};

export default App;
import axios from "axios";
import url from '../helpers/url'
import Loots from '../components/loots'

const query = `{ 
  loots{
    id
    name
    quality
    assign{
      id
      name
    }
    gotIt{
      id
      name
    }
    roles{
      name
      chars{
        id
        name
      }
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
    <Loots {...props}/>
  </>;

App.getInitialProps = async ({req}) => {
  const baseURL = url(req)
  const response = await axios.post(`${baseURL}/api/graphql`, {
    query
  });

  return { ...response.data.data };
};

export default App;
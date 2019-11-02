import axios from "axios";
import url from '../helpers/url'
import Loots from '../components/loots'

import '../styles/general.scss'

const query = `{ 
  loots{
    id
    name
    quality
    assign{
      id
      name
      class{
        id
      }
    }
    gotIt{
      id
      name
      class{
        id
      }
    }
    classes{
      id
      chars{
        id
        name
        class{
          id
        }
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
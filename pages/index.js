import axios from "axios";
import url from '../helpers/url'
import Loots from '../components/loots'

import '../styles/general.scss'

const query = `{ 
  loots{
    name
    quality
    assign{
      name
      class{
        name
      }
    }
    gotIt{
      name
      class{
        name
      }
    }
    classes{
      name
      chars{
        name
        class{
          name
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
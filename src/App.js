import './App.css';
 import {BrowserRouter, Route, Routes} from 'react-router-dom';
 import { withAuthenticator } from '@aws-amplify/ui-react';
 import { Layout } from './Layout';
 import {Home} from './Home';
 import {Banner} from './ui-components'

 function App({ signOut, user }) {
  return (
    <BrowserRouter>
    <Routes>
                    <Route path="/" element={<Layout user={user} signOut={signOut} />}>
                        <Route index element={<Home />}/>
                        <Route
                            path="/hackathon"
                            element={
                              <Banner className="hackathon" width={"100%"} height={"1000px"}/>
                                       }
                        />
                        </Route>
   
      </Routes>
    </BrowserRouter>
  );
}

export default withAuthenticator(App);

//
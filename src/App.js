import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Load screens
import HomeScreen from './screens/home/HomeScreen';
import UserScreen from './screens/users/UserScreen';
import PostScreen from './screens/posts/PostScreen';
import AlbumScreen from './screens/albums/AlbumScreen';
import PhotoScreen from './screens/photos/PhotoScreen';
import PageNotFoundScreen from './screens/pageNotFound/PageNotFoundScreen';
import Navbar from './components/layouts/navbar/Navbar';
import Footer from './components/layouts/footer/Footer';

import './App.css'; 

import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/users" component={UserScreen} />
          <Route path="/posts" component={PostScreen} />
          <Route path="/albums" component={AlbumScreen} />
          <Route path="/photos/:id" component={PhotoScreen} />
          <Route exact path="/" component={HomeScreen} />
          <Route component={PageNotFoundScreen} />
        </Switch>
        <Footer /> 
      </Router>
    </Provider>
  );
}

export default App;

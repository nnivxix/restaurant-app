import Home from '../views/pages/home';
import Favorites from '../views/pages/fav';
import Detail from '../views/pages/detail';

const routes = {
  '/': Home, // default page
  '/fav': Favorites,
  '/detail/:id': Detail,
};

export default routes;

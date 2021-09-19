import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { home, search, heartOutline, pencilSharp, moon } from 'ionicons/icons';
import Explore from './pages/Explore';
import Plan from './pages/Plan';
import Review from './pages/Review';
import Search from './pages/Search';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';


const App: React.FC = () => (
  
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/explore">
            <Explore />
          </Route>
          <Route exact path="/search">
            <Search />
          </Route>
          <Route path="/plan">
            <Plan />
          </Route>
          <Route path="/review">
            <Review />
          </Route>
          <Route exact path="/">
            <Redirect to="/explore" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="explore" href="/explore">
            <IonIcon icon={home} />
            <IonLabel>Explore</IonLabel>
          </IonTabButton>
          <IonTabButton tab="search" href="/search">
            <IonIcon icon={search} />
            <IonLabel>Search</IonLabel>
          </IonTabButton>
          <IonTabButton tab="plan" href="/plan">
            <IonIcon icon={heartOutline} />
            <IonLabel>Plan</IonLabel>
          </IonTabButton>
          <IonTabButton tab="review" href="/review">
            <IonIcon icon={pencilSharp} />
            <IonLabel>Review</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;

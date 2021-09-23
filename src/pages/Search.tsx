import { IonButton, IonCard, IonCardHeader, IonCol, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonListHeader, IonPage, IonSearchbar, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Search.css';

const Search: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <IonHeader className="ion-no-border">
          <IonToolbar no-border>
            <IonTitle>
              Search
            </IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonToolbar>
        <IonSearchbar></IonSearchbar>
        </IonToolbar>

        {/* <IonCard className="card">
          <IonCardHeader className="cardHeader">
            See what's good nearby.
          </IonCardHeader>
          <IonButton className="cardButton center" shape="round" fill="clear">
            Turn on location settings
          </IonButton>
        </IonCard> */}

        <IonList>
          <IonListHeader>
            Attractions nearby

            <h4 className="seeAll">See All</h4>
          </IonListHeader>
          
        </IonList>


      </IonContent>
    </IonPage>
  );
};

export default Search;

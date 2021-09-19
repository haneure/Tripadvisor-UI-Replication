import { IonAvatar, IonButton, IonButtons, IonCard, IonContent, IonGrid, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonList, IonListHeader, IonPage, IonRow, IonSlide, IonSlides, IonTitle, IonToggle, IonToolbar } from '@ionic/react';
import { bed, bedOutline, cash, cashOutline, chatboxOutline, moon, restaurantOutline, ticket } from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import './Explore.css';
import '../theme/variables.css';

const slideOpts = {
  slidesPerView: 2.5,
  spaceBetween: 15

};

const hotelsOpts = {
  slidePerView: 2,
  autoHeight: true
}

const Explore: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen color="primary">
        <IonHeader className="ion-no-border">
          <IonToolbar color="primary" no-border>
            <IonButtons className="toggle" slot="end">
              <IonIcon className="moon" icon={moon}></IonIcon>
              <IonToggle value="banana" id="themeToggle"></IonToggle>
            </IonButtons>
            <IonTitle>
              Explore
            </IonTitle>
            <IonAvatar slot="end">
              <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"/>
            </IonAvatar>

          </IonToolbar>
        </IonHeader>

        <IonGrid>
          <IonRow>
            <IonSlides pager={false} options={slideOpts}>
              <IonSlide className="firstSlide">
                <IonButton className="firstButton" no-margin><IonIcon icon={bedOutline}/>Hotels</IonButton>
              </IonSlide>
              <IonSlide className="secondSlide">
                <IonButton className="secondButton"><IonIcon icon={cashOutline}/>Things to do</IonButton>
              </IonSlide>
              <IonSlide className="thirdSlide">
                <IonButton className="thirdButton"><IonIcon icon={restaurantOutline}/>Restaurants</IonButton>
              </IonSlide>
              <IonSlide className="fourthSlide">
                <IonButton className="fourthButton"><IonIcon icon={chatboxOutline}/>Forums</IonButton>
              </IonSlide>
            </IonSlides>
          </IonRow>
        </IonGrid>

        <IonGrid className="ion-no-padding">
          <IonRow>
          <img className="header-image" src="/assets/images/Explore 800px.png"/>
          </IonRow>

          <IonRow>

            <IonList>
              <IonListHeader>
                Small batch stays
              </IonListHeader>
              <IonLabel className="labelContent">Cool cities, cooler boutique hotels</IonLabel>

              <IonSlides className="slidesHotels" pager={false} options={hotelsOpts}>
              <IonSlide className="firstHotels">
                <IonCard className="leftCardHotels">
                  <IonImg className="imgHotels" src="/assets/images/Amsterdam.png"/>
                  <span className="labelHotels">Amsterdam</span>
                </IonCard>
              </IonSlide>
              <IonSlide className="hotels">
                <IonCard className="cardHotels">
                  <IonImg className="imgHotels" src="/assets/images/Amsterdam.png"/>
                  <span className="labelHotels">Amsterdam</span>
                </IonCard>
              </IonSlide>
              <IonSlide className="hotels">
                <IonCard className="cardHotels">
                  <IonImg className="imgHotels" src="/assets/images/Amsterdam.png"/>
                  <span className="labelHotels">Amsterdam</span>
                </IonCard>
              </IonSlide>
              <IonSlide className="hotels">
                <IonCard className="cardHotels">
                  <IonImg className="imgHotels" src="/assets/images/Amsterdam.png"/>
                  <span className="labelHotels">Amsterdam</span>
                </IonCard>
              </IonSlide>
              
            </IonSlides>

            </IonList>

            

          </IonRow>
        </IonGrid>
      </IonContent>
      
    </IonPage>
  );
};

export default Explore;

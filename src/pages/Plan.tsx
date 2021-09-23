import { IonAvatar, IonButton, IonButtons, IonCol, IonContent, IonFabButton, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonPage, IonRow, IonSegment, IonSegmentButton, IonTitle, IonToggle, IonToolbar } from '@ionic/react';
import { heart, heartOutline, locationOutline, mapOutline, moon, navigateOutline, personAddOutline, readerOutline } from 'ionicons/icons';
import { useState } from 'react';
import './Plan.css';

const Plan: React.FC = () => {
  const [plan, setPlan ] = useState<'trips' | 'saves' | 'bookings'>('trips');
  
  const planHandler = (event: CustomEvent) => {
    setPlan(event.detail.value);
  }

  return (
    <IonPage>

      <IonContent fullscreen>
        <IonGrid>
        <IonRow>
          <IonHeader className="ion-no-border">
            <IonToolbar className="planToolboard" no-border>
              <IonTitle className="planTitle" ion-margin ion-padding>
                Plan
              </IonTitle>
            </IonToolbar>
          </IonHeader>
        </IonRow>
        

                
        
          <IonSegment onIonChange={planHandler}>

          <IonSegmentButton value="trips">
            Trips
          </IonSegmentButton>
          <IonSegmentButton value="saves">
            Saves
          </IonSegmentButton>
          <IonSegmentButton value="bookings">
            Bookings
          </IonSegmentButton>

          </IonSegment>
        

        </IonGrid>

        

        {plan === 'trips' ?
        <IonGrid>
          <IonRow>
            <IonCol size="2">
              <IonFabButton className="planIcon"><IonIcon className="icon" icon={heart}></IonIcon></IonFabButton>
            </IonCol>
            <IonCol>
              <p className="planLabel">Save Places you'd like to visit</p>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol size="2">
              <IonFabButton className="planIcon"><IonIcon className="icon" icon={locationOutline}></IonIcon></IonFabButton>
            </IonCol>
            <IonCol>
              <p className="planLabel">See your saves on a map</p>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol size="2">
              <IonFabButton className="planIcon"><IonIcon className="icon" icon={readerOutline}></IonIcon></IonFabButton>
            </IonCol>
            <IonCol>
              <p className="planLabel">Keep track of notes, links, and more</p>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol size="2">
              <IonFabButton className="planIcon"><IonIcon className="icon" icon={personAddOutline}></IonIcon></IonFabButton>
            </IonCol>
            <IonCol>
              <p className="planLabel">Share and collaborate on your plans</p>
            </IonCol>
          </IonRow>

          <IonGrid>
            <IonLabel className="labelPlan" position="stacked">Trip name</IonLabel>
            <IonItem className="itemPlan">
              <IonInput placeholder="Ex: Weekend in NYC" className="inputPlan"></IonInput>
            </IonItem> 
            <IonItem lines="none">
            <IonButton shape="round" expand="full" className="planButton">
              Create a Trip
            </IonButton>
            </IonItem>

          </IonGrid>
          <IonItem lines="none">
            <IonLabel className="labelLogin">Log in to acces your Trips</IonLabel>
          </IonItem>
          
  
        </IonGrid>



        :plan === 'saves' ? 
        <IonGrid>
          <IonRow>
            <IonCol className="savesPlan">
              <h2 className="h2">No saves yet</h2>
              <h4 className="h4">Places you save will appear here.</h4>
              <IonItem lines="none">
                <IonLabel className="labelLogin">Log in to acces your Saves</IonLabel>
              </IonItem>
            </IonCol>
          </IonRow>
        </IonGrid>
        
        :plan === 'bookings' ?
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonItem lines="none">
                <IonLabel className="labelLogin">Log in to acces your Bookings</IonLabel>
              </IonItem>
            </IonCol>
          </IonRow>
        </IonGrid>

      :null}



      </IonContent>
    </IonPage>
  );
};

export default Plan;

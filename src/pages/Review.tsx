import { IonButton, IonCard, IonCardContent, IonContent, IonGrid, IonHeader, IonImg, IonItem, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Review.css';

const Review: React.FC = () => {
  return (
    <IonPage>


      <IonContent fullscreen>
      <IonHeader className="ion-no-border">
        <IonToolbar className="toolbardSearchTitle" no-border>
          <IonTitle>
            Review
          </IonTitle>
        </IonToolbar>
      </IonHeader>
        <IonGrid no-padding>
          <IonCard className="cardReview">
            <IonCardContent>
              <IonImg className="bread" src="/assets/images/dessert.jpg"></IonImg>
              <IonButton className="buttonReview">Write a review</IonButton>
            </IonCardContent>
          </IonCard>

          <IonCard className="cardReview">
            <IonCardContent>
              <IonImg className="bread" src="/assets/images/bread.jpg"></IonImg>
              <IonButton className="buttonReview">Upload a photo</IonButton>
            </IonCardContent>
          </IonCard>
        </IonGrid>

      </IonContent>

    </IonPage>
  );
};

export default Review;

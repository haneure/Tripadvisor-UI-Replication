import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCol, IonContent, IonFabButton, IonGrid, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonList, IonListHeader, IonPage, IonRow, IonSearchbar, IonSlide, IonSlides, IonTitle, IonToolbar } from '@ionic/react';
import { heartOutline } from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import './Search.css';

const Attractions = [
  {loc: 'Panjang Beach', pos: 'Bengkulu, Indonesia', category: 'Beaches', dist: '1.1 km', rating: 186, src: '/assets/images/trending/Panjang Beach.jpg'},
  {loc: 'Rumah Pengasingan Bung Karno', pos: 'Bengkulu, Indonesia', category: 'Speciality Museums', dist: '0.1 km',   rating: 122, src: '/assets/images/trending/Jakat Beach.jpg'},
  {loc: 'Rumah Ibu Fatmawati Soekarno', pos: 'Bengkulu, Indonesia', category: 'History', dist: '0.4 km',   rating: 38, src: '/assets/images/trending/Fort Malborough.jpg'}
  
];

const Cafes = [
  {loc: 'Bencoolen Coffee House', pos: 'Bengkulu', category: 'Cafe', dist: '1.1 km', rating: 186, src: '/assets/images/cafes/bencoolen-coffee-house.jpg'},
  {loc: 'Edu Coffee', pos: 'Bengkulu', category: 'Cafe', dist: '1.1 km', rating: 186, src: '/assets/images/cafes/edu-coffee.jpg'},
  {loc: 'Dailycious Cafe & Resto', pos: 'Bengkulu', category: 'Cafe', dist: '1.1 km', rating: 186, src: '/assets/images/cafes/Dailycious-Cafe-Resto.jpeg'},
];

const Destinations = [
  {loc: 'Tokyo', src: '/assets/images/stays/Tokyo.png'},
  {loc: 'Bali', src: '/assets/images/plan/bali.jpg'}
]

const hotelsOpts = {
  zoom: false,
  slidesPerView: 1.5,
  spaceBetween: 10
}

const Search: React.FC = () => {
  return (
    <IonPage>

      <IonHeader className="ion-no-border">
        <IonToolbar no-border>
          <IonTitle>
            Search
          </IonTitle>
        </IonToolbar>
        <IonToolbar>
        <IonSearchbar></IonSearchbar>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonList>
          <IonListHeader>
            Attractions nearby
            <h4 className="seeAll">See All</h4>
          </IonListHeader>

          {Attractions.map(attract => (
            <IonCard class="card">
              <IonCol size="4" className="imgCol">
                <IonImg float-left className="imgNearby" src={attract.src}>
                </IonImg>
              </IonCol>
              <IonFabButton color="light" className="heart"><IonIcon className="iconHeart" icon={heartOutline}></IonIcon></IonFabButton>
              <IonCol>
                <IonCardContent className="cardContent" float-right>
                  {attract.loc}<br/>
                  <div className="circle"></div><div className="circle"></div><div className="circle"></div><div className="circle"></div><div className="circleOutline"></div> <span className="rating">{attract.rating}</span> <br/>
                  <p>{attract.category}</p>
                </IonCardContent>
              </IonCol>
              <IonCol size="2">
                <br/>
              <span className="distance">{attract.dist}</span>
              </IonCol>
            </IonCard> 
          ))}
        </IonList>

        <IonList>
          <IonListHeader>
            Cafes nearby
            <h4 className="seeAll">See All</h4>
          </IonListHeader>
          {Cafes.map(cafes => (
            <IonCard class="card">
              <IonCol size="4" className="imgCol">
                <IonImg float-left className="imgNearby" src={cafes.src}>
                </IonImg>
              </IonCol>
              <IonFabButton color="light" className="heart"><IonIcon className="iconHeart" icon={heartOutline}></IonIcon></IonFabButton>
              <IonCol>
                <IonCardContent className="cardContent" float-right>
                  {cafes.loc}<br/>
                  <div className="circle"></div><div className="circle"></div><div className="circle"></div><div className="circle"></div><div className="circleOutline"></div> <span className="rating">{cafes.rating}</span> <br/>
                  <p>{cafes.category}</p>
                </IonCardContent>
              </IonCol>
              <IonCol size="2">
                <br/>
              <span className="distance">{cafes.dist}</span>
              </IonCol>
            </IonCard> 
          ))}
        </IonList>

        <IonList>
          <IonListHeader>
            Destinations travellers love
          </IonListHeader>
            <IonGrid>

              {Destinations.map(dest => (
                <IonRow>
                  <IonCol>
                    <IonImg src={dest.src}></IonImg>
                    <span className="labelHotels">{dest.loc}</span>
                  </IonCol>
                  <IonCol>
                    <IonImg src={dest.src}></IonImg>
                    <span className="labelHotels">{dest.loc}</span>
                  </IonCol>
                </IonRow>
              ))}



            {/* <IonRow>
              <IonCol>
                <IonImg src="/assets/images/Amsterdam 600x600.png"></IonImg>
              </IonCol>
              <IonCol>
                <IonImg src="/assets/images/Amsterdam 600x600.png"></IonImg>
              </IonCol>
            </IonRow> */}

          </IonGrid>
        </IonList>
          




      </IonContent>
    </IonPage>
  );
};

export default Search;

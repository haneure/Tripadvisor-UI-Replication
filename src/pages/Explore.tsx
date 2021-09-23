import { IonAvatar, IonButton, IonButtons, IonCard, IonCardContent, IonContent, IonFabButton, IonGrid, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonList, IonListHeader, IonPage, IonRow, IonSlide, IonSlides, IonTitle, IonToggle, IonToolbar } from '@ionic/react';
import { addCircle, atCircle, bed, bedOutline, cash, cashOutline, chatboxOutline, heartCircleOutline, heartOutline, moon, radioButtonOff, radioButtonOn, restaurantOutline, ticket } from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import './Explore.css';
import '../theme/variables.css';

const Trending = [
  {loc: 'Panjang Beach', pos: 'Bengkulu, Indonesia', category: 'Beaches', rating: 186, src: '/assets/images/trending/Panjang Beach.jpg'},
  {loc: 'Jakat Beach', pos: 'Bengkulu, Indonesia', category: 'Beaches',  rating: 11, src: '/assets/images/trending/Jakat Beach.jpg'},
  {loc: 'Fort Malborough', pos: 'Bengkulu, Indonesia', category: 'Historical',  rating: 42, src: '/assets/images/trending/Fort Malborough.jpg'},
  {loc: 'Bengkulu Tower', pos: 'Bengkulu, Indonesia', category: 'Site',  rating: 77, src: '/assets/images/trending/Bengkulu Tower.jpg'},
];

const Stays = [
  {loc: 'Tokyo', src: '/assets/images/stays/Tokyo.png'},
  {loc: 'Hokkaido', src: '/assets/images/stays/Hokkaido.jpg'},
  {loc: 'Osaka', src: '/assets/images/stays/Osaka.png'},
  {loc: 'Berlin', src: '/assets/images/stays/Berlin.png'}
];

const Plan = [
  {loc: 'Bali', pos: 'Indonesia, Asia', src: '/assets/images/plan/bali.jpg'},
  {loc: 'Java', pos: 'Indonesia, Asia', src: '/assets/images/plan/java.jpg'},
  {loc: 'Flores', pos: 'East Nusa Tenggara, Indonesia', src: '/assets/images/plan/flores.jpg'},
  {loc: 'Lombok', pos: 'West Nusa Tenggara, Indonesia', src: '/assets/images/plan/lombok.jpg'},
  {loc: 'Riau Archipelago', pos: 'Riau Islands Province, Indonesia', src: '/assets/images/plan/riau.jpg'},
  {loc: 'Sumatra', pos: 'Indonesia, Asia', src: '/assets/images/plan/sumatra.jpg'},
  {loc: 'Kalimantan', pos: 'Indonesia, Asia', src: '/assets/images/plan/kalimantan.jpg'}
];

const slideOpts = {
  slidesPerView: 2.5,
  spaceBetween: 15

};

const hotelsOpts = {
  zoom: false,
  slidesPerView: 1.5,
  spaceBetween: 10
}

const Explore: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen color="primary">
        <IonHeader className="ion-no-border">
          <IonToolbar color="primary" no-border>
            <IonButtons className="toggle" slot="end">
              <IonIcon className="moon" icon={moon}></IonIcon>
              <IonToggle className="toggle" value="banana" id="themeToggle"></IonToggle>
            </IonButtons>
            <IonTitle>
              Explore
            </IonTitle>
            <IonAvatar className="avatar" slot="end">
              <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"/>
            </IonAvatar>

          </IonToolbar>
        </IonHeader>

        <IonGrid>
          <IonRow>
            <IonSlides className="slides" pager={false} options={slideOpts}>
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
                Break your cabin fever
              </IonListHeader>
              <IonLabel className="labelContent">Trending trails, parks, and tours for every taste</IonLabel>

              <IonSlides className="slidesHotels" pager={false} options={hotelsOpts}>
                {Trending.map(trending => (
                  <IonSlide className="firstHotels">
                    <IonCard className="leftCardHotels">
                      <IonImg className="imgHotels" src={trending.src}/>
                      
                      <IonCardContent>
                        {trending.loc}<br/>
                        <div className="circle"></div><div className="circle"></div><div className="circle"></div><div className="circle"></div><div className="circleOutline"></div> <span className="rating">{trending.rating}</span> <br/>
                        
                        <p>{trending.category}<br/>
                        {trending.pos}</p>
                      </IonCardContent>
                    </IonCard>
                    <IonFabButton color="light" className="heart"><IonIcon className="iconHeart" icon={heartOutline}></IonIcon></IonFabButton>
                  </IonSlide>
                ))}

              </IonSlides>

                 {/* <IonSlide className="firstHotels">
                  <IonCard className="leftCardHotels">
                    <IonImg className="imgHotels" src="/assets/images/Amsterdam.png"/>
                    
                    <IonCardContent>
                      Panjang Beach<br/>
                      <div className="circle"></div><div className="circle"></div><div className="circle"></div><div className="circle"></div><div className="circleOutline"></div> <span className="rating">186</span> <br/>
                      
                      <p>Beaches<br/>
                      Bengkulu, Indonesia</p>
                    </IonCardContent>
                  </IonCard>
                  <IonFabButton color="light" className="heart"><IonIcon className="iconHeart" icon={heartOutline}></IonIcon></IonFabButton>
                </IonSlide>

                <IonSlide className="firstHotels">
                  <IonCard className="leftCardHotels">
                    <IonImg className="imgHotels" src="/assets/images/Amsterdam.png"/>
                    
                    <IonCardContent>
                      Panjang Beach<br/>
                      <div className="circle"></div><div className="circle"></div><div className="circle"></div><div className="circle"></div><div className="circleOutline"></div> <span className="rating">186</span> <br/>
                      
                      <p>Beaches<br/>
                      Bengkulu, Indonesia</p>
                    </IonCardContent>
                  </IonCard>
                  <IonFabButton color="light" className="heart"><IonIcon className="iconHeart" icon={heartOutline}></IonIcon></IonFabButton>
                </IonSlide>

                <IonSlide className="firstHotels">
                  <IonCard className="leftCardHotels">
                    <IonImg className="imgHotels" src="/assets/images/Amsterdam.png"/>
                    
                    <IonCardContent>
                      Panjang Beach<br/>
                      <div className="circle"></div><div className="circle"></div><div className="circle"></div><div className="circle"></div><div className="circleOutline"></div> <span className="rating">186</span> <br/>
                      
                      <p>Beaches<br/>
                      Bengkulu, Indonesia</p>
                    </IonCardContent>
                  </IonCard>
                  <IonFabButton color="light" className="heart"><IonIcon className="iconHeart" icon={heartOutline}></IonIcon></IonFabButton>
                </IonSlide> */}

              

            </IonList>
          </IonRow>

          <IonRow>
            <IonList>
              <IonListHeader>
                Small batch stays
              </IonListHeader>
              <IonLabel className="labelContent">Cool cities, cooler boutique hotels</IonLabel>

              <IonSlides className="slidesHotels" pager={false} options={hotelsOpts}>
                {Stays.map(stays=>(
                  <IonSlide className="firstHotels">
                    <IonCard className="leftCardHotels">
                      <IonImg className="imgHotels" src={stays.src}/>
                      <span className="labelHotels">{stays.loc}</span>
                    </IonCard>
                  </IonSlide>
                  
                ))}
                </IonSlides>
                {/* <IonSlide className="hotels">
                  <IonCard className="cardHotels">
                    <IonImg className="imgHotels" src="/assets/images/Amsterdam.png"/>
                    <span className="labelHotels">Barcelona</span>
                  </IonCard>
                </IonSlide>
                <IonSlide className="hotels">
                  <IonCard className="cardHotels">
                    <IonImg className="imgHotels" src="/assets/images/Amsterdam.png"/>
                    <span className="labelHotels">Bath</span>
                  </IonCard>
                </IonSlide>
                <IonSlide className="hotels">
                  <IonCard className="cardHotels">
                    <IonImg className="imgHotels" src="/assets/images/Amsterdam.png"/>
                    <span className="labelHotels">Brighton</span>
                  </IonCard>
                </IonSlide> */}

              
            </IonList>
          </IonRow>

          <IonRow>
            <IonList>
              <IonListHeader>
                Plan your next escape
              </IonListHeader>
              <IonLabel className="labelContent">Family-friendly spots to explore</IonLabel>

              <IonSlides className="slidesHotels" pager={false} options={hotelsOpts}>

                {Plan.map(plan => (
                  <IonSlide className="firstHotels">
                    <IonCard className="leftCardHotels">
                      <IonImg className="imgHotels" src={plan.src}/>
                      <IonCardContent>
                        {plan.loc}<br/>
                        <p>{plan.pos}</p>
                      </IonCardContent>
                    </IonCard>
                    <IonFabButton color="light" className="heart"><IonIcon className="iconHeart" icon={heartOutline}></IonIcon></IonFabButton>
                  </IonSlide>
                ))}

              </IonSlides>

                {/* <IonSlide className="firstHotels">
                  <IonCard className="leftCardHotels">
                    <IonImg className="imgHotels" src="/assets/images/Amsterdam.png"/>
                    <IonCardContent>
                      Java<br/>
                      <p>Indonesia, Asia</p>
                    </IonCardContent>
                  </IonCard>
                  <IonFabButton color="light" className="heart"><IonIcon className="iconHeart" icon={heartOutline}></IonIcon></IonFabButton>
                </IonSlide>
                
                <IonSlide className="firstHotels">
                  <IonCard className="leftCardHotels">
                    <IonImg className="imgHotels" src="/assets/images/Amsterdam.png"/>
                    <IonCardContent>
                      Flores<br/>
                      <p>East Nusa Tenggara, Indonesia</p>
                    </IonCardContent>
                  </IonCard>
                  <IonFabButton color="light" className="heart"><IonIcon className="iconHeart" icon={heartOutline}></IonIcon></IonFabButton>
                </IonSlide>

                <IonSlide className="firstHotels">
                  <IonCard className="leftCardHotels">
                    <IonImg className="imgHotels" src="/assets/images/Amsterdam.png"/>
                    <IonCardContent>
                      Lombok<br/>
                      <p>Indonesia, Asia</p>
                    </IonCardContent>
                  </IonCard>
                  <IonFabButton color="light" className="heart"><IonIcon className="iconHeart" icon={heartOutline}></IonIcon></IonFabButton>
                </IonSlide> */}
              


              
            </IonList>
          </IonRow>

        </IonGrid>
      </IonContent>
      
    </IonPage>
  );
};

export default Explore;

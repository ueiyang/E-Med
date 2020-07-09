import React,{ useState } from 'react';
import {  IonAvatar, IonItem, IonIcon, IonLabel, IonGrid, IonCol, IonRow, IonItemSliding, IonItemOptions, IonItemOption, IonButton, IonCheckbox, IonList, IonFooter, IonToolbar, IonButtons, IonContent, IonAlert} from '@ionic/react'
import { Link } from 'react-router-dom';
import './SellerOrder.css';
import { CONFIG } from '../constants';
import image from '../assets/images/商品图片.jpg';
import OrdProCard from '../components/OrdProCard';

type Props = {  
 /*title: string,
  src: string,
  slug: string,
  author: string ,
  description: string,
  favorited: boolean,
  favoritesCount: number,*/
  ordno:number,
  pro: Array<any>,
  expno:number,
  psum:number,
  incart: boolean
}

type State = {  
 /* favorited: boolean,
  favoritesCount: number,*/
  pro: Array<any>,
  psum:number,
  incart: boolean
}


class SellerOrd3Card extends React.Component<Props, State> {

  constructor(props: Props){
    super(props);

    this.state = {      
     /* favorited: this.props.favorited,
      favoritesCount: this.props.favoritesCount,*/
      pro:[{pid: 4, psum: 10, pname: "药药药"}, {pid: 5, psum: 5, pname: "药"}],
      psum:1,
      incart:true
      
    }
   /* this.routeLink = '/article/'+this.props.slug;
    this.profileLink = '/profile/'+this.props.author;*/
   

  }

/*  routeLink: string;
  profileLink: string;*/
/* favoriteArticle = (params: any) => {
 
  let url = CONFIG.API_ENDPOINT+"articles/" + this.props.slug + '/favorite';
  let method;
  if (!this.state.favorited) {
    method = 'POST'
  } else {
    method = "DELETE"
  }
  fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Token " + localStorage.getItem("token"),
      }
    })
    .then(res => res.json())
    .then(
      (res) => {       
        this.setState({
          favorited: res.article.favorited,
          checkbox:false,
          incart:true,
          favoritesCount: res.article.favoritesCount,
        })
      },
      (err) => {
        console.error(err);
      }
    )
}*/
/*
loggedInCard(){
  return (        
           <IonItemSliding>
          {this.loggedOutCard()}
        <IonItemOptions side="end">
          <IonItemOption  color={this.state.favorited ? "success": "light"} onClick={this.favoriteArticle}>
          <IonIcon color={this.state.favorited ? "light": "success"} class="icon-blog-card" name="heart" />{this.state.favoritesCount}</IonItemOption>
        </IonItemOptions>
      </IonItemSliding>           
  )
}

loggedOutCard() {
  return (                 
           <IonItem >
          <IonAvatar slot="start">
              <img src={this.props.src} />              
            </IonAvatar>
            <IonLabel>
              <p className="title">{this.props.title}</p>              
              <IonGrid >
                <IonRow>
                  <IonCol class="author" size="6">
                  <Link className="link" to={this.profileLink}>
                  {this.props.author}</Link>                     
                 </IonCol>
                  <IonCol  size="6" text-right>                  
                  <Link className="link" to={this.routeLink}>Read More</Link>        
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonLabel>
          </IonItem>      
  )
}  */

 /*toggleAction = () => {
   this.state.checkbox===false? this.setState({checkbox: true}):this.setState({checkbox: false})
  }*/
  deleteAction = () => {
   this.setState({incart: false})
  }
 


card(){
  let url = CONFIG.API_ENDPOINT+"carts";
  let logurl = "logistics"
  return ( 
         <IonItem>
              <IonGrid >
                <IonRow>
                  <IonCol size="10">
                  <Link className="ordno" to={url}>
                  订单编号:{this.props.ordno}</Link>
                  </IonCol >
                </IonRow>
                
                <IonList>
               {this.state.pro.map((product: any) =>
          <OrdProCard pid={product.pid} pname={product.pname} psum={product.psum}></OrdProCard>)}
                </IonList>
               
                 <IonRow> 
                  <IonCol  size="6" text-left>                  
                  <p className="receive" >订单已签收</p>        
                  </IonCol>
                </IonRow>
            
               <IonRow> 
                <IonButton color="secondary" text-center size="large">  
                 <p className="deliver">查看评价</p>        
                  </IonButton> 
                
                <Link className="deliver" to={logurl}>
                 <IonButton color="warning" text-center size="large">                                                              查看物流</IonButton></Link>    
                 </IonRow>
              </IonGrid> 
            {/*this.state.incart === true ?
             <IonCheckbox slot="end" value="pid" checked={this.state.checkbox} onIonChange={this.toggleAction}/> : <></> */}

          </IonItem> 
        
  )
}  

  render() {   
  
      return (
        <>
         <IonItem><p>  </p></IonItem>
        {this.card()}
        {/*localStorage.getItem("isLogin") === "true" ? this.loggedInCard() : this.loggedOutCard()*/} 
      </>               
      );    
  }
}

export default SellerOrd3Card
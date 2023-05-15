import React, { Component } from 'react';
import Card from './Card';
import styles from "./Cards.module.css"
import iphone11 from "../images/iphone11.jpg"
import iphone12 from "../images/iphone12.jpg"
import iphone13 from "../images/iphone13.jpg"
import s21 from "../images/s21.jpg"
class Cards extends Component {
    constructor () {
        super ()
        this.state = {
            phoneData : [
                {id : 1, image : iphone11 , name: "iphone11", cost : "500 $"},
                {id:2 ,image : iphone12 , name: "iphone11", cost : "500 $"},
                {id:3 ,image:  iphone13 , name: "iphone11" ,cost : "500 $"},
                {id:4 ,image: s21 , name: "iphone11" ,cost : "500 $"},
            ]
        }
    }
    render() {
        return (
            <div className={styles.container}>  

                                    {/* static code */}

                {/* <Card image={iphone11} name= "iphone11" cost = "500 $" />
                <Card image={iphone12} name= "iphone12" cost = "700 $" />
                <Card image={iphone13} name= "iphone13" cost = "900 $" />
                <Card image={s21} name= "s21" cost = "800 $" /> */}

                                      {/* dynamic code  */}

                {
         this.state.phoneData.map (phone => <Card key={phone.id} image={phone.image} name= {phone.name} cost ={phone.cost} /> )
                }
            </div>
        );
    }
}

export default Cards;
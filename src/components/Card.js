import React, { Component } from 'react';
import styles from "./Card.module.css"
import down from "../images/down.svg"
import up from "../images/up.svg"
class Card extends Component {
    constructor(){
     super () ;
     this.state ={
        contair  : 0
     }
    }
    downHaandler = ()=> {
        if ( this.state.contair >= 1 ){           // shart mizarim ke agar balaye 1 bod biad in paeineo ejra kone 
                                                   //  va meqdar state ra eki kam  kone
             this.setState (prevstate=>({
     contair : prevstate.contair - 1
        }))
        }
       
    }
    upHandler =()=> {                             // miaym set state ra barabar prevstate qrr midim bad mqdar state ra ykiezafe mknim
        this.setState (prevstate=>({
            contair : prevstate.contair + 1
        }))

        
    }

    render() {
        const {image , name , cost} = this.props; //destchructer
        const {contair}=this.state
        return (
            <div className={styles.container}>
                <img src={image} alt= "smart iphone"/> 
                <h3>{name}</h3>                           
                <p>{cost} {contair ? `* ${contair} = ${ contair * Number(cost.split(" ")[0])}$` : " "} </p> 
                <div className={styles.contair}>
                 <img  className={!contair ?  styles.deactive:""} src={down}  alt='arrow' onClick={this.downHaandler}/>
                 <span> {contair}</span>
                <img src={up} alt='arrow' onClick={this.upHandler} />
                </div>
            </div>
        );
    }
}

export default Card;



// <img  className={this.state.contair ? "                   ":        styles.deactive  } 


//        agar in qsmt true shod         in qsmt ejra kon           agr fules  shod injaro ejra kn 




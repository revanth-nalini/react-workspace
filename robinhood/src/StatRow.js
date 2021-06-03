import React from 'react'
import './StatRow.css'
import { db } from './firebase'

function StatRow(props) {

    const percentage = ((props.price-props.openPrice)/props.openPrice)*100;

    const buyStock = () =>{
         db.collection('myStocks')
         .where("ticker","==",props.name)
         .get()
         .then((querySnapShot)=>{
            if(!querySnapShot.empty){
                querySnapShot.forEach(function(doc){
                    db.collection('myStocks')
                    .doc(doc.id) 
                    .update({
                        shares: doc.data().shares+=1
                    })
                })
            } 
            else{
                db.collection('myStocks')
                .add({
                    ticker: props.name,
                    shares: 1
                })
            }
         })
    }

    return (
        <div className="statrow" onClick={buyStock}>
            <div className="statrow__intro">
                <h1>{props?.name}</h1>
                <p>{props?.shares && (props.shares + " shares")}</p>
            </div>
            <div className="statrow__chart">
                {
                    Number(percentage).toFixed(2)>0 ? (
                        <img src="https://raw.githubusercontent.com/CleverProgrammers/robinhood-clone/69f8244e276928c04fffbd3324ee21c6c82d28e6/src/stock.svg" height={16} />
                    ) : (
                        <img src="https://raw.githubusercontent.com/CleverProgrammers/robinhood-clone/69f8244e276928c04fffbd3324ee21c6c82d28e6/src/negStock.svg" height={16} />
                    )
                }
                
            </div>
            <div className="statrow__numbers">
                <p className="statrow__price">{props.price}</p>
                <p className="statrow__percentage">{Number(percentage).toFixed(2)}%</p>
            </div>
        </div>
    )
}

export default StatRow

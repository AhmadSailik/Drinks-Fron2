import React from 'react';
import axios from "axios";
import {Card,Button} from 'react-bootstrap'


class ResultHome extends React.Component{

    favFunc=async()=>{
        const server =`https://drinks-exam.herokuapp.com`
        const obj={
            strDrinkThumb:this.props.item.strDrinkThumb,
            strDrink:this.props.item.strDrink
        }
await axios.post(`${server}/favFunc`,obj)


    }

  render(){
    return(
      <>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={this.props.item.strDrinkThumb} />
  <Card.Body>
    <Card.Title>{this.props.item.strDrink}</Card.Title>
    <Button variant="primary" onClick={this.favFunc}>Add to Favorite List</Button>
  </Card.Body>
 
  
</Card>
      </>
    )
  }
}

export default ResultHome;
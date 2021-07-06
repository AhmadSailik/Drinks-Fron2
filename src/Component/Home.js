import React from 'react';
import axios from "axios";
import {Row,Col} from 'react-bootstrap';
import ResultHome from './ResultHome';
class Home extends React.Component{

constructor(props){
    super(props);
    this.state={
        data:[],
    }
}

componentDidMount=async()=>{
const server =`https://drinks-exam.herokuapp.com`
const URL=await axios.get(`${server}/getData`)
this.setState({
    data:URL.data
})
}
  render(){
    return(
      <>
      <Row xs={1} md={3} className="g-4">
    {this.state.data.map((item)=>{
        
        return(
            <Col>
            <ResultHome
            item={item}
            />
            </Col>
        )
        
    })}
</Row>
      </>
    )
  }
}

export default Home;
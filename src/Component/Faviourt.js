import React from 'react';
import axios from "axios";
import {Row,Col,Card,Button,Modal,Form} from 'react-bootstrap';


class Faviourt extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:[],
            show:false,
            strDrinkThumb:'',
            strDrink:'',
            index:-1,
        }
    }
    
    
    componentDidMount=async()=>{
        const server =`https://drinks-exam.herokuapp.com`
    const URL=await axios.get(`${server}/getFavData`)
    this.setState({
        data:URL.data
    })
    }
    deleteFunc=async(id)=>{
        const server =`https://drinks-exam.herokuapp.com`;
        const URL=await axios.delete(`${server}/deleteFunc?id=${id}`)
    this.setState({
        data:URL.data
    })
    }
    showModal=(idx)=>{
        this.setState({
            show:true,
            index:idx,
            strDrinkThumb:this.state.data[idx].strDrinkThumb,
            strDrink:this.state.data[idx].strDrink

        })  
    }
    closeModal=()=>{
        this.setState({
            show:false,
        })
    }
    // openModale=()=>{
    //     this.setState({
    //         show:true,
    //     })

    // }
    updateFunc=async(event)=>{
        event.preventDefault();
        const server =`https://drinks-exam.herokuapp.com`;
        const obj={
            strDrinkThumb:event.target.strDrinkThumb.value,
            strDrink:event.target.strDrink.value,
            id:this.state.data[this.state.index]._id
        } 
        const URL=await axios.put(`${server}/updateFunc/${this.state.index}`,obj)
        this.setState({
            data:URL.data,
            show:false
        })

    }

  render(){
    return(
      <>
<Row xs={1} md={3} className="g-4">
    {this.state.data.map((item,idx)=>{
        
        return(
            <Col>
           <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={item.strDrinkThumb} />
  <Card.Body>
    <Card.Title>{item.strDrink}</Card.Title>
    <Button variant="primary" onClick={()=>this.showModal(idx)}>Update</Button>

    <Button variant="primary" onClick={()=>this.deleteFunc(item._id)}>Delete</Button>
    
  </Card.Body>
</Card>
            </Col>
        )
        
    })}
</Row>
<Modal show={this.state.show} onHide={this.closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Update Your Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Form onSubmit={this.updateFunc}>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" name={"strDrink"} defaultValue={this.state.strDrink} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Image-URL</Form.Label>
    <Form.Control type="text" name={"strDrinkThumb"} defaultValue={this.state.strDrinkThumb} />
  </Form.Group>
  <Button variant="primary" type="submit">Save</Button>
</Form>
        </Modal.Body>
       
      </Modal>
      </>
    )
  }
}

export default Faviourt;
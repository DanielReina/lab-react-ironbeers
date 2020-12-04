import './BeerDetails.css'
import React, { Component } from 'react'
import beersService from './../service/beers.service'
import Loader from './../Spinner/Loader'
import { Container, Row, Col } from 'react-bootstrap'
import NavBar from './../navBar/NavBar'

class BeerDetails extends Component {

    constructor() {
        super()
        this.state = {
            beers: undefined,
            
        }
        this.beersService = new beersService()
    }

    componentDidMount = () => {

        const beer_id = this.props.match.params._id
     

        this.beersService
            .getBeer(beer_id)
            .then(res => this.setState({ beers: res.data }))
            .catch(err => console.log(err))
   
    }


    render() {
     console.log('holaaa',this.beersService)
        return (
            <div >
                {this.state.beers
                    ?
                    <>
                    <NavBar/>
                    <Container>
                    <Row>
                    <Col md={{ span: 6, offset: 3}} >
                
                    <img src={this.state.beers.image_url} />
                    <h1>{this.state.beers.name}</h1>
                    <h3>{this.state.beers.tagline}</h3>
                    <h5>{this.state.beers.first_brewed}</h5>
                    <h5>{this.state.beers.attenuation_level}</h5>
                    <p>{this.state.beers.description}</p>
                    <h6>{this.state.beers.contributed_by}</h6>
                    </Col>

                    </Row>
                    </Container>
                
                    </>
                    :
                    <Loader />
                }

            </div>
        )
    }

}

export default BeerDetails
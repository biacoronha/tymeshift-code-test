import React, {Component, useState} from 'react'
import Header from '../components/common/Header';
import LocationCard from '../components/LocationCard'
import LocationModal from '../components/LocationModal'
import './HomePage.css'

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            showModal: false,
            itemToShow: null,
        }
        
        this.handleClick = this.handleClick.bind(this)
        this.onHide = this.onHide.bind(this)
    }
    render() {
        return (
            <div>
                <Header/>
                <div className="home-content">
                    {this.state.data?.map((location, i) => 
                        <LocationCard location={location} key={i} id={location.id} handleClick={this.handleClick}/>)}
                        <LocationModal location = {this.state.itemToShow} show={this.state.showModal} onHide={this.onHide}/>
                </div>
            </div>
        )        
    }

    componentWillMount() {
        fetch("https://6033c4d8843b15001793194e.mockapi.io/api/locations")
            .then(res => res.json())
            .then((result) => {
                result.map((item) => {
                    item.views = 0
                    return item
                })
                this.setState({
                    data: result
                })
            })
            .catch(error => {
                console.log(error)
                alert("There was a problem trying to fetch data of locations. Try again later!")
            })
        }

    handleClick = id => {
        const activeItem = this.state.data.find(x => x.id === id)
        activeItem.views++;
         this.setState({
             showModal:true,
             itemToShow: activeItem,
         })        
    };

    onHide = () => {
        this.setState({
            showModal: false
        })
    }

}

export default HomePage
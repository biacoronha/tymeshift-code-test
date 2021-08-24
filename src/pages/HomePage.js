import React, {Component, useState} from 'react'
import Header from '../components/common/Header';
import Card from '../components/locationCard/Card'
import LocationModal from '../components/modal/LocationModal'
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
                <div>
                    {this.state.data?.map((location, i) => 
                        <Card location={location} key={i} id={location.id} handleClick={this.handleClick}/>)}
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
        }
    //     this.setState({
    //         data: [{name: "teste 1", id: 1, userCount: "123", createdAt: "24/08/2021" },
    //         {name: "teste 2", id: 2, userCount: "123", createdAt: "24/08/2021" },
    //         {name: "teste 3", id: 3, userCount: "123", createdAt: "24/08/2021" },
    //         {name: "teste 4", id: 4, userCount: "123", createdAt: "24/08/2021" }]
    //     })
    // }

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
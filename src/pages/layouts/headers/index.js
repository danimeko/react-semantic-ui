import React , { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

export class NavigationHeader extends Component{
    state = {}
    handelItemClick = (e , { name })=> 
        this.setState({ activeItem: name })
    
   
    render(){
    const { activeItem } = this.state;
        
        return (
            <Menu>
                <Menu.Menu position="right">
                    <Menu.Item
                    name="home"
                    active={activeItem === 'home'}
                    onClick={this.handelItemClick}
                    as = { Link }
                    to = '/'
                    >
                    Home
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        )
    }
}

export default NavigationHeader;
import React,{useContext} from 'react';
import {DataContext} from './../../Context/DataContext'
const Nav =() => {
    const[data,setData]=useContext(DataContext);
    return (
        <div>
            <p><b>List of products({data.length}):</b></p>
        </div>
    )
}

export default Nav;
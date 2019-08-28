import React,{useContext} from 'react';
import Data from './Data';
import {DataContext} from './../Context/DataContext';


const DataList = () => {
    const [data,setData]=useContext(DataContext);
    return (
        <div>
            {
                data.map(datavalue=>(
                    <Data name={datavalue.name} price={datavalue.price}></Data>   
                ))
            }
       </div>
    )
}

export default DataList;


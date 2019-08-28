import React,{useState,createContext} from 'react';

export const DataContext= createContext();

export const DataProvier =(props) => {
    const [data, setData] = useState([
        { name: 'Pencil', price: '$10',id:1 },
        { name: 'Toy', price: '$15',id:2  },
        { name: 'Sneakers', price: '$23',id:3  }
    ]);
    return(
        <DataContext.Provider value={[data, setData]}>
            { props.children }
        </DataContext.Provider>
    );
}


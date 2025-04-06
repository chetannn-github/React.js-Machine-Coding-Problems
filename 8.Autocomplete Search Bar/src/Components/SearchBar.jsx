import React, { cache, use, useEffect } from 'react'

function SearchBar() {
    let [searchText, setSearchText] = React.useState('');
    let [searchResults, setSearchResults] = React.useState([]);

    let [cachedData, setCachedData] = React.useState({});
    

    let fetchData = async () => {

        if(cachedData[`${searchText}`]){
            console.log("cached data is used");
            setSearchResults(cachedData[`${searchText}`]);
            return ;
        }

        console.log(searchText + "  api is called") ;
        let response = await fetch('https://dummyjson.com/users/search?q='  + searchText);
        let data = await response.json();
        setSearchResults(data.users);

        let newCachedData = {...cachedData, [`${searchText}`]: data.users};
        setCachedData(newCachedData);

        console.log(newCachedData);
        
    }

    useEffect(() => {
        let timer = setTimeout(()=> fetchData() , 400);

        return () => {
            clearTimeout(timer);
        }
    },[searchText]);

    return (
        <div style={containerStyle}>
            <input 
                type='text'
                onChange={(e) => setSearchText(e.target.value)}
                value={searchText}
                placeholder='Search...'
            />

            <div style={{ display: 'flex', flexDirection: 'column' }}></div>
                <div style={{ backgroundColor: 'lightgray', height: '100px', overflowY: 'scroll' }}>
                    {searchResults.map((user) => (
                        <div key={user.id} style={{ padding: '10px', borderBottom: '1px solid gray' }}>
                            <p>{user.firstName} {user.lastName}</p>
                            
                        </div>
                    ))}
                </div>
        </div>
  )
}


const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '600px',

}

export default SearchBar
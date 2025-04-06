import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumb = () => {
    const location = useLocation();
    // console.log(location)
    const pathnames = location.pathname.split('/').filter((x) => x);

    // console.log(pathnames);

    return (
        <div>
            {pathnames.length > 0?  <Link to ="/">Home</Link> : null}
            
            {pathnames.map((name, index) => (

               <span key={index}>
                    {index != pathnames.length-1 ? <Link to={`/${name}`}>/{name}</Link> : <>/{name}</>}
                    
               </span>
            ))}
            

        </div>
    );
};

export default Breadcrumb;
import React from "react";
import {Helmet} from 'react-helmet';
import { Toaster } from 'react-hot-toast';


const Layout = ({children , title , description, keyword, author}) => {
    return(
        <>
            <Helmet>
                <meta charSet="utf-8"/>
                <meta name="description" content={description}/>
                <meta name="keyword" content={keyword}/>
                <meta name="author" content={author}/>
               <title>{title}</title>
            </Helmet>



            <main style={{minHeight: '70vh'}}>
                {/* <Toaster /> */}
                <Toaster/>
                {children}
            </main>
        </>
    )
}

export default Layout;
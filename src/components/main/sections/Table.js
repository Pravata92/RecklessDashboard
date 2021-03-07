import Card from './Card'
import SimpleLabel from './SimpleLabel'
import { useState, useEffect } from 'react'

export default function Table(){
    // const [categories, setCategories] = useState()

    // useEffect(() => {
    //     fetch('http://localhost:3300/api/products')
    //         .then(res => res.json())
    //             .then(data => setCategories(data.meta.countByCategory.types))
    // },[])
    // console.log(categories)
    return( <>  
                <Card element="Total categories in data base" color="primary">
                    <div className="row">
                        <p>skere</p>
                    </div>
                </Card>
            </>
)
}   
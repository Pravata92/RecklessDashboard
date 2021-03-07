import Container from '../containers/Container' 
import PageHeading from '../PageHeading'    
import LastAdded from './sections/LastAdded'
import Label from './sections/Label'
import { useState, useEffect } from 'react'
import Table from './sections/Table'
export default function Main(){

    const [ qty, setQty] = useState('0')
    const [ totalPrice, setTotalPrice] = useState('0.00')
    const [ totalUsers, setTotalUsers] = useState('0')
    const [ totalCategories, setTotalCategories] = useState('0') 

      useEffect(()=>{
          fetch('http://localhost:3300/api/products')
              .then( res => res.json())
                  .then( data => {
                    setQty(data.allProducts.count)
                    setTotalPrice(data.meta.totalAmount)
                    setTotalCategories(data.meta.totalCategories)
                  })
          fetch('http://localhost:3300/api/users')
              .then(res => res.json())
                  .then(data =>{
                    setTotalUsers(data.meta.count)
                  })
      },[])
      

    return (
            <Container classes="container-fluid">
            	<PageHeading />
                <Container classes="row">  
                    <Label color="danger" title="total users" content={totalUsers} item="fas fa-user-check fa-2x text-gray-500"/>
                    <Label color="success" title="total amount" content={`$${totalPrice}`} item="fas fa-dollar-sign fa-2x text-gray-500"/>
                    <Label color="primary" title="products in data base" content={qty} item="fas fa-clipboard-list fa-2x text-gray-500"/>
                    <Label color="warning" title="total categories" content={totalCategories} item="fas fa-tshirt fa-2x text-gray-500"/>
                </Container>
                <Container classes="row">               
                  <LastAdded />
                  <Table />
                </Container>

          	</Container>
        )
}
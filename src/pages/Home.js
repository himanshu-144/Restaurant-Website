import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
const Home = () => {
  return (
    <Layout>
      <div className='home'>
          <div className='headerContent'>
            <h2>Food Mania</h2>
            <p>Hundreds of flavors under one roof.</p>
            <Link to="/menu">
            <Button 
            variant="contained">Order Now</Button>
            </Link>
          </div>

      </div>
    </Layout>
  )
}

export default Home

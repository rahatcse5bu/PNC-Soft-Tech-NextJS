/* eslint-disable no-unused-vars */
import React from 'react'
import Banner from '../../Shared/Banner/Banner'
import Services from './Services'
import ServiceList from './ServiceList'
import { ScrollToTop } from '../../constant/ScrollToTop'


const ServicePage = () => {
  return (
    <div  >
        <ScrollToTop />
        <Banner title="Services" linkText="Service" />
        <Services />
        <ServiceList />
    </div>
  )
}

export default ServicePage
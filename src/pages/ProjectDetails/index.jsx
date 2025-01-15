/* eslint-disable no-unused-vars */
import React from 'react'
import Banner from '../../Shared/Banner/Banner'
import Details from './Details'
import { ScrollToTop } from '../../constant/ScrollToTop'
const ServiceDetails = () => {
  return (
    <div>
      <ScrollToTop />
        <Banner title="Project Details" linkText="Project Details" />
        <Details />
         
    </div>
  )
}

export default ServiceDetails
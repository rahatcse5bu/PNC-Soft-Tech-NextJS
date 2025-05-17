/* eslint-disable no-unused-vars */
import React from 'react'
import Banner from '../../Shared/Banner/Banner'
import Details from './Details'
import { ScrollToTop } from '../../constant/ScrollToTop'
import MainLayout from '../../Layout/MainLayout'

const ServiceDetails = () => {
  return (
    <div>
      <ScrollToTop />
        <Banner title="Project Details" linkText="Project Details" />
        <Details />
         
    </div>
  )
}

ServiceDetails.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default ServiceDetails
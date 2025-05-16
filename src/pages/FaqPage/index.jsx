/* eslint-disable no-unused-vars */
import React from 'react'
import Banner from '../../Shared/Banner/Banner'
import GenQesPart from './GenQesPart'
import AskQuestion from './AskQuestion'
import { ScrollToTop } from '../../constant/ScrollToTop'
import MainLayout from '../../Layout/MainLayout'

const FaqPage = () => {
  return (
    <div>
      <ScrollToTop />
        <Banner title="General Questions" linkText="Faq" />
        <GenQesPart />
        <AskQuestion />
    </div>
  )
}

FaqPage.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default FaqPage
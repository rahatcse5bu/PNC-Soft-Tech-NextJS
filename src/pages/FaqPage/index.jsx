/* eslint-disable no-unused-vars */
import React from 'react'
import Banner from '../../Shared/Banner/Banner'
import GenQesPart from './GenQesPart'
import AskQuestion from './AskQuestion'
import { ScrollToTop } from '../../constant/ScrollToTop'

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

export default FaqPage
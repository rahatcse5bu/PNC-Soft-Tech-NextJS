/* eslint-disable no-unused-vars */
import React from 'react'
import Banner from '../../Shared/Banner/Banner'
import TeamList from './TeamList'
import { ScrollToTop } from '../../constant/ScrollToTop'
import MainLayout from '../../Layout/MainLayout'



const TeamPage = () => {
  return (
    <div>
      <ScrollToTop />
        <Banner title="Team Members" linkText="Team" />
        <TeamList />
    </div>
  )
}

TeamPage.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default TeamPage
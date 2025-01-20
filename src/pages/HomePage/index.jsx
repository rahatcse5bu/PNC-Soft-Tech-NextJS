'use-client'
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-unused-vars */
import React from 'react'
import Homedetails from './Homedetails'
import Services from '../Services/Services'
import ReliablePart from './ReliablePart'
import SuccessList from './SuccessList'
import Discover from './Discover'
import { ScrollToTop } from '../../constant/ScrollToTop'
import BestPart from './BestPart'
const HomePage = () => {
  return (
	<div>
 <ScrollToTop />
		<Homedetails />
		<ReliablePart />
		<Services />
		<Discover />
		<SuccessList />
		<BestPart />


	</div>
  )
}

export default HomePage
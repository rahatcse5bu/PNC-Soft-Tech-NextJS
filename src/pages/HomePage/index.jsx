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
const index = () => {
  return (
	<div>

 <meta name="description" content="PNC Soft Tech" />
      <meta property="og:title" content="PNC Soft Tech" />
      <meta property="og:description" content="PNC Soft Tech" />
      <meta property="og:type" content="website" />
	  <meta name="google-site-verification" content="MWLJ5SvtAhyJ6sVDa5RvLS7PkuGJ8oE2oy9bdKMAa7c" />
	  <meta name="keywords" content="software development,mobile app development, PNC Soft Tech, app development, ReactJS, nodejs development, bug fix, MERN stack development, Tailwindcss development SEO" />
	  <script async src="https://www.googletagmanager.com/gtag/js?id=G-NX486BYDVM"></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-NX486BYDVM');
        `}
      </script>
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

export default index
import React from 'react'
import SectionMain from '../component/section-main/SectionMain'
import SectionBreakdown from '../component/section-breakdown/SectionBreakdown'
import SectionDonate from '../component/section-donate/SectionDonate'
import SectionActsEmergency from '../component/section-acts-emergency/SectionActsEmergency'
import SectionDeclareEmergency from '../component/section-declare-emergency/SectionDeclareEmergency'
import SectionLatest from '../component/section-latest/SectionLatest'
import SectionNewspaper from '../component/section-newspaper/SectionNewspaper'
import SectionCounting from '../component/section-counting/SectionCounting'

function LandingPage() {
  return (
    <div>
        <SectionMain />
      <SectionBreakdown />
      <SectionDonate />
      <SectionActsEmergency />
      <SectionDeclareEmergency />
      <SectionLatest />
      <SectionNewspaper />
      <SectionCounting />
    </div>
  )
}

export default LandingPage
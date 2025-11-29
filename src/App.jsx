import { useState } from 'react'
import { GeneralSection, EducationSection, WorkSection } from './components/Section'

import './App.css'

function App() {
  return (
    <div className="form">
      <h1>CV Application</h1>
      <h2>An Odin Project Exercise</h2>
      <GeneralSection />
      <EducationSection />
      <WorkSection />
    </div>
  )
}
export default App

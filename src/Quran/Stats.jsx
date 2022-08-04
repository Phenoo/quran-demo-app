import React from 'react'
import { StatsComponent } from './ReUsable'

const Stats = () => {
  return (
    <StatsComponent>
      <div className="stat">
        <h2>30</h2>
        <p>quran's chapters</p>
      </div>
      <div className="stat">
        <h2>114</h2>
        <p>quran's surahs</p>
      </div>
      <div className="stat">
        <h2>6,666</h2>
        <p>quran's verses</p>
      </div>
      <div className="stat">
        <h2>86</h2>
        <p>madani surahs</p>
      </div>
      <div className="stat">
        <h2>28</h2>
        <p>madani surahs</p>
      </div>
    </StatsComponent>  
    )
}

export default Stats
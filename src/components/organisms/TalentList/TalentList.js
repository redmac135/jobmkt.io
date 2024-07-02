'use client'
import React, { useState } from 'react'

export default function TalentList() {
    const [talentList, setTalentList] = useState([
        {
            name: "Brittney Kamal",
            talent: "Certified E-commerce specialist",
            profilePicture: "", // can be replaced by url later for dynamic talent advertising
            skills: ["mailchimp", "adobe_photoshop", "ms_powerpoint"]
        }
    ])
  return (
    <div>TalentList</div>
  )
}

import React from 'react'
import Style from "./pages.module.css"
import { mentorlist, universitydata,advisior } from '../dummydata'

function Pages() {
console.log(mentorlist,"list")


  return (
    <div className={Style.main}>
      <h3 className={Style.title}>Top 15 university scientists research in world</h3>
<div className={Style.universitylist}>
    {universitydata.map((university, index)=>{
return (
    <div className={Style.universityitem}>
    <img src={university.img} alt="" className={Style.universityImage} />
    <span className={Style.universityname}>{university.name}</span>
    <p className={Style.universitydesc}>{university.description}</p>
 </div>
)})
      }
</div>


<h3 className={Style.heading}>Top scientists in world</h3>
<div className={Style.mentorlist}>

{mentorlist.map((mentor,index)=>{
    return (
        <div className={Style.mentorlistItem}>
        <img src={mentor.image} alt="" className={Style.metnorImage} />
        <span className={Style.universityname}>{mentor.name}</span>
        <p className={Style.universitydesc}>{mentor.university}</p>
     </div>
    )})
 }
</div>
<h3 className={Style.heading}>Mentor and Advisor</h3>
<div className={Style.mentorlist}>

{advisior.map((mentor, index)=>{
    return (
        <div className={Style.mentorlistItem}>
        <img src={mentor.image} alt="" className={Style.metnorImage} />
        <span className={Style.universityname}>{mentor.name}</span>
        <div className={Style.detail}>
        <p className={Style.universitydesc}>{mentor.university} </p>
        <span className={Style.mentorcountry}>United State</span>
        </div>
     </div>
    )})
 }
</div>

 </div>
  )
}

export default Pages

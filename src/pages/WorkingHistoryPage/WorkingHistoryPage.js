import React, { Component } from 'react'
import './WorkingHistoryPage.scss';
export class Workinghistory extends Component {
    render() {
        return (
            <div>
                <main class="pimg3">
      {/* Its also just a parallax image here */}
    </main>
<section class="section section-dark">
<h2>WORKING HISTORY</h2> 
<table id="workingHistory">
      <tr>
        <td><h3>COMPANY </h3></td>
        <td><h3>PERIOD</h3></td>
        <td><h3>LAST POSITION</h3></td>
      </tr>
      {/* Used the table header tag on this one to make them a bit bigger */}
      <tr>
        <th>Pronam Traders</th> 
        <th>October 2013 – December 2013</th>
        <th>General Assistant (Holiday Job)</th>
      </tr>
</table> 
<h2>RESPONSIBLITIES</h2>
<ul>
  <li>
      Maintaining and upgrading existing systems
  </li>
  <li>
      Identifying areas for modification in existing programs and subsequently developing these modifications
  </li>
  <li>
      Writing and testing code
  </li>
  <li>
      Working closely with other developers, UX designers, business and systems analysts
  </li>
  <li>
      Carry out tasks given by the superiors
  </li>
  <li>
      Training users on any new implemented systems
  </li>
</ul>
<h2>REFERENCES</h2>
  <p>
      1. Mr. Gereon Kapuire
      </p>
      <p>Deputy Head of Department and a Lecture</p>
      <p>Department of Computer Science</p>
      <p>Namibia University of Science and Technology</p>
      <p>Tel: 061-207 2334</p>
      <p>E-mail: gkapuire@nust.na</p>
      <p>2. Mr. Antonius Sheehamandje</p>
      <p>Managing Director</p>
      <p>Prospective Power Engineering cc</p>
      <p>Cell Phone:(+264) 813125395</p>
      <p>
      E-Mail: antonsheehamandje@gmail.com
  </p>
    </section>
            </div>
        )
    }
}

export default Workinghistory

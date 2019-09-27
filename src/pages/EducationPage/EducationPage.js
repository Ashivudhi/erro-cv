import React, { Component } from 'react';
import './EducationPage.scss';
//import image from '../../Images/nust1.png';

export class EducationPage extends Component {
    render() {
        return (
                <div>
                <div className="pimg2"/>
                <section class="section section-dark">
               
                <section class="section-left">
                 
                <h2>TERTIARY EDUCATION</h2>
                <table id="tertial-education">
                    <tr>
                        <th>Type</th>
                        <th>Institution</th>
                        <th>Year of study</th>
                        <th>Course</th>
                    </tr>
                    <tr>
                        <td>Bachelor’s degree</td>
                        <td>Namibia University of Science and Technology</td>
                        <td>2016-Present</td>
                        <td>Computer Science (Software Development)</td>
                    </tr>
                </table>
            </section>

            <section class="section-right">
                <h2>SCHOOLING</h2> 
                <table className="schooling">
                    <tr>
                        <th>Highest Grade Passed</th>
                        <th>Institution</th>
                        <th>Year Passed</th>
                        <th>Leadership Roles</th>
                    </tr>
                    <tr>
                        <td>Grade 12</td>
                        <td>Gabriel Taapopi Secondary School</td>
                        <td>2015</td>
                        <td>Vice-Captain (Basket Ball team)</td>
                    </tr>
                </table>
            </section>
            </section>
            </div>
        )
    }
}

export default EducationPage

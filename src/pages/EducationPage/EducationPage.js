import React, { Component } from 'react';
import './EducationPage.scss';
export class EducationPage extends Component {
    render() {
        return (
                <div>
                <div className="pimg2"/>
                <section class="section section-dark">
                <h2>TERTIARY EDUCATION</h2>
                <table id="tertial-education">
                    <tr>
                        <th>Type</th>
                        <th>Institution</th>
                        <th>Year of study</th>
                        <th>Course</th>
                        <th>Subject passed</th>
                    </tr>
                    <tr>
                        <td>Bachelor’s degree</td>
                        <td>Namibia University of Science and Technology</td>
                        <td>2016-Present</td>
                        <td>Computer Science (Software Development)</td>
                        <td> Web Development Fundamentals, Intro. To Operating Systems And Networks, Programming 1,
                                Management Information Systems, Mathematics (Information Technology) 1a, Information Competence,
                                English In Practice, Computer Organisation And Architecture, Basic Science, Software Engineering 1 And
                                HCI, Programming 2, Operating Systems, IT Systems Security, Introduction To Computer Networking, Data
                                Structures And Algorithms, Database Fundamentals, Database Programming and techniques
                        </td>
                    </tr>
                </table>

                <h2>SCHOOLING</h2> 
                <table className="schooling">
                    <tr>
                        <th>Highest Grade Passed</th>
                        <th>Institution</th>
                        <th>Year Passed</th>
                        <th>Subjects Passed</th>
                        <th>Leadership Roles</th>
                    </tr>
                    <tr>
                        <td>Grade 12</td>
                        <td>Gabriel Taapopi Secondary School</td>
                        <td>2015</td>
                        <td>English, Oshindonga, Mathematics, Development studies, Biology and Physical Science</td>
                        <td>Vice-Captain (Basket Ball team)</td>
                    </tr>
                </table>
            </section>
            </div>
        )
    }
}

export default EducationPage

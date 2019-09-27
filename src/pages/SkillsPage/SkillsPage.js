import React, { Component } from 'react'
import './SkillsPage.scss';
import csharp from '../../Images/csharp.svg';
import cpp from '../../Images/c++.png';
import html from '../../Images/html.png';
import java from '../../Images/java.png';
import sap from '../../Images/sap.png';
import scss from '../../Images/scss.png';
import sql from '../../Images/sql.png';
import javascript from '../../Images/javascript.png';
import react from '../../Images/react.png';
import css3 from '../../Images/css3.png';


export class SkillsPage extends Component {
    render() {
        return (<div>
            <div className="pimg5"/>
                <section class="section-dark">
                <section></section>
                <table className="programsLanguages">
                    
                    
                    <tr> 
                        <tr><h2>PROGRAMMING LANGUAGES </h2></tr>
    
                        <td>HTML 5 <img className="img" src={html} height={80} width={80} /></td>
                        <td>CSS 3 <img className="img" src={css3} height={70} width={70} /></td>
                     
                        <td>JAVA <img className="img" src={java} height={80} width={80} /></td>
                    
                    
                        <td>JAVASCRIPT <img className="img" src={javascript} height={70} width={70} /></td>
                        
                    
                        <td>C# <img className="img" src={csharp} height={70} width={70} /></td>
                        
                     
                        <td>C++ <img className="img" src={cpp} height={70} width={70} /></td>
                      
                     
                        <td>SQL<img className="img" src={sql} height={60} width={60} /></td>
                        
                    
                        <td>REACT<img className="img" src={react} height={60} width={60} /></td>
                      
                    
                        <td>SAP(Efesa) <img className="img" src={sap} height={70} width={70}/></td>
                     
                     
                        <td>SCSS <img className="img" src={scss} height={70} width={70}/></td>
                       
                    </tr>
                </table>
                </section>
            </div>
        )
    }
}

export default SkillsPage

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; //import 'bootstrap/dist/css/bootstrap.min.css';
class Project extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <body>
                    <div class="heading">
                        <div class="jumbotron text-center" id="heading">
                            <h1 className="myname">Tejaswini</h1>
                            <h2 className="myoccupation">Software Developer Trainee</h2>
                            <ul class="nav nav-pills nav-justified" id="navigation">
                                <li class="nav-item">
                                    <a class="nav-link active" href="/">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active" href="/About">About</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active" href="/Contact">Contact</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active" href="/Project">Project</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active" href="/Youtube">Youtube</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-4">
                                <div class="rounded-circle">
                                    <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" class="rounded-circle max-auto d-block" width="130px" alt="img" height="150px"></img>
                                </div>
                            </div>

                            <br />
                            <div class="col-sm-8">
                                <h2 class="myskills">Career Objectives</h2>
                                <br />
                                <p class="skills">To work in a professional environment where I can find myself</p>
                               
                            </div>
                        </div>
                    </div>
                    <br />
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-6">
                                <h2 class="myskills">Technical Skills</h2>
                                <br />
                                <ul class="skills">
                                    <li>
                                        Front end languages-HTML,CSS,JS,REACT JS
                                    </li>
                                    <li>Back end language-python</li>
                                    <li>Database-mysql</li>
                                </ul>
                            </div>
                            <div class="col-sm-6">
                                <h2 class="myskills">Internship and certification</h2>
                                <br />
                                <ul class="skills">
                                    <li>
                                        I done web development intern in qantler technology
                                    </li>
                                </ul>
                            </div>
                            <br />
                            <div class="col-sm-12">
                                <h2 class="myskills">my project</h2>
                                <br />
                                <table class="table table table-striped">
                                    <thead>
                                        <tr>
                                            <th>Project Domain</th>
                                            <th>Programming Languages</th>
                                            <th>Poject Link</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Full Stack web development</td>
                                            <td>HTML CSS JS BOOTSTRAP </td>
                                            <td>
                                                <a href={"https://github.com"}>Fook cook planner</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Full Stack web development</td>
                                            <td>HTML CSS JS BOOTSTRAP </td>
                                            <td>

                                                <a href={"https://github.com"}>Billing System using Jquery</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Full Stack web development</td>
                                            <td>HTML CSS JS BOOTSTRAP </td>
                                            <td>
                                                <a href={"https://github.com"}>Billing System using React JS</a>
                                                <button type="button" class="btn btn-primary">Login</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                </body>
            </div>
        )
    }
}
export default Project;
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import person1 from './person.svg';
import logo from './Icon1.png';
import Searchicon from './search-icon.svg';
import person2 from './309042_group_users_people_icon.svg';
import refresh from './refresh.png';
import clock from './clock.png';
import Hike from './Hike.png';
import currency from './currency.png';
import calendar from './calendar.png';
import Project from './Project.png';
import Metric from './Metrics.png';
import sort from './sort-svgrepo-com.svg';
class Tablet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            windowWidth: window.innerWidth,
        };
    }

    handleResize = () => {
        this.setState({ windowWidth: window.innerWidth });
        console.log("size",this.state.windowWidth)
    };

    componentDidMount() {
        window.addEventListener('resize', this.handleResize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }

    render() {
        return (
            <>
                <div>
                    <body className='container-fluid'>
                        <nav class="navbar navbar-dark">
                            <div class="container-fluid shadow py-4 bg-body rounded">
                            </div>
                        </nav>
                        <div class="card  shadow  rounded mb-3" style={{ maxWidth: "18rem;",backgroundColor:"" }}>
                            <div class="card-header" >
                                <div className='row'>
                                    <div className='col'>
                                        <img src={logo} width="30px" alt="img" height="30px"></img><b className='ml-2'>Filter</b></div>
                                    <div className='col'>
                                        <div className="float-end">
                                            <div class="btn-group" role="group" aria-label="Button group with nested dropdown">
                                                <button type="button" class="btn btn-outline-secondary" style={{ backgroundColor: "#FE2E1E1" }}><img src={person1} width="30px" alt="img" height="30px"></img></button>
                                                <button type="button" class="btn btn-Light btn-outline-secondary"><img src={person2} width="30px" alt="img" height="30px"></img></button>
                                                <button type="button" class="btn btn-primary btn-outline-secondary"><b>All</b></button>
                                                <div class="btn-group" role="group">
                                                    <button type="button" class="btn dropdown-toggle btn-outline-secondary" data-bs-toggle="dropdown" aria-expanded="false">
                                                    </button>
                                                </div>
                                            </div>  
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card-body">
                                <p class="card-text">
                                    <div>
                                        <div className='row'>
                                            <div className='col'>
                                                <label class="text">Organization</label><br></br>
                                                <select class="form-select" id="inputGroupSelect01">
                                                    <option selected></option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </div>
                                            <div className='col'>
                                                <label class="text">Customer</label><br></br>
                                                <select class="form-select" id="inputGroupSelect01">
                                                    <option selected></option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </div>
                                            <div className='col'>
                                                <label class="text">Project</label><br></br>
                                                <select class="form-select" id="inputGroupSelect01">
                                                    <option selected></option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </div>
                                            <div className='col'>
                                                <label class="text">Project Manager</label><br></br>
                                                <select class="form-select" id="inputGroupSelect01">
                                                    <option selected></option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </div>
                                            <div className='col'>
                                                <label class="text" >Closed Projects</label><br></br>
                                                <div class="form-check form-switch">
                                                    <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" style={{ width: "30%", padding: "20px" }} />

                                                </div>
                                            </div>
                                        </div>
                                        <div className='row mt-2'>
                                            <div className='col' style={{ marginTop: "10px" }}>
                                                <button class="btn btn-light" type="submit" style={{ paddingRight: "50px", paddingLeft: "50px", float: "inline-end" }}><img src={refresh} width="20px" alt="img" height="20px"></img></button>
                                                <button class="btn btn-outline-success" style={{ paddingRight: "90px", paddingLeft: "90px", float: "inline-end",backgroundColor:"#0d6efd", marginRight: "30px",color:"white" }} type="submit"><img src={Searchicon} width="20px" alt="img" height="20px" mr-2 style={{ marginRight: "20px"}} ></img>Search</button>
                                            </div>

                                        </div>
                                    </div>
                                </p>
                            </div>
                        </div>
                        <div className='row mb-3'>
                            {/* Cardview */}
                            <div className='card  shadow  bg-body rounded ml-2 col position-relative'>
                                <div className='col mt-4'>
                                <h6>Budget Amount</h6>
                                </div>
                                <div className='position-absolute top-0 end-0 mt-4 mr-4'>
                               <img src={currency} width="30px"></img>
                                </div>
                                <h2 className="ml-2" style={{ color: "red" }}>$0</h2>
                            </div>
                            <div className='shadow  bg-body rounded ml-2 col position-relative'>
                                <div className='col mt-4'>
                                <h6>Total Projects</h6>
                                </div>
                                <div className='position-absolute top-0 end-0 mt-4 mr-4'>
                                <img src={Hike} ></img>
                                </div>
                                <h2 className='text-primary ml-2'>381</h2>
                            </div>
                            <div className='shadow  bg-body rounded ml-2  col position-relative'>
                            <div className='col mt-4'>
                                <h6>Pending PTO Approvals</h6>
                                </div>
                                <div className='position-absolute top-0 end-0 mt-4 mr-4'>
                                <img src={calendar}></img>
                                </div>  
                                <h2 className="ml-2" style={{ color: "blue" }}>0</h2>
                            </div>
                            <div className='shadow  bg-body rounded ml-2 mr-2 col position-relative'>
                            <div className='col mt-4'>
                                <h6>Pending Timecard Approvals</h6>
                                </div>
                                <div className='position-absolute top-0 end-0 mt-4 mr-4'>
                                <img src={clock}></img>
                                </div>
                                <h2 className="ml-2" style={{ color: "green" }}>0</h2>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col ml-2 p-4 col-sm-8 shadow  bg-body rounded'>
                            <h6><img src={Project} width="30px"></img>PROJECTS</h6>
                            </div>
                            <div className=' p-4 shadow  bg-body rounded ml-3 mr-2 col'>
                                    <h6><img src={Metric} width="30px"></img>METRICS</h6>
                                </div>
                                <div className=' col-8 ml-2 mt-2 shadow  bg-body rounded'>
                                        <div className='row'>
                                            <div className='col'>
                                                <div class="table-responsive p-0 table-condensed">
                                                    <table class="table align-middle">
                                                        <thead>
                                                            <tr>
                                                                <th className='position-relative'>Project Number  <img src={sort} width="10px" className='position-absolute top-3 mt-2 ml-2'></img></th>
                                                                <th className='position-relative'>Project Name  <img src={sort} width="10px" className='position-absolute top-3 mt-2 ml-2'></img></th>
                                                                <th className='position-relative'>Poject Type  <img src={sort} width="10px" className='position-absolute top-3  mt-2 ml-2'></img>
                                                                </th>
                                                                <th className='position-relative'>Project Manager  <img src={sort} width="10px" className='position-absolute top-3 mt-2 ml-2'></img></th>
                                                                <th className='position-relative'>Customer Name  <img src={sort} width="10px" className='position-absolute top-3 mt-2 ml-3'></img></th>
                                                                <th className='position-relative'>Major Service  <img src={sort} width="10px" className='position-absolute top-3 mt-2 ml-2'></img></th>
                                                                <th className='position-relative'>Market Sector  <img src={sort} width="10px" className='position-absolute top-3 mt-2 ml-2'></img></th>
                                                                <th className='position-relative'>Budget Amount <img src={sort} width="10px" className='position-absolute top-3 mt-2 ml-2'></img></th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td><a href={"https://github.com"}>CA001000</a></td>
                                                                <td>Construction Marketing</td>
                                                                <td>
                                                                    Admin-MKFG
                                                                </td>
                                                                <td>DONOVAN SEANM</td>
                                                                <td></td>
                                                                <td></td>
                                                                <td></td>
                                                                <td>$0.0</td>
                                                            </tr>
                                                            <tr>
                                                                <td><a href={"https://github.com"}>CA002000</a></td>
                                                                <td>Construction Overhead</td>
                                                                <td>
                                                                    Admin-Ovhd
                                                                </td>
                                                                <td>DONOVAN SEANM</td>
                                                                <td></td>
                                                                <td></td>
                                                                <td></td>
                                                                <td>$0.0</td>
                                                            </tr>
                                                            <tr>
                                                                <td><a href={"https://github.com"}>CA003000</a></td>
                                                                <td>Construction Proposals</td>
                                                                <td>Admin-Proposals</td>
                                                                <td>
                                                                    DONOVAN,SEANM
                                                                </td>
                                                                <td></td>
                                                                <td></td>
                                                                <td></td>
                                                                <td>$0.0</td>
                                                            </tr>
                                                            <tr>
                                                                <td><a href={"https://github.com"}>CA008858</a></td>
                                                                <td>PPL-Coopersburg Substation</td>
                                                                <td>
                                                                    Professional Service
                                                                </td>
                                                                <td>DONOVAN SEANM</td>
                                                                <td>PPL</td>
                                                                <td>2-Contracting/Construction</td>
                                                                <td>1-Electric Utilities</td>
                                                                <td>$25.000</td>
                                                            </tr>
                                                            <tr>
                                                                <td><a href={"https://github.com"}>CA008900</a></td>
                                                                <td>PPL-Siegfried</td>
                                                                <td>
                                                                    Professional Service
                                                                </td>
                                                                <td>DONOVAN SEANM</td>
                                                                <td>PPL</td>
                                                                <td>2-Contracting/Construction</td>
                                                                <td>1-Electric Utilities</td>
                                                                <td>$176,791.6</td>
                                                            </tr>
                                                            <tr>
                                                                <td><a href={"https://github.com"}>CA008858</a></td>
                                                                <td>PPL-Coopersburg Substation</td>
                                                                <td>
                                                                    Professional Service
                                                                </td>
                                                                <td>DONOVAN SEANM</td>
                                                                <td>PPL</td>
                                                                <td>2-Contracting/Construction</td>
                                                                <td>1-Electric Utilities</td>
                                                                <td>$25.000</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                </div>
                            </div>
                                <div className='col ml-2 mr-2 mt-2'>
                                        <div className='row'>
                                            <div className='shadow  bg-body rounded ml-2 col p-4 mb-1'>
                                                <h6 style={{textAlign:"center"}}>0</h6>
                                                <p className=' rounded p-1' style={{color:"blue",textAlign:"center",backgroundColor:"#14A2D6"}}># of Projects</p>
                                            </div>
                                            <div className=' shadow  bg-body rounded ml-2 col p-4 mb-1'>
                                                <h6 style={{textAlign:"center"}}>0</h6>
                                                <p className=' rounded p-1' style={{color:"green",textAlign:"center",backgroundColor:"#03fcad"}}># of Proposals</p>
                                            </div>

                                        </div>
                                        <div className='row'>
                                            <div className=' shadow  bg-body rounded ml-2 col p-4 mb-1'>
                                                <h6 style={{textAlign:"center"}}>0</h6>
                                                <p className=' rounded p-1  ' style={{ color: "#fc03c2",textAlign:"center", backgroundColor: "pink" }}>Avg Bill Rate vs Target Strid</p>
                                            </div>
                                            <div className=' shadow  bg-body rounded ml-2 col p-4 mb-1'>
                                                <h6 style={{textAlign:"center"}}>0</h6>
                                                <p className='rounded p-1' style={{ color: "#e64623",textAlign:"center", backgroundColor: "#db9388" }}>Total Revenue</p>
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='  shadow  bg-body rounded ml-2 col p-4 mb-1'>
                                                <h6 style={{textAlign:"center"}}>0</h6>
                                                <p className=' rounded p-1' style={{ color: "#c603fc",textAlign:"center", backgroundColor: "violet" }}>Gp% on Labor vs Target</p>
                                            </div>
                                            <div className=' shadow  bg-body rounded ml-2 col p-4 mb-1'>
                                                <h6 style={{textAlign:"center"}}>0</h6>
                                                <p className=' rounded p-1 ' style={{ color: "orange",textAlign:"center", backgroundColor: "#ffda7d" }}>UBR Aging</p>
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className=' shadow  bg-body rounded ml-2 col p-4 mb-1'>
                                                <h6 style={{textAlign:"center"}}>0</h6>
                                                <p className=' rounded p-1' style={{ color: "green",textAlign:"center", backgroundColor: "#7dffd4" }}>Past Due AR#</p>
                                            </div>
                                            <div className=' shadow  bg-body rounded ml-2 col p-4 mb-1'>
                                                <h6 style={{textAlign:"center"}}>0</h6>
                                                <p className=' rounded p-1' style={{ color: "#c603fc",textAlign:"center", backgroundColor: "#f27dff" }}>Past Due AR invoice Due/List</p>
                                            </div>
                                        </div>
                                        </div>
                        </div>
                    </body>
                </div>
            </>
        )
    }

}
export default Dashboard;

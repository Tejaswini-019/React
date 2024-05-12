import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import person1 from './person.svg';
import logo from './Icon1.png';
import Searchicon from './search-icon.svg';
import BootstrapTable from 'react-bootstrap-table-next';
import person2 from './309042_group_users_people_icon.svg';
import refresh from './refresh.svg';
import clock from './clock.png';
import Hike from './Hike.png';
import currency from './currency.png';
import sort from './sort-svgrepo-com.svg';
import dropdown from './dropdown.svg';
import Menu from './Menu';
import Rightarrow from './rightarrow.svg';
import Clock from './Clock.svg';
import leftarrow from './left-arrow-svgrepo-com.svg';
import Calendaricon from './Calendaricon.svg'
import right from './right.svg';
import info from './assets/Info.svg';
import alarm from './assets/alarm-clock (1).png';
import trending from './assets/trending (1).png';
import us from './assets/dollar-symbol.png';
import menu from './assets/menu (1).png';
import system from './assets/check (1).png';
import check1 from './assets/check-mark (2).png';
import { tab } from '@testing-library/user-event/dist/tab';
class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            windowWidth: window.innerWidth,
            isImage1: false,
            iscollaspe2: false,
            sortOrder: '',
            tabMenu: false
        };
    }
    handleSort = (column) => {
        this.setState({ sortOrder: column });
    };
    handleResize = () => {
        this.setState({ windowWidth: window.innerWidth });
        //console.log("size", this.state.windowWidth)
    };
    handleColBtnClick = () => {
        debugger
        this.setState({ isImage1: !this.state.isImage1 });
    };
    handleCollapseBtnClick = () => {
        this.setState((Prev) => ({ iscollaspe2: !Prev.iscollaspe2 }));
    }
    componentDidMount() {
        window.addEventListener('resize', this.handleResize);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }
    changeMenuBar = () => {
        this.setState({
            tabMenu: !this.state.tabMenu
        })
    }

    render() {
        const { windowWidth, isImage1, iscollaspe2, tabMenu } = this.state;
        console.log(this.state.isImage1, "image1")
        const SortingHeader = ({ column, onSort, sortOrder }) => (
            <div style={{ position: 'relative' }} onClick={() => onSort(column.dataField)}>
                {column.text}
                <img src={sort} width="10px" alt="img" className={`position-absolute top-3 mt-2 ml-2 ${sortOrder === column.dataField ? 'visible' : 'hidden'}`} />
            </div>
        );
        const columns = [
            {
                dataField: 'projectNumber',
                text: <SortingHeader column={{ dataField: 'projectNumber', text: 'Project Number' }} onSort={this.handleSort} sortOrder={this.state.sortOrder} />,
                sort: true,
                formatter: (cell, row) => (
                    <a href="" data-bs-toggle="modal" data-bs-target="#exampleModal">{cell}</a>
                )
            },
            {
                dataField: 'projectName',
                text: <SortingHeader column={{ dataField: 'projectName', text: 'Project Name' }} onSort={this.handleSort} sortOrder={this.state.sortOrder} />,
                sort: true,
            },
            {
                dataField: 'projectType',
                text: <SortingHeader column={{ dataField: 'projectType', text: 'Project Type' }} onSort={this.handleSort} sortOrder={this.state.sortOrder} />,
                sort: true,
            },
            {
                dataField: 'projectManager',
                text: <SortingHeader column={{ dataField: 'projectManager', text: 'Project Manager' }} onSort={this.handleSort} sortOrder={this.state.sortOrder} />,
                sort: true,
            },
            {
                dataField: 'customerName',
                text: <SortingHeader column={{ dataField: 'customerName', text: 'Customer Name' }} onSort={this.handleSort} sortOrder={this.state.sortOrder} />,
                sort: true,
            },
            {
                dataField: 'majorService',
                text: <SortingHeader column={{ dataField: 'majorService', text: 'Major Service' }} onSort={this.handleSort} sortOrder={this.state.sortOrder} />,
                sort: true,
            },
            {
                dataField: 'marketSector',
                text: <SortingHeader column={{ dataField: 'marketSector', text: 'Market Sector' }} onSort={this.handleSort} sortOrder={this.state.sortOrder} />,
                sort: true,
            }
        ]
        const data = [
            { projectNumber: 'CA001000', projectName: 'Construction Marketing', projectType: 'Admin-MLFG', projectManager: 'DONOVAM SEANM', customerName: '', majorService: '', marketSector: '$0.0' },
            { projectNumber: 'CA002000', projectName: 'Construction Overhead', projectType: 'Admin-Ovhd', projectManager: 'DONOVAM SEANM', customerName: '', majorService: '', marketSector: '$0.0' },
            { projectNumber: 'CA003000', projectName: 'Construction Proposals', projectType: 'Admin-Proposals', projectManager: 'DONOVAM SEANM', customerName: '', majorService: '', marketSector: '$0.0' },
            { projectNumber: 'CA008858', projectName: 'PPL-Coopersburg Substation', projectType: 'PPL', projectManager: 'Constracting/Construction', customerName: '1-Electric Utilities', majorService: '', marketSector: '$25.000' },
            { projectNumber: 'CA008900', projectName: 'PPL-Siegfriend', projectType: 'Professional Service', projectManager: 'DONOVAM SEANM', customerName: '2-Constracting/Construction', majorService: '1-Electric Utilities', marketSector: '$25.000' },
            { projectNumber: 'CA008900', projectName: 'PPL-Siegfriend', projectType: 'Professional ServiceL', projectManager: 'DONOVAM SEANM', customerName: '2-Constracting/Construction', majorService: '1-Electric Utilities', marketSector: '$176,791.6' },
                  ];
        return (
            <>
                {windowWidth <= 476 ? (
                    <div className='container-fluid'>
                        <Menu changeMenu={this.changeMenuBar} />
                        <div className="row main" >
                            <div className={this.state.iscollaspe2 ? "col-12" : "col-12"}>
                                <div className='row float-end'>
                                    <div className={`col ${iscollaspe2 ? 'pr-0' : ''}`}>
                                        <div id="inline" >
                                        </div>
                                        <button type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" className={`border-algn  ${iscollaspe2 ? 'collapsed p-' : ''}`} onClick={this.handleCollapseBtnClick}><img src={iscollaspe2 ? leftarrow : right} width="10px" alt="img" height="10px"></img></button>
                                    </div>
                                </div>
                                <div class=" cardview card  shadow  rounded mb-3">
                                    <div class="card-header" >
                                        <div className='row'>
                                            <div className='col'>
                                                <button type="button" className=' btn-primary p-0'> <img src={info} width="20px" alt="img" height="20px" id="Fillter-algn"></img></button> <b className={` ${tabMenu ? 'Mobile' : ' filter-mobile'}`}>Filter</b></div>
                                            <div className={`${tabMenu ? 'row mt-2' : 'col-9'}`}>
                                                <div className="float-end">
                                                    <button type="button" className="btn border-algn" id="person"><img src={person1} width="20px" alt="img" height="20px"></img></button>
                                                    <button type="button" className="btn border-algn" id="person2"><img src={person2} width="20px" alt="img" height="20px"></img></button>
                                                    <button type="button" className="btn border-algn" id="all" >All</button>
                                                    <div className={` ${tabMenu ? '' : ' inlinebtn'}`}>
                                                        <button
                                                            type="button"
                                                            className={`border-algn algn col-btn ${isImage1 ? 'collapsed' : ''}`}
                                                            onClick={this.handleColBtnClick}
                                                        >
                                                            <img
                                                                src={isImage1 ? Rightarrow : dropdown}
                                                                width="10px"
                                                                alt="img"
                                                                height="10px"
                                                                style={{ marginBottom: "12px" }}
                                                            />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`card-body  ${isImage1 ? 'collapse' : 'show'}`}>
                                        <p class="card-text">
                                            <div>
                                                <div className='row mb-2'>
                                                    <div className='col'>
                                                        <label class="text" style={{ fontSize: "small" }}>Organization</label><br></br>
                                                        <select class="form-select" id="inputGroupSelect01">
                                                            <option selected></option>
                                                            <option value="1">One</option>
                                                            <option value="2">Two</option>
                                                            <option value="3">Three</option>
                                                        </select>
                                                    </div>
                                                    <div className='col'>
                                                        <label class="text" style={{ fontSize: "small" }}>Customer</label><br></br>
                                                        <select class="form-select" id="inputGroupSelect01">
                                                            <option selected></option>
                                                            <option value="1">One</option>
                                                            <option value="2">Two</option>
                                                            <option value="3">Three</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='col'>
                                                        <label class="text" style={{ fontSize: "small" }}>Project</label><br></br>
                                                        <select class="form-select" id="inputGroupSelect01">
                                                            <option selected></option>
                                                            <option value="1">One</option>
                                                            <option value="2">Two</option>
                                                            <option value="3">Three</option>
                                                        </select>
                                                    </div>
                                                    <div className='col'>
                                                        <label class="text" style={{ fontSize: "small" }}>Project Manager</label><br></br>
                                                        <select class="form-select" id="inputGroupSelect01">
                                                            <option selected></option>
                                                            <option value="1">One</option>
                                                            <option value="2">Two</option>
                                                            <option value="3">Three</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className='row mt-2 '>
                                                    <div className='col mb-3'>
                                                        <label class="text" style={{ fontSize: "small" }}>Closed Projects</label><br></br>
                                                        <div class="form-check form-switch ">
                                                            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" style={{ width: "100px", padding: "20px" }} />

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='row' >
                                                    <div className='col mt-3'>
                                                        <button class={` ${tabMenu ? 'btn searchhover p-0' : 'btn searchhover'}`} style={{ width: "100%", backgroundColor: "#4650dd", marginRight: "30px", color: "white" }} type="submit"><img src={Searchicon} width="20px" alt="img" height="20px" style={{ marginRight: "20px" }} ></img>Search</button>
                                                    </div>
                                                </div>
                                                <div className='row mt-2'>
                                                    <div className='col' style={{ marginTop: "10px" }}>
                                                        <button class="btn resethover" type="submit" style={{ width: "100%", marginRight: "30px", backgroundColor: "#f8f8f8" }}><img src={refresh} width="20px" alt="img" height="20px"></img></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </p>
                                    </div>
                                </div>
                                
                                    <div className="offcanvas offcanvas-end col-5" style={{ maxWidth:  '80% '  }} tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                                        <div className="offcanvas-header">
                                        </div>
                                        <div className="offcanvas-body">
                                            <div class="" >
                                                <div className='row mt-5'>
                                                    <div className='col p-0' >
                                                        <div id="inline" className='float-left '>
                                                        </div>
                                                       < img src={ right} width="15px" alt="img" height="15px" class=" float-end mb-5" data-bs-dismiss="offcanvas"></img>
                                                        <h5 id="new">New</h5>

                                                        <div className='row'>
                                                            <div className='col'>
                                                                <div class="vrtwiz">
                                                                    <ul class="verticalwiz">
                                                                        <li class="" data-target="#step1">
                                                                            <a href="#tab1" data-toggle="tab" style={{ textDecoration: "none" }}> <span class="step"></span> <span class="title d-md-block" style={{ marginLeft: "40px", color: "black" }}>Project Details</span> </a>
                                                                        </li>
                                                                        <li data-target="#step2" class="">
                                                                            <a href="#tab2" data-toggle="tab" style={{ textDecoration: "none" }}> <span class="step"></span> <span class="title d-md-block" style={{ marginLeft: "40px", color: "black" }}>Expenditure Data</span> </a>
                                                                        </li>
                                                                        <li data-target="#step3" class="">
                                                                            <a href="#tab3" data-toggle="tab" style={{ textDecoration: "none" }}> <span class="step"></span> <span class="title d-md-block" style={{ marginLeft: "40px", color: "black" }}>AP Invoice</span> </a>
                                                                        </li>
                                                                        <li data-target="#step4">
                                                                            <a href="#tab4" data-toggle="tab" style={{ textDecoration: "none" }}> <span class="step"></span> <span class="title d-md-block" style={{ marginLeft: "40px", color: "black" }}>AR Invoice</span> </a>
                                                                        </li>
                                                                        <li data-target="#step5">
                                                                            <a href="#tab4" data-toggle="tab" style={{ textDecoration: "none" }}> <span class="step"></span> <span class="title d-md-block" style={{ marginLeft: "40px", color: "black" }}>Budget</span> </a>
                                                                        </li>
                                                                        <li data-target="#step6">
                                                                            <a href="#tab4" data-toggle="tab" style={{ textDecoration: "none" }}> <span class="step"></span> <span class="title d-md-block" style={{ marginLeft: "40px", color: "black" }}>Bill Rates</span> </a>
                                                                        </li>
                                                                        <li data-target="#step7">
                                                                            <a href="#tab4" data-toggle="tab" style={{ textDecoration: "none" }}> <span class="step"></span> <span class="title d-md-block" style={{ marginLeft: "40px", color: "black" }}>Contacts</span> </a>
                                                                        </li>
                                                                        <li data-target="#step8">
                                                                            <a href="#tab4" data-toggle="tab" style={{ textDecoration: "none" }}> <span class="step"></span> <span class="title d-md-block" style={{ marginLeft: "40px", color: "black" }}>GP Percentage</span> </a>
                                                                        </li>
                                                                        <li data-target="#step9" className='step9'>
                                                                            <a href="#tab4" data-toggle="tab" style={{ textDecoration: "none" }}> <span class="step"></span> <span class="title d-md-block" style={{ marginLeft: "40px", color: "black" }}>Project Members</span> </a>
                                                                        </li>
                                                                    </ul>

                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="clearfix"></div>
                                                    </div>
                                                </div>
                                                <div className='card-border card-body shadow col p-4 position-relative box'>
                                                    <div className='row'>
                                                        <div className='col mt-2'>
                                                            <img src={Clock} alt="img" width="30px"></img>
                                                        </div>
                                                        <div className='position-absolute top-5  mt-3 ml-5'>
                                                            <h6>Timekeeper</h6>
                                                        </div>
                                                    </div>
                                                    <div className='row'>
                                                        <div className='col mt-2'>
                                                            <img src={Calendaricon} alt="img" width="30px"></img>
                                                        </div>
                                                        <div className='position-absolute top-5  mt-3 ml-5'>
                                                            <h6>Vacation Banking</h6>
                                                        </div>
                                                    </div>
                                                    <div className='row'>
                                                        <div className='col mt-2'>
                                                            <img src={currency} alt="img" width="30px"></img>
                                                        </div>
                                                        <div className='position-absolute top-5  mt-3 ml-5'>
                                                            <h6>Vacation Banking</h6>
                                                        </div>
                                                    </div>
                                                    <hr></hr>
                                                    <div className='row'>
                                                        <div className='col mt-2'>
                                                            <img src={Clock} alt="img" width="30px"></img>
                                                        </div>
                                                        <div className='position-absolute top-5  mt-3 ml-5'>
                                                            <h6>Timekeeper</h6>
                                                        </div>
                                                    </div>
                                                    <div className='row'>
                                                        <div className='col mt-2'>
                                                            <img src={Calendaricon} alt="img" width="30px"></img>
                                                        </div>
                                                        <div className='position-absolute top-5  mt-3 ml-5'>
                                                            <h6>Vacation Banking</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                
                                <div className='row mb-3 mt-3'>
                                    {/* Cardview */}
                                    <div className='card-border  shadow  ml-2 col p-4 position-relative box'>
                                        <div className='col mt-1'>
                                            <h6 className='text-break' style={{ fontSize: "small" }}>Budget Amount</h6>
                                        </div>
                                        <div className={`${tabMenu ? 'position-absolute top-0 end-0 mt-5 mr-4' : 'position-absolute top-0 end-0 mt-4 mr-4'}`}>
                                            <img src={us} alt="img" id="dollar" style={{ width: tabMenu ? '30px ' : '50px' }}></img>
                                        </div>
                                        <h4 className="ml-3" style={{ color: "red" }}>$0</h4>
                                    </div>
                                </div>
                                <div className='row mb-3'>
                                    <div className='card-border shadow ml-2 col p-4 position-relative box'>
                                        <div className='col mt-1'>
                                            <h6 className='text-break' style={{ fontSize: "small" }}>Total Projects</h6>
                                        </div>
                                        <div className={`${tabMenu ? 'position-absolute top-0 end-0 mt-5 mr-4' : 'position-absolute top-0 end-0 mt-4 mr-4'}`}>
                                            <img src={trending} alt="img" style={{ width: tabMenu ? '30px ' : '50px' }} id="trend" ></img>
                                        </div>
                                        <h4 className=' ml-3 total'>381</h4>
                                    </div>
                                    <div />
                                </div>
                                <div className='row mb-3'>
                                    <div className='card-border shadow ml-2  col p-4 position-relative box' >
                                        <div className='col mt-1'>
                                            <h6 className='text-break' style={{ fontSize: "small" }}>Pending PTO Approvals</h6>
                                        </div>
                                        <div className={`${tabMenu ? 'position-absolute top-0 end-0 mt-5 mr-4' : 'position-absolute top-0 end-0 mt-4 mr-4'}`}>
                                            <img src={check1} alt="calendar" style={{ width: tabMenu ? '30px ' : '50px' }} id="calendar"></img>
                                        </div>
                                        <h4 className="ml-3 textcolor">0</h4>
                                    </div>
                                </div>
                                <div className='row mb-3'>
                                    <div className='card-border shadow ml-2  col p-4 position-relative box'>
                                        <div className='col mt-1 d-md-block'>
                                            <h6 className='text-break' style={{ fontSize: "small" }}>Pending Timecard Approvals</h6>
                                        </div>
                                        <div className={`${tabMenu ? 'position-absolute top-0 end-0 mt-5 mr-4' : 'position-absolute top-0 end-0 mt-4 mr-4'}`}>
                                            <img src={alarm} alt="clock" style={{ width: tabMenu ? '30px ' : '50px' }} id="alarm"></img>
                                        </div>
                                        <h4 className="ml-3 textgreen">0</h4>
                                    </div>
                                </div>
                                <div className='row mt-3'>
                                    <div className=' ml-2 p-4 col shadow-sm bg-body rounded'>
                                        <h6 className='d-md-block'><img src={system} width="30px" alt="project" style={{ backgroundColor: "#e6492e", padding: "5px" }}></img><span className={`${tabMenu ? 'ml-1' : 'ml-2'}`}>PROJECTS</span></h6>
                                    </div>
                                    <div className=' ml-2 mr-2 shadow  bg-body rounded'>
                                        <div className='row'>
                                            <div className='col effect'>
                                                <div className="table-responsive table-hover mr-2">
                                                    <BootstrapTable
                                                        keyField='projectNumber'
                                                        data={data}
                                                        columns={columns}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='row mt-3'>
                                    <div className=' p-4 shadow-sm  bg-body rounded ml-2 mr-2'>
                                        <h6><img src={menu} width="30px" alt="metric" style={{ backgroundColor: "#ed65a2" }}></img><span className='ml-2'>METRICS</span></h6>
                                    </div>
                                    <div className='shadow bg-body ml-2 mr-2'>
                                        <div className='row '>
                                            <div className='ml-2 col p-2 mb-1'>
                                                <div className='border p-2 box'>
                                                    <h6 style={{ textAlign: "center" }}>0</h6>
                                                    <p className=' rounded p-0 projectsof'># of Projects</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className=' ml-2 col p-2 mb-1'>
                                                <div className='border p-2 box'>
                                                    <h6 style={{ textAlign: "center" }}>0</h6>
                                                    <p className=' rounded p-1 proposalsof'># of Proposals</p>
                                                    <div />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className=' ml-2 col p-2 mb-1'>
                                                <div className='border p-2 box'>
                                                    <h6 style={{ textAlign: "center" }}>0</h6>
                                                    <p className=' rounded p-0 Avg '>Avg Bill Rate vs Target Strid</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className=' ml-2 col p-2 mb-1'>
                                                <div className='border p-2 box'>
                                                    <h6 style={{ textAlign: "center" }}>0</h6>
                                                    <p className='rounded p-0 totalrevenue' >Total Revenue</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='ml-2 col p-2 mb-1'>
                                                <div className='border p-2 box'>
                                                    <h6 style={{ textAlign: "center" }}>0</h6>
                                                    <p className=' rounded p-0 gp'>Gp% on Labor vs Target</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className=' ml-2 col p-2 mb-1'>
                                                <div className='border p-2 box'>
                                                    <h6 style={{ textAlign: "center" }}>0</h6>
                                                    <p className=' rounded p-0 ubr'>UBR Aging</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='ml-2 col p-2 mb-1'>
                                                <div className='border p-2 box'>
                                                    <h6 style={{ textAlign: "center" }}>0</h6>
                                                    <p className=' rounded p-0 past'>Past Due AR#</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='ml-2 col p-2 mb-1'>
                                                <div className='border p-2 box'>
                                                    <h6 style={{ textAlign: "center" }}>0</h6>
                                                    <p className=' rounded p-0 pastinvoice' >Past Due AR invoice Due/List</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal fade mt-5" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="exampleModalLabel">Note:</h5>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
                                                This page has not been developed yet.
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                ) : windowWidth <= 576 ? (
                    <div className='container-fluid'>
                        <Menu changeMenu={this.changeMenuBar} />
                        <div className="row main" style={{ marginLeft: tabMenu == true ? '250px' : '' }}>
                            <div className={this.state.iscollaspe2 ? "col-12" : "col-12"}>

                                <div className='row float-end'>
                                    <div className={`col ${iscollaspe2 ? 'pr-0' : ''}`}>
                                        <div id="inline" >
                                        </div>
                                        <button type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" className={`border-algn  ${iscollaspe2 ? 'collapsed p-' : ''}`} onClick={this.handleCollapseBtnClick}><img src={iscollaspe2 ? leftarrow : right} width="10px" alt="img" height="10px"></img></button>
                                    </div>
                                </div>
                                <div class=" cardview card  shadow  rounded mb-3">
                                    <div class="card-header" >
                                        <div className='row'>
                                            <div className='col'>
                                                <button type="button" className=' btn-primary p-0'> <img src={info} width="20px" alt="img" height="20px" id="Fillter-algn"></img></button> <b className="filter-mobile-mini">Filter</b></div>
                                            <div className='col'>
                                                <div className="float-end">
                                                    <button type="button" className="btn border-algn" id="person"><img src={person1} width="20px" alt="img" height="20px"></img></button>
                                                    <button type="button" className="btn border-algn" id="person2"><img src={person2} width="20px" alt="img" height="20px"></img></button>
                                                    <button type="button" className="btn border-algn" id="all" >All</button>
                                                    <div id="inline">
                                                        <button
                                                            type="button"
                                                            className={`border-algn algn col-btn ${isImage1 ? 'collapsed' : ''}`}
                                                            onClick={this.handleColBtnClick}
                                                        >
                                                            <img
                                                                src={isImage1 ? Rightarrow : dropdown}
                                                                width="10px"
                                                                alt="img"
                                                                height="10px"
                                                                style={{ marginBottom: "12px" }}
                                                            />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={`card-body c ${isImage1 ? 'ollapse' : 'show'}`}>
                                        <p class="card-text">
                                            <div>
                                                <div className='row mb-2'>
                                                    <div className='col'>
                                                        <label class="text" style={{ fontSize: "small" }}>Organization</label><br></br>
                                                        <select class="form-select" id="inputGroupSelect01">
                                                            <option selected></option>
                                                            <option value="1">One</option>
                                                            <option value="2">Two</option>
                                                            <option value="3">Three</option>
                                                        </select>
                                                    </div>
                                                    <div className='col'>
                                                        <label class="text" style={{ fontSize: "small" }}>Customer</label><br></br>
                                                        <select class="form-select" id="inputGroupSelect01">
                                                            <option selected></option>
                                                            <option value="1">One</option>
                                                            <option value="2">Two</option>
                                                            <option value="3">Three</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='col'>
                                                        <label class="text" style={{ fontSize: "small" }}>Project</label><br></br>
                                                        <select class="form-select" id="inputGroupSelect01">
                                                            <option selected></option>
                                                            <option value="1">One</option>
                                                            <option value="2">Two</option>
                                                            <option value="3">Three</option>
                                                        </select>
                                                    </div>
                                                    <div className='col'>
                                                        <label class="text" style={{ fontSize: "small" }}>Project Manager</label><br></br>
                                                        <select class="form-select" id="inputGroupSelect01">
                                                            <option selected></option>
                                                            <option value="1">One</option>
                                                            <option value="2">Two</option>
                                                            <option value="3">Three</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className='row '>
                                                    <div className='col mb-2'>
                                                        <label class="text" style={{ fontSize: "small" }} >Closed Projects</label><br></br>
                                                        <div class="form-check form-switch ">
                                                            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" style={{ width: "100px", padding: "20px" }} />

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='row mt-2' >
                                                    <div className='col mt-3'>
                                                        <button class="btn searchhover" style={{ width: "100%", backgroundColor: "#4650dd", marginRight: "30px", color: "white" }} type="submit"><img src={Searchicon} width="20px" alt="img" height="20px" style={{ marginRight: "20px" }} ></img>Search</button>
                                                    </div>
                                                </div>
                                                <div className='row mt-2'>
                                                    <div className='col' style={{ marginTop: "10px" }}>
                                                        <button class="btn resethover" type="submit" style={{ width: "100%", marginRight: "30px", backgroundColor: "#f8f8f8" }}><img src={refresh} width="20px" alt="img" height="20px"></img></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </p>
                                    </div>
                                </div>
                                <div className={this.state.iscollaspe2 ? "col" : "collapse"}>
                                    <div className={` floating card card-body collapse `} id="collapseExample1"></div>
                                    <div className="offcanvas offcanvas-end col-5" style={{ maxWidth: iscollaspe2 ? '80% ' : '0%' }} tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                                        <div className="offcanvas-header">
                                        </div>
                                        <div className="offcanvas-body">
                                            <div class="" >
                                                <div className='row mt-3'>
                                                    <div className='col p-0' >
                                                        <div id="inline" className='float-left '>
                                                        </div>
                                                        < img src={ right} width="15px" alt="img" height="15px" class=" float-end mb-5" data-bs-dismiss="offcanvas"></img>
                                                        <h5 id="new">New</h5>

                                                        <div className='row'>
                                                            <div className='col'>
                                                                <div class="vrtwiz">
                                                                    <ul class="verticalwiz">
                                                                        <li class="" data-target="#step1">
                                                                            <a href="#tab1" data-toggle="tab" style={{ textDecoration: "none" }}> <span class="step"></span> <span class="title d-md-block" style={{ marginLeft: "40px", color: "black" }}>Project Details</span> </a>
                                                                        </li>
                                                                        <li data-target="#step2" class="">
                                                                            <a href="#tab2" data-toggle="tab" style={{ textDecoration: "none" }}> <span class="step"></span> <span class="title d-md-block" style={{ marginLeft: "40px", color: "black" }}>Expenditure Data</span> </a>
                                                                        </li>
                                                                        <li data-target="#step3" class="">
                                                                            <a href="#tab3" data-toggle="tab" style={{ textDecoration: "none" }}> <span class="step"></span> <span class="title d-md-block" style={{ marginLeft: "40px", color: "black" }}>AP Invoice</span> </a>
                                                                        </li>
                                                                        <li data-target="#step4">
                                                                            <a href="#tab4" data-toggle="tab" style={{ textDecoration: "none" }}> <span class="step"></span> <span class="title d-md-block" style={{ marginLeft: "40px", color: "black" }}>AR Invoice</span> </a>
                                                                        </li>
                                                                        <li data-target="#step5">
                                                                            <a href="#tab4" data-toggle="tab" style={{ textDecoration: "none" }}> <span class="step"></span> <span class="title d-md-block" style={{ marginLeft: "40px", color: "black" }}>Budget</span> </a>
                                                                        </li>
                                                                        <li data-target="#step6">
                                                                            <a href="#tab4" data-toggle="tab" style={{ textDecoration: "none" }}> <span class="step"></span> <span class="title d-md-block" style={{ marginLeft: "40px", color: "black" }}>Bill Rates</span> </a>
                                                                        </li>
                                                                        <li data-target="#step7">
                                                                            <a href="#tab4" data-toggle="tab" style={{ textDecoration: "none" }}> <span class="step"></span> <span class="title d-md-block" style={{ marginLeft: "40px", color: "black" }}>Contacts</span> </a>
                                                                        </li>
                                                                        <li data-target="#step8">
                                                                            <a href="#tab4" data-toggle="tab" style={{ textDecoration: "none" }}> <span class="step"></span> <span class="title d-md-block" style={{ marginLeft: "40px", color: "black" }}>GP Percentage</span> </a>
                                                                        </li>
                                                                        <li data-target="#step9" className='step9'>
                                                                            <a href="#tab4" data-toggle="tab" style={{ textDecoration: "none" }}> <span class="step"></span> <span class="title d-md-block" style={{ marginLeft: "40px", color: "black" }}>Project Members</span> </a>
                                                                        </li>
                                                                    </ul>

                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="clearfix"></div>
                                                    </div>
                                                </div>
                                                <div className='card-border card-body shadow col p-4 position-relative box'>
                                                    <div className='row'>
                                                        <div className='col mt-2'>
                                                            <img src={Clock} alt="img" width="30px"></img>
                                                        </div>
                                                        <div className='position-absolute top-5  mt-3 ml-5'>
                                                            <h6>Timekeeper</h6>
                                                        </div>
                                                    </div>
                                                    <div className='row'>
                                                        <div className='col mt-2'>
                                                            <img src={Calendaricon} alt="img" width="30px"></img>
                                                        </div>
                                                        <div className='position-absolute top-5  mt-3 ml-5'>
                                                            <h6>Vacation Banking</h6>
                                                        </div>
                                                    </div>
                                                    <div className='row'>
                                                        <div className='col mt-2'>
                                                            <img src={currency} alt="img" width="30px"></img>
                                                        </div>
                                                        <div className='position-absolute top-5  mt-3 ml-5'>
                                                            <h6>Vacation Banking</h6>
                                                        </div>
                                                    </div>
                                                    <hr></hr>
                                                    <div className='row'>
                                                        <div className='col mt-2'>
                                                            <img src={Clock} alt="img" width="30px"></img>
                                                        </div>
                                                        <div className='position-absolute top-5  mt-3 ml-5'>
                                                            <h6>Timekeeper</h6>
                                                        </div>
                                                    </div>
                                                    <div className='row'>
                                                        <div className='col mt-2'>
                                                            <img src={Calendaricon} alt="img" width="30px"></img>
                                                        </div>
                                                        <div className='position-absolute top-5  mt-3 ml-5'>
                                                            <h6>Vacation Banking</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='row mb-3 mt-3'>
                                    {/* Cardview */}
                                    <div className='card-border  shadow  ml-2  mr-2 col p-4 position-relative box'>
                                        <div className='col mt-1'>
                                            <h6 className='text-break'>Budget Amount</h6>
                                        </div>
                                        <div className='position-absolute top-0 end-0 mt-4 mr-4'>
                                            <img src={us} alt="img" width="50px" id="dollar"></img>
                                        </div>
                                        <h4 className="ml-3" style={{ color: "red" }}>$0</h4>
                                    </div>
                                </div>
                                <div className='row mb-3'>
                                    <div className='card-border shadow ml-2 mr-2 col p-4 position-relative box'>
                                        <div className='col mt-1'>
                                            <h6 className='text-break'>Total Projects</h6>
                                        </div>
                                        <div className='position-absolute top-0 end-0 mt-4 mr-4'>
                                            <img src={trending} alt="img" width="50px" id="trend" ></img>
                                        </div>
                                        <h4 className=' ml-3 total'>381</h4>
                                    </div>
                                    <div />
                                </div>
                                <div className='row mt-3 mb-3'>
                                    <div className='card-border shadow ml-2 mr-2  col p-4 position-relative box ' >
                                        <div className='col mt-1'>
                                            <h6 className='text-break'>Pending PTO Approvals</h6>
                                        </div>
                                        <div className='position-absolute top-0 end-0 mt-4 mr-4'>
                                            <img src={check1} alt="calendar" width="50px" id="calendar"></img>
                                        </div>
                                        <h4 className="ml-3 textcolor">0</h4>
                                    </div>
                                </div>
                                <div className='row mb-3'>
                                    <div className='card-border shadow ml-2 mr-2 col p-4 position-relative box'>
                                        <div className='col mt-1'>
                                            <h6 className='text-break'>Pending Timecard Approvals</h6>
                                        </div>
                                        <div className='position-absolute top-0 end-0 mt-4 mr-4'>
                                            <img src={alarm} alt="clock" width="50px" id="alarm"></img>
                                        </div>
                                        <h4 className="ml-3 textgreen">0</h4>
                                    </div>
                                </div>
                                <div className='row mt-3'>
                                    <div className=' ml-2 p-4 col shadow-sm  bg-body rounded'>
                                        <h6><img src={system} width="30px" alt="project" style={{ backgroundColor: "#e6492e", padding: "5px" }}></img><span className='ml-2'>PROJECTS</span></h6>
                                    </div>
                                    <div className=' ml-2  shadow  effect'>
                                        <div className='row'>
                                            <div className='col'>
                                                <div className="table-responsive table-hover">
                                                    <BootstrapTable
                                                        keyField='projectNumber'
                                                        data={data}
                                                        columns={columns}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='row mt-3'>
                                    <div className=' p-4 shadow-sm  bg-body rounded ml-3 mr-2'>
                                        <h6><img src={menu} width="30px" alt="metric" style={{ backgroundColor: "#ed65a2" }}></img><span className='ml-2'>METRICS</span></h6>
                                    </div>
                                    <div className=' ml-3 mr-2 shadow  bg-body rounded'>
                                        <div className='row '>
                                            <div className=' ml-2 col p-2 mb-1'>
                                                <div className='border p-2 box'>
                                                    <h6 style={{ textAlign: "center" }}>0</h6>
                                                    <p className=' rounded p-0 projectsof'># of Projects</p>
                                                </div>
                                            </div>
                                            <div className=' ml-2 col p-2 mb-1'>
                                                <div className='border p-2 box'>
                                                    <h6 style={{ textAlign: "center" }}>0</h6>
                                                    <p className=' rounded p-0 proposalsof'># of Proposals</p>
                                                </div>
                                            </div>

                                        </div>
                                        <div className='row'>
                                            <div className='  ml-2 col p-2 mb-1'>
                                                <div className='border p-2 box'>
                                                    <h6 style={{ textAlign: "center" }}>0</h6>
                                                    <p className=' rounded p-0 Avg '>Avg Bill Rate vs Target Strid</p>
                                                </div>
                                            </div>
                                            <div className='  ml-2 col p-2 mb-1'>
                                                <div className='border p-2 box'>
                                                    <h6 style={{ textAlign: "center" }}>0</h6>
                                                    <p className='rounded p-0 totalrevenue' >Total Revenue</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='  ml-2 col p-2 mb-1'>
                                                <div className='border p-2 box'>
                                                    <h6 style={{ textAlign: "center" }}>0</h6>
                                                    <p className=' rounded p-0 gp'>Gp% on Labor vs Target</p>
                                                </div>
                                            </div>
                                            <div className=' ml-2 col p-2 mb-1'>
                                                <div className='border p-2 box'>
                                                    <h6 style={{ textAlign: "center" }}>0</h6>
                                                    <p className=' rounded p-0 ubr'>UBR Aging</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className=' ml-2 col p-2 mb-1'>
                                                <div className='border p-2 box'>
                                                    <h6 style={{ textAlign: "center" }}>0</h6>
                                                    <p className=' rounded p-0 past'>Past Due AR#</p>
                                                </div>
                                            </div>
                                            <div className=' ml-2 col p-2 mb-1'>
                                                <div className='border p-2 box'>
                                                    <h6 style={{ textAlign: "center" }}>0</h6>
                                                    <p className=' rounded p-0 pastinvoice' >Past Due AR invoice Due/List</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal fade mt-5" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="exampleModalLabel">Note:</h5>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
                                                This page has not been developed yet.
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                ) : windowWidth <= 1008 ? (
                    <>
                        <div className='container-fluid'>
                            <Menu changeMenu={this.changeMenuBar} />
                            <div className="row main" style={{ marginLeft: tabMenu == true ? '250px' : '' }}>
                                <div className={this.state.iscollaspe2 ? "col-6" : "col-12"}>
                                    <div className='row float-end'>
                                        <div className={`col ${iscollaspe2 ? 'pr-0' : ''}`}>
                                            <div id="inline" >
                                            </div>
                                            <button type="button" className={`border-algn  ${iscollaspe2 ? 'collapsed p-' : ''}`} onClick={this.handleCollapseBtnClick}><img src={iscollaspe2 ? leftarrow : right} width="10px" alt="img" height="10px"></img></button>
                                        </div>
                                    </div>
                                    <div className={`border-algn  ${iscollaspe2 ? '' : 'show'}`}>
                                        <div class=" cardview card  shadow  rounded mb-3">
                                            <div class="card-header" >
                                                <div className='row'>
                                                    <div className='col'>

                                                        <button type="button" className=' btn-primary p-0'> <img src={info} width="20px" alt="img" height="20px" id="Fillter-algn"></img></button> <b className={this.state.iscollaspe2 ? "    margin-top: -35%;" : "filter-tablet"}>Filter</b></div>
                                                    <div className={this.state.iscollaspe2 ? " col-8" : "col"}>
                                                        <div className="float-end">
                                                            <button type="button" className="btn border-algn" id="person"><img src={person1} width="20px" alt="img" height="20px"></img></button>
                                                            <button type="button" className="btn border-algn" id="person2"><img src={person2} width="20px" alt="img" height="20px"></img></button>
                                                            <button type="button" className="btn border-algn" id="all" >All</button>
                                                            <div id="inline">
                                                                <button
                                                                    type="button"
                                                                    className={`border-algn algn col-btn ${isImage1 ? 'collapsed' : ''}`}
                                                                    onClick={this.handleColBtnClick}
                                                                >
                                                                    <img
                                                                        src={isImage1 ? Rightarrow : dropdown}
                                                                        width="10px"
                                                                        alt="img"
                                                                        height="10px"
                                                                        style={{ marginBottom: "12px" }}
                                                                    />
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={`card-body ${isImage1 ? 'collapse' : 'show'}`} >
                                                <p class="card-text">
                                                    <div>
                                                        <div className='row mb-2'>
                                                            <div className='col'>
                                                                <label class="text" style={{ fontSize: "small" }}>Organization</label><br></br>
                                                                <select class="form-select" id="inputGroupSelect01">
                                                                    <option selected></option>
                                                                    <option value="1">One</option>
                                                                    <option value="2">Two</option>
                                                                    <option value="3">Three</option>
                                                                </select>
                                                            </div>
                                                            <div className='col'>
                                                                <label class="text" style={{ fontSize: "small" }}>Customer</label><br></br>
                                                                <select class="form-select" id="inputGroupSelect01">
                                                                    <option selected></option>
                                                                    <option value="1">One</option>
                                                                    <option value="2">Two</option>
                                                                    <option value="3">Three</option>
                                                                </select>
                                                            </div>
                                                            <div className='col'>
                                                                <label class="text" style={{ fontSize: "small" }}>Project</label><br></br>
                                                                <select class="form-select" id="inputGroupSelect01">
                                                                    <option selected></option>
                                                                    <option value="1">One</option>
                                                                    <option value="2">Two</option>
                                                                    <option value="3">Three</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className='row'>
                                                            <div className='col-4'>
                                                                <label class="text" style={{ fontSize: "small" }}>Project Manager</label><br></br>
                                                                <select class="form-select" id="inputGroupSelect01">
                                                                    <option selected></option>
                                                                    <option value="1">One</option>
                                                                    <option value="2">Two</option>
                                                                    <option value="3">Three</option>
                                                                </select>
                                                            </div>
                                                            <div className='col'>
                                                                <label class="text" style={{ fontSize: "small" }}>Closed Projects</label><br></br>
                                                                <div class="form-check form-switch ">
                                                                    <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" style={{ width: "100px", padding: "20px" }} />

                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='row mt-2'>
                                                            <div className='col' style={{ marginTop: "10px" }}>
                                                                <button class="btn resethover" type="submit" style={{ paddingRight: "50px", paddingLeft: "50px", float: "inline-end", backgroundColor: "#f8f8f8" }}><img src={refresh} width="20px" alt="img" height="20px"></img></button>
                                                                <button className={`${iscollaspe2 ? 'btn search search-mobile searchhover' : 'btn search searching searchhover'}`} type="submit"><img src={Searchicon} width="20px" alt="img" height="20px"  style={{ marginRight: "20px" }} ></img>Search</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </p>
                                            </div>
                                        </div>
                                        <div className={`  ${iscollaspe2 ? 'row collapse' : 'row mb-3 mr-2'}`}>
                                            {/* Cardview */}
                                            <div className='card-border  shadow  ml-2 col p-4 position-relative box'>
                                                <div className='col mt-1'>
                                                    <h6 className='text-break' style={{ fontSize: "small" }}>Budget Amount</h6>
                                                </div>
                                                <div className='position-absolute top-0 end-0 mt-4 mr-4'>
                                                    <img src={us} alt="img" width="50px" id="dollar"></img>
                                                </div>
                                                <h4 className="ml-3" style={{ color: "red" }}>$0</h4>
                                            </div>
                                            <div className='card-border shadow ml-2 mr-2 col p-4 position-relative box' >
                                                <div className='col mt-1'>
                                                    <h6 className='text-break' style={{ fontSize: "small" }}>Total Projects</h6>
                                                </div>
                                                <div className='position-absolute top-0 end-0 mt-4 mr-4'>
                                                    <img src={trending} alt="img" width="50px" id="trend" ></img>
                                                </div>
                                                <h4 className=' ml-3 total'>381</h4>
                                            </div>
                                            <div />
                                        </div>
                                        <div className={`  ${iscollaspe2 ? 'row collapse' : 'row mb-3 mr-2'}`}>
                                            <div className='card-border shadow ml-2  col p-4 position-relative box' >
                                                <div className='col mt-1'>
                                                    <h6 className='text-break' style={{ fontSize: "small" }}>Pending PTO Approvals</h6>
                                                </div>
                                                <div className='position-absolute top-0 end-0 mt-4 mr-4'>
                                                    <img src={check1} alt="calendar" width="50px" id="calendar"></img>
                                                </div>
                                                <h4 className="ml-3 textcolor">0</h4>
                                            </div>
                                            <div className='card-border shadow ml-2 mr-2 col p-4 position-relative box'>
                                                <div className='col mt-1'>
                                                    <h6 className='text-break' style={{ fontSize: "small" }}>Pending Timecard Approvals</h6>
                                                </div>
                                                <div className='position-absolute top-0 end-0 mt-4 mr-4'>
                                                    <img src={alarm} alt="clock" width="50px" id="alarm"></img>
                                                </div>
                                                <h4 className="ml-3 textgreen">0</h4>
                                            </div>
                                        </div>
                                        <div className={`  ${iscollaspe2 ? 'row mb-3 mr-2' : 'row collapse'}`}>
                                            {/* Cardview */}
                                            <div className='card-border  shadow  ml-2 col p-4 position-relative box'>
                                                <div className='col mt-1'>
                                                    <h6 className='text-break' style={{ fontSize: "small" }}>Budget Amount</h6>
                                                </div>
                                                <div className='position-absolute top-0 end-0 mt-4 mr-4'>
                                                    <img src={us} alt="img" width="50px" id="dollar"></img>
                                                </div>
                                                <h4 className="ml-3" style={{ color: "red" }}>$0</h4>
                                            </div>
                                        </div>
                                        <div className={`  ${iscollaspe2 ? 'row mb-3 mr-2' : 'row collapse'}`}>
                                            <div className='card-border shadow ml-2 col p-4 position-relative box' >
                                                <div className='col mt-1'>
                                                    <h6 className='text-break' style={{ fontSize: "small" }}>Total Projects</h6>
                                                </div>
                                                <div className='position-absolute top-0 end-0 mt-4 mr-4'>
                                                    <img src={trending} alt="img" width="50px" id="trend" ></img>
                                                </div>
                                                <h4 className=' ml-3 total'>381</h4>
                                            </div>
                                            <div />
                                        </div>
                                        <div className={`  ${iscollaspe2 ? 'row mt-3 mr-2' : 'row collapse'}`}>
                                            <div className='card-border shadow ml-2  col p-4 position-relative box' >
                                                <div className='col mt-1'>
                                                    <h6 className='text-break' style={{ fontSize: "small" }}>Pending PTO Approvals</h6>
                                                </div>
                                                <div className='position-absolute top-0 end-0 mt-4 mr-4'>
                                                    <img src={check1} alt="calendar" width="50px" id="calendar"></img>
                                                </div>
                                                <h4 className="ml-3 textcolor">0</h4>
                                            </div>
                                        </div>
                                        <div className={`  ${iscollaspe2 ? 'row mt-3 mr-2' : 'row collapse'}`}>
                                            <div className='card-border shadow ml-2  col p-4 position-relative box'>
                                                <div className='col mt-1'>
                                                    <h6 className='text-break ' style={{ fontSize: "small" }}>Pending Timecard Approvals</h6>
                                                </div>
                                                <div className='position-absolute top-0 end-0 mt-4 mr-4'>
                                                    <img src={alarm} alt="clock" width="50px" id="alarm"></img>
                                                </div>
                                                <h4 className="ml-3 textgreen">0</h4>
                                            </div>
                                        </div>

                                        <div className='row mt-3 mr-2'>
                                            <div className=' ml-2 p-4 col shadow-sm  bg-body rounded'>
                                                <h6><img src={system} width="30px" alt="project" style={{ backgroundColor: "#e6492e", padding: "5px" }}></img><span className='ml-2'>PROJECTS</span></h6>
                                            </div>
                                            <div className=' ml-2 mr-2 shadow'>
                                                <div className='row'>
                                                    <div className='col mr-2'>
                                                        <div className="table-responsive table-hover">
                                                            <BootstrapTable
                                                                keyField='projectNumber'
                                                                data={data}
                                                                columns={columns}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='row mt-3 mr-2' >
                                            <div className=' p-4 shadow-sm  bg-body rounded ml-3 mr-2'>
                                                <h6><img src={menu} width="30px" alt="metric" style={{ backgroundColor: "#ed65a2" }}></img><span className='ml-2'>METRICS</span></h6>
                                            </div>
                                            <div className=' ml-3 mr-2  shadow  bg-body rounded'>
                                                <div className='row'>
                                                    <div className=' ml-2 col p-2 mb-1'>
                                                        <div className='border p-2 box'>
                                                            <h6 style={{ textAlign: "center" }}>0</h6>
                                                            <p className=' rounded p-0 projectsof'># of Projects</p>
                                                        </div>
                                                    </div>
                                                    <div className='ml-2 col p-2 mb-1'>
                                                        <div className='border p-2 box'>
                                                            <h6 style={{ textAlign: "center" }}>0</h6>
                                                            <p className=' rounded p-0 proposalsof'># of Proposals</p>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div className='row'>
                                                    <div className='ml-2 col p-2 mb-1'>
                                                        <div className='border p-2 box'>
                                                            <h6 style={{ textAlign: "center" }}>0</h6>
                                                            <p className=' rounded p-0 Avg '>Avg Bill Rate vs Target Strid</p>
                                                        </div>
                                                    </div>
                                                    <div className='ml-2 col p-2 mb-1'>
                                                        <div className='border p-2 box'>
                                                            <h6 style={{ textAlign: "center" }}>0</h6>
                                                            <p className='rounded p-0 totalrevenue' >Total Revenue</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='ml-2 col p-2 mb-1'>
                                                        <div className='border p-2 box'>
                                                            <h6 style={{ textAlign: "center" }}>0</h6>
                                                            <p className=' rounded p-0 gp'>Gp% on Labor vs Target</p>
                                                        </div>
                                                    </div>
                                                    <div className='ml-2 col p-2 mb-1'>
                                                        <div className='border p-2 box'>
                                                            <h6 style={{ textAlign: "center" }}>0</h6>
                                                            <p className=' rounded p-0 ubr'>UBR Aging</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='ml-2 col p-2 mb-1'>
                                                        <div className='border p-2 box'>
                                                            <h6 style={{ textAlign: "center" }}>0</h6>
                                                            <p className=' rounded p-0 past'>Past Due AR#</p>
                                                        </div>
                                                    </div>
                                                    <div className='ml-2 col p-2 mb-1'>
                                                        <div className='border p-2 box'>
                                                            <h6 style={{ textAlign: "center" }}>0</h6>
                                                            <p className=' rounded p-1 pastinvoice' >Past Due AR invoice Due/List</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="modal fade mt-5" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div class="modal-dialog">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <h5 class="modal-title" id="exampleModalLabel">Note:</h5>
                                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div class="modal-body">
                                                        This page has not been developed yet.
                                                    </div>
                                                    <div class="modal-footer">
                                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={this.state.iscollaspe2 ? "col-6  pl-0" : "show"}>
                                    <div className={` floating card card-body collapse ${iscollaspe2 ? 'show' : ''}`} id="collapseExample1">
                                        <div class="" >
                                            <div className='row'>
                                                <div className='col p-0' >
                                                    <div id="inline" className='float-left '>
                                                        <h5 id="new">New</h5>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='col'>
                                                        <div class="vrtwiz">
                                                            <ul class="verticalwiz">
                                                                <li class="" data-target="#step1">
                                                                    <a href="#tab1" data-toggle="tab" style={{ textDecoration: "none" }}> <span class="step"></span> <span class="title d-md-block" style={{ marginLeft: "40px", color: "black" }}>Project Details</span> </a>
                                                                </li>
                                                                <li data-target="#step2" class="">
                                                                    <a href="#tab2" data-toggle="tab" style={{ textDecoration: "none" }}> <span class="step"></span> <span class="title d-md-block" style={{ marginLeft: "40px", color: "black" }}>Expenditure</span> </a>
                                                                </li>
                                                                <li data-target="#step3" class="">
                                                                    <a href="#tab3" data-toggle="tab" style={{ textDecoration: "none" }}> <span class="step"></span> <span class="title d-md-block" style={{ marginLeft: "40px", color: "black" }}>AP Invoice</span> </a>
                                                                </li>
                                                                <li data-target="#step4">
                                                                    <a href="#tab4" data-toggle="tab" style={{ textDecoration: "none" }}> <span class="step"></span> <span class="title d-md-block" style={{ marginLeft: "40px", color: "black" }}>AR Invoice</span> </a>
                                                                </li>
                                                                <li data-target="#step5">
                                                                    <a href="#tab4" data-toggle="tab" style={{ textDecoration: "none" }}> <span class="step"></span> <span class="title d-md-block" style={{ marginLeft: "40px", color: "black" }}>Budget</span> </a>
                                                                </li>
                                                                <li data-target="#step6">
                                                                    <a href="#tab4" data-toggle="tab" style={{ textDecoration: "none" }}> <span class="step"></span> <span class="title d-md-block" style={{ marginLeft: "40px", color: "black" }}>Bill Rates</span> </a>
                                                                </li>
                                                                <li data-target="#step7">
                                                                    <a href="#tab4" data-toggle="tab" style={{ textDecoration: "none" }}> <span class="step"></span> <span class="title d-md-block" style={{ marginLeft: "40px", color: "black" }}>Contacts</span> </a>
                                                                </li>
                                                                <li data-target="#step8">
                                                                    <a href="#tab4" data-toggle="tab" style={{ textDecoration: "none" }}> <span class="step"></span> <span class="title d-md-block" style={{ marginLeft: "40px", color: "black" }}>GP Percentage</span> </a>
                                                                </li>

                                                            </ul>

                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                            <div class="clearfix"></div>
                                            <div className='card-border card-body shadow p-2 position-relative mt-2 box'>
                                                <div className='row'>
                                                    <div className='col mt-2'>
                                                        <img src={Clock} alt="img" width="30px"></img>
                                                    </div>
                                                    <div className='position-absolute top-5  mt-3 ml-5'>
                                                        <h6>Timekeeper</h6>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='col mt-2'>
                                                        <img src={Calendaricon} alt="img" width="30px"></img>
                                                    </div>
                                                    <div className='position-absolute top-5  mt-3 ml-5'>
                                                        <h6>Vacation Banking</h6>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='col mt-2'>
                                                        <img src={currency} alt="img" width="30px"></img>
                                                    </div>
                                                    <div className='position-absolute top-5  mt-3 ml-5'>
                                                        <h6>Vacation Banking</h6>
                                                    </div>
                                                </div>
                                                <hr></hr>
                                                <div className='row'>
                                                    <div className='col mt-2'>
                                                        <img src={Clock} alt="img" width="30px"></img>
                                                    </div>
                                                    <div className='position-absolute top-5  mt-3 ml-5'>
                                                        <h6>Timekeeper</h6>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='col mt-2'>
                                                        <img src={Calendaricon} alt="img" width="30px"></img>
                                                    </div>
                                                    <div className='position-absolute top-5  mt-3 ml-5'>
                                                        <h6>Vacation Banking</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </>

                ) :
                    <div className='container-fluid contain'>
                        <Menu changeMenu={this.changeMenuBar} />
                        <div className="row main" style={{ marginLeft: tabMenu == true ? '250px' : '' }}>
                            <div className={this.state.iscollaspe2 ? "col-9" : "col-12"}>
                                <div className='row float-end'>
                                    <div className={`col ${iscollaspe2 ? 'pr-0' : 'pr-0'}`}>
                                        <div id="inline" >
                                        </div>
                                        <button type="button" className={`border-algn  ${iscollaspe2 ? 'collapsed ' : ''}`} onClick={this.handleCollapseBtnClick}><img src={iscollaspe2 ? leftarrow : right} width="10px" alt="img" height="10px"></img></button>
                                    </div>
                                </div>
                                <div className={`border-algn  ${iscollaspe2 ? '' : 'show'}`}>
                                    <div className={` ${iscollaspe2 === true ? 'hide' : 'shows'}`}>
                                        <div>
                                            <div class=" cardview card  shadow  rounded mb-3 ml-3">
                                                <div class="card-header" >
                                                    <div className='row d-flex flex-row'>
                                                        <div className='col' >
                                                            <button type="button" className=' btn-primary p-0'> <img src={info} width="20px" alt="img" height="20px" id="Fillter-algn"></img></button> <b className='filter'>Filter</b>
                                                        </div>
                                                        <div className='col'>
                                                            <div className="float-end">
                                                                <button type="button" className="btn border-algn" id="person"><img src={person1} width="20px" alt="img" height="20px"></img></button>
                                                                <button type="button" className=" btn border-algn" id="person2"><img src={person2} width="20px" alt="img" height="20px"></img></button>
                                                                <button type="button" className="btn border-algn" id="all" >All</button>
                                                                <div id="inline">
                                                                    <button
                                                                        type="button"
                                                                        className={`border-algn algn col-btn ${isImage1 ? 'collapsed' : ''}`}
                                                                        onClick={this.handleColBtnClick}
                                                                    >
                                                                        <img
                                                                            src={isImage1 ? Rightarrow : dropdown}
                                                                            width="10px"
                                                                            alt="img"
                                                                            height="10px"
                                                                            style={{ marginBottom: "12px" }}
                                                                        />
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={`card-body  ${isImage1 ? 'collapse' : 'show'}`}>
                                                    <p class="card-text" >
                                                        <div>
                                                            <div className='row'>
                                                                <div className='col-2'>
                                                                    <label class="text" style={{ fontSize: "small" }}>Organization</label><br></br>
                                                                    <select class="form-select" id="inputGroupSelect01">
                                                                        <option selected></option>
                                                                        <option value="1">One</option>
                                                                        <option value="2">Two</option>
                                                                        <option value="3">Three</option>
                                                                    </select>
                                                                </div>
                                                                <div className='col-3'>
                                                                    <label class="text" style={{ fontSize: "small" }}>Customer</label><br></br>
                                                                    <select class="form-select" id="inputGroupSelect01">
                                                                        <option selected></option>
                                                                        <option value="1">One</option>
                                                                        <option value="2">Two</option>
                                                                        <option value="3">Three</option>
                                                                    </select>
                                                                </div>
                                                                <div className='col-3'>
                                                                    <label class="text" style={{ fontSize: "small" }}>Project</label><br></br>
                                                                    <select class="form-select" id="inputGroupSelect01">
                                                                        <option selected></option>
                                                                        <option value="1">One</option>
                                                                        <option value="2">Two</option>
                                                                        <option value="3">Three</option>
                                                                    </select>
                                                                </div>
                                                                <div className='col-2'>
                                                                    <label class="text" style={{ fontSize: "small" }}>Project Manager</label><br></br>
                                                                    <select class="form-select" id="inputGroupSelect01">
                                                                        <option selected></option>
                                                                        <option value="1">One</option>
                                                                        <option value="2">Two</option>
                                                                        <option value="3">Three</option>
                                                                    </select>
                                                                </div>
                                                                <div className='col'>
                                                                    <label class="text" style={{ fontSize: "small" }}>Closed Projects</label><br></br>
                                                                    <div class="form-check form-switch ">
                                                                        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" style={{ width: "80px", height: "40px" }} />

                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='row mt-2'>
                                                                <div className='col' style={{ marginTop: "10px" }}>
                                                                    <button class="btn resethover" type="submit" style={{ paddingRight: "50px", paddingLeft: "50px", float: "inline-end", backgroundColor: "#f8f8f8" }}><img src={refresh} width="20px" alt="img" height="20px"></img></button>
                                                                    <button class="btn searchhover" style={{ paddingRight: "90px", paddingLeft: "90px", float: "inline-end", backgroundColor: "#4650dd", marginRight: "30px", color: "white" }} type="submit"><img src={Searchicon} width="20px" alt="img" height="20px" mr-2 style={{ marginRight: "20px" }} ></img>Search</button>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={` ${iscollaspe2 === true ? 'hide' : 'shows row mb-3 test ml-1 pl-1 pr-1'}`}>
                                            {/* Cardview */}
                                            <div className='card-border  shadow  ml-2 col p-4 position-relative box'>
                                                <div className='col mt-1'>
                                                    <h6 className='text-break pto'>Budget Amount</h6>
                                                </div>
                                                <div className='position-absolute top-0 end-0 mt-4 mr-4'>
                                                    <img src={us} alt="img" width="50px" id="dollar"></img>
                                                </div>
                                                <h4 className="ml-3" style={{ color: "red" }}>$0</h4>
                                            </div>
                                            <div className='card-border shadow ml-2 col position-relative box'>
                                                <div className='col mt-4'>
                                                    <h6 className='text-break pto'>Total Projects</h6>
                                                </div>
                                                <div className='position-absolute top-0 end-0 mt-4 mr-4'>
                                                    <img src={trending} alt="img" width="50px" id="trend" ></img>
                                                </div>
                                                <h4 className=' ml-3 total'>381</h4>
                                            </div>
                                            <div className='card-border shadow ml-2  col position-relative box' >
                                                <div className='col mt-4'>
                                                    <h6 className='text-break pto p-2' >Pending PTO Approvals</h6>
                                                </div>
                                                <div className='position-absolute top-0 end-0 mt-4 mr-3'>
                                                    <img src={check1} alt="calendar" width="50px" id="calendar"></img>
                                                </div>
                                                <h4 className="ml-3 textcolor">0</h4>
                                            </div>
                                            <div className={`card-border shadow ml-2  col position-relative box ${iscollaspe2 ? 'mr-4' : 'mr-4'}`}>
                                                <div className='col mt-4'>
                                                    <h6 className='text-break pto1' >Pending Timecard Approvals</h6>
                                                </div>
                                                <div className='position-absolute top-0 end-0 mt-4 mr-3'>
                                                    <img src={alarm} alt="clock" width="50px" id="alarm"></img>
                                                </div>
                                                <h4 className="ml-3 textgreen">0</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={` ${iscollaspe2 === true ? 'shows test1' : 'hide'}`}>
                                        <div>
                                            <div class=" cardview card  shadow  rounded mb-3">
                                                <div class="card-header" >
                                                    <div className='row d-flex flex-row'>
                                                        <div className='col' >
                                                            <button type="button" className=' btn-primary p-0'> <img src={info} width="20px" alt="img" height="20px" id="Fillter-algn"></img></button> <b className={`${iscollaspe2 ? 'filter-res' : 'filter'}`}>Filter</b>
                                                        </div>
                                                        <div className='col'>
                                                            <div className="float-end">
                                                                <button type="button" className="btn border-algn" id="person"><img src={person1} width="20px" alt="img" height="20px"></img></button>
                                                                <button type="button" className=" btn border-algn" id="person2"><img src={person2} width="20px" alt="img" height="20px"></img></button>
                                                                <button type="button" className="btn border-algn" id="all" >All</button>
                                                                <div id="inline">
                                                                    <button
                                                                        type="button"
                                                                        className={`border-algn algn col-btn ${isImage1 ? 'collapsed' : ''}`}
                                                                        onClick={this.handleColBtnClick}
                                                                    >
                                                                        <img
                                                                            src={isImage1 ? Rightarrow : dropdown}
                                                                            width="10px"
                                                                            alt="img"
                                                                            height="10px"
                                                                            style={{ marginBottom: "12px" }}
                                                                        />
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={`card-body ${isImage1 ? 'collapse' : 'show'}`} >
                                                    <p class="card-text">
                                                        <div>
                                                            <div className='row mb-2'>
                                                                <div className='col'>
                                                                    <label class="text" style={{ fontSize: "small" }}>Organization</label><br></br>
                                                                    <select class="form-select" id="inputGroupSelect01">
                                                                        <option selected></option>
                                                                        <option value="1">One</option>
                                                                        <option value="2">Two</option>
                                                                        <option value="3">Three</option>
                                                                    </select>
                                                                </div>
                                                                <div className='col'>
                                                                    <label class="text" style={{ fontSize: "small" }}>Customer</label><br></br>
                                                                    <select class="form-select" id="inputGroupSelect01">
                                                                        <option selected></option>
                                                                        <option value="1">One</option>
                                                                        <option value="2">Two</option>
                                                                        <option value="3">Three</option>
                                                                    </select>
                                                                </div>
                                                                <div className='col'>
                                                                    <label class="text" style={{ fontSize: "small" }}>Project</label><br></br>
                                                                    <select class="form-select" id="inputGroupSelect01">
                                                                        <option selected></option>
                                                                        <option value="1">One</option>
                                                                        <option value="2">Two</option>
                                                                        <option value="3">Three</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className='row'>
                                                                <div className='col-4'>
                                                                    <label class="text" style={{ fontSize: "small" }}>Project Manager</label><br></br>
                                                                    <select class="form-select" id="inputGroupSelect01">
                                                                        <option selected></option>
                                                                        <option value="1">One</option>
                                                                        <option value="2">Two</option>
                                                                        <option value="3">Three</option>
                                                                    </select>
                                                                </div>
                                                                <div className='col'>
                                                                    <label class="text" style={{ fontSize: "small" }}>Closed Projects</label><br></br>
                                                                    <div class="form-check form-switch ">
                                                                        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" style={{ width: "100px", padding: "20px" }} />

                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='row mt-2'>
                                                                <div className='col' style={{ marginTop: "10px" }}>
                                                                    <button class="btn resethover" type="submit" style={{ paddingRight: "50px", paddingLeft: "50px", float: "inline-end", backgroundColor: "#f8f8f8" }}><img src={refresh} width="20px" alt="img" height="20px"></img></button>
                                                                    <button className={`${iscollaspe2 ? 'btn search searchhover search-mobile mr-2' : 'btn search searchhover searching'}`} type="submit"><img src={Searchicon} width="20px" alt="img" height="20px" mr-2 style={{ marginRight: "20px" }} ></img>Search</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='row mb-3 mr-2 test2'>
                                            {/* Cardview */}
                                            <div className='card-border  shadow  ml-2 col p-4 position-relative box'>
                                                <div className='col mt-1'>
                                                    <h6 className='text-break' style={{ fontSize: "small" }}>Budget Amount</h6>
                                                </div>
                                                <div className='position-absolute top-0 end-0 mt-4 mr-4'>
                                                    <img src={us} alt="img" width="50px" id="dollar"></img>
                                                </div>
                                                <h4 className="ml-3" style={{ color: "red" }}>$0</h4>
                                            </div>
                                            <div className='card-border shadow ml-2 mr-2 col p-4 position-relative box' >
                                                <div className='col mt-1'>
                                                    <h6 className='text-break' style={{ fontSize: "small" }}>Total Projects</h6>
                                                </div>
                                                <div className='position-absolute top-0 end-0 mt-4 mr-4'>
                                                    <img src={trending} alt="img" width="50px" id="trend" ></img>
                                                </div>
                                                <h4 className=' ml-3 total'>381</h4>
                                            </div>
                                            <div />
                                        </div>
                                        <div className='row mb-3 mr-2 test2'>
                                            <div className='card-border shadow ml-2  col p-4 position-relative box' >
                                                <div className='col mt-1'>
                                                    <h6 className='text-break' style={{ fontSize: "small" }}>Pending PTO Approvals</h6>
                                                </div>
                                                <div className='position-absolute top-0 end-0 mt-4 mr-4'>
                                                    <img src={check1} alt="calendar" width="50px" id="calendar"></img>
                                                </div>
                                                <h4 className="ml-3 textcolor">0</h4>
                                            </div>
                                            <div className='card-border shadow ml-2 mr-2 col p-4 position-relative box'>
                                                <div className='col mt-1'>
                                                    <h6 className='text-break' style={{ fontSize: "small" }}>Pending Timecard Approvals</h6>
                                                </div>
                                                <div className='position-absolute top-0 end-0 mt-4 mr-4'>
                                                    <img src={alarm} alt="clock" width="50px" id="alarm"></img>
                                                </div>
                                                <h4 className="ml-3 textgreen">0</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`row ${iscollaspe2 ? 'mr-2' : 'pl-1 ml-1 pr-1'}`}>
                                        <div className='col ml-2 p-4 col-sm-7 shadow-sm bg-body rounded'>
                                            <h6 class="project"><img src={system} width="30px" alt="project" style={{ backgroundColor: "#e6492e", padding: "5px" }}></img><span className='ml-2'>PROJECTS</span></h6>
                                        </div>
                                        <div className={`row ${iscollaspe2 ? 'p-4 shadow  shadow-sm bg-body rounded ml-3 mr-2 col' : 'p-2 shadow  shadow-sm bg-body rounded ml-3 mr-4 col'}`}>
                                            <h6 class="metric mt-3" ><img src={menu} width="30px" alt="metric" style={{ backgroundColor: "#ed65a2" }}></img><span className='ml-2'>METRICS</span></h6>
                                        </div>
                                    </div>
                                    <div className={`row ${iscollaspe2 ? 'mr-2' : 'pl-1 ml-1 pr-1'}`}>
                                        <div className='col-7 ml-2 shadow bg-body effect'>
                                            <div className="table-responsive table-hover">
                                                <BootstrapTable
                                                    keyField='projectNumber'
                                                    data={data}
                                                    columns={columns}
                                                />
                                            </div>
                                        </div>
                                        <div className={` ${iscollaspe2 ? 'col ml-3 mr-2 shadow bg-body' : 'col ml-3 mr-4 shadow bg-body'}`}>
                                            <div className='row'>
                                                <div className='  ml-2 col p-2 mb-1'>
                                                    <div className='border p-2  box'>
                                                        <h6 style={{ textAlign: "center" }}>0</h6>
                                                        <p className=' rounded p-0 projectsof'># of Projects</p>
                                                    </div>
                                                </div>
                                                <div className='  ml-2 col p-2 mb-1'>
                                                    <div className='border p-2 box'>
                                                        <h6 style={{ textAlign: "center" }}>0</h6>
                                                        <p className=' rounded p-0 proposalsof'># of Proposals</p>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className='row'>
                                                <div className='   ml-2 col p-2 mb-1'>
                                                    <div className='border p-2 box'>
                                                        <h6 style={{ textAlign: "center" }}>0</h6>
                                                        <p className=' rounded p-0 Avg '>Avg Bill Rate vs Target Strid</p>
                                                    </div>
                                                </div>
                                                <div className='ml-2 col p-2 mb-1'>
                                                    <div className='border p-2 box'>
                                                        <h6 style={{ textAlign: "center" }}>0</h6>
                                                        <p className='rounded p-0 totalrevenue' >Total Revenue</p>
                                                        <div />
                                                    </div>
                                                    <div />
                                                    <div />
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className=' ml-2 col p-2 mb-1'>
                                                    <div className='border p-2 box'>
                                                        <h6 style={{ textAlign: "center" }}>0</h6>
                                                        <p className=' rounded p-0 gp'>Gp% on Labor vs Target</p>
                                                        <div />
                                                    </div>
                                                </div>
                                                <div className='  ml-2 col p-2 mb-1'>
                                                    <div className='border p-2 box'>
                                                        <h6 style={{ textAlign: "center" }}>0</h6>
                                                        <p className=' rounded p-0 ubr'>UBR Aging</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className='  ml-2 col p-2 mb-1'>
                                                    <div className='border p-2 box'>
                                                        <h6 style={{ textAlign: "center" }}>0</h6>
                                                        <p className=' rounded p-0 past'>Past Due AR#</p>
                                                    </div>
                                                </div>
                                                <div className='   ml-2 col p-2 mb-1'>
                                                    <div className='border p-2 box'>
                                                        <h6 style={{ textAlign: "center" }}>0</h6>
                                                        <p className=' rounded p-0 pastinvoice' >Past Due AR invoice Due/List</p>
                                                    </div>
                                                </div>
                                                <div />
                                            </div>
                                            <div />
                                        </div>
                                    </div>
                                    <div class="modal fade mt-5" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title" id="exampleModalLabel">Note:</h5>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div class="modal-body">
                                                    This page has not been developed yet.
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={this.state.iscollaspe2 ? "col  pl-0" : "show"}>
                                <div className={` floating card card-body collapse ${iscollaspe2 ? 'show' : ''}`} id="collapseExample1">
                                    <div class="" >
                                        <div className='row'>
                                            <div className='col p-0' >
                                                <div id="inline" className='float-left '>
                                                    <h5 id="new">New</h5>
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className='col'>
                                                    <div class="vrtwiz">
                                                        <ul class="verticalwiz">
                                                            <li class="" data-target="#step1">
                                                                <a href="#tab1" data-toggle="tab" style={{ textDecoration: "none" }}> <span class="step"></span> <span class="title d-md-block" style={{ marginLeft: "40px", color: "black" }}>Project Details</span> </a>
                                                            </li>
                                                            <li data-target="#step2" class="">
                                                                <a href="#tab2" data-toggle="tab" style={{ textDecoration: "none" }}> <span class="step"></span> <span class="title d-md-block" style={{ marginLeft: "40px", color: "black" }}>Expenditure</span> </a>
                                                            </li>
                                                            <li data-target="#step3" class="">
                                                                <a href="#tab3" data-toggle="tab" style={{ textDecoration: "none" }}> <span class="step"></span> <span class="title d-md-block" style={{ marginLeft: "40px", color: "black" }}>AP Invoice</span> </a>
                                                            </li>
                                                            <li data-target="#step4">
                                                                <a href="#tab4" data-toggle="tab" style={{ textDecoration: "none" }}> <span class="step"></span> <span class="title d-md-block" style={{ marginLeft: "40px", color: "black" }}>AR Invoice</span> </a>
                                                            </li>
                                                            <li data-target="#step5">
                                                                <a href="#tab4" data-toggle="tab" style={{ textDecoration: "none" }}> <span class="step"></span> <span class="title d-md-block" style={{ marginLeft: "40px", color: "black" }}>Budget</span> </a>
                                                            </li>
                                                            <li data-target="#step6">
                                                                <a href="#tab4" data-toggle="tab" style={{ textDecoration: "none" }}> <span class="step"></span> <span class="title d-md-block" style={{ marginLeft: "40px", color: "black" }}>Bill Rates</span> </a>
                                                            </li>
                                                            <li data-target="#step7">
                                                                <a href="#tab4" data-toggle="tab" style={{ textDecoration: "none" }}> <span class="step"></span> <span class="title d-md-block" style={{ marginLeft: "40px", color: "black" }}>Contacts</span> </a>
                                                            </li>
                                                            <li data-target="#step8">
                                                                <a href="#tab4" data-toggle="tab" style={{ textDecoration: "none" }}> <span class="step"></span> <span class="title d-md-block" style={{ marginLeft: "40px", color: "black" }}>GP Percentage</span> </a>
                                                            </li>

                                                        </ul>

                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div class="clearfix"></div>
                                        <div className='card-border card-body shadow p-2 position-relative mt-2 box'>
                                            <div className='row'>
                                                <div className='col mt-2'>
                                                    <img src={Clock} alt="img" width="30px"></img>
                                                </div>
                                                <div className='position-absolute top-5  mt-3 ml-5'>
                                                    <h6>Timekeeper</h6>
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className='col mt-2'>
                                                    <img src={Calendaricon} alt="img" width="30px"></img>
                                                </div>
                                                <div className='position-absolute top-5  mt-3 ml-5'>
                                                    <h6>Vacation Banking</h6>
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className='col mt-2'>
                                                    <img src={currency} alt="img" width="30px"></img>
                                                </div>
                                                <div className='position-absolute top-5  mt-3 ml-5'>
                                                    <h6>Vacation Banking</h6>
                                                </div>
                                            </div>
                                            <hr></hr>
                                            <div className='row'>
                                                <div className='col mt-2'>
                                                    <img src={Clock} alt="img" width="30px"></img>
                                                </div>
                                                <div className='position-absolute top-5  mt-3 ml-5'>
                                                    <h6>Timekeeper</h6>
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className='col mt-2'>
                                                    <img src={Calendaricon} alt="img" width="30px"></img>
                                                </div>
                                                <div className='position-absolute top-5  mt-3 ml-5'>
                                                    <h6>Vacation Banking</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div >
                }
            </>
        )
    }

}
export default Dashboard;

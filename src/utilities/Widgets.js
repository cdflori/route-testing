import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Checkbox } from 'primereact/checkbox';
import { Dropdown } from 'primereact/dropdown';
import { InputTextarea } from 'primereact/inputtextarea';

export const Widgets = () => {

    const [tasksCheckbox, setTaskCheckbox] = useState([]);
    const [dropdownCity, setDropdownCity] = useState(null);

    const dropdownCities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    const sales = [
        {
            order: 1,
            src: 'assets/layout/images/dashboard/flag-brazil.png',
            name: 'BRAZIL',
            sales: 4234,
            change: '+35%'
        },
        {
            order: 2,
            src: 'assets/layout/images/dashboard/flag-china.png',
            name: 'CHINA',
            sales: 3214,
            change: '-25%'
        },
        {
            order: 3,
            src: 'assets/layout/images/dashboard/flag-belgium.png',
            name: 'BELGIUM',
            sales: 2842,
            change: '+28%'
        },
        {
            order: 4,
            src: 'assets/layout/images/dashboard/flag-france.png',
            name: 'FRANCE',
            sales: 1942,
            change: '+15%'
        },
    ];

    return (
        <div className="p-grid widgets">
            <h4 style={{ marginLeft: '.5em' }}>Reusable CSS widgets for your applications.</h4>
            <div className="p-col-12">
                <div className="card">
                    <h4>Overview Boxes</h4>
                    <div className="p-grid">
                        <div className="p-col-12 p-md-6 p-lg-3">
                            <div className="p-grid widget-overview overview-box-1">
                                <div className="overview-box-title">
                                    <i className="pi pi-inbox"></i>
                                    <span>Unread Messages</span>
                                </div>
                                <div className="overview-box-count">150</div>
                                <div className="overview-box-stats">12 less than yesterday</div>
                            </div>
                        </div>
                        <div className="p-col-12 p-md-6 p-lg-3">
                            <div className="p-grid widget-overview overview-box-2">
                                <div className="overview-box-title">
                                    <i className="pi pi-map-marker"></i>
                                    <span>Check-ins</span>
                                </div>
                                <div className="overview-box-count">532</div>
                                <div className="overview-box-stats">46 more than yesterday</div>
                            </div>
                        </div>
                        <div className="p-col-12 p-md-6 p-lg-3">
                            <div className="p-grid widget-overview overview-box-3">
                                <div className="overview-box-title">
                                    <i className="pi pi-folder"></i>
                                    <span>Files</span>
                                </div>
                                <div className="overview-box-count">450</div>
                                <div className="overview-box-stats">30 more than yesterday</div>
                            </div>
                        </div>
                        <div className="p-col-12 p-md-6 p-lg-3">
                            <div className="p-grid widget-overview overview-box-4">
                                <div className="overview-box-title">
                                    <i className="pi pi-user"></i>
                                    <span>Users</span>
                                </div>
                                <div className="overview-box-count">532</div>
                                <div className="overview-box-stats">250 more than yesterday</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-col-12 p-lg-6 widget-sale-table">
                <div className="card ">
                    <h5>Sale Table</h5>
                    <DataTable value={sales} className="p-datatable-customers">
                        <Column field="order"></Column>
                        <Column field="country" body={(data) => <img src={data.src} alt={data.country} />}></Column>
                        <Column field="name"></Column>
                        <Column field="sales" header="Total Sales"></Column>
                        <Column field="change" header="Change"></Column>
                    </DataTable>
                </div>
            </div>

            <div className="p-col-12 p-lg-6">
                <div className="card widget-statistics">
                    <h5>Product Statistics</h5>
                    <table>
                        <tbody>
                            <tr>
                                <td className="col-overview col-wait">
                                    <div>W</div>
                                </td>
                                <td className="col-status">
                                    <span className="status-time">Last Update: 12m ago</span>
                                    <span className="status-text">Currently Waiting</span>
                                </td>
                                <td className="col-numbers">
                                    <div>253 <span>Shipments</span></div>
                                    <div>584 <span>Orders</span></div>
                                </td>
                            </tr>
                            <tr>
                                <td className="col-overview col-success">
                                    <div>S</div>
                                </td>
                                <td className="col-status">
                                    <span className="status-time">Last Update: 12m ago</span>
                                    <span className="status-text">Successfully Completed</span>
                                </td>
                                <td className="col-numbers">
                                    <div>312 <span>Shipments</span></div>
                                    <div>409 <span>Orders</span></div>
                                </td>
                            </tr>
                            <tr>
                                <td className="col-overview col-delay">
                                    <div>D</div>
                                </td>
                                <td className="col-status">
                                    <span className="status-time">Last Update: 6m ago</span>
                                    <span className="status-text">Delayed</span>
                                </td>
                                <td className="col-numbers">
                                    <div>122 <span>Shipments</span></div>
                                    <div>341 <span>Orders</span></div>
                                </td>
                            </tr>
                            <tr>
                                <td className="col-overview col-preorder">
                                    <div>P</div>
                                </td>
                                <td className="col-status">
                                    <span className="status-time">Last Update: 15m ago</span>
                                    <span className="status-text">Preordered</span>
                                </td>
                                <td className="col-numbers">
                                    <div>221 <span>Shipments</span></div>
                                    <div>332 <span>Orders</span></div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="p-col-12 p-lg-4">
                <div className="widget-graph">
                    <div className="p-grid">
                        <div className="p-col-4">
                            <span className="graph-title">Logins</span>
                            <span className="graph-value">52003</span>
                            <span className="graph-change">+32</span>
                        </div>
                        <div className="p-col-8">
                            <img alt="Chart 1" src="assets/layout/images/dashboard/graph-1.svg" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-col-12 p-lg-4">
                <div className="widget-graph">
                    <div className="p-grid">
                        <div className="p-col-4">
                            <span className="graph-title">Views</span>
                            <span className="graph-value">532</span>
                            <span className="graph-change">+24792</span>
                        </div>
                        <div className="p-col-8">
                            <img alt="Chart 2" src="assets/layout/images/dashboard/graph-2.svg" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-col-12 p-lg-4">
                <div className="widget-graph">
                    <div className="p-grid">
                        <div className="p-col-4">
                            <span className="graph-title">Sales</span>
                            <span className="graph-value">$5521</span>
                            <span className="graph-change">+243</span>
                        </div>
                        <div className="p-col-8">
                            <img alt="Chart 3" src="assets/layout/images/dashboard/graph-3.svg" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-col-12 p-md-6 p-lg-4">
                <div className="card widget-task-list">
                    <h5>Tasks</h5>
                    <ul>
                        <li>
                            <Checkbox name="task" value="reports" checked={tasksCheckbox.indexOf('reports') > -1} onChange={(e) => setTaskCheckbox(e.value)} />
                            <span className="task-name">Sales Reports</span>
                            <i className="pi pi-briefcase"></i>
                        </li>
                        <li>
                            <Checkbox name="task" value="pay" checked={tasksCheckbox.indexOf('pay') > -1} onChange={(e) => setTaskCheckbox(e.value)} />
                            <span className="task-name">Pay Invoices</span>
                            <i className="pi pi-file"></i>
                        </li>
                        <li>
                            <Checkbox name="task" value="dinner" checked={tasksCheckbox.indexOf('dinner') > -1} onChange={(e) => setTaskCheckbox(e.value)} />
                            <span className="task-name">Dinner with Tony</span>
                            <i className="pi pi-comments"></i>
                        </li>
                        <li>
                            <Checkbox name="task" value="meeting" checked={tasksCheckbox.indexOf('meeting') > -1} onChange={(e) => setTaskCheckbox(e.value)} />
                            <span className="task-name">Client Meeting</span>
                            <i className="pi pi-users"></i>
                        </li>
                        <li>
                            <Checkbox name="task" value="theme" checked={tasksCheckbox.indexOf('theme') > -1} onChange={(e) => setTaskCheckbox(e.value)} />
                            <span className="task-name">New Theme</span>
                            <i className="pi pi-palette"></i>
                        </li>
                        <li>
                            <Checkbox name="task" value="ticket" checked={tasksCheckbox.indexOf('ticket') > -1} onChange={(e) => setTaskCheckbox(e.value)} />
                            <span className="task-name">Flight Ticket</span>
                            <i className="pi pi-ticket"></i>
                        </li>
                        <li>
                            <Checkbox name="task" value="charts" checked={tasksCheckbox.indexOf('charts') > -1} onChange={(e) => setTaskCheckbox(e.value)} />
                            <span className="task-name">Generate Charts</span>
                            <i className="pi pi-chart-bar"></i>
                        </li>
                        <li>
                            <Checkbox name="task" value="client" checked={tasksCheckbox.indexOf('client') > -1} onChange={(e) => setTaskCheckbox(e.value)} />
                            <span className="task-name">Call Client</span>
                            <i className="pi pi-mobile"></i>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="p-col-12 p-md-6 p-lg-4">
                <div className="card p-fluid widget-contact-form">
                    <h5>Contact Us</h5>
                    <div className="p-grid">
                        <div className="p-col-12">
                            <Dropdown value={dropdownCity} options={dropdownCities} onChange={(e) => setDropdownCity(e.value)} optionLabel="name" placeholder="Select a City" />
                        </div>
                        <div className="p-col-12">
                            <InputText type="text" placeholder="Name" />
                        </div>
                        <div className="p-col-12">
                            <InputText type="text" placeholder="Age" />
                        </div>
                        <div className="p-col-12">
                            <InputText type="text" placeholder="Email" />
                        </div>
                        <div className="p-col-12">
                            <InputTextarea type="text" placeholder="Message" />
                        </div>
                        <div className="p-col-12">
                            <Button type="button" label="Send" icon="pi pi-check" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-col-12 p-lg-4">
                <div className="card widget-contacts">
                    <h5>Contacts</h5>
                    <ul>
                        <li className="clearfix">
                            <img alt="User" src="assets/layout/images/avatar.png" width="45" />
                            <div className="contact-info">
                                <span className="name">Madison Hughes (me)</span>
                                <span className="location">jane@pn-manhattan.com</span>
                            </div>
                            <div className="contact-actions">
                                <span className="connection-status online">online</span>
                                <i className="pi pi-fw pi-comment"></i>
                                <i className="pi pi-fw pi-reply"></i>
                            </div>
                        </li>
                        <li className="clearfix">
                            <img alt="Contact 1" src="assets/layout/images/avatar1.png" width="45" />
                            <div className="contact-info">
                                <span className="name">Joshua Williams</span>
                                <span className="location">joshua@pn-manhattan.com</span>
                            </div>
                            <div className="contact-actions">
                                <span className="connection-status online">online</span>
                                <i className="pi pi-fw pi-comment"></i>
                                <i className="pi pi-fw pi-reply"></i>
                            </div>
                        </li>
                        <li className="clearfix">
                            <img alt="Contact 2" src="assets/layout/images/avatar2.png" width="45" />
                            <div className="contact-info">
                                <span className="name">Emily Clark</span>
                                <span className="location">emily@pn-manhattan.com</span>
                            </div>
                            <div className="contact-actions">
                                <span className="connection-status offline">offline</span>
                                <i className="pi pi-fw pi-comment"></i>
                                <i className="pi pi-fw pi-reply"></i>
                            </div>
                        </li>
                        <li className="clearfix">
                            <img alt="Contact 3" src="assets/layout/images/avatar3.png" width="45" />
                            <div className="contact-info">
                                <span className="name">Tim Johnson</span>
                                <span className="location">tim@pn-manhattan.com</span>
                            </div>
                            <div className="contact-actions">
                                <span className="connection-status online">online</span>
                                <i className="pi pi-fw pi-comment"></i>
                                <i className="pi pi-fw pi-reply"></i>
                            </div>
                        </li>
                        <li className="clearfix">
                            <img alt="Contact 4" src="assets/layout/images/avatar4.png" width="45" />
                            <div className="contact-info">
                                <span className="name">David Stark</span>
                                <span className="location">kelly@pn-manhattan.com</span>
                            </div>
                            <div className="contact-actions">
                                <span className="connection-status offline">offline</span>
                                <i className="pi pi-fw pi-comment"></i>
                                <i className="pi pi-fw pi-reply"></i>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="p-col-12 p-lg-8">
                <div className="card widget-chat">
                    <h5>Chat</h5>
                    <ul>
                        <li className="clearfix message-from">
                            <img alt="Contact 2" src="assets/layout/images/avatar2.png" />
                            <span>Retro occupy organic, stumptown shabby chic pour-over roof party DIY normcore.</span>
                        </li>
                        <li className="clearfix message-own">
                            <img alt="User" src="assets/layout/images/avatar.png" />
                            <span>Actually artisan organic occupy, Wes Anderson ugh whatever pour-over gastropub selvage.</span>
                        </li>
                        <li className="clearfix message-from">
                            <img alt="Contact 2" src="assets/layout/images/avatar2.png" />
                            <span>Chillwave craft beer tote bag stumptown quinoa hashtag.</span>
                        </li>
                        <li className="clearfix message-own">
                            <img alt="User" src="assets/layout/images/avatar.png" />
                            <span>Dreamcatcher locavore iPhone chillwave, occupy trust fund slow-carb distillery art party narwhal.</span>
                        </li>
                        <li className="clearfix message-own">
                            <span>Sed ut perspiciatis unde omnis iste natus.</span>
                        </li>
                        <li className="clearfix message-from">
                            <img alt="Contact 2" src="assets/layout/images/avatar2.png" />
                            <span>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse.</span>
                        </li>
                        <li className="clearfix message-own">
                            <img alt="User" src="assets/layout/images/avatar.png" />
                            <span>At vero eos et accusamus.</span>
                        </li>
                    </ul>
                    <div className="new-message">
                        <div className="message-attachment">
                            <i className="pi pi-paperclip"></i>
                        </div>
                        <div className="message-input">
                            <input type="text" placeholder="Write a message" className="p-inputtext" />
                        </div>
                    </div>
                </div>

                <div className="card widget-messages">
                    <h5>Messages</h5>
                    <div className="p-flex-row">
                        <div className="message-box">
                            <div className="message">
                                <img src="assets/layout/images/dashboard-banking/profile.png" alt="avalon-layout" className="messager-img" />
                                <div className="messager">Joshua Williams
								<i className="pi pi-circle-on online"></i>
                                    <span className="date pull-right">Today</span>
                                </div>
                                <div className="message-text">Paenitet me quod tu me rogas? Oh, sic, qui stultus plastic continentis rogavi te ut emas. Vides non manducare acidum hydrofluoric per plastic. </div>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                        <div className="message-box">
                            <div className="message">
                                <img src="assets/layout/images/dashboard-banking/profile1.png" alt="avalon-layout" className="messager-img" />
                                <div className="messager">Adelle Charles
								<i className="pi pi-circle-on offline"></i>
                                    <span className="date pull-right">Today</span>
                                </div>
                                <div className="message-text">Quinquaginta septem est - pars tua, triginta quinque millia. Est autem extra plus quindecim, tota tua est, quom meruisset.</div>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                        <div className="message-box">
                            <div className="message">
                                <img src="assets/layout/images/dashboard-banking/profile2.png" alt="avalon-layout" className="messager-img" />
                                <div className="messager">Marcos Moralez
								<i className="pi pi-circle-on online"></i>
                                    <span className="date pull-right">Yesterday</span>
                                </div>
                                <div className="message-text">Fac nos fecit. SIC.</div>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                        <div className="message-box">
                            <div className="message">
                                <img src="assets/layout/images/dashboard-banking/profile3.png" alt="avalon-layout" className="messager-img" />
                                <div className="messager">Matt Litherland
								<i className="pi pi-circle-on online"></i>
                                    <span className="date pull-right">3 days ago</span>
                                </div>
                                <div className="message-text">Puto quia una res potest - venimus in cognitionem. Vide pretium in manibus.</div>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-col-12 p-lg-4">
                <div className="card widget-timeline p-fluid">
                    <div className="p-grid">
                        <div className="p-col-3">
                            <span className="event-time">just now</span>
                            <i className="pi pi-globe" style={{ color: '#3984b8' }}></i>
                        </div>
                        <div className="p-col-9">
                            <span className="event-owner" style={{ color: '#3984b8' }}>Katherine May</span>
                            <span className="event-text">Lorem ipsun dolor amet</span>
                            <div className="event-content">
                                <img alt="Bridge" src="assets/layout/images/dashboard/bridge.png" width="100" />
                            </div>
                        </div>

                        <div className="p-col-3">
                            <span className="event-time">12h ago</span>
                            <i className="pi pi-star-o" style={{ color: '#f6ac2b' }}></i>
                        </div>
                        <div className="p-col-9">
                            <span className="event-owner" style={{ color: '#f6ac2b' }}>Brandon Santos</span>
                            <span className="event-text">Ab nobis, magnam sunt eum. Laudantium, repudiandae, similique!.</span>
                        </div>

                        <div className="p-col-3">
                            <span className="event-time">15h ago</span>
                            <i className="pi pi-comment" style={{ color: '#7e8dcd' }}></i>
                        </div>
                        <div className="p-col-9">
                            <span className="event-owner" style={{ color: '#7e8dcd' }}>Stephan Ward</span>
                            <span className="event-text">Omnis veniam quibusdam ratione est repellat qui nam quisquam ab mollitia dolores ullam voluptates, similique, dignissimos.</span>
                            <div className="event-content">
                                <img alt="Nature" src="assets/demo/images/nature/nature1.jpg" width="100" />
                            </div>
                        </div>

                        <div className="p-col-3">
                            <span className="event-time">2d ago</span>
                            <i className="pi pi-map-marker" style={{ color: '#e175a0' }}></i>
                        </div>
                        <div className="p-col-9">
                            <span className="event-owner" style={{ color: '#e175a0' }}>Jason Smith</span>
                            <span className="event-text">Laudantium, repudiandae, similique!</span>
                            <div className="event-content">
                                <img alt="Map" src="assets/layout/images/dashboard/map.png" />
                            </div>
                        </div>

                        <div className="p-col-3">
                            <span className="event-time">1w ago</span>
                            <i className="pi pi-heart" style={{ color: '#39b8b6' }}></i>
                        </div>
                        <div className="p-col-9">
                            <span className="event-owner">Kevin Cox</span>
                            <span className="event-text">Quibusdam ratione est repellat qui nam quisquam veniam quibusdam ratione.</span>
                        </div>

                        <div className="p-col-3">
                            <span className="event-time">2w ago</span>
                            <i className="pi pi-compass" style={{ color: '#3eb839' }}></i>
                        </div>
                        <div className="p-col-9">
                            <span className="event-owner" style={{ color: '#3eb839' }}>Walter White</span>
                            <span className="event-text">I am the one who knocks!</span>
                        </div>

                        <div className="p-col-12">
                            <Button type="button" label="Refresh" icon="pi pi-refresh" className="rounded-btn raised-btn"></Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

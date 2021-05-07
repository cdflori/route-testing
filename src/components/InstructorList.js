import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
// import { Rating } from 'primereact/rating';
import { Button } from 'primereact/button';
// import { Toast } from 'primereact/toast';
import { InputText } from 'primereact/inputtext';
// import { ProgressBar } from 'primereact/progressbar';
import InstructorService from '../service/InstructorService';

export const InstructorList = () => {

    const [instructor1, setInstructor1] = useState(null);
    const [selectedInstructors1, setSelectedInstructors1] = useState(null);
    const [globalFilter1, setGlobalFilter1] = useState('');
    const [loading1, setLoading1] = useState(true);
    const toast = useRef(null);
    const dt = useRef(null);


    useEffect(() => {
        const customerService = new InstructorService();
        customerService.getInstructors().then(data => { setInstructor1(data); setLoading1(false) });
    }, []);






    const header = (
        <div className="table-header">
            List of Instructors
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText value={globalFilter1} onChange={(e) => setGlobalFilter1(e.target.value)} placeholder="Global Search" />
            </span>
        </div>
    );



    const bodyTemplate = (data, props) => {
        return (
            <>
                <span className="p-column-title">{props.header}</span>
                {data[props.field]}
            </>
        );
    };

    const certificationBodyTemplate = (data) => {
        return (
            <>
                <span className="p-column-title">Certifications</span>
                <span className="image-text">{data.certification}</span>
            </>
        );
    };

    const instructorBodyTemplate = (data) => {
        return (
            <>
                <span className="p-column-title">Representative</span>
                <span className="image-text">{data.instructorName}</span>
            </>
        );
    };

    const statusBodyTemplate = (data) => {
        return (
            <>
                <span className="p-column-title">Status</span>
                <span className={`customer-badge status-${data.status}`}>{data.status}</span>
            </>
        )
    };

    // const activityBody = (data) => {
    //     return (
    //         <>
    //             <span className="p-column-title">Activity</span>
    //             <ProgressBar value={data.activity} showValue={false} />
    //         </>
    //     )
    // };

    const actionTemplate = () => <Button to="/report"  type="button" icon="pi pi-pencil" className="p-button-primary"></Button>;


    return (
        <div className="p-grid crud-demo">
            <div className="p-col-12">
                <div className="hyperCard">
                    {/* <h5>Default</h5> */}
                    {/* paginator className="p-datatable-customers" rows={10} rowsPerPageOptions={[5, 10, 25]} dataKey="id" rowHover selection={selectedInstructors1} onSelectionChange={(e) => setSelectedInstructors1(e.value)}
                        globalFilter={globalFilter1} emptyMessage="No customers found." loading={loading1} header={header} 
                        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"> */}
                    {/* <p>Pagination, sorting, filtering and checkbox selection.</p> */}
                    
                    <DataTable value={instructor1} selection={selectedInstructors1} onSelectionChange={(e) => setSelectedInstructors1(e.value)}
                        dataKey="id" paginator rows={10} rowsPerPageOptions={[5, 10, 25]} className="datatable-responsive"
                        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
                        globalFilter={globalFilter1} emptyMessage="No incidents found." header={header}>
                        <Column selectionMode="multiple" headerStyle={{ width: '3em' }}></Column>
                        {/* <Column field="name" header="Name" sortable body={bodyTemplate}></Column> */}
                        <Column field="data.name" header="Instructor" sortable body={instructorBodyTemplate} filter></Column>
                        {/* <Column field="title" header="Title" sortable body={titleBodyTemplate} filter></Column> */}

                        <Column field="data.certification" header="Certification" sortable body={certificationBodyTemplate} filter></Column>
                        {/* <Column field="date" header="Date" sortable body={bodyTemplate}></Column> */}
                        <Column field="status" header="Status" sortable body={statusBodyTemplate} filter></Column>
                        {/* <Column field="activity" header="Activity" sortable body={activityBody}></Column> */}
                        <Column headerStyle={{ width: '8rem', textAlign: 'center' }} bodyStyle={{ textAlign: 'center', overflow: 'visible', justifyContent: 'center' }} body={actionTemplate} filter></Column>
                        
                    </DataTable>
                    {/* <DataTable ref={dt} value={incidents} selection={selectedIncidents} onSelectionChange={(e) => setSelectedIncidents(e.value)}
                        dataKey="id" paginator rows={10} rowsPerPageOptions={[5, 10, 25]} className="datatable-responsive"
                        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
                        globalFilter={globalFilter} emptyMessage="No incidents found." header={header}>
                        <Column selectionMode="multiple" headerStyle={{ width: '3rem' }} ></Column>
                        <Column field="incident" header="Incident" sortable filter body={incidentBodyTemplate}></Column>
                        <Column field="title" header="Title" sortable body={titleBodyTemplate} filter></Column>
                        <Column field="description" header="Description" sortable body={descriptionBodyTemplate} filter></Column>
                        <Column field="rig" header="Rig" sortable body={rigBodyTemplate} filter></Column>
                        <Column field="user" header="User" sortable body={userBodyTemplate} filter></Column>
                        <Column field="comments" header="Comments" body={commentsBodyTemplate} filter></Column>

                        <Column field="incidentStatus" header="Status" body={statusBodyTemplate} sortable filter></Column>
                        <Column body={actionBodyTemplate}></Column>
                    </DataTable> */}
                </div>
            </div>
            </div>
            
    )
}
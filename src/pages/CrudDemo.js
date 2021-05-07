import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
// import { FileUpload } from 'primereact/fileupload';
// import { Rating } from 'primereact/rating';
import { Toolbar } from 'primereact/toolbar';
import { InputTextarea } from 'primereact/inputtextarea';
// import { RadioButton } from 'primereact/radiobutton';
// import { InputNumber } from 'primereact/inputnumber';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import IncidentService from '../service/IncidentService';

export const CrudDemo = () => {

    //Convert ID to string somehow
    let emptyIncident = {
        id: '',
        title: '',
        description: '',
        rig: null,
        user: null,
        comments: '',
        inventoryStatus: 'OPEN'
    };

    const [incidents, setIncidents] = useState(null);
    const [incidentDialog, setIncidentDialog] = useState(false);
    const [deleteIncidentDialog, setDeleteIncidentDialog] = useState(false);
    const [deleteIncidentsDialog, setDeleteIncidentsDialog] = useState(false);
    const [incident, setIncident] = useState(emptyIncident);
    const [selectedIncidents, setSelectedIncidents] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [globalFilter, setGlobalFilter] = useState(null);
    const toast = useRef(null);
    const dt = useRef(null);
    
    const [oilRigSelection, setOilRigSelection] = useState(null);
    const oilRigOptions = [
        { name: 'Rig 1' },
        { name: 'Rig 2' },
        { name: 'Rig 3'}
    ];

    const [userSelection, setUserSelection] = useState(null);
    const userOptions = [
        { name: 'User 1' },
        { name: 'User 2' },
        { name: 'User 3'}
    ];

    const [statusSelection, setStatusSelection] = useState(null);
    const statusOptions = [
        { name: 'Open' },
        { name: 'Resolved' },
        { name: 'Un-Resolved'}
    ];

    useEffect(() => {
        const productService = new IncidentService();
        productService.getIncidents().then(data => setIncidents(data));
    }, []);

    // const formatCurrency = (value) => {
    //     return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    // }

    const openNew = () => {
        setIncident(emptyIncident);
        setSubmitted(false);
        setIncidentDialog(true);
    }

    const hideDialog = () => {
        setSubmitted(false);
        setIncidentDialog(false);
    }

    const hideDeleteIncidentDialog = () => {
        setDeleteIncidentDialog(false);
    }

    const hideDeleteIncidentsDialog = () => {
        setDeleteIncidentsDialog(false);
    }

    const saveIncident = () => {
        setSubmitted(true);

        if (incident.title.trim()) {
            let _incidents = [...incidents];
            let _incident = { ...incident };
            if (incident.id) {
                const index = findIndexById(incident.id);

                _incidents[index] = _incident;
                toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Incident Updated', life: 3000 });
            }
            else {
                _incident.id = createId();
                _incident.image = 'product-placeholder.svg';
                _incidents.push(_incident);
                toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Incident Created', life: 3000 });
            }

            setIncidents(_incidents);
            setIncidentDialog(false);
            setIncident(emptyIncident);
        }
    }

    const editIncident = (incident) => {
        setIncident({ ...incident });
        setIncidentDialog(true);
    }

    const confirmDeleteIncident = (incident) => {
        setIncident(incident);
        setDeleteIncidentDialog(true);
    }

    const deleteIncident = () => {
        let _incidents = incidents.filter(val => val.id !== incident.id);
        setIncidents(_incidents);
        setDeleteIncidentDialog(false);
        setIncident(emptyIncident);
        toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Incident Deleted', life: 3000 });
    }

    const findIndexById = (id) => {
        let index = -1;
        for (let i = 0; i < incidents.length; i++) {
            if (incidents[i].id === id) {
                index = i;
                break;
            }
        }

        return index;
    }

    const createId = () => {
        let id = '';
        let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < 5; i++) {
            id += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return id;
    }

    const exportCSV = () => {
        dt.current.exportCSV();
    }

    const confirmDeleteSelected = () => {
        setDeleteIncidentsDialog(true);
    }

    const deleteSelectedIncidents = () => {
        let _incidents = incidents.filter(val => !selectedIncidents.includes(val));
        setIncidents(_incidents);
        setDeleteIncidentsDialog(false);
        setSelectedIncidents(null);
        toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Incident Deleted', life: 3000 });
    }

    const onCategoryChange = (e) => {
        let _incident = { ...incident };
        _incident['category'] = e.value;
        setIncident(_incident);
    }

    const onInputChange = (e, name) => {
        const val = (e.target && e.target.value) || '';
        let _incident = { ...incident };
        _incident[`${name}`] = val;

        setIncident(_incident);
    }

    const onInputNumberChange = (e, name) => {
        const val = e.value || 0;
        let _incident = { ...incident };
        _incident[`${name}`] = val;

        setIncident(_incident);
    }

    const leftToolbarTemplate = () => {
        return (
            <React.Fragment>
                <Button label="New" icon="pi pi-plus" className="p-button-success p-mr-2 p-mb-2" onClick={openNew} />
                <Button label="Delete" icon="pi pi-trash" className="p-button-danger p-mb-2" onClick={confirmDeleteSelected} disabled={!selectedIncidents || !selectedIncidents.length} />
            </React.Fragment>
        )
    }

    const incidentBodyTemplate = (rowData) => {
        return (
            <>
                <span className="p-column-title">Incident</span>
                {rowData.id}
            </>
        );
    }

    const titleBodyTemplate = (rowData) => {
        return (
            <>
                <span className="p-column-title">Name</span>
                {rowData.title}
            </>
        );
    }

    const descriptionBodyTemplate = (rowData) => {
        return (
            <>
                <span className="p-column-title">Description</span>
                {rowData.description}
            </>
        );
    }

    const rigBodyTemplate = (rowData) => {
        return (
            <>
                <span className="p-column-title">Rig</span>
                {rowData.rig}
            </>
        );
    }

    const userBodyTemplate = (rowData) => {
        return (
            <>
                <span className="p-column-title">User</span>
                {rowData.user}
            </>
        );
    }

    const commentsBodyTemplate = (rowData) => {
        return (
            <>
                <span className="p-column-title">Comments</span>
                {rowData.comments}
            </>
        );
    }

    const statusBodyTemplate = (rowData) => {
        return (
            <>
                <span className="p-column-title">Status</span>
                <span className={`product-badge status-${rowData.incidentStatus.toLowerCase()}`}>{rowData.incidentStatus}</span>
            </>
        )
    }

    const actionBodyTemplate = (rowData) => {
        return (
            <div className="actions">
                <Button icon="pi pi-pencil" className="p-button-rounded p-button-success p-mr-2" onClick={() => editIncident(rowData)} />
                <Button icon="pi pi-trash" className="p-button-rounded p-button-warning" onClick={() => confirmDeleteIncident(rowData)} />
            </div>
        );
    }

    const header = (
        <div className="table-header">
            <h5 className="p-m-0">Manage Incidents</h5>
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Search..." />
            </span>
        </div>
    );

    const incidentDialogFooter = (
        <>
            <Button label="Save" icon="pi pi-check" onClick={saveIncident} />
            <Button label="Join Call" icon="pi pi-camera" className="p-button-text" onClick={hideDialog} />
        </>
    );
    const deleteIncidentDialogFooter = (
        <>
            <Button label="No" icon="pi pi-times" className="p-button-text" onClick={hideDeleteIncidentDialog} />
            <Button label="Yes" icon="pi pi-check" onClick={deleteIncident} />
        </>
    );
    const deleteIncidentsDialogFooter = (
        <>
            <Button label="No" icon="pi pi-times" className="p-button-text" onClick={hideDeleteIncidentsDialog} />
            <Button label="Yes" icon="pi pi-check" onClick={deleteSelectedIncidents} />
        </>
    );

    return (
        <div className="p-grid crud-demo">
            <div className="p-col-12">
                <div className="hyperCard">
                    <Toast ref={toast} />
                    <Toolbar className="p-mb-4" left={leftToolbarTemplate}></Toolbar>

                    <DataTable ref={dt} value={incidents} selection={selectedIncidents} onSelectionChange={(e) => setSelectedIncidents(e.value)}
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
                    </DataTable>

                    <Dialog visible={incidentDialog} style={{ width: '450px' }} header="Incident Details" modal className="p-fluid" footer={incidentDialogFooter} onHide={hideDialog}>
                        <div className="p-field">
                            <label htmlFor="name">Title</label>
                            <InputText id="name" value={incident.title} onChange={(e) => onInputChange(e, 'title')} required autoFocus className={classNames({ 'p-invalid': submitted && !incident.title })} />
                            {submitted && !incident.title && <small className="p-invalid">Incident title is required.</small>}
                        </div>
                        <div className="p-field">
                            <label htmlFor="description">Description</label>
                            <InputTextarea id="description" value={incident.description} onChange={(e) => onInputChange(e, 'description')} required rows={3} cols={20} />
                        </div>

                        <div className="p-field">
                            <label className="p-mb-3">Oil Rig</label>
                                <Dropdown 
                                    id="oilRig" 
                                    value={oilRigSelection} 
                                    onChange={(e) => setOilRigSelection(e.value)} 
                                    options={oilRigOptions} optionLabel="name" 
                                    placeholder="Select">
                                </Dropdown>
                        </div>

                        <div className="p-field">
                            <label className="p-mb-3">User</label>
                                <Dropdown 
                                    id="user" 
                                    value={userSelection} 
                                    onChange={(e) => setUserSelection(e.value)} 
                                    options={userOptions} optionLabel="name" 
                                    placeholder="Select">
                                </Dropdown>
                        </div>

                        <div className="p-field">
                            <label htmlFor="comments">Instructor Comments</label>
                            <InputTextarea id="comments" value={incident.comments} onChange={(e) => onInputChange(e, 'comments')} required rows={3} cols={20} />
                        </div>

                        <div className="p-field">
                            <label className="p-mb-3">Status</label>
                                <Dropdown 
                                    id="status" 
                                    value={statusSelection} 
                                    onChange={(e) => setStatusSelection(e.value)} 
                                    options={statusOptions} optionLabel="name" 
                                    placeholder="Select">
                                </Dropdown>
                        </div>
                    </Dialog>

                    <Dialog visible={deleteIncidentDialog} style={{ width: '450px' }} header="Confirm" modal footer={deleteIncidentDialogFooter} onHide={hideDeleteIncidentDialog}>
                        <div className="p-d-flex p-ai-center p-jc-center">
                            <i className="pi pi-exclamation-triangle p-mr-3" style={{ fontSize: '2rem' }} />
                            {incident && <span>Are you sure you want to delete <b>{incident.title}</b>?</span>}
                        </div>
                    </Dialog>

                    <Dialog visible={deleteIncidentsDialog} style={{ width: '450px' }} header="Confirm" modal footer={deleteIncidentsDialogFooter} onHide={hideDeleteIncidentsDialog}>
                        <div className="p-d-flex p-ai-center p-jc-center">
                            <i className="pi pi-exclamation-triangle p-mr-3" style={{ fontSize: '2rem' }} />
                            {incident && <span>Are you sure you want to delete the selected incidents?</span>}
                        </div>
                    </Dialog>
                </div>
            </div>
        </div>
    );
}

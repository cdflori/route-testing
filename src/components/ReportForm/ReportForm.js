import React, { useState, useEffect, useRef } from "react";
import classNames from "classnames";
import { Button } from "primereact/button";
import { InputTextarea } from "primereact/inputtextarea";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import IncidentService from "../../service/IncidentService";
import "./style.css";
// import { StartCall } from '../components/StartCall';

export const ReportForm = () => {
    let emptyIncident = {
        id: null,
        title: "",
        description: "",
        rig: null,
        user: null,
        comments: "",
        inventoryStatus: "OPEN",
    };

    const [incidents, setIncidents] = useState(null);
    const [incidentDialog, setIncidentDialog] = useState(false);
    const [incident, setIncident] = useState(emptyIncident);
    const [submitted, setSubmitted] = useState(false);
    const toast = useRef(null);

    const [oilRigSelection, setOilRigSelection] = useState(null);
    const oilRigOptions = [{ name: "Rig 1" }, { name: "Rig 2" }, { name: "Rig 3" }];

    const [userSelection, setUserSelection] = useState(null);
    const userOptions = [{ name: "User 1" }, { name: "User 2" }, { name: "User 3" }];

    const [statusSelection, setStatusSelection] = useState(null);
    const statusOptions = [{ name: "Open" }, { name: "Resolved" }, { name: "Un-Resolved" }];

    useEffect(() => {
        const productService = new IncidentService();
        productService.getIncidents().then((data) => setIncidents(data));
    }, []);

    // const formatCurrency = (value) => {
    //     return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    // }

    const openNew = () => {
        setIncident(emptyIncident);
        setSubmitted(false);
        setIncidentDialog(true);
    };

    const hideDialog = () => {
        setSubmitted(false);
        setIncidentDialog(false);
    };

    const saveIncident = () => {
        setSubmitted(true);

        if (incident.title.trim()) {
            let _incidents = [...incidents];
            let _incident = { ...incident };
            if (incident.id) {
                const index = findIndexById(incident.id);

                _incidents[index] = _incident;
                toast.current.show({ severity: "success", summary: "Successful", detail: "Incident Updated", life: 3000 });
            } else {
                _incident.id = createId();
                _incident.image = "product-placeholder.svg";
                _incidents.push(_incident);
                toast.current.show({ severity: "success", summary: "Successful", detail: "Incident Created", life: 3000 });
            }

            setIncidents(_incidents);
            setIncidentDialog(false);
            setIncident(emptyIncident);
        }
    };

    const findIndexById = (id) => {
        let index = -1;
        for (let i = 0; i < incidents.length; i++) {
            if (incidents[i].id === id) {
                index = i;
                break;
            }
        }

        return index;
    };

    const createId = () => {
        let id = "";
        let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (let i = 0; i < 5; i++) {
            id += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return id;
    };

    const onInputChange = (e, name) => {
        const val = (e.target && e.target.value) || "";
        let _incident = { ...incident };
        _incident[`${name}`] = val;

        setIncident(_incident);
    };

    const videoEl = document.getElementById("webcam-vid");

    const startWebcam = () => {
        if (navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices
                .getUserMedia({ video: true })
                .then((stream) => {
                    videoEl.srcObject = stream;
                })
                .catch((err) => {
                    console.log("Something went wrong, can not connect", err);
                });
        }
    };

    const stopWebcam = () => {
        const stream = videoEl.srcObject;
        const tracks = stream.getTracks();

        for (let i = 0; i < tracks.length; i++) {
            let track = tracks[i];
            track.stop();
        }

        videoEl.srcObject = null;
    };

    return (
        <div className="p-grid">
            <div className=" p-col-12 p-md-6 ">
                <div className="hyperCard p-fluid " visible={incidentDialog}>
                    <h5>Report Incident</h5>
                    <div className="p-formgrid p-grid">
                        <div className="p-field p-col">
                            <label htmlFor="name">Title</label>
                            <InputText id="name" value={incident.title} onChange={(e) => onInputChange(e, "title")} required autoFocus className={classNames({ "p-invalid": submitted && !incident.title })} />
                            {submitted && !incident.title && <small className="p-invalid">Incident title is required.</small>}
                        </div>
                    </div>

                    <div className="p-formgrid p-grid">
                        <div className="p-field p-col">
                            <label htmlFor="description">Description</label>
                            <InputTextarea id="description" value={incident.description} onChange={(e) => onInputChange(e, "description")} required rows={3} cols={20} />
                        </div>
                    </div>

                    <div className="p-formgrid p-grid">
                        <div className="p-field p-col">
                            <label className="p-mb-3">Oil Rig</label>
                            <Dropdown id="oilRig" value={oilRigSelection} onChange={(e) => setOilRigSelection(e.value)} options={oilRigOptions} optionLabel="name" placeholder="Select"></Dropdown>
                        </div>

                        <div className="p-field p-col">
                            <label className="p-mb-3">User</label>
                            <Dropdown id="user" value={userSelection} onChange={(e) => setUserSelection(e.value)} options={userOptions} optionLabel="name" placeholder="Select"></Dropdown>
                        </div>
                    </div>

                    <div className="p-formgrid p-grid">
                        <div className="p-field p-col">
                            <label htmlFor="comments">Instructor Comments</label>
                            <InputTextarea id="comments" value={incident.comments} onChange={(e) => onInputChange(e, "comments")} required rows={3} cols={20} />
                        </div>
                    </div>

                    <div className="p-formgrid p-grid">
                        <div className="p-field p-col">
                            <label className="p-mb-3">Status</label>
                            <Dropdown id="status" value={statusSelection} onChange={(e) => setStatusSelection(e.value)} options={statusOptions} optionLabel="name" placeholder="Select"></Dropdown>
                        </div>
                    </div>
                    <div className="p-formgrid p-grid">
                        <div className="p-field p-col">
                            <Button label="Save" icon="pi pi-check" onClick={saveIncident} />
                        </div>
                        <div className="p-field p-col">
                            <Button label="Join Call" icon="pi pi-camera" className="p-button-text" onClick={startWebcam} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-col-12 p-md-6">
                <div>
                    <video id="webcam-vid" autoplay="true"></video>
                </div>
                <div className='btnDiv'>
                    <Button label="Stop Call" icon="pi pi-camera" className="p-button-text endCallBtn" onClick={stopWebcam} />
                </div>
            </div>
        </div>
    );
};

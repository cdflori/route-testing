import React, { useState } from 'react';
import classNames from 'classnames';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import { Dropdown } from 'primereact/dropdown';
import { Checkbox } from 'primereact/checkbox';

export const Wizard = () => {
    const [activeContent, setActiveContent] = useState('register');
    const [activeTab, setActiveTab] = useState('register');
    const [activeCard, setActiveCard] = useState('pro');
    const [selectDropdownOptions1, setSelectDropdownOptions1] = useState(null);
    const [selectDropdownOptions2, setSelectDropdownOptions2] = useState(null);
    const [birthdate, setBirthDate] = useState(null);
    const [checked, setChecked] = useState(false);

    const dropdownOptions1 = [
        { name: 'UTC-12.00', code: '-12' },
        { name: 'UTC-11.00', code: '-11' },
        { name: 'UTC-10.00', code: '-10' },
        { name: 'UTC-09.30', code: '-93' },
        { name: 'UTC-09.00', code: '-09' },
        { name: 'UTC-08.00', code: '-08' },
        { name: 'UTC-07.00', code: '-07' },
        { name: 'UTC-06.00', code: '-06' },
        { name: 'UTC-05.00', code: '-05' },
        { name: 'UTC-04.00', code: '-04' },
        { name: 'UTC-03.30', code: '-33' },
        { name: 'UTC-03.00', code: '-03' },
        { name: 'UTC-02.00', code: '-02' },
        { name: 'UTC-01.00', code: '-01' },
        { name: 'UTC-+00.00', code: '-00' },
        { name: 'UTC+01.00', code: '+01' },
        { name: 'UTC+02.00', code: '+02' },
        { name: 'UTC+03.00', code: '+03' },
        { name: 'UTC+03.30', code: '+33' },
        { name: 'UTC+04.00', code: '+04' },
        { name: 'UTC+04.30', code: '+43' },
        { name: 'UTC+05.00', code: '+05' },
        { name: 'UTC+05.30', code: '+53' },
        { name: 'UTC+05.45', code: '+54' },
        { name: 'UTC+06.00', code: '+06' },
        { name: 'UTC+06.30', code: '+63' },
        { name: 'UTC+07.00', code: '+07' },
        { name: 'UTC+08.00', code: '+08' },
        { name: 'UTC+08.45', code: '+84' },
        { name: 'UTC+09.00', code: '+09' },
        { name: 'UTC+09.30', code: '+93' },
        { name: 'UTC+10.00', code: '+10' },
        { name: 'UTC+10.30', code: '+13' },
        { name: 'UTC+01.00', code: '+11' },
        { name: 'UTC+01.00', code: '+12' },
        { name: 'UTC+01.00', code: '+24' },
        { name: 'UTC+01.00', code: '+13' },
        { name: 'UTC+01.00', code: '+14' },
    ];

    const dropdownOptions2 = [
        { label: 'Blogs', value: 'Blogs' },
        { label: 'Google Ads', value: 'google' },
        { label: 'Your Forum', value: 'prime-forum' },
        { label: 'Youtube', value: 'Youtube' },
        { label: 'Reddit', value: 'Reddit' },
        { label: 'Events', value: 'Events' },
        { label: 'Other', value: 'Other' }
    ];

    const clickNext = (step) => {
        if (step === 'register') {
            if (activeTab === 'register') {
                setActiveTab('register');
                setActiveContent('register');
            } else if (activeTab === 'tier') {
                setTimeout(() => {
                    setActiveContent('register');
                }, 600);
                setActiveTab('register');
            } else {
                setActiveTab('tier');
                setTimeout(() => {
                    setActiveTab('register');
                }, 600);
                setTimeout(() => {
                    setActiveContent('register');
                }, 1200);
            }
        }
        if (step === 'tier') {
            setActiveTab('tier');
            setTimeout(() => {
                setActiveContent('tier');
            }, 600);
        }

        if (step === 'payment') {
            if (activeTab === 'payment') {
                setActiveTab('payment');
                setActiveContent('payment');
            } else if (activeTab === 'tier') {
                setTimeout(() => {
                    setActiveContent('payment');
                }, 600);
                setActiveTab('payment');
            } else {
                setActiveTab('tier');
                setTimeout(() => {
                    setActiveTab('payment');
                }, 600);
                setTimeout(() => {
                    setActiveContent('payment');
                }, 1200);
            }
        }
    };

    const selectTier = (card) => {
        setActiveCard(card);
        setTimeout(() => {
            setActiveTab('payment');
            setActiveContent('payment');
        }, 600);
    };

    return (
        <div className="wizard-body">
            <div className="wizard-wrapper">
                <div className="wizard-container">
                    <div className="wizard-header">
                        <div className="wizard-tabs-container">
                            <div className={classNames('wizard-tab register-tab', { 'active-tab': activeTab !== null })} onClick={() => clickNext('register')}>
                                <div className="tab-progressbar"></div>
                                <div className="tab-header"></div>
                            </div>
                            <div className={classNames('wizard-tab tier-tab', { 'active-tab': activeTab === 'tier' || activeTab === 'payment' })} onClick={() => clickNext('tier')}>
                                <div className="tab-progressbar"></div>
                                <div className="tab-header"></div>
                            </div>
                            <div className={classNames('wizard-tab payment-tab', { 'active-tab': activeTab === 'payment' })} onClick={() => clickNext('payment')}>
                                <div className="tab-progressbar"></div>
                                <div className="tab-header"></div>
                            </div>
                        </div>
                    </div>

                    <div className={classNames('wizard-content register', { 'active-content': activeContent === 'register' })}>
                        <div className="content-header">
                            <div className="p-grid">
                                <div className="p-col-6 title">
                                    <h1>REGISTER</h1>
                                    <span>Please complete steps to register</span>
                                </div>
                                <div className="p-col-6 icon">
                                    <img src="assets/layout/images/extensions/icon-register.svg" className="layout-image" alt="avalon-layout" />
                                </div>
                            </div>
                        </div>

                        <div className="content">
                            <div className="p-grid forms">
                                <div className="p-col-12 p-md-6">
                                    <label htmlFor="name">Username</label>
                                    <InputText id="name" type="text" placeholder="Name" className="form-element" />

                                    <label htmlFor="email">Email</label>
                                    <InputText id="email" type="text" placeholder="Email" className="form-element" />

                                    <label htmlFor="password">Password</label>
                                    <InputText id="password" type="password" placeholder="Password" className="form-element" />
                                </div>

                                <div className="p-col-12 p-md-6">
                                    <label htmlFor="timezone">Timezone</label>
                                    <Dropdown id="timezone" options={dropdownOptions1} optionLabel="name" value={selectDropdownOptions1} onChange={(e) => setSelectDropdownOptions1(e.value)} placeholder="Select Time Zone" className="form-element"></Dropdown>

                                    <label htmlFor="popup">Birthdate</label>
                                    <Calendar id="popup" value={birthdate} onChange={(e) => setBirthDate(e.value)} className="form-element" placeholder="Birthdate"></Calendar>

                                    <label htmlFor="avalon">Where did you hear Avalon</label>
                                    <Dropdown id="avalon" options={dropdownOptions2} optionLabel="label" value={selectDropdownOptions2} onChange={(e) => setSelectDropdownOptions2(e.value)} placeholder="Where did you hear Avalon" className="form-element"></Dropdown>
                                </div>
                            </div>
                            <div className="p-grid button">
                                <Button className="continue-button" label="CONTINUE" style={{ width: '100%' }} onClick={() => clickNext('tier')}></Button>
                            </div>
                        </div>
                    </div>

                    <div className={classNames('wizard-content tier', { 'active-content': activeContent === 'tier' })}>
                        <div className="content-header">
                            <div className="p-grid">
                                <div className="p-col-6 title">
                                    <h1>CHOOSE TIER</h1>
                                    <span>Now choose your account type</span>
                                </div>
                                <div className="p-col-6 icon">
                                    <img src="assets/layout/images/extensions/icon-tier@2x.png" className="layout-image" alt="avalon-layout" />
                                </div>
                            </div>
                        </div>

                        <div className="content">
                            <div className="p-grid cards">
                                <div className="p-col-12 p-md-4">
                                    <div className={classNames('tier-card basic', { 'active-tier-card': activeCard === 'basic' })} onClick={() => selectTier('basic')}>
                                        <div className="tier-card-header">
                                            <div className="p-grid">
                                                <div className="p-col-8">
                                                    <h1>BEGINNER</h1>
                                                    <span>For starters and side projects</span>
                                                </div>
                                                <div className="p-col-4 icon">
                                                    <i className="pi pi-check" ></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tier-card-content">
                                            <div className="row even">
                                                Responsive
                                        </div>
                                            <div className="row">
                                                Push Mesaages
                                        </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-col-12 p-md-4 ">
                                    <div className={classNames('tier-card pro', { 'active-tier-card': activeCard === 'pro' })} onClick={() => selectTier('pro')}>
                                        <div className="tier-card-header">
                                            <div className="p-grid">
                                                <div className="p-col-8">
                                                    <h1>PROFFESIONAL</h1>
                                                    <span>For companies</span>
                                                </div>
                                                <div className="p-col-4 icon">
                                                    <i className="pi pi-check" ></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tier-card-content">
                                            <div className="row even">
                                                Responsive
                                        </div>
                                            <div className="row">
                                                Push Mesaages
                                        </div>
                                            <div className="row even">
                                                7/24 Support
                                        </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-col-12 p-md-4">
                                    <div className={classNames('tier-card pro-plus', { 'active-tier-card': activeCard === 'pro-plus' })} onClick={() => selectTier('pro-plus')}>
                                        <div className="tier-card-header">
                                            <div className="p-grid">
                                                <div className="p-col-8">
                                                    <h1>ENTERPRISE</h1>
                                                    <span>For custom needs</span>
                                                </div>
                                                <div className="p-col-4 icon">
                                                    <i className="pi pi-check" ></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tier-card-content">
                                            <div className="row even">
                                                Responsive
                                        </div>
                                            <div className="row">
                                                Push Mesaages
                                        </div>
                                            <div className="row even">
                                                7/24 High Priority Support
                                        </div>
                                            <div className="row">
                                                Free Shipping
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-grid button">
                                <Button className="continue-button" label="CONTINUE" style={{ width: '100%' }} onClick={() => clickNext('payment')}></Button>
                            </div>
                        </div>
                    </div>

                    <div className={classNames('wizard-content payment', { 'active-content': activeContent === 'payment' })}>
                        <div className="p-grid">
                            <div className="p-col-12 p-md-8 payment-info">
                                <div className="content-header">
                                    <div className="p-grid">
                                        <div className="p-col-12 title">
                                            <h1>PAYMENT</h1>
                                            <span>Give me the money</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="content">
                                    <div className="p-grid forms">
                                        <div className="p-col-12">
                                            <label htmlFor="cardName">Cardholder Name</label>
                                            <InputText id="cardName" type="text" placeholder="Cardholder Name" className="form-element" />
                                        </div>

                                        <div className="p-col-12 p-md-6">
                                            <label htmlFor="cardNumber">Card Number</label>
                                            <InputText id="cardNumber" type="text" placeholder="Card Number" className="form-element" />
                                        </div>

                                        <div className="p-col-6 p-md-3">
                                            <label htmlFor="cardDate">Date</label>
                                            <InputText id="cardDate" type="text" placeholder="MO/YE" className="form-element" />
                                        </div>

                                        <div className="p-col-6 p-md-3">
                                            <label htmlFor="ccv">CCV</label>
                                            <InputText id="ccv" type="text" placeholder="XYZ" className="form-element" />
                                        </div>
                                    </div>

                                    <div className="p-grid checkbox">
                                        <Checkbox value={checked} onChange={(e) => setChecked(e.value)} binary className="p-mr-2"></Checkbox>
                                        <label>Save credit card information for future usage</label>
                                    </div>
                                    <div className="p-grid button">
                                        <Button label="CONTINUE" style={{ width: '100%' }}></Button>
                                    </div>
                                </div>
                            </div>

                            <div className="p-col-12 p-md-4 order-info">
                                <div className="order order-default">
                                    <div className="summary">
                                        <div className="p-grid">
                                            <div className="p-col-12">
                                                <h1>ORDER SUMMARY</h1>
                                            </div>
                                        </div>
                                        <div className="p-grid">
                                            <div className="p-col-8">Tier - </div>
                                            <div className="p-col-4 price">$0.00</div>
                                        </div>
                                        <div className="p-grid">
                                            <div className="p-col-8">VAT (%18)</div>
                                            <div className="p-col-4 price">$0.00</div>
                                        </div>
                                    </div>
                                    <div className="p-grid total">
                                        <div className="p-col-8">Total</div>
                                        <div className="p-col-4 price">$0.00</div>
                                        <div className="p-col-12">
                                            Please select one tier.
                                    </div>
                                    </div>
                                </div>
                                <div className={classNames('order order-basic', { 'selected-order': activeCard === 'basic' })}>
                                    <div className="summary">
                                        <div className="p-grid">
                                            <div className="p-col-12">
                                                <h1>ORDER SUMMARY</h1>
                                            </div>
                                        </div>
                                        <div className="p-grid">
                                            <div className="p-col-8">Tier - Basic</div>
                                            <div className="p-col-4 price">$5.00</div>
                                        </div>
                                        <div className="p-grid">
                                            <div className="p-col-8">VAT (%18)</div>
                                            <div className="p-col-4 price">$0.90</div>
                                        </div>

                                    </div>
                                    <div className="p-grid total">
                                        <div className="p-col-8">Total</div>
                                        <div className="p-col-4 price">$5.90</div>
                                    </div>
                                </div>
                                <div className={classNames('order order-pro', { 'selected-order': activeCard === 'pro' })}>
                                    <div className="summary">
                                        <div className="p-grid">
                                            <div className="p-col-12">
                                                <h1>ORDER SUMMARY</h1>
                                            </div>
                                        </div>
                                        <div className="p-grid">
                                            <div className="p-col-8">Tier - Pro</div>
                                            <div className="p-col-4 price">$25.00</div>
                                        </div>
                                        <div className="p-grid">
                                            <div className="p-col-8">VAT (%18)</div>
                                            <div className="p-col-4 price">$4.50</div>
                                        </div>
                                    </div>
                                    <div className="p-grid total">
                                        <div className="p-col-8">Total</div>
                                        <div className="p-col-4 price">$29.50</div>
                                    </div>
                                </div>
                                <div className={classNames('order order-pro-plus', { 'selected-order': activeCard === 'pro-plus' })}>
                                    <div className="summary">
                                        <div className="p-grid">
                                            <div className="p-col-12">
                                                <h1>ORDER SUMMARY</h1>
                                            </div>
                                        </div>
                                        <div className="p-grid">
                                            <div className="p-col-8">Tier - Pro+</div>
                                            <div className="p-col-4 price">$50.00</div>
                                        </div>
                                        <div className="p-grid">
                                            <div className="p-col-8">VAT (%18)</div>
                                            <div className="p-col-4 price">$9.00</div>
                                        </div>
                                    </div>
                                    <div className="p-grid total">
                                        <div className="p-col-8">Total</div>
                                        <div className="p-col-4 price">$59.00</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

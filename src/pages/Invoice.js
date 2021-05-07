import React from 'react';
import { Button } from 'primereact/button';

export const Invoice = () => {

    const print = () => {
        window.print();
    }

    return (
        <div>
            <Button type="button" label="Print" icon="pi pi-print" onClick={print} style={{ display: 'block', marginBottom: '20px', marginLeft: '6px' }}></Button>

            <div className="p-grid invoice-body">
                <div className="p-col-12">
                    <div id="invoice-content">
                        <div className="card invoice-wrapper">
                            <div className="p-grid invoice-header">
                                <div className="p-col-6 logo-adress">
                                    <img src="assets/layout/images/extensions/prime-logo.svg" alt="avalon-layout" />
                                    <p>9137 3rd Lane California City, CA 93504.</p>
                                </div>
                                <div className="p-col-6 title-date">
                                    <h1 className="title">INVOICE</h1>
                                    <p>30/08/2019</p>
                                </div>
                            </div>
                            <div className="card invoice-table billto-table">
                                <div className="p-grid table-header">
                                    <div className="p-col-4">
                                        <h2 className="header">BILL TO </h2>
                                    </div>
                                    <div className="p-col-3">
                                        <h2 className="header">DATE </h2>
                                    </div>
                                    <div className="p-col-2 text-right">
                                        <h2 className="header">INVOICE NO </h2>
                                    </div>
                                    <div className="p-col-3 text-right">
                                        <h2 className="header">NOTES </h2>
                                    </div>
                                </div>
                                <div className="p-grid table-content-row">
                                    <div className="p-col-4">
                                        <p>TOYOKSU SYSCOM CORPORATION 11-27, MEIEKI 4-CHROME
                                        NAKAMURA-KU, NAGOYA 450-0002 JAPAN </p>
                                    </div>
                                    <div className="p-col-3">
                                        <p>30/08/2019 </p>
                                    </div>
                                    <div className="p-col-2 text-right">
                                        <p>A/3100 </p>
                                    </div>
                                    <div className="p-col-3 text-right">
                                        <p>N/A </p>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="card invoice-table products-table">
                                <div className="p-grid table-header">
                                    <div className="p-col-5  row-title">
                                        <h2 className="header">DESCRIPTION </h2>
                                    </div>
                                    <div className="p-col-2 text-right">
                                        <h2 className="header">QUANTITY </h2>
                                    </div>
                                    <div className="p-col-2 text-right">
                                        <h2 className="header">UNIT PRICE </h2>
                                    </div>
                                    <div className="p-col-3 text-right">
                                        <h2 className="header">LINE TOTAL </h2>
                                    </div>
                                </div>
                                <div className="p-grid table-content-row even">
                                    <div className="p-col-5 row-title">
                                        <p>1 Year PrimeFaces Elite Subscription </p>
                                    </div>
                                    <div className="p-col-2 text-right">
                                        <p>4 </p>
                                    </div>
                                    <div className="p-col-2 text-right">
                                        <p>$99.00</p>
                                    </div>
                                    <div className="p-col-3 total text-right">
                                        <p>$396.00 </p>
                                    </div>
                                </div>
                                <div className="p-grid table-content-row">
                                    <div className="p-col-5 row-title">
                                        <p>PrimeFaces Ultima Extended License </p>
                                    </div>
                                    <div className="p-col-2 text-right">
                                        <p>1</p>
                                    </div>
                                    <div className="p-col-2 text-right">
                                        <p>$790.00</p>
                                    </div>
                                    <div className="p-col-3 total text-right">
                                        <p>$790.00 </p>
                                    </div>
                                </div>
                                <div className="p-grid table-content-row even">
                                    <div className="p-col-5 row-title">
                                        <p>PrimeFaces Prestige Basic License </p>
                                    </div>
                                    <div className="p-col-2 text-right">
                                        <p>2</p>
                                    </div>
                                    <div className="p-col-2 text-right">
                                        <p>$59.00</p>
                                    </div>
                                    <div className="p-col-3 total text-right">
                                        <p>$118.0</p>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="card invoice-table bank-total-table">
                                <div className="p-grid table-header">
                                    <div className="p-col-6 text-left ">
                                        <h2 className="header">BANK </h2>
                                    </div>
                                    <div className="p-col-6 text-right">
                                        <h2 className="header">TOTAL </h2>
                                    </div>

                                </div>
                                <div className="p-grid table-content-row">
                                    <div className="p-col-2 row-title">
                                        <h2>Bank</h2>
                                    </div>
                                    <div className="p-col-3 text-left">
                                        <p>BestBank </p>
                                    </div>
                                    <div className="p-col-5 text-right total">
                                        <h2>Subtotal</h2>
                                    </div>
                                    <div className="p-col-2 total text-right">
                                        <p>$1304.00</p>
                                    </div>
                                </div>
                                <div className="p-grid table-content-row even">
                                    <div className="p-col-2 row-title">
                                        <h2>Account Beneficiary</h2>
                                    </div>
                                    <div className="p-col-3 text-left">
                                        <p>Edward Williams</p>
                                    </div>
                                    <div className="p-col-5 text-right total">
                                        <h2>VAT</h2>
                                    </div>
                                    <div className="p-col-2 total text-right">
                                        <p>$234.72</p>
                                    </div>
                                </div>
                                <div className="p-grid table-content-row">
                                    <div className="p-col-2 row-title">
                                        <h2>Swift</h2>
                                    </div>
                                    <div className="p-col-3 text-left">
                                        <p>PJNWBXND</p>
                                    </div>
                                    <div className="p-col-5 text-right total ">
                                        <h2>Total</h2>
                                    </div>
                                    <div className="p-col-2 total text-right">
                                        <p>$1538.72</p>
                                    </div>
                                </div>
                                <div className="p-grid table-content-row even">
                                    <div className="p-col-2 row-title">
                                        <h2>IBAN</h2>
                                    </div>
                                    <div className="p-col-10 text-left">
                                        <p>GB04420235692263866724650931</p>
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

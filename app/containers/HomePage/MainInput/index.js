import React from 'react';
import './style.css';

class MainInput extends React.Component {
  validateData(value, date, supplier, remarks) {
    if (value == '' || date == '' || supplier == '' || remarks == '') {
      document.getElementById('infodisplay').innerHTML = 'All fields need to be populated!';
      document.getElementById('infodisplay').className = 'alert alert-danger alert-dismissible infodisplay-hidden';
      document.getElementById('infodisplay').style.display = 'grid';
    }
    else {
      document.getElementById('infodisplay').style.display = 'none';
      document.getElementById('invoiceValue').value = '';
      document.getElementById('invoiceDate').value = '';
      document.getElementById('invoiceSupplier').value = '';
      document.getElementById('invoiceRemarks').value = '';
      this.sendData(value, date, supplier, remarks);
    }
  }

  sendData(value, date, supplier, remarks) {
    const payload = {
      invoiceValue: value,
      invoiceDate: date,
      invoiceSupplier: supplier,
      invoiceRemarks: remarks,
    };
    
    const url = location.protocol + "//" + location.hostname + ':2424/invoice/addinvoice';
    fetch(url, {
      body: JSON.stringify(payload),
      headers: {
        'content-type': 'application/json',
      },
      method: 'POST',
    })
           .then(() => {
             this.props.updateData();
             document.getElementById('infodisplay').innerHTML = 'Invoice saved';
             document.getElementById('infodisplay').className = 'alert alert-success infodisplay-hidden';
             document.getElementById('infodisplay').style.display = 'grid';
           })
           .catch((error) => {
             console.error(error);
           });
  }

  render() {
    return (
      <div className="container bordered main-input">
        <form name="invoiceForm">
          <div className="container">
            <div className="row">
              <div className="col-4">
                <div className="group">
                  <input type="text" required id="invoiceDate" />
                  <label>Date</label>
                </div>
              </div>
              <div className="col-4">
                <div className="group">
                  <input type="text" required id="invoiceSupplier" />
                  <label>Supplier</label>
                </div>
              </div>
              <div className="col-4">
                <div className="group">
                  <input type="text" required id="invoiceValue" />
                  <label>Amount</label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="group">
                  <input type="text" required id="invoiceRemarks" />
                  <label>Remarks</label>
                </div>
              </div>
            </div>
            <div className="row">
              <div 
              style={{textAlign: 'center'}}
              className="col">
                <div className="group">
                  <button
                    type="button"
                    style={{width:'100%', maxWidth: '410px'}}
                    className="btn btn-lg btn-primary"
                    onClick={() => {
                      this.validateData(
                      document.getElementById('invoiceValue').value,
                      document.getElementById('invoiceDate').value,
                      document.getElementById('invoiceSupplier').value,
                      document.getElementById('invoiceRemarks').value
                      );
                    }}
                    >
                    Add Invoice
                    </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default MainInput;

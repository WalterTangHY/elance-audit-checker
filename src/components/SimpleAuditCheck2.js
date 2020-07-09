import React, { Component } from 'react'

class SimpleAuditCheck extends Component {
    constructor(props) {
        super(props)

        this.state = {
            cashIn: "",
            bonus: "",
            winLose: "",
            outstanding: "",
            cashOut: "",
            auditCheck: 0.00,
            result: "",
            textColor: 'gray',
            tableColor: '',
            error: "",
            validAmount: 0.00
        }
    }


    handleCashInChange = (event) => {
        var inputNumber = Number(event.target.value)
        this.setState({
            cashIn: event.target.value
        })
    }

    handleBonusChange = (event) => {
        this.setState({
            bonus: event.target.value
        })
    }

    handleWinLoseChange = (event) => {
        this.setState({
            winLose: event.target.value
        })
    }

    handleOutstandingChange = (event) => {
        this.setState({
            outstanding: event.target.value
        })
    }

    handleCashOutChange = (event) => {
        this.setState({
            cashOut: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        var { validAmount, cashIn, bonus, winLose, outstanding, cashOut } = this.state
        var valid_amount = Number(cashIn) + Number(bonus) + Number(winLose) - Number(outstanding)
        var auditNumber = valid_amount - Number(cashOut)
        this.setState({
            auditCheck: auditNumber.toFixed(2),
            validAmount: valid_amount.toFixed(2)
        })

        if (auditNumber >= 0) {
            this.setState({
                result: "Valid",
                textColor: "green",
                tableColor: 'table-success'
            })
        } else {
            this.setState({
                result: "Error",
                textColor: "red",
                tableColor: 'table-danger'
            })
        }
    }

    render() {
        const { tableColor, textColor, validAmount, auditCheck, cashIn, bonus, winLose, outstanding, cashOut, result } = this.state

        return (
            <div className="col-lg-9">
                <div>
                    <h1>Audit Check: <span style={{ color: textColor }}>{result}</span></h1>
                </div>

                <div className="row">
                    <div className="col-sm-8 col-md-8 col-lg-6">

                        <table className="">                       
                            <tr>
                                <th colSpan="3">Current Amount:</th>
                            </tr>
                            <tr>
                                <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                                <td className="text-right">Now Balance:</td>
                                <td><input type="number" value={cashOut} onChange={this.handleCashOutChange} placeholder="0" /></td>
                            </tr>
                            <tr className="text-right">
                                
                            </tr>
                            <tr>
                                <th colSpan="2">Expected Amount:</th>
                                <td className="text-right" colSpan="1"><span className="text-success font-weight-bold">${validAmount}</span></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td className="text-right">Cash In Balance After:</td>
                                <td><input type="number" value={cashIn} onChange={this.handleCashInChange} placeholder="0" /></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td className="text-right">Bonus:</td>
                                <td><input type="number" value={bonus} onChange={this.handleBonusChange} placeholder="0" /></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td className="text-right">Win/Loss Amount:</td>
                                <td><input type="number" value={winLose} onChange={this.handleWinLoseChange} placeholder="0" /></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td className="text-right">Outstanding Amount:</td>
                                <td><input type="number" value={outstanding} onChange={this.handleOutstandingChange} placeholder="0" /></td>
                            </tr>
                            <tr className={tableColor}>
                                <td colSpan="2" className="text-right font-weight-bold">
                                    Audit Amount:
                                </td>
                                <td className="text-right" >
                                    <span className="font-weight-bold" style={{ color: `${textColor}` }}>{auditCheck}</span>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="3"><button className="btn btn-primary btn-block" onClick={this.handleSubmit}>Submit</button></td>
                            </tr>
                        </table>
                    </div>
                    <div className="col-sm-6 col-md-3 col-lg-3">
                    </div>
                    <div className="col-md-3 col-lg-3"></div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-lg-5">

                    </div>
                </div>
            </div>
        )
    }
}

export default SimpleAuditCheck

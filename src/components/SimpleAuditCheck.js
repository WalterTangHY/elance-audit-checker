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
            auditCheck: 0,
            result: "",
            textColor: 'gray',
            error: "",
            validAmount: 0,
            nowBalance:""
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

    handleNowBalanceChange = (event) => {
        this.setState({
            nowBalance: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        var { cashIn, bonus, winLose, outstanding, cashOut, nowBalance } = this.state
        var valid_amount = Number(cashIn) + Number(bonus) + Number(winLose) - Number(outstanding) - Number(cashOut)
        var auditNumber = valid_amount - Number(nowBalance)
        this.setState({
            auditCheck: auditNumber.toFixed(2),
            validAmount: valid_amount.toFixed(2)
        })

        if (auditNumber === 0) {
            this.setState({
                result: "Valid",
                textColor: "green"
            })
        } else if(auditNumber<0){
            this.setState({
                result: "Invalid",
                textColor: "red"
            })
        }
        else{
            this.setState({
                result: "Excess",
                textColor: "Orange"
            })
        }
    }



    render() {
        const { nowBalance,textColor, validAmount, auditCheck, cashIn, bonus, winLose, outstanding, cashOut, result } = this.state

        return (
            <div className="col-xs-12">
                <h1>Audit Check</h1>
                <table className="table-bordered" onMouseEnter>
                    <tr>
                        <th colspan="2">
                            Expected Amount
                        </th>
                        <th>
                            Current Balance
                        </th>
                    </tr>
                    <tr>

                        <td>
                            Cash In Balance After:
                        </td>
                        <td>
                            <input type="number" value={cashIn} onChange={this.handleCashInChange} placeholder="0" />
                        </td>
                        <td rowSpan="5" className="text-center">
                            Now Balance:<br />
                            <input className="text-center" type="number" value={nowBalance} onChange={this.handleNowBalanceChange} placeholder="0" />
                        </td>
                        <td rowSpan="6">
                            <h3 className="p-2" style={{ color: this.state.textColor }}>{result}</h3>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Bonus:
                        </td>
                        <td>
                            <input type="number" value={bonus} onChange={this.handleBonusChange} placeholder="0" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Win/Loss Amount:
                        </td>
                        <td>
                            <input type="number" value={winLose} onChange={this.handleWinLoseChange} placeholder="0" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Outstanding Amount:
                        </td>
                        <td>
                            <input type="number" value={outstanding} onChange={this.handleOutstandingChange} placeholder="0" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Cash Out Amount:
                        </td>
                        <td>
                            <input type="number" value={cashOut} onChange={this.handleCashOutChange} placeholder="0" />
                        </td>
                    </tr>
                    <tr className="text-right font-weight-bold">
                        <td>
                            Valid Amount:
                        </td>
                        <td className="text-success">
                            {validAmount}
                        </td>
                    </tr>
                    <tr className="text-right font-weight-bold">
                        <td colspan="3">
                            Audit Check:
                            <span style={{ color: `${textColor}` }}>{auditCheck}</span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3"><button className="btn btn-primary btn-block" onClick={this.handleSubmit}>Submit</button></td>
                    </tr>
                </table>

            </div>
        )
    }
}

export default SimpleAuditCheck

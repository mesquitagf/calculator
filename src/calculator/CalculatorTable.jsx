import { Table } from "react-bootstrap"
import "./CalculatorTable.css"

export default function CalculatorTable({typedNumber, typedOperation}){

    return(
        <>
            <Table className="calculatorTable">
                <thead>
                    <tr>
                        <th className="calOperations" onClick={() => typedOperation("C")}>C</th>
                        <th className="calOperations" onClick={() => typedOperation("/")}>/</th>
                        <th className="calOperations" onClick={() => typedOperation("*")}>*</th>
                        <th className="calOperations" onClick={() => typedOperation("-")}>-</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="calNumbers" onClick={() => typedNumber("7")}>7</td>
                        <td className="calNumbers" onClick={() => typedNumber("8")}>8</td>
                        <td className="calNumbers" onClick={() => typedNumber("9")}>9</td>
                        <td className="calOperations bigOperator"
                            rowSpan={2}
                            onClick={() => typedOperation("+")}>+</td>
                    </tr>
                    <tr>
                        <td className="calNumbers" onClick={() => typedNumber("4")}>4</td>
                        <td className="calNumbers" onClick={() => typedNumber("5")}>5</td>
                        <td className="calNumbers" onClick={() => typedNumber("6")}>6</td>
                    </tr>
                    <tr>
                        <td className="calNumbers" onClick={() => typedNumber("1")}>1</td>
                        <td className="calNumbers" onClick={() => typedNumber("2")}>2</td>
                        <td className="calNumbers" onClick={() => typedNumber("3")}>3</td>
                        <td className="calOperations bigOperator"
                            rowSpan={2}
                            onClick={() => typedOperation("=")}>=</td>
                    </tr>
                    <tr>
                        <td className="calNumbers"
                            colSpan={2}
                            onClick={() => typedNumber("0")}>0</td>
                        <td className="calNumbers" onClick={() => typedNumber(".")}>.</td>
                    </tr>
                </tbody>
            </Table>
        </>
    )
}
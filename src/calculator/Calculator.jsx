import CalculatorTable from "./CalculatorTable";
import NumberScreen from "./NumberScreen";
import "./Calculator.css";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import { calculate } from "./CalculatorFunctions";

export default function Calculator(){

    const [printedNumber, setPrintedNumber] = useState(0);
    const [storagedNumber, setStoragedNumber] = useState(0);
    const [operation, setOperation] = useState("C")
    const [lastOperation, setLastOperation] = useState(0)

    function appendNumber(numberToUse){
        if(printedNumber === 0 || lastOperation === "="){
            setLastOperation(null)
            setPrintedNumber("" + numberToUse)
        } else if(printedNumber.toString().length < 10){
            setPrintedNumber(printedNumber + numberToUse)
        }
    }

    function resetCalculator(){
        setPrintedNumber(0)
    }

    function resolveOperation(operator){
        if (!operator || !["+", "-", "*", "/"].includes(operator)) {
            return;
        }
        const result = calculate(Number(storagedNumber), Number(printedNumber), operator)
        setPrintedNumber(result)
    }

    function insertOperation(operationToInsert){
        if(operationToInsert === "C"){
            resetCalculator()
        } else if(operationToInsert === "="){
            resolveOperation(operation)
        } else {
            if (operation && lastOperation !== "=") {
                resolveOperation(operation);
            }
            setStoragedNumber(Number(printedNumber))
            setOperation(operationToInsert)
            resetCalculator()
        }
        setLastOperation(operationToInsert)
    }

    return(
        <Container>
            <Row className="justify-content-md-center">
                <Col xs="4">
                    <div className="calculator">
                        <NumberScreen numberToAppend={printedNumber}/>
                        <CalculatorTable
                            typedNumber={appendNumber}
                            resetCalculatorScreen={resetCalculator}
                            typedOperation={insertOperation}/>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
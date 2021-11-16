import React from "react";
import {useState} from "react";
import {Button, InputGroup, Modal} from "react-bootstrap";



const EditModal = (props) => {
    const key = props.val;
    const [show, setShow] = useState(false);
    const [item, setItem] = useState(props.item)


    //TODO update dictionary with one value
    // const setDict = (str) =>{
    //     let newDict = {}
    //     newDict['name']=
    // }

    const handleClose = () => {
        setShow(false);
    }
    const handleShow = () => setShow(true);

    const handleSave = () => {
        setShow(false);
        props.handleEdit(item, key);
    };

    return (
        <>
            <Button variant="dark" onClick={handleShow}>
                Edit
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit item</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <InputGroup>
                        <InputGroup.Text style={{width:"80px"}} id="inputGroup-sizing-sm">Name</InputGroup.Text>
                        <input type={"text"} id={"Name"} onChange={e => setItem({name: e.target.value})}/>
                    </InputGroup>
                    <InputGroup>
                        <InputGroup.Text style={{width:"80px"}} id="inputGroup-sizing-sm">Amount</InputGroup.Text>
                        <input type={"text"} id={"Amount"} onChange={e => setItem({amount: e.target.value})}/>
                    </InputGroup>
                    <InputGroup>
                        <InputGroup.Text style={{width:"80px"}} id="inputGroup-sizing-sm">Unit</InputGroup.Text>
                        <input type={"text"} id={"Unit"} onChange={e => setItem({unit: e.target.value})}/>
                    </InputGroup>
                    <InputGroup>
                        <InputGroup.Text style={{width:"80px"}} id="inputGroup-sizing-sm">Price</InputGroup.Text>
                        <input type={"text"} id={"Price"} onChange={e => setItem({price: e.target.value})}/>
                    </InputGroup>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSave}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default EditModal
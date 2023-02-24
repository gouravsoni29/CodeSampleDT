import React, { useState } from 'react';
import {
    Card, CardBody, Container, Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Input,
    Label,
    Form,
    FormGroup,
} from 'reactstrap';
import props from 'prop-types';

//Modal form

const AddEcu = () => {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    //post the data to server from the ui to add new ecu
    const [data, setData] = useState({})

    const [formData, setFormData] = useState({
        id: "",
        partno: "",
        name: ""
    });

    const handleInputChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const newEcuData = {
            id: formData.id,
            partno: formData.partno,
            name: formData.name
        };

        const existingData = [...data];

        const index = existingData.findIndex((item) => item.vin === "MAT123456MLB12345");

        const updatedObject = {
            ...existingData[index],
            ecu: [...existingData[index].ecu, newEcuData]
        };

        const updatedData = [
            ...existingData.slice(0, index),
            updatedObject,
            ...existingData.slice(index + 1)
        ];

        setData(updatedData);
    };

    const handleForm = (e) => {
        console.log(data);
        e.preventDefault();
    }
    const handleInputChange1 = (event) => {
        const { name, value } = event.target;
        setData({ ...data, [name]: value });
      };
    const postEcuData = () => {

    }
    return (
        <div>

            <Card>
                <CardBody>
                    <Button color='primary' type='submit' className='ecu' onClick={toggle}>ADD ECU</Button>
                    <Button color='primary' type='submit' className='ecu'>Edit ECU</Button>
                    <Button color='primary' type='submit' className='ecu'>Remove ECU</Button>
                    <Button color='primary' type='submit' className='ecu'>Update HW information</Button>

                </CardBody>
            </Card>

            <Modal isOpen={modal} toggle={toggle} >
                <ModalHeader toggle={toggle}>Add ECU</ModalHeader>
                <ModalBody>
                    <Form onSubmit={handleForm}>
                        <FormGroup>
                            <label htmlFor='vin'>Id</label>
                            <input id='id' className='form-control' name='id' type='text' placeholder='Enter Id' onChange={handleInputChange1} />
                        </FormGroup>
                        <FormGroup>
                            <label htmlFor='ecu'>ECU Name</label>
                            <input id='ecu' className='form-control' name='name' type='text' placeholder='Enter Name' onChange={handleInputChange1}/>
                        </FormGroup>
                        <FormGroup>
                            <label htmlFor='part'>Part Number</label>
                            <input id='part' className='form-control' name='partno' type='text' placeholder='Enter Part No.' onChange={handleInputChange1}/>
                        </FormGroup>
                        <FormGroup>
                            <label htmlFor='software' >Software Version</label>
                            <input id='software' className='form-control' name='software' type='text' placeholder='Enter Version' onChange={handleInputChange1} />
                        </FormGroup>
                        <div className='text-center'>
                        <Button color="primary" type='submit' >
                        ADD
                    </Button>
                    <Button color="secondary" onClick={toggle} className='cancel'>
                        CANCEL
                    </Button>
                    </div>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    
                </ModalFooter>
                
            </Modal>


        </div>
    )
}

export default AddEcu;
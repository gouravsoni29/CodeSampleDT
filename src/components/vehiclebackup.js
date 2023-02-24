import React, { useState, useRef, useEffect } from 'react';
import { Card, CardBody, Container, Toast, Button } from 'reactstrap';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import Overlay from 'react-bootstrap/Overlay';
import Popover from 'react-bootstrap/Popover';
import Tippy from '@tippyjs/react';
import axios from 'axios';
import { toast } from 'react-toastify';


const Vehicle = () => {

    //Dots creation
    const [circles, setCircles] = useState([]);
    const svgRef = useRef(null);

    const handleClick = (event) => {
        const rect = event.target.getBoundingClientRect();
        console.log(rect);
        const newCircle = {
            x: ((event.clientX - rect.left) / rect.width) * 100,
            y: ((event.clientY - rect.top) / rect.height) * 100,
            radius: 5,
            color: 'red',
        };
        console.log(newCircle.x, newCircle.y);
        document.getElementById('demo').innerHTML = `"Coordinated "${newCircle.x} ${newCircle.y}`
        setCircles([...circles, newCircle]);
    };


    useEffect(() => {
        document.title = "Vehicle Twin"
        getDataFromServer();
    }, []);

    //pull data fromt he server to UI
    const [vehicleData, setVehicleData] = useState([])

    const getDataFromServer = () => {
        axios.get('http://localhost:3004/vehicle').then(
            (response) => {
                console.log(response.data);
                // toast.success("Data Loaded successfully");
                setVehicleData(response.data);
                // console.log("Hi",setVehicleData)
            }, (error) => {
                console.log(error);
                // toast.error("Something went wrong")
            }
        )
    }

    const [coord, setCoord] = useState({ x: 0, y: 0 });
    // const handleMouseMove = (e) => {
    //     setCoord({ x: e.screenX, y: e.screenY });
    // };




    return (
        <div>

            <Container >
                <h3 className='text-center'>Tata Motors</h3>

                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        {/* <img src="images/car.jpg" alt="not found" style={{width:500,heigh:50}} className='img-responsive'/> */}
                        {
                            vehicleData.map((data) => {
                                return (

                                    <div key={data.vin}>
                                        <svg width="100%" height="100%" viewBox="0 0 600 400" ref={svgRef}
                                            onClick={handleClick}
                                            style={{ border: "1px solid black" }}>
                                            <image href="images/car.jpg" width="100%" height="100%" />
                                            <Tippy content={'Left Head light: ' + data.left_head_light}>
                                                <circle cx="21%" cy="50%" r="5" style={{ cursor: 'pointer' }} fill='red' />
                                            </Tippy>
                                            {/* <title>Left headlight</title> */}

                                            {/* </circle> */}
                                            {
                                                <Tippy content={'wheel 3 data : ' + data.wheel_3}>

                                                    <circle cx="78%" cy="50%" r="5" fill='red' style={{ cursor: 'pointer' }} />

                                                </Tippy>
                                            }

                                            {/* <title>Wheel 3</title> */}

                                            {/* </circle> */}
                                            <Tippy content={'wheel 1 data: ' + data.wheel_1}>
                                                <circle cx="53%" cy="74.5%" r="5" fill='red' style={{ cursor: 'pointer' }} />
                                            </Tippy>
                                            {/* <title>Wheel1</title>
                            </circle> */}
                                            <Tippy content={'Right Head Light is ' + data.right_head_light}>
                                                <circle cx="40%" cy="69.5%" r="5" fill='red' style={{ cursor: 'pointer' }} />
                                            </Tippy>
                                            {/* <title>Head Light</title>
                            </circle> */}
                                            <Tippy content={'Car Logo Name: ' + data.car_logo}>
                                                <circle cx="26%" cy="60.5%" r="5" fill='red' style={{ cursor: 'pointer' }} />
                                            </Tippy>
                                            {/* <title>Car Logo</title>
                            </circle> */}
                                            <Tippy content={'Vehicle Number: ' + data.number_plate}>
                                                <circle cx="26%" cy="75.5%" r="5" fill='red' style={{ cursor: 'pointer' }} />
                                            </Tippy>
                                            {/* <title>Number Plate</title>
                            </circle> */}

                                            <Tippy content={'Car door status: ' + data.car_door}>
                                                <circle cx="66%" cy="56.5%" r="5" fill='red' style={{ cursor: 'pointer' }} />
                                            </Tippy>
                                            {/* <title>Car Door</title>
                            </circle> */}
                                            <Tippy content={'Car ' + data.mirror}>
                                                <circle cx="64%" cy="45.5%" r="5" fill='red' style={{ cursor: 'pointer' }} />
                                            </Tippy>
                                            {/* <title>Mirror</title>
                            </circle> */}
                                            {circles.map((circle, index) => {
                                                return (
                                                    <circle
                                                        key={index}
                                                        cx={`${circle.x}%`}
                                                        cy={`${circle.y}%`}
                                                        r={circle.radius}
                                                        fill={circle.color}
                                                    />

                                                )
                                            }
                                            )}

                                        </svg>
                                        <h1 id='demo'></h1>
                                        <h1>{data.vin}</h1>

                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div>

                </div>
            </Container>
        </div>
    )

}

export default Vehicle;
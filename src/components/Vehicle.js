import React, { useState, useRef, useEffect } from 'react';
import { Card, CardBody, Container, Toast, Button } from 'reactstrap';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import Tippy from '@tippyjs/react';
import axios from 'axios';
import { toast } from 'react-toastify';


const Vehicle = () => {

    //Dots creation
    const [circles, setCircles] = useState([]);
    const [text, settext] = useState('')
    const svgRef = useRef(null);

    const handleClick = (event) => {
        if (event.target.tagName.toLowerCase() === 'circle' || event.target.tagName.toLowerCase() === 'rect') {
            return;
        }
        const rect = event.target.getBoundingClientRect();
        console.log(rect);
        const newCircle = {
            x: ((event.clientX - rect.left) / rect.width) * 100,
            y: ((event.clientY - rect.top) / rect.height) * 100,
            radius: 5,
            color: 'yellow',
            text: text
        };
        console.log(newCircle.x, newCircle.y);
        document.getElementById('demo').innerHTML = `"Coordinates "${newCircle.x} ${newCircle.y}`
        setCircles([...circles, newCircle]);
    };

    //for adding the text into inside rectangle box
    const handleEcuText = (event) => {

        settext(event.target.value)

    }

    //click on ECU box to show the arrow pointed structure
    const handleRectClick = (index) => {
        console.log('rect clicked');
        const p = document.createElement('p');
        p.innerHTML = "Button"
        // const newRectangles = [...circles]
        // newRectangles[index].showArrow = true;
        // setCircles(newRectangles);
        // document.createElement('button')
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


    const [showElement, setShowElement] = useState(false);

    const onCircleClick = () => {
        // console.log('circle clicked');
        setShowElement(!showElement);

    }



    return (
        <div>

            <Container >
                <h3 className='text-center' style={{ color: 'blue' }}>Tata Motors</h3>

                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        {/* <img src="images/car.jpg" alt="not found" style={{width:500,heigh:50}} className='img-responsive'/> */}
                        {
                            vehicleData.map((data) => {
                                return (

                                    <div key={data.vin}>
                                        <svg width="100%" height="100%" viewBox="0 0 600 400" ref={svgRef}

                                            style={{ border: "1px solid black" }}>
                                            <image href="images/car.jpg" width="100%" height="100%" />
                                            <Tippy content={'Left Head light: ' + data.left_head_light}>
                                                <>
                                                    <rect x="14%" y="50%" style={{ cursor: 'pointer' }} fill='yellow' width={50} height={30} rx={5} ry={4} onClick={onCircleClick} />
                                                    <text x="15%" y="55%" fill='black' fontSize="12" fontWeight='bold'>ABS</text>
                                                </>

                                            </Tippy>
                                            {showElement && (
                                                <>
                                                    <line x1="21%" y1="50%" x2="29%" y2="32%" stroke="blue" />
                                                    <rect width={50} height={30} x="29%" y="27%" rx={5} ry={4} fill='blue' style={{ display: 'block' }} />
                                                    <text x="31%" y="32%" fill="black" fontSize="12" fontWeight='bold'>HW</text>
                                                    <line x1="36%" y1="55%" x2="21%" y2="50%" stroke="blue" />
                                                    <rect width={50} height={30} x="33%" y="48%" rx={5} ry={4} fill='blue' style={{ display: 'block' }} />
                                                    <text x="35%" y="53%" fill="black" fontSize="12" fontWeight='bold'>SW</text>
                                                </>
                                            )}

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
                                                    <g key={index}>
                                                        <rect
                                                            key={index}
                                                            x={`${circle.x}%`}
                                                            y={`${circle.y}%`}
                                                            width={70}
                                                            height={30}
                                                            // r={circle.radius}
                                                            rx={5}
                                                            ry={5}
                                                            fill={circle.color}
                                                            onClick={handleRectClick}
                                                        />
                                                        <text x={`${circle.x + 4}%`}
                                                            y={`${circle.y + 4}%`}
                                                            dominantBaseline="middle"
                                                            textAnchor="middle"
                                                            fill="black">{circle.text}

                                                        </text>

                                                    </g>

                                                )
                                            }
                                            )}

                                        </svg>

                                        <input type='text' value={text} onChange={handleEcuText} />
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
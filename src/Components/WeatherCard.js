import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { BsDropletHalf, BsWind } from "react-icons/bs"
// import Image from "../img/weather_pic.jpg"
// ,backgroundImage:`url(${Image})`,backgroundSize:'cover'
const WeatherCard = ({el}) => {
  return (
    <div>
        <Card className='Container bg-image shadow-sm p-3 mb-5 bg-body rounded'style={{ width: '30rem',marginTop:'20px',marginLeft:'20px',backgroundColor:'lightblue'}}>
      <Card.Body>
      <div style={{display:'flex',justifyContent:'space-around'}}>
      <div>
        <Card.Title style={{fontStyle:'oblique',fontSize:'30px',paddingTop:'5px'}}>{el.location.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted" style={{fontSize:'13px'}}>{el.location.localtime}</Card.Subtitle>
        <div style={{display:'flex',marginLeft:'-10px',marginTop:'15px'}}>
        <img src={el.current.condition.icon}/>
        <Card.Text style={{paddingLeft:'5px',paddingTop:'15px',fontWeight:'bolder'}}>
          {el.current.condition.text}
        </Card.Text>
        </div>
        </div>

        <div>
        <Card.Text style={{fontSize:'45px',paddingLeft:'20px'}}>
        {el.current.temp_c}°C 
        </Card.Text>

        <div style={{display:'flex',justifyContent:'space-around'}}>
        <BsWind />
       <h6>{el.current.wind_kph}Kph</h6>
       </div>
       <div style={{display:'flex',justifyContent:'space-around'}}>
       <BsDropletHalf/>
       <h6>{el.current.humidity}%</h6>
       </div>
       </div>
       </div>
        <br />
        <Link to={`/${el.location.name}`}>
        <Button style={{marginLeft:'85px',width:'250px'}}>See forecast</Button>
        </Link>
      </Card.Body>
    </Card>
    </div>
  )
}

export default WeatherCard
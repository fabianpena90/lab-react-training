import React from 'react';

function App() {
  return (
  <div>
    <IdCard
    img = "https://randomuser.me/api/portraits/men/32.jpg"
    firstName = 'John'
    lastName = 'Doe'
    gender = 'male'
    height = '178'
    birth = '1992-07-14'
    />
    <IdCard
    img = "https://randomuser.me/api/portraits/women/41.jpg"
    firstName = 'Obrien'
    lastName = 'Delores'
    gender = 'female'
    height = '172'
    birth = '1988-05-11'
    />
  <Greetings lang="de">Ludwig</Greetings>
  <Greetings lang="fr">François</Greetings>
  <Random small={1} big={6}></Random>
  <Random small={1} big={100}></Random>
  <BoxColor r={Math.floor(Math.random() * 255)} g={Math.floor(Math.random() * 255)} b={Math.floor(Math.random() * 255)}></BoxColor>
  <BoxColor r={Math.floor(Math.random() * 255)} g={Math.floor(Math.random() * 255)} b={Math.floor(Math.random() * 255)}></BoxColor>

<CreditCard
    type="Master Card"
    number="0123456789010995"
    expirationMonth={3}
    expirationYear={2021}
    bank="N26"
    owner="Maxence Bouret"
    bgColor="#eeeeee"
    color="#222222" />
<CreditCard
    type="Visa"
    number="0123456789016984"
    expirationMonth={12}
    expirationYear={2019}
    bank="Name of the Bank"
    owner="Firstname Lastname"
    bgColor="#ddbb55"
    color="white" />
  </div>
  )
}

function IdCard(props) {

  return ( <div className="IdCard box">
            <p><img src={props.img} alt="Profile Pic"/></p>
            <p>First Name: {props.firstName}</p>
            <p>Last Name: {props.lastName}</p>
            <p>Gender: {props.gender}</p>
            <p>Height: {props.height}</p>
            <p>Date of Birth: {props.birth}</p>
  </div>
  )
}

function Greetings(props) {
  let greet = {
    en: 'Hello',
    fr: 'Bonjour',
    de: 'Hallo'
  }
  return (
    <div className="IdCard box">
    {greet[props.lang]} {props.children}
</div>
  )
}

function Random(props) {
  return (
    <div className="IdCard box">
    {props.small}  {props.big}
      <h2>Random value between {props.small} and {props.big} = {Math.ceil(Math.random() * props.big)}</h2>
    </div>
  )
}

function BoxColor(props) {
  return (
    <div style={{backgroundColor: `rgb(${props.r},${props.g},${props.b})`}}>
      <h3>RGB({props.r}, {props.g}, {props.b})
      <CreditCard
    type="Visa"
    number="0123456789018845"
    expirationMonth={3}
    expirationYear={2021}
    bank="BNP"
    owner="Maxence Bouret"
    bgColor="#11aa99"
    color="white" /></h3>
    </div>
  )
}



function CreditCard(props) {
  return (
    <div className="IdCard box">
      <p><img src={props.img} alt="Profile Pic"/></p>
      <p>Type: {props.type}</p>
      <p>Number: {props.number}</p>
      <p>Expires om: {props.expirationMonth} {props.expirationYear}</p>
      <p>Bank: {props.birth}</p>
      <p>Owner: {props.Firstname} {props.Lastname}</p>
      <p>BGColor: {props.bgColor}</p>
      <p>Color: {props.color}</p>
    </div>
  )
}

export default App;

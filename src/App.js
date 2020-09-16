import React, {useState} from 'react';
import profiles from './data/berlin.json';

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
    <Rating>0</Rating>
    <Rating>1.49</Rating>
    <Rating>1.5</Rating>
    <Rating>3</Rating>
    <Rating>4</Rating>
    <Rating>5</Rating>
    <DriverCard
    name="Travis Kalanick"
    rating={4.2}
    img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
    car="Toyota Corolla Altis - licensePlate: CO42DE"
     />
  <DriverCard
    name="Dara Khosrowshahi"
    rating={4.9}
    img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
    car="Audi A3 - BE33ER"
    />
    <LikeButton />
    <LikeButton />

    <ClickablePicture
    img='/img/persons/maxence.png'
    imgClicked='/img/persons/maxence-glasses.png'
    />
    <br></br>
    <Dice />
    <br></br>
    <Carousel
  imgs={[
    'https://randomuser.me/api/portraits/women/1.jpg',
    'https://randomuser.me/api/portraits/men/1.jpg',
    'https://randomuser.me/api/portraits/women/2.jpg',
    'https://randomuser.me/api/portraits/men/2.jpg'
  ]}
/>
    <NumbersTable limit={90} />
    <Facebook />
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
    color="white" />
    </h3>
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



function Rating(props) {
  let result = ''
  for (let i = 0; i < 5; i++){
    if(i < Math.round(Number(props.children))) {
      result +=  '★'
    } else {
      result += '☆'
    }
  }
  return (
    <p>{result}</p>
  )
}

function DriverCard(props) {
  return(
    <div className="IdCard box">
      <p>{props.name}</p>
      <img src={props.img} alt='Card Pic'/>
      <p><Rating>{props.rating}</Rating> </p>
      <p>{props.car}</p>
    </div>
  )
}

function LikeButton() {
  let [countClick, setClickCount] = useState(0);
 
  let colors = ['purple','blue','green','yellow','orange','red']
  let random = Math.floor(Math.random() * colors.length)

  let counter = () => {
    setClickCount(countClick + 1);
  };
  return (
    <div>
      <button style={{backgroundColor: `${colors[random]}`}} onClick={counter}>{countClick} Likes</button>
    </div>
  );
}

function ClickablePicture(props) {
  const imgNoGlasses = 'img/persons/maxence.png',
  imgGlasses = 'img/persons/maxence-glasses.png';
  const [img, setImg] = useState(imgNoGlasses);
  function imgSwap() {
    if (img === imgNoGlasses) {
      setImg(imgGlasses)
    } else {
      setImg(imgNoGlasses)
    }
  }
  return (
    <img onClick={imgSwap}
    src={img}
    alt='man that equips/dequips glasses when clicked'
    style={{cursor: 'pointer', height: '100px'}}></img>
  )
}

function Dice() {
  const [dice, setDice] = useState(1);
  let randomDice;
  const handleDice = () => {
    randomDice = Math.floor(Math.random() * (6 - 1) + 1);
    setDice('-empty');
    setTimeout(() => {
      setDice(randomDice);
    }, 1000);
  };
  return (
    <div>
      <img src={`./img/dice` + dice + '.png'} alt="dice" onClick={() => handleDice()} />
    </div>
  );
}


function Carousel(props) {
  const [img, setImg] = useState(0);

  function left() {
    if (props.imgs[img-1] === undefined) {
      setImg(props.imgs.length-1);
    } else {
      setImg(img - 1);
    }
  }

  function right() {
    if (props.imgs[img+1] === undefined) {
      setImg(0);
    } else {
      setImg(img + 1);
    }
  }
  return (
    <div>
    <button onClick={left}>Left</button> 
    <img src={props.imgs[img]} alt="people" /> 
    <button onClick={right}>Right</button>
    </div>
    
  )
}


function NumbersTable(props) {
  let result = [];
  for (let i = 1; i <= props.limit; i++){
    let color;
    if (i%2 !== 0){
      color = 'white';
    } else {
      color = 'red';
    }
    result.push(
      <div
      style={{
        height: '50px',
        width: '50px',
        textAlign: 'center',
        lineHeight: '50px',
        display: 'inline-block',
        backgroundColor: color,
        border: '1px solid black'
      }}
      key={'numberTable'+i}
      >{i}</div>
    );
  }
  return (
    <div>
     {result} 
    </div>
  );
}

function Facebook() {
  return profiles.map((eachProfile) => {
    return (
      <div className="IdCard box">
        <li><img src={eachProfile.img} alt="img"/></li>
        <li>{eachProfile.firstName}</li>
        <li>{eachProfile.lastName}</li>
        <li>{eachProfile.country}</li>
      </div>
    )
  })
}


export default App;

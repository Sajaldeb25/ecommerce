
const title ="Introduction"
const description = "Descriptinon Descriptinon Descriptinon Descriptinon Descriptinon"
const description2 = "You can add another description"
const date = "Date: 27/12/21"

function Card(proops){
    console.log(proops.titleText)
    console.log(proops.descText)
    const{titleText, descText} = proops;
    return <div className='card'>
        <h3 className='cardTitle'>{proops.titleText}</h3>
        <p className='cardDesc'>{proops.descText+" "+description2}</p>
        <p className='cardFooter'>{date}</p>
  
    </div>
}

export default Card;


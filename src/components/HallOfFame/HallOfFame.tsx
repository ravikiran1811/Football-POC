import hallOfFameStyles  from "./HallOfFame.module.scss"
interface Ilists{
list:string;
}
interface IhallOfFameData{
    id:number;
    imageLink:string;
    heading:string;
    description:string;
    lists:Ilists[];
}
interface IhallOfFame {
    data: IhallOfFameData[];
}
const HallOfFame = (props:IhallOfFame) => {
    const {data}=props
    console.log(props);
  return (data && Array.isArray(data) && data.length!==0 && 
  data.map((each)=>{
   
   return <div className={each.id %2===0 ? hallOfFameStyles.card : hallOfFameStyles.even}>
    <div className={hallOfFameStyles.image}>
      <img src={each.imageLink} alt="" />
    </div>
    <div className={hallOfFameStyles.content}>
      <h2>{each.heading}</h2>
      <p>{each.description}</p>
      <ul>
        {each.lists && Array.isArray(each.lists) && each.lists.length!=0 && each.lists.map((each)=>{
            return <li>{each.list}</li>
        })}
      </ul>
    </div>
  </div>
  })
  )
}

export default HallOfFame

import Slider from "react-slick";
import './Carousel.scss'
import HeadingField from "../HeadingField/HeadingField";
import { coachCertificationImages } from "../../constants/coachImagesConstants";
interface IcarouselData{
  data: any;
  variant:string;
  noOfSlides:number;
}
function Carousel(props:IcarouselData) {
  const {data,variant,noOfSlides}= props;
  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: noOfSlides,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="carouselContainer">
{   variant==="primary" ? <HeadingField subHeading="OUR" heading="HALL OF EXPERTISE" /> : <HeadingField subHeading="OUR" heading="MOMENTS" />}    <div className="sliderContainer">
      <Slider {...settings} className="slickSlider">
        {
          variant === "primary" && data && Array.isArray(data) && data.length !==0 &&
          data.map((each)=>{
            return <div className="card">
            <div className="images">
              <img src={each.imageLink} alt="" />
              <div className="coachContent">
              <div className="coachName">{each.name}</div>
              <div className="coachExpertise">
                 <div className="coachCertificate">
                 <img src={coachCertificationImages.experience} alt="" />
                 <span>{each.experience}</span>
                 </div>
                 <div className="coachExperience">
                  <img src={coachCertificationImages.certificate} alt="" />
                  <span>{each.certification}</span>
                 </div>
              </div>
            </div>
            </div>
            </div>
          })
        }
        {
          variant === "secondary" && data && Array.isArray(data) && data.length !==0 &&
          data.map((each)=>{
            return <div className="secondaryCarousel">
              <img src={each.imageLink} alt="" />
            </div>
          })
        }

        {/* <div className="images"><img src={image} alt="" /></div>
        <div className="images"><img src={testImage} alt="" /></div>
        <div className="images"><img src={image} alt="" /></div>
        <div className="images"><img src={testImage} alt="" /></div>
        <div className="images"><img src={image} alt="" /></div>
        <div className="images"><img src={testImage} alt="" /></div>
        <div className="images"><img src={image} alt="" /></div>
        <div className="images"><img src={testImage} alt="" /></div>
        <div className="images"><img src={image} alt="" /></div>
        <div className="images"><img src={testImage} alt="" /></div>
        <div className="images"><img src={image} alt="" /></div>
        <div className="images"><img src={testImage} alt="" /></div> */}
      </Slider>
    </div>
    </div>
  );
}

export default Carousel;

import "../styles/Slide.scss";

const Slide = () => {
  return (

    <div className="slide">
      
      <video className='background-video' autoPlay muted loop>
          <source src={process.env.PUBLIC_URL + 'assets/banner.mp4'} type="video/mp4" />
        </video>
    
   
      <h1 className="banner-heading">
      Find Your Dream <br/> Home
      </h1>
      </div>
  
  );
};

export default Slide;

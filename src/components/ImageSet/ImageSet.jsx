import "../ImageSet/ImageSet.scss";
import Monika from "../../assets/images/friends/Moinka-main.jpeg";
import Racheal from "../../assets/images/friends/rachel.jpeg";
import Phebeo from "../../assets/images/friends/Phoebe+Buffay.jpg";
import Chandler from "../../assets/images/friends/chandler-main.jpeg";
import Joey from '../../assets/images/friends/Joey-main.jpeg';
import Ross from '../../assets/images/friends/Ross-correc.jpeg'


function ImageSet(){


    return(
       
<div className="image__container">
<div className="image_card">
        <img src={Monika} alt="Image 1" className="image_value"/>
      </div>
      <div className="image_card">
        <img src={Racheal} alt="Image 2" className="image_value"/>
      </div>
      <div className="image_card">
        <img src={Phebeo} alt="Image 3" className="image_value"/>
      </div>
      <div className="image_card">
        <img src={Chandler} alt="Image 4"className="image_value"/>
      </div>
      <div className="image_card">
        <img src={Joey} alt="Image 5" className="image_value"/>
      </div>
      <div className="image_card">
        <img src={Ross} alt="Image 6" className="image_value"/>
      </div>
</div>
    )
}

export default ImageSet;
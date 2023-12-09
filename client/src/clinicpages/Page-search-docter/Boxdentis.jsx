import "./Boxdentiss.css";
import Profile from "../../../public/images-tabbar/profile.svg"
function BoxDentis(props) {
  const { dataDentis } = props;
  const imgSource = dataDentis.imgdentis ? dataDentis.imgdentis : Profile;
  return (
    <div className="BoxDentiss">
      <div className="box">
        <img className="imgdentis" src={imgSource} />
        <h5>
          <div className="dataname">{dataDentis.dataname}</div>
          <div className="dataTM">{dataDentis.dataTM}</div>
          <div className="dataPLAB">PLAB:{dataDentis.dataPLAB}</div>
        </h5>
        <button className="edit" style={{ cursor: "pointer" }}>
          <center>Edit Profile</center>
        </button>
      </div>
    </div>
  );
}

export default BoxDentis;

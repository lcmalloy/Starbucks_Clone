import '../styles/ContentTile.css'


const ContentTile = (props) => {

return (
  <div className="TileContainer" style={{backgroundColor: props.data.boxColor}}>
    <div className="TileContainer-img">
      <img className="body-img" src={props.data.image} alt="" />
    </div>
    <div className="TileContainer-text" style={{backgroundColor: props.data.boxColor}}>
      <div className="text-model">
        {props.data.text}
      </div>
    </div>
  </div>
  )
}

export default ContentTile;
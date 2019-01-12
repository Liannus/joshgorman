import React from 'react';
import StatusTooltip from './StatusTooltip.js'

const circleStyle = {
  width: '15px',
  height: '15px',
  borderRadius: '50%',
  marginTop: 'auto',
  marginBottom: 'auto',
  border: '0px'
}


export default class ProjectCard extends React.Component {
  constructor(props) {
    super(props);
    this.tt = {
      placement: 'top',
      text: 'bottom'
    }
  }

<<<<<<< HEAD
  componentDidMount() {}
  render() {
    return (<div>
      <div className={this.props.imgSide + " card flex-md-row mb-4 shadow-sm h-md-250"}>
        {
          this.props.imgSide == "left" && <img className="card-img flex-auto d-none d-lg-block" alt="Thumbnail [200x250]" src="//placeimg.com/250/250/arch" style={{
                minWidth: "200px",
                minHeight: "250px"
              }}/>
        }
        <div className={" card-body d-flex flex-column align-items-" + (
            this.props.imgSide == "left"
            ? "start"
            : "end")}>
          <div className="alignHorizontal">
            {this.props.imgSide == "right" && <button data-toggle="tooltip" data-placement="top" title={this.props.status} style={circleStyle} className={this.props.status + " text-primary card-text"}></button>}
            <h3 className={"card-title d-inline-block mb-2 text-white"}>{this.props.projectTitle}</h3>
            {this.props.imgSide == "left" && <button data-toggle="tooltip" data-placement="top" title={this.props.status} style={circleStyle} className={this.props.status + " text-primary card-text"}></button>}
=======
  render() {
    return (
      <div>
        <div className={this.props.imgSide + " card flex-md-row mb-4 shadow-sm h-md-250"}>
          {this.props.imgSide=="left" && <img className="card-img flex-auto d-none d-lg-block" alt="Thumbnail [200x250]" src="//placeimg.com/250/250/arch" style={{minWidth: "200px", minHeight: "250px"}} /> }
          <div className={" card-body d-flex flex-column align-items-" + (this.props.imgSide=="left" ? "start" : "end")}>
            <div className="alignHorizontal">
              {this.props.imgSide=="right" && <StatusTooltip status={this.props.status} item={this.tt} id={this.props.projectTitle.split(" ").join("")} />}
              <h3 className={"card-title d-inline-block mb-2 text-white"}>{this.props.projectTitle}</h3>
              {this.props.imgSide=="left" && <StatusTooltip status={this.props.status} item={this.props.tooltip} id={this.props.projectTitle.split(" ").join("")} />}
            </div>
            <h4 className={"card-subtitle mb-1 text-muted small"}>{this.props.subTitle}</h4>
            <p className={this.props.imgSide + "card-text mb-auto"}>{this.props.content}</p>
            <button type="button" className="btn btn-outline-primary btn-sm">Project Link</button>
>>>>>>> dee4366c311b95db3b8073bdbe6c6368897f859a
          </div>
          <h4 className={"card-subtitle mb-1 text-muted small"}>{this.props.subTitle}</h4>
          <p className={this.props.imgSide + "card-text mb-auto"}>{this.props.content}</p>
          <button type="button" className="btn btn-outline-primary btn-sm">Project Link</button>
        </div>
        {
          this.props.imgSide == "right" && <img className="card-img flex-auto d-none d-lg-block" alt="Thumbnail [200x250]" src="//placeimg.com/250/250/arch" style={{
                minWidth: '200px',
                minHeight: '250px'
              }}/>
        }
      </div>
      <style jsx="jsx">
        {
          ` .Development {
            background: #ffc107;
          }
          .Planned {
            background: #dc3545;
          }
          .Complete {
            background #28a745;
          }
          .alignHorizontal {
            display: flex;
            width: 100%;
            justify-content: space-between;
            margin-bottom: 0.75rem;
          }
          .right {
            text-align: right;
          }
          h3 {
            margin-bottom: 0 !important;
          }
          .card {
            background-color: #333C42;
          }
          p {
            color: #fcfaf9;
          }
           `;
        }</style>
    </div>);
  }
};

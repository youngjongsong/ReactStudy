import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import "./Content.css";

const ContentView = (props) => {
      let url = "/view/"+props.id
      return (<NavLink to={url}>
                {props.children}
              </NavLink>)
    }

const FullContentLink =(props) => {
    return (<a onClick={props.onChangeFullContent}>
              {props.children}
            </a>)
    }

class Content extends Component {
	constructor(props) {
	  super(props);

	  this.state = {
	  	isShow: false
	  };
	}

	onHover = () => {
		this.setState({isShow:true})
	}

	onUnHover = () => {
		this.setState({isShow:false})
	}

  onChangeFullContent = () => {
    this.props.onClick(this.props.content)
  }

  displayImg = () => {
    let imgSrc = "https://img.youtube.com/vi/"+this.props.content.id+"/0.jpg"
    let imgComponent = <img className="thumbnail" src={imgSrc} />;
    let layer = this.state.isShow?(<div className="middle"><div className="text"> {this.props.content.name} </div></div>):"";
    return[imgComponent,layer]

  }

  render() {
    return (
      <div className="content" onMouseEnter={() => this.onHover()} onMouseLeave={() => this.onUnHover()}>
      {this.props.onClick?
        (<FullContentLink onChangeFullContent={this.onChangeFullContent}>{this.displayImg()}</FullContentLink>):
        (<ContentView id={this.props.content.id}>{this.displayImg()}</ContentView>)}
      </div>
    );
  }
}

export default Content;
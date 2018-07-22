import * as React from "react";
import * as ReactBootstrap from "react-bootstrap";

export interface ApplicationProps { shipInstance: any }
export interface ApplicationState { }

export default class Application extends React.Component < ApplicationProps, ApplicationState > {

    componentWillMount() {
        // this.setState({
        // });
    }

    componentDidMount() {
    }

    onButtonClicked(action: string): void {
        // console.log(`onButtonClicked: ${action}`);
        switch (action) {
            case 'idle':
                this.props.shipInstance.ship.ship_anim.gotoAndStop('idle');
                this.props.shipInstance.ship.ship_shield.visible = false;
                break;
            case 'shield':
                this.props.shipInstance.ship.ship_shield.visible = true;
                break;
            case 'shoot':
                this.props.shipInstance.ship.ship_anim.gotoAndPlay('shoot');
                break;
            case 'hit':
                this.props.shipInstance.ship.ship_anim.gotoAndPlay('hit');
                break;
            case 'over':
                this.props.shipInstance.ship.ship_anim.gotoAndPlay('over');
                break;
        }
    }

    render() {
        return(
            <div>
                <ReactBootstrap.Button bsStyle={'success'} key={"idle"} style = {{width: 100}}
                    onClick={this.onButtonClicked.bind(this, "idle")}>Idle</ReactBootstrap.Button>
                <ReactBootstrap.Button bsStyle={'success'} key={"shield"} style = {{width: 100}}
                    onClick={this.onButtonClicked.bind(this, "shield")}>Shield</ReactBootstrap.Button>
                <ReactBootstrap.Button bsStyle={'success'} key={"shoot"} style = {{width: 100}}
                    onClick={this.onButtonClicked.bind(this, "shoot")}>Shoot</ReactBootstrap.Button>
                <ReactBootstrap.Button bsStyle={'success'} key={"hit"} style = {{width: 100}}
                    onClick={this.onButtonClicked.bind(this, "hit")}>Hit</ReactBootstrap.Button>
                <ReactBootstrap.Button bsStyle={'success'} key={"over"} style = {{width: 100}}
                    onClick={this.onButtonClicked.bind(this, "over")}>Over</ReactBootstrap.Button>
            </div>
        );
    }
}

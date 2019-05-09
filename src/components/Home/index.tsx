import React, { Component } from 'react';
import { connect } from  'react-redux';
import { bindActionCreators, Dispatch } from 'redux'

import { Session } from '../../store/ducks/sessions/types';
import { ApplicationState } from '../../store';
import * as SessionsActions from '../../store/ducks/sessions/actions'
import { loadState } from '../../persist/localStorage';


interface StateProps{
    sessions: Session[]
}

interface DispatchProps{
    loadRequest(): void
    loadDelete(): void
    loadUptade(errorRate: number): void
}


type Props = StateProps & DispatchProps

interface State{
    session: object
    errorRate: string
}

class Home extends Component<Props, State> {
    constructor(props :  StateProps & DispatchProps){
        super(props)

        this.state = {
            session: {},
            errorRate: ''
        }
    }

    componentDidMount() {
        const session = loadState()
        this.setState({ session: session? session : {}})
    }

    getSession(){
        const { loadRequest } = this.props;

        loadRequest();
    }

    deleteSession(){
        const { loadDelete } = this.props;

        loadDelete();
    }

    updateSession(){
        const { loadUptade } = this.props;
        loadUptade(parseInt(this.state.errorRate));
    }


    render() {
        return (
            <div>
                <div>
                    <button onClick={() => this.getSession()}>Start session!</button>
                </div>
                <div>
                    <button onClick={() => this.updateSession()}>Update session!</button>
                    <input type="text" placeholder="Error rate" onChange={(e) => this.setState({errorRate: e.target.value})} />
               </div>
               <div>
                    <button onClick={() => this.deleteSession()}>Delete session!</button>
               </div>
            </div>
        );
    }
}

const mapStatetoProps = (state: ApplicationState) => ({
    sessions: state.sessions.data,
});

const mapDispatchtoProps = (dispatch: Dispatch) => 
    bindActionCreators(SessionsActions, dispatch);


export default connect(mapStatetoProps, mapDispatchtoProps)(Home);
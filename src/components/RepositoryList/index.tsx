import React, { Component } from 'react';
import { connect } from  'react-redux';
import { bindActionCreators, Dispatch } from 'redux'

import { Repository } from '../../store/ducks/repositories/types';
import { ApplicationState } from '../../store';
import * as RepositoriesActions from '../../store/ducks/repositories/actions'


interface StateProps{
    repositories: Repository[]
}

interface DispatchProps{
    loadRequest(): void
}


type Props = StateProps & DispatchProps

class RepositoryList extends Component<Props> {

    componentDidMount() {
        const { loadRequest } = this.props;

        loadRequest();
    }

    render() {
        const { repositories } = this.props;
        console.log(this.props)
        return (
            <ul>
                {repositories.map(repository => <li>{repository.name}</li>)}
            </ul>
        );
    }
}

const mapStatetoProps = (state: ApplicationState) => ({
    repositories: state.repositories.data,
});

const mapDispatchtoProps = (dispatch: Dispatch) => 
    bindActionCreators(RepositoriesActions, dispatch);


export default connect(mapStatetoProps, mapDispatchtoProps)(RepositoryList);
import React, { Component, Fragment } from 'react';
import { connect } from  'react-redux';
import { bindActionCreators, Dispatch } from 'redux'

import { Session } from '../../store/ducks/sessions/types';
import { ApplicationState } from '../../store';
import * as SessionsActions from '../../store/ducks/sessions/actions'
import * as TodosActions from '../../store/ducks/todos/actions'
import { loadState } from '../../persist/localStorage';
import { Todo } from '../../store/ducks/todos/types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MUIDataTable from "mui-datatables";
import './styles.css'
import moment from 'moment'
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


interface StateProps{
    sessions: Session[]
    todo: Todo
}

interface DispatchProps{
    loadSession(): void
    deleteSession(): void
    updateSession(errorRate: number): void
    loadTodos(): void
    createTodo(text: string, isCompleted: boolean, urgency: number ): void
    deleteTodo(id: string):void
    updateTodo(id: string, text?: string, isCompleted?: boolean, urgency?: number): void
}

interface idataTable{
    created: string,
    text: string,
    updated: string,
    urgency: number
}


type Props = StateProps & DispatchProps

interface State{
    session: object
    errorRate: string
    text: string
    isCompleted: boolean
    urgency: string
    id: string
}

class Home extends Component<Props, State> {
    constructor(props :  StateProps & DispatchProps){
        super(props)

        this.state = {
            session: {},
            errorRate: '',
            text: '',
            isCompleted: false,
            urgency: '',
            id: ''
        }
    }

    componentDidMount() {
        const session = loadState()
        this.setState({ session: session? session : {}})
    }

    getSession(){
        this.props.loadSession();
    }

    deleteSession(){
        this.props.deleteSession();
    }

    updateSession(){
        this.props.updateSession(parseInt(this.state.errorRate));
    }

    getAllTodos(){
        this.props.loadTodos();
    }

    createTodo(){
        this.props.createTodo(this.state.text, this.state.isCompleted, parseInt(this.state.urgency))
        this.props.loadTodos();
    }

    deleteTodo(){
        this.props.deleteTodo(this.state.id)
        this.props.loadTodos();
    }

    updateTodo(){
        this.props.updateTodo(this.state.id, this.state.text, this.state.isCompleted, parseInt(this.state.urgency))
        this.props.loadTodos();
    }


    render() {
        const { todo } = this.props
        var created: string
        var updated: string
        var dataTable: idataTable[] = []
        if(todo && todo.todos){
            const arrayTodos = Object.values(todo.todos)
            arrayTodos.map(todo =>{
                created = moment(todo.created).format("MM-DD-YYYY, h:mm:ss a")
                updated = moment(todo.updated).format("MM-DD-YYYY, h:mm:ss a")
                const rawData = {
                    "created": created,
                    "text": todo.text,
                    "updated": updated,
                    "urgency": todo.urgency,
                    "id": todo.id
                }
                return dataTable.push(rawData)
            })
        }

        const columns = [
            {
                name: "created",
                label: "Created",
                options: {
                    filter: true,
                    sort: true,
                }
            },
            {
                name: "text",
                label: "Text",
                options: {
                    filter: true,
                    sort: true,
                }
            },
            {
                name: "updated",
                label: "Updated",
                options: {
                    filter: true,
                    sort: true,
                }
            },
            {
                name: "urgency",
                label: "Urgency",
                options: {
                    filter: true,
                    sort: true,
                }
            },
        ]


        return (
            <Fragment>
                <div className={'actions'}>
                    <div>
                        <Button variant="contained" color="primary" onClick={() => this.getSession()}>Start session!</Button>
                    </div>
                    <div className={'update-session'}>
                        <Button variant="contained" color="primary" onClick={() => this.updateSession()}>Update session!</Button>
                        <TextField
                            id="outlined-number"
                            label="Error rate"
                            value={this.state.errorRate}
                            onChange={(e) => this.setState({errorRate: e.target.value})}
                            type="number"
                            InputProps={{ inputProps: { min: 0, max: 100 } }}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            margin="normal"
                            variant="outlined"
                        />
                </div>
                <div>
                        <Button variant="contained" color="secondary" onClick={() => this.deleteSession()}>Delete session!</Button>
                </div>
                <div>
                        <Button variant="contained" color="primary" onClick={() => this.getAllTodos()}>Load TODOs</Button>
                </div>
                </div>
                <div className={'new-todo'}>
                    <div className={'fields'}>
                        <div>
                            <Button variant="contained" color="primary" onClick={() => this.createTodo()}>New TODO!</Button>     
                        </div>
                        <div>
                            <TextField
                                id="text-input"
                                label="Text"
                                value={this.state.text}
                                onChange={(e) => this.setState({text: e.target.value})}
                                margin="normal" 
                            />
                        </div>
                        <div>
                            <TextField
                                id="outlined-number"
                                label="Urgency"
                                InputProps={{ inputProps: { min: 1, max: 5 } }}
                                type="number"
                                value={this.state.urgency}
                                onChange={(e) => this.setState({urgency: e.target.value})}
                                margin="normal" 
                            />
                        </div>
                        <div>
                            <FormGroup row>
                                <FormControlLabel
                                control={
                                    <Checkbox
                                    checked={this.state.isCompleted}
                                    onChange={() => this.setState({isCompleted: !this.state.isCompleted})}
                                    value="checkedA"
                                    />
                                }
                                label="Completed"
                                />
                            </FormGroup> 
                        </div> 
                    </div>
                </div>
                <div className={'table'}>
                    <MUIDataTable
                        title={"TODO List"}
                        data={dataTable? dataTable: []}
                        columns={columns}
                        options={{
                            isRowSelectable: (index) => true,
                            filterType: 'checkbox',
                            rowsPerPage: 10,
                            onRowsDelete: (rowsDeleted) =>{ console.log(rowsDeleted)},
                            onRowClick: (rowData, rowState) => {
                            console.log(rowData, rowState);
                            },
                        }}
                    />
                </div>
            </Fragment>
        );
    }
}

const mapStatetoProps = (state: ApplicationState) => ({
    sessions: state.sessions.data,
    todo: state.todos.data,
});

const mapDispatchtoProps = (dispatch: Dispatch) => 
    bindActionCreators(Object.assign({},SessionsActions, TodosActions), dispatch);


export default connect(mapStatetoProps, mapDispatchtoProps)(Home);
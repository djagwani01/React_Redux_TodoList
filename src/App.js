import React from 'react';
//import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux'
import Input from './components/input'
import Button from './components/button'
import List from './components/list'

class App extends React.Component {
    //let deleteBtn = 
    render(){
  return (
    <div className="App">
      <header className="App-header">
      <Input 
       onHandleChange={this.props.onHandleChange} 
       />
      <br />
      <Button 
      onHandleClick={this.props.onHandleClick}
      />
      <br />
      <List
      />
        
      </header>
    </div>
  );
}
}

const mapStateToProps = (state) => {
  return{
    str: state.str,
    list: state.list
  }

}

const mapDispatchToProps = (dispatch) => {
  return{
    onHandleChange: (e) => dispatch({type: 'inputChange', val: e.target.value}),
    onHandleClick: () => dispatch({type: 'addItem'}),
    onHandleDelete: (id) => dispatch({type: 'deleteItem', val: id})
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(App);

import React from 'react'
import {connect} from 'react-redux'

const List = (props) => {
	return(
			<ol>
        {props.list.map((listItem, index)=>{
          return(
            <div>
              <li>{listItem} <button onClick={props.onHandleDelete.bind(this, index)}>Delete</button></li>
            </div>
            )
        })}
      </ol>
		  )
}

const mapStateToProps = (state) => {
  return{
    str: state.str,
    list: state.list
  }

}

const mapDispatchToProps = (dispatch) => {
  return{
    onHandleDelete: (id) => dispatch({type: 'deleteItem', val: id})
  }

}


export default connect(mapStateToProps, mapDispatchToProps)(List)
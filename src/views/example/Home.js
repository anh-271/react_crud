import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import {connect} from "react-redux"
// import ListUsers from "../Users/ListUsers";

class Home extends React.Component {

    handleDeleteUser = (user) => {
        console.log('>>>>>>>>>>> check user delete', user);
        this.props.deleteUserRedux(user)
    }

    handleAddUser = () => {
        this.props.addUserRedux()
    }

    render() {
        let lisUsers = this.props.dataRedux
        return(
            <>
            <div>Hello world</div>
            <div>
                {lisUsers && lisUsers.length > 0 &&
                    lisUsers.map((item, index) => {
                        return (
                            <div key={item.id}>
                                {index + 1} - {item.name} 
                                <button onClick={() => this.handleDeleteUser(item)}>x</button>
                            </div>
                        )
                    })
                }
                <button onClick={() => this.handleAddUser()}>Create User</button>

            </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
  return {dataRedux : state.users}
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteUserRedux: (userDelete) =>  dispatch({type: 'DELETE_USER', payload: userDelete  }),
        addUserRedux: () => dispatch({type: 'CREATE_USER' })
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);
import React from "react";
import { useParams } from "react-router";
import { connect } from "react-redux";

const Wrapper = () => {
  const {id} = useParams();

  return <VisibleTodo id={id} />
}

const Note = ({note}) => {
  return (
    <>
      <p>{JSON.stringify(note)}</p>
    </>
  )
}

const mapStateToProps = (state, {id}) => {
  return {
    note: state.notes.find((note) => note.id === id)
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     editNote: (data) => dispatch(editNote(data))
//   }
// }

const VisibleTodo = connect(mapStateToProps)(Note);

export default Wrapper;
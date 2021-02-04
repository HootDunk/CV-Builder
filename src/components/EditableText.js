import React from 'react';
import '../styles/EditableText.css'

 class EditableText extends React.Component {
   constructor(){
     super()
     this.state = {
       text: "",
       isActive: false,
     }
   }
   // possible rename
   handleClick = () => {
     this.setState(prevState => {
      return {isActive: !prevState.isActive}
     })
   }

   handleChange = (event) => {
     const {name, value} = event.target;
     this.setState({[name]: value})
   }

   handleKeyUp = (event) => {
     if (event.charCode === 13) {
      this.setState(prevState => {
        return {isActive: !prevState.isActive}
       })
     }
   }


  render(){
    if(this.state.isActive){
      return (
        <input
          className={this.props.class}
          autoFocus
          onKeyPress={this.handleKeyUp}
          onBlur={this.handleClick}
          type="text"
          value={this.state.text}
          name="text"
          onChange={this.handleChange}
        />
      )
    }
    else if (this.state.text){
      return <p 
              onClick={this.handleClick}
              className={this.props.class}
              >
                {this.state.text}
              </p>
    }
    else {
      return (
            <p 
            onClick={this.handleClick}
            className={this.props.class}
            >
              {this.props.initialText}
            </p>
        )
    }
    
  }

}

export default EditableText

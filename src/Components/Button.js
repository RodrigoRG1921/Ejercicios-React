import PropTypes from "prop-types"

const Button = (props) =>{
    return(
        <button onClick={props.onClick}style={{marginLeft:"40px"}}>sort by {props.name}</button>
    );
}

Button.propTypes = {
    name: PropTypes.string,
    onClick: PropTypes.func

}

export default Button
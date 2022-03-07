import './index.css'

const Square = ({value, onClickEvent}) => {
    return (
      <button 
        className="square"
        onClick={onClickEvent}
        >
        {value}
      </button>
    )
  }

  export default Square
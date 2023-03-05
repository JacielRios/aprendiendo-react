export const Square = ({ children, isSelected, updateBoard, index }) => {
    const selectedClass = `square ${isSelected ? 'is-selected' : ''}`
    
    const handleClick = () => {
      updateBoard(index)
    }
    
    return(
      <div onClick={handleClick} className={selectedClass}>
        {children}
      </div>
    )
  }
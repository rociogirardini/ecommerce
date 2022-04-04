const Select = ({onSelect}) => {

    const options = [
        {value: 'natural', text: 'Natural'},
        {value: 'negro', text: 'Negro'},
        {value: 'blanco', text: 'Blanco'},
    ]
    
    const handleSelect = (e) => {
        onSelect(e.target.value)
    }

    return(
        <select onChange={handleSelect} className='btn btn-light dropdown-toggle'>
            {options.map((el) => <option value={el.value} key={el.value}>{el.text}</option>)}
        </select>
    )
}

export default Select
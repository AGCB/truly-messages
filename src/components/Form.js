import React from 'react';

const Form = ({currentFilter, isDisabled, resetFilter, handleFilterChange}) => (
  <form>
    <input
      value={currentFilter}
      onFocus={(e) => resetFilter(e)}
      onChange={(e) => handleFilterChange(e)}
    />
    <button
      disabled={isDisabled}
      onClick={() => this.setState({currentFilter: "SHOW_ALL"})}
      >reset filter
    </button>
  </form>
)

export default Form;

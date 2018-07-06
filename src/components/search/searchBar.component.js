import React from 'react';

export default class SearchBar extends React.Component {
    constructor() {
        super();
        this.handleFilterTextInputChange = this.handleFilterTextInputChange.bind(this);
        this.handleInStockInputChange = this.handleInStockInputChange.bind(this);
    }

    handleFilterTextInputChange(e) {
        this.props.onFilterTextInput(e.target.value);
    }

    handleInStockInputChange(e) {
        this.props.onInStockInput(e.target.checked);
    }

    render() {
        return (
            <div>
                <div>
                    <input type="text" placeholder="Search..."
                        value={this.props.filterText}
                        onChange={this.handleFilterTextInputChange}
                    />
                </div>
                <p>
                    <input type="checkbox" checked={this.props.inStockOnly} onChange={this.handleInStockInputChange} /> Only show products in stock
                </p>
            </div>
        );
    }
}

import React from "react";
import ProductTable from "./ProductTable";

class SearchBar extends React.Component{
    constructor(props)
    {
        super(props);
        this.handleOnKeyChange=this.handleOnKeyChange.bind(this);
        this.handleOnCheckedChange=this.handleOnCheckedChange.bind(this);
    }
    handleOnKeyChange(event){
        this.props.onKeyChange(event.target.value);
    }
    handleOnCheckedChange(event){
        this.props.onCheckedChange(event.target.checked);
    }
    render()
    {

        return (
            <fieldset>
                <input onChange={this.handleOnKeyChange} placeholder="Search..."/>
                <input type="checkbox" checked={this.props.inStockOnly} onChange={this.handleOnCheckedChange} c/>
            </fieldset>
        )
    }

}

class FilterableProductTable extends React.Component{
    constructor(props) {
        super(props);
        this.state={inStockOnly:false, filterText:''}
        this.handleKeyChange=this.handleKeyChange.bind(this);
       this.handleInStockOnlyChange=this.handleInStockOnlyChange.bind(this);
    }
    handleKeyChange(key){
            this.setState({filterText:key})
    }
    handleInStockOnlyChange(value){

        this.setState({inStockOnly:value})
    }
render()
{
    return(
        <div>
            <SearchBar onKeyChange={this.handleKeyChange}
                        onCheckedChange={this.handleInStockOnlyChange}
                       inStockOnly={this.state.inStockOnly} />
            <ProductTable products={this.props.products}
            inStockOnly={this.state.inStockOnly}
            filterText={this.state.filterText}/>
        </div>
    );
}



}

export default FilterableProductTable
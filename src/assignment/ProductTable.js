import React from "react";


function ProductRow(props) {
    return(
        <tr>
            <td>{props.name}</td>
            <td>{props.price}</td>
        </tr>
    );

}
function ProductCategoryRow(props) {
    return (
        <tr>
            <th>{props.category}</th></tr>
    )

}
function ProductTable(props) {

    const products=props.products
    const filterText=props.filterText
    const inStockOnly=props.inStockOnly
   let sortedProducts=new Map()

    for(let i=0;i<products.length;i++){
        if(sortedProducts.has(products[i].category)) sortedProducts.get(products[i].category).push(products[i])
        else sortedProducts.set(products[i].category,[products[i]])
    }
    const ProductChildren=[];
    sortedProducts.forEach((value,key)=>{

        ProductChildren.push(<ProductCategoryRow category={key} />)
        for(let i=0;i<value.length;i++){

            if(inStockOnly && value[i].stocked==false) return;

            if(filterText == "" || filterText==value[i].name) {
                console.log(inStockOnly)
                ProductChildren.push(<ProductRow name={value[i].name} price={value[i].price}/>)
            }
        }
    })


return(

    <table><tr>
        <th>Name</th><th>Price</th></tr><tbody>{ProductChildren}</tbody></table>

);


}
export default ProductTable
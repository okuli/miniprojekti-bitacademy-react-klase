import {Component} from "react";

class ProductsComponent extends Component{
    render() {
        return(
            <div>
                <h2 className="text-center">Produktet</h2>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                        <tr>
                            <th>Identification</th>
                            <th>Label</th>
                            <th>Description</th>
                            <th>Price</th>
                        </tr>
                        </thead>
                        <tbody>


                                    <tr>
                                        <td>ID</td>
                                        <td>Etiketa</td>
                                        <td>Pershkrimi</td>
                                        <td>Cmimi</td>
                                    </tr>


                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ProductsComponent;

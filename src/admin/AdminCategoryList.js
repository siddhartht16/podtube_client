import React, {Component} from "react";
import AdminService from "../services/AdminService";
import AdminCategory from "./AdminCategory";

export default class AdminCategoryList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            categories: null
        };
    }

    componentDidMount() {
        AdminService.getAllCategories().then(categories => {
                console.log(categories);
                this.setState({categories: categories})
            }
        );
    }

    syncCategories = () => {
        AdminService.syncAllCategories().then(categories =>
            this.setState({categories: categories})
        );
    };

    render() {
        return (
            <div className="container-fluid mt-5">
                <div className="sync-btn-wrapper pt-2 pb-2 mb-2">
                    <button
                        className="btn btn__alt"
                        onClick={this.syncCategories}>
                        Sync Categories
                    </button>
                </div>
                <div>
                    {this.state.categories === null ? (
                        <p className="mt-5">Loading...</p>) : (
                        <table className={"table table-sm admin-table"}>
                            <thead className="thead-light">
                            <tr>
                                <th>Id</th>
                                <th>Title</th>
                                <th>Tag</th>
                                <th>Last Synced On</th>
                                <th>Created On</th>
                                <th>Modified On</th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.state.categories.map((category, index) => (
                                <AdminCategory
                                    key={index}
                                    id={category.id}
                                    title={category.title}
                                    tag={category.tag}
                                    createdOn={category.createdOn}
                                    modifiedOn={category.modifiedOn}
                                    lastSyncedOn={category.lastSyncedOn}
                                />
                            ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        );
    }
}

import React, { Component } from "react";
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
        AdminService.getAllCategories().then(categories =>
            this.setState({ categories: categories })
        );
    }

    syncCategories = () => {
        AdminService.syncAllCategories().then(categories =>
            this.setState({ categories: categories })
        );
    };

    render() {
        return (
            <div className="container-fluid mt-5">
                <div className="sync-btn-wrapper pt-2 pb-2">
                    <button
                        className="btn btn__alt"
                        onClick={this.syncCategories}
                    >
                        Sync Categories
                    </button>
                </div>
                <br />
                <div className="podcast-list">
                    {this.state.categories === null ? (
                        <p className="mt-5">Loading...</p>
                    ) : (
                        <div
                            className={
                                "table table-striped table-hover text-justify"
                            }
                        >
                            {/*<ul>*/}
                            <div className="row bg-light text-dark">
                                <div className={"col"}>Id</div>
                                <div className={"col"}>Title</div>
                                <div className={"col"}>Tag</div>
                                <div className={"col"}>Last Synced On</div>
                                <div className={"col"}>Created By</div>
                                <div className={"col"}>Modified By</div>
                                <div className={"col"}>Created On</div>
                                <div className={"col"}>Modified On</div>
                            </div>
                            {this.state.categories.map((category, index) => (
                                <AdminCategory
                                    key={index}
                                    id={category.id}
                                    title={category.title}
                                    tag={category.tag}
                                    createdBy={category.createdBy}
                                    modifiedBy={category.modifiedBy}
                                    createdOn={category.createdOn}
                                    modifiedOn={category.modifiedOn}
                                    lastSyncedOn={category.lastSyncedOn}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

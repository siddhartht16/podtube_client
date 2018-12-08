import React, {Component} from 'react'
import AdminService from '../../services/AdminService';
import Category from "./Category";

export default class CategoryList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            categories: null
        }
    }

    componentDidMount() {
        AdminService.getAllCategories().then(
            categories => this.setState({categories: categories})
        )
    }

    syncCategories = () => {
        AdminService.syncAllCategories().then(
            categories => this.setState({categories: categories})
        )
    };

    render() {
        return (
            <div>
                <div className="sync-btn-wrapper pt-2 pb-2">
                    <button className="btn btn-primary" onClick={this.syncCategories}>Sync Categories</button>
                </div>
                <div className="podcast-list">
                    {this.state.categories === null ? <p className="mt-5">Loading...</p> :
                        <div>
                            <ul>
                                {this.state.categories.map((category) =>
                                    <Category id={category.id} title={category.title}/>)
                                }
                            </ul>
                        </div>
                    }
                </div>
            </div>
        )
    }
}

import React from 'react';
import ObjectService from '../services/ObjectService';

class ObjectComponent extends React.Component {

    constructor(props){
        super(props)
        this.state={
            objects:[]
        }
    }
    componentDidMount(){ //componentDidMount는 외부 API 호출 시 사용
        ObjectService.getObjects().then((response)=>{
            this.setState({objects:response.data})
        });
    }

    render(){
        return (
            <div>
                <h1 className="text-center">Objects List</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <td>System id</td>
                            <td>Store Name</td>
                            <td>Store location</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.objects.map(
                                object=>
                                <tr key={object.systemId}>
                                    <td>{object.systemId}</td>
                                    <td>{object.storeName}</td>
                                    <td>{object.storeLocation}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }

}

export default ObjectComponent;
var React = require('react');
var FixedDataTable = require('fixed-data-table');
var adObject = require('adObject');
const {Table, Column, Cell} = FixedDataTable;

const adObjectData = {
    "ads": [
        {
            "id": 1,
            "remote_id": "123",
            "name": "123",
            "status": "ACTIVE",
        },
        {
            "id": 2,
            "remote_id": "456",
            "name": "456",
            "status": "ACTIVE",
        },
        {
            "id": 3,
            "remote_id": "789",
            "name": "789",
            "status": "ACTIVE",
        },
        {
            "id": 4,
            "remote_id": "901",
            "name": "901",
            "status": "ACTIVE",
        },
    ]
};


class DataTable extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            myTableData: [
                {name: 'Rylan'},
                {name: 'Amelia'},
                {name: 'Estevan'},
                {name: 'Florence'},
                {name: 'Tressa'},
            ],
        };
    }

    getColNames(adData){
        console.log(adData)
        var names = []
        for (var i = 0 ; i < adData.ads.length ; i++) {
            names.push(adData.ads[i].name)
        };
        console.log("get colNames: " + names)
        return names
    }

    // showColNames(e){
    //     e.preventDefault();
    //     console.log('Printed');
    //
    //     var that = this;
    //
    //     getColNames(data).then(function(names) {
    //         that.setState({
    //             myTableData: names
    //         });
    //         console.log('table data: ' + this.state.myTableData)
    //     }, function() {
    //         that.setState({
    //             errorMessage: "Errrrrrror"
    //         });
    //         console.log('table data again: ' + this.state.errorMessage)
    //     })
    //     console.log('table data again: ' + this.state.myTableData)
    // }

    // showColNames(adObjectData) {
    //     console.log('Show Col Names from DT component')
    //     // console.log(adObjects.getColNames())
    //     // this.setState({
    //     //     myTableData: adObjects.getColNames(adObjectData)
    //     // })
    // }

    render() {
        // console.log(adObjectData);
        var colName = this.getColNames(adObjectData)
        return (
            <div>
                <button className="button" onLoad={this.getColNames(adObjectData)}>Fill Chart</button>
                <p>{this.getColNames(adObjectData)[0]}</p>
                <Table
                    rowsCount={this.state.myTableData.length}
                    rowHeight={50}
                    headerHeight={50}
                    width={500}
                    height={500}>
                    <Column
                        header={<Cell>{colName[0]}</Cell>}
                        cell={props => (
                            <Cell {...props}>
                                {this.state.myTableData[props.rowIndex].name}
                            </Cell>
                        )}
                        width={200}
                    />
                </Table>
            </div>
        );
    }
}

module.exports = DataTable;

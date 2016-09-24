var React = require('react');
var FixedDataTable = require('fixed-data-table');
var adObject = require('adObject');
const {Table, Column, Cell} = FixedDataTable;

// const adObjectData = {
//     "ads": [
//         {
//             "id": 1,
//             "remote_id": "123",
//             "name": "123",
//             "status": "ACTIVE",
//         },
//         {
//             "id": 2,
//             "remote_id": "456",
//             "name": "456",
//             "status": "ACTIVE",
//
//         },
//         {
//             "id": 3,
//             "remote_id": "789",
//             "name": "789",
//             "status": "ACTIVE",
//         },
//         {
//             "id": 4,
//             "remote_id": "901",
//             "name": "901",
//             "status": "ACTIVE",
//         },
//     ]
// };


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

    // getColNames(adData){
    //     console.log(adData)
    //     var names = []
    //     for (var i = 0 ; i < adData.ads.length ; i++) {
    //         names.push(adData.ads[i].name)
    //     };
    //     console.log("get colNames: " + names)
    //     return names
    // }


    render() {
        // console.log(adObjectData);
        var that = this;
        // var colName = this.getColNames(adObjectData)
        var colName = adObject.getColNames()
        console.log('colName: ' + colName)

        return (
            <div>
                <button className="button">Fill Chart</button>

                <Table
                    rowsCount={this.state.myTableData.length}
                    rowHeight={50}
                    headerHeight={50}
                    width={500}
                    height={500}>
                    {colName.map(function(name, i){
                            return (
                                <Column
                                    header={<Cell>{name}</Cell>}
                                    cell={props => (
                                        <Cell {...props}>
                                            {that.state.myTableData[props.rowIndex].name}
                                        </Cell>
                                    )}
                                    width={200}
                                />
                            )
                        }
                    )}
                </Table>
            </div>
        );
    }
}

module.exports = DataTable;

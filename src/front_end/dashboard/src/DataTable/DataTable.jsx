import React from 'react';
import './DataTable.css'

export default function DataTable(props) {

    let craneArray = [];
    Object.values(props.craneInfo).flat().forEach(item => {
        Object.entries(item).forEach(([k, v]) => {
            craneArray.push(k + v)
        })
    });

    console.log(craneArray);
    console.log(props.craneInfo);
    console.log(Object.keys(props.craneInfo));
    console.log(Object.values(props.craneInfo)); // hij is nested lol

    return (
    <>
    <div className='datatable_container'>
        <table className='datatable_table'>
            <tbody>
                <tr>
                    <th>table</th>
                </tr>
                {Object.keys(props.craneInfo).map(key => {
                    return (
                        <tr key={key}>
                            <td>{key}</td>
                            <td>{props.craneInfo.meta.topic}</td>
                            <td>{props.craneInfo.meta.isActive}</td>
                            <td>{props.craneInfo.absolutePosition.x}</td>
                            <td>{props.craneInfo.absolutePosition.y}</td>
                            <td>{props.craneInfo.absolutePosition.z}</td>
                            <td>{props.craneInfo.components[0].component}</td>
                            <td>{props.craneInfo.components[0].isActive}</td>
                            <td>{props.craneInfo.components[0].isConnected}</td>
                            <td>{props.craneInfo.components[0].absolutePosition.x}</td>
                            <td>{props.craneInfo.components[0].absolutePosition.y}</td>
                            <td>{props.craneInfo.components[0].absolutePosition.z}</td>
                            <td>{props.craneInfo.components[0].speed.acceleration.y}</td>
                            <td>{props.craneInfo.components[0].speed.activeAcceleration.y}</td>
                            <td>{props.craneInfo.components[0].speed.speed.y}</td>
                            <td>{props.craneInfo.container.id}</td>
                            <td>{props.craneInfo.container.isConnected}</td>
                            <td>{props.craneInfo.container[0].absolutePosition.x}</td>
                            <td>{props.craneInfo.container[0].absolutePosition.y}</td>
                            <td>{props.craneInfo.container[0].absolutePosition.z}</td>
                            <td>{props.craneInfo.container[0].speed.x}</td>
                            <td>{props.craneInfo.container[0].speed.y}</td>
                            <td>{props.craneInfo.container[0].speed.z}</td>
                            <td>{props.craneInfo.commands[0].command}</td>
                            <td>{props.craneInfo.commands[0].target}</td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
        </div>
    </>
    )
}

import React from 'react'
import {LaunchProfileQuery} from './../../generated/graphql'


interface Props{
    data:LaunchProfileQuery
}
const MissionInfo:React.FC<Props> = ({data}) => {
    console.log(data)
    return (
        <div>
            <h1>Mission Info</h1>
           {JSON.stringify(data)}
        </div>
    )
}

export default MissionInfo

import React from 'react'
import {LaunchesInfoQuery} from './../../generated/graphql'


interface Props{
    data:LaunchesInfoQuery
}
const MisionList:React.FC<Props> = ({data}) => {
    return (
        <div>
            <ul>
            {data.launches?.map((launchObj,index)=>{
                // eslint-disable-next-line @typescript-eslint/no-unused-expressions
               return <li key={index}>{launchObj?.mission_name}</li>
            })}
            </ul>
        </div>
    )
}

export default MisionList

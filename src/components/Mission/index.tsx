import React from 'react'
import { useLaunchesInfoQuery } from './../../generated/graphql'
import MisionList from './MisionList'

const MissionContainer = () => {
    const { data, error, loading } = useLaunchesInfoQuery()

    if (loading)
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        <h1>Loading.....</h1>
    if (error || !data)
        return <h1>Error</h1>
    return (
        <MisionList data={data} />
    )
}

export default MissionContainer;

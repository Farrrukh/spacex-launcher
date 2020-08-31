import React from 'react'
import { useLaunchProfileQuery } from './../../generated/graphql'
import MissionInfo from './MissionInfo'

const MissionInfoContainer = () => {

     const { data, loading, error } = useLaunchProfileQuery({
          variables: {
              id: '25'
          },
     });
        
     if (loading)
     // eslint-disable-next-line @typescript-eslint/no-unused-expressions
     <h1>Loading.....</h1>
 if (error || !data)
     return <h1>Error</h1>
 return (
     <MissionInfo data={data} />
 )
}

export default MissionInfoContainer;
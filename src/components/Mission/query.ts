import gql from 'graphql-tag';

export const QUERY_LAUNCHES_INFO = gql`
query LaunchesInfo{
    launches {
      mission_id
      mission_name
      launch_year
      launch_success
    }
  }
`

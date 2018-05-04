import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo';


const ChannelsList = ({ data: {loading, error, channels }}) => {
  if (loading) {
    return <p>Fetching Data</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }
  return 
  <ul className="list-group">
    { channels.map(channel => <li class="list-group-item" key={channel.id}> {channel.name} </li>) }
  </ul>
};

const channelsListQuery = gql`
  query ChannelsListQuery {
    channels {
      id
      name
    }
  }
`;

export default const ChannelsListWithData = graphql(channelsListQuery)(ChannelsList);
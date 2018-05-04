import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo';

const CreateChannel = ({ mutate }) => {
  const handleKeyUp = (e) => {
    if(e.keyCode === 13) {
      e.persist();
      mutate({
        variables: { name: e.target.value }
      });
    }
  };

  return (
    <input 
      type="text"
      className="form-control"
      placeholder="New channel"
      onKeyUp={handleKeyUp}
    />
  );
};

const CreateChannelMutation = gql`
  mutation addChannel($name: String!) {
    addChannel(name: $name) {
      id
      name
    }
  }  
`;

export default const CreateChannelWithMutation = graphql(
  CreateChannelMutation
)(CreateChannel);
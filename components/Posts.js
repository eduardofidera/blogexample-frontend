import React from 'react';
import Post from './Post';

import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class Posts extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            posts: undefined
        }
    }

    render(){
        if (this.props.allPostsQuery.loading) {
            return (
                <div>
                  Loading...
                </div>
            )
        }

        return (
            <div>
                {this.props.allPostsQuery.allPosts && this.props.allPostsQuery.allPosts.map((post) =>
                    <Post
                        key={post.id}
                        post={post}
                        refresh={() => this.props.allPostsQuery.refetch()}
                    />
                )}
            </div>
        )
    }
}

const ALL_POSTS_QUERY = gql`
query {
    allPosts {
        id
        title
        author {
            name
        }
    }
}
`

const PostsWithQuery = graphql(ALL_POSTS_QUERY, {
name: 'allPostsQuery',
options: {
  fetchPolicy: 'network-only',
},
})(Posts)

export default PostsWithQuery
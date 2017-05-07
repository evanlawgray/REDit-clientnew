export const LOGIN_USER = 'LOGIN_USER';
export const GET_WEEKS = 'GET_WEEKS';
export const GET_POSTS = 'GET_POSTS';
export const UPVOTE_POST = 'upvotePost';
export const SORT_BY_POPULARITY = 'sortByPopularity';
export const SORT_BY_DATE = 'sortByDate';

export const loginUser = (data) => {
  return dispatch => {

    const headers = new Headers({
      "Content-Type": "application/json"
    });

    const payload = JSON.stringify({
      ...data
    });

    const init = {
      method: 'POST',
      headers: headers,
      body: payload,
      mode: 'cors',
      cache: 'default'
    };

    const myRequest = new Request ( 'http://localhost:3001/auth/login', init );

    fetch( myRequest )
    .then( response => {
      if( !response.ok ) return Promise.reject();
      return response.json();
    }).then( json => {
      console.log(json);
      // dispatch({
      //   type: loginUser,
      //   payload: {
      //     ...data
      //   }
      // });
    });
  }
}

export const getWeeks = () => {
  return dispatch => {
    fetch( 'http://localhost:3001/api/weeks' )
    .then( response => {
      if ( !response.ok ) return Promise.reject();
      return response.json();
    })
    .then( json => {
      dispatch({
        type: GET_WEEKS,
        payload: {
          weeks: json
        }
      });
    });
  }
}

export const getPosts = (lessonId) => {
  return dispatch => {
    fetch( 'http://localhost:3001/api/lessons/' + lessonId + '/posts' )
    .then( response => {
      if( !response.ok ) return Promise.reject();
      return response.json();
    })
    .then( json => {
      console.log(json);
      dispatch({
        type: GET_POSTS,
        payload: {
          posts: [...json]
        }
      });
    });
  }
}

// export const upvotePost = post => ({ type: UPVOTE_POST, postId: post.id });

export const upvotePost = post => {
  return dispatch => {
    const headers = {
      "Content-Type": "application/json"
    };
    const payload = {
      postId: post.id,
      voteTotal: post.votes + 1
    }

    const init = {
      method: 'POST',
      headers: JSON.stringify(headers),
      body: JSON.stringify(payload),
      mode: 'cors',
      cache: 'default'
    };

    const myRequest = new Request('http://localhost:3001/api/posts/:post_id/votes', init);

    console.log(myRequest);

    fetch(myRequest)
    .then( response => {
      if(!response.ok) return Promise.reject();
      return response.json();
    })
    .then( json => {
      dispatch({
        type: UPVOTE_POST,
        payload: {
          posts: json
        }
      });
    });
  }
}

export const sortByPopularity = filterType => ({ type: SORT_BY_POPULARITY, filterType });

export const sortByDate = filterType => ({ type: SORT_BY_DATE, filterType });

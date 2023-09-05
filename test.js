import React from "react";

// class Test extends React.Component {
    export const getBookmarks = () => {
        return dispatch => {
          return axios.get('https://partner.shopeemobile.com/api/v2/product/get_category').then(response => {
            dispatch({
              type: 'GET_BOOKMARKS',
              data: response.data.suggestions,
              bookmarks: response.data.bookmarks
            })
          })
        }
      }
   

// }
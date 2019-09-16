import axios from "axios";
const apiUrl = process.env.REACT_APP_API_URL;

export function articleListAction() {
    return function (dispatch) {
        dispatch({ type: "ARTICLE_LIST" });
        console.log("apiUrl", apiUrl);
        axios.get(apiUrl + '/articles')
            .then((response) => {
                console.log(response, "response");
                dispatch({ type: "ARTICLE_LIST_FULFILLED", payload: response.data })
                console.log(response)
            })
            .catch((err) => {
                dispatch({ type: "ARTICLE_LIST_REJECTED", payload: err.response.data })
            })
    }
}


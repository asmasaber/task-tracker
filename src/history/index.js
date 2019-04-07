var pushStateEvent = new CustomEvent("pushState", {
    detail: {
        path: window.location.pathname
    }
});
export const history = {
    pushState
};
function pushState(path)
{
    window.history.pushState(null, null,path);
    window.dispatchEvent(pushStateEvent);
}
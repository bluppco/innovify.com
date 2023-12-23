export const endpointFetch = ( environment ) => {

    return environment === "staging" ? "https://staging.api.innovify.blupp.co" : "https://api.innovify.blupp.co"

}

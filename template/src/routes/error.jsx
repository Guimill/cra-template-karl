import { useRouteError } from "react-router-dom"

export default function Index() {

    const error = useRouteError();
    console.error(error);

    return (
        <>
            <div>
                <h1>Oops!</h1>
                <p>Une petite erreur de parcours</p>
                <b> {error.statusText || error.message} </b>
            </div>
        </>
    )

}
export default function ContentWrapper({children}) {
    return(
        <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
                {children}
            </div>
        </div>
    )
}
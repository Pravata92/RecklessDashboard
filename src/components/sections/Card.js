export default function Card({title}){
    return (
        <>
            <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">{title}</h6>
                    </div>
                    <div className="card-body">
                        <div className="text-center">
                            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: '25rem'}} src="/img/product_dummy.svg" alt="image dummy"/>
                        </div>
                        <p className="text-gray-900">{content}</p>
                        <a target="_blank" rel="nofollow" href="/">View product detail</a>
                    </div>
                </div>
            </div>
        </>
    )
}
export default function LastAdded({element, color, imgURL, name, description}){
    return( <>  
                <div className="col-lg-6 mb-4">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className={`m-0 font-weight-bold text-${color}`}>Last {element} in Data Dase</h6>
                        </div>
                        <div className="card-body">
                            <div className="text-center">
                                <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: '25rem'}} src={imgURL} alt="image dummy"/>
                            </div>
							<h6 className={`m-0 font-weight-bold text-${color}`}>{name}</h6>
                            <p className="text-gray-900">{description}</p>
                            <a target="_blank" rel="nofollow" href="/">View product detail</a>
                        </div>
                    </div>
                </div>
            
            </>
)
}   
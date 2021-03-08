import Card from './Card'
import SimpleLabel from './SimpleLabel'

export default function Table({category}){
    return( <>  
                <Card element="Total by category in data base" color="primary">
                    <div className="row">
                    <SimpleLabel category={category} />
                    </div>
                </Card>
            </>
)
}   
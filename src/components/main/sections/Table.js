import Card from './Card'
import SimpleLabel from './SimpleLabel'
export default function Table(){
    return( <>  
                <Card element="Total categories in data base" color="primary">
                    <div className="row">
                        <SimpleLabel category="category 0"/>
                        <SimpleLabel category="category 1"/>
                        <SimpleLabel category="category 2"/>
                        <SimpleLabel category="category 3"/>                      
                    </div>
                </Card>
            </>
)
}   
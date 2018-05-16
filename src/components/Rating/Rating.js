import React, {Component} from 'react';

class Rating extends Component{

    render(){
        const {stars} = this.props;
        
        if(stars === 4){
            return(
                <div><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></div>
            )
        }
        if(stars === 4.5){
            return(
                <div><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half"></i></div>
            )
        }
        if(stars === 5){
            return(
                <div><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></div>
            )
        }
        else{
            return(<div></div>);
        }
    }

}

export default Rating;

import React, {Component} from 'react'
import ToggleButton from './ToggleButton'
import '../App.css';


 class MovieList extends Component {
    constructor (props){
     super(props)
    
     this.state={
         
         poster: props.poster,
         title: props.title,
         category: props.category,
         likes: props.likes,
         dislikes: props.dislikes,
         deleteEvent: props.deleteEvent
         
     }

    }


    clickHandler (value) {
        if (!value) {
          this.setState(prev=>{
            return {
              likes: prev.likes + 1,
    
            }
          })
        } else {
          this.setState(prev=>{
            return {
              likes: prev.likes - 1,
            }
          })
        }
      }
      
      deleteMovie=(index)=>{
        const movies=Object.assign([], this.state.movies)
        movies.splice(index, 1)
         this.setState({movies:movies});
       
      
      }
    
    
    render(){
        return (
            <div>
                
                <div className="card">
                    <img  className="card_image"src={this.state.poster}  />
                    <h1 className="card_title"> {this.state.title} </h1>
    
                    <p className="card_subtitle">{this.state.category}</p>
                    <div className="card-ratio"> {Math.round(this.state.likes / this.state.dislikes)}</div>
    
                <div className="card_footer">
    
                    <div>👍 {this.state.likes}</div>
                    <div> 👎 {this.state.dislikes}</div>
    
                    <ToggleButton click={this.clickHandler.bind(this)} />
                    <button className="btn btn-outline-danger text-uppercase mb-2 px-2" onClick={this.state.deleteEvent}>✗</button>
                </div>
                
    
                </div>
    
                    
                    
            </div>
        )
    
                
    
 }

}
    export default MovieList;
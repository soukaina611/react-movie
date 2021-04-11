import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './Component/MovieList';
import { movies } from './Utils/movies';
import SelectMovie from './Component/SelectMovie'

class App extends Component {

  constructor (props) {
    super(props)
  this.state= {
    movies: movies,
    categories: [],
    SelectedCategories:[]
    
  }
 
}

 categoriesMovie(){
    const categoriesMovie= [...new Set (movies.map(entry=>entry.category)).values()];
   
      return categoriesMovie;
      
    
  }

 deleteMovie=(index)=>{
    const movies=Object.assign([], this.state.movies)
    movies.splice(index, 1)
     this.setState({movies:movies});
    console.log({index});
  
  }

  handleSelect=(values)=>{
    this.setState({
      SelectedCategories: values
    })
    

  }


render(){

  return (
    <div>
    
      
    <SelectMovie onChange={this.handleSelect} categories={this.categoriesMovie()}></SelectMovie>
  
      <div className="row">
      
        {this.state.movies.filter((movie)=>{

          return this.state.SelectedCategories.includes(movie.category) || (this.state.SelectedCategories.length === 0)

        }).map((movie, key)=>{
          return(
            

             <div> 
              <MovieList 
            title={movie.title}
            poster={movie.poster}
            category={movie.category}
            likes={movie.likes}
            dislikes={movie.dislikes}
            key={movie.id}
            deleteEvent={this.deleteMovie.bind(this, key)}
     
          >

              </MovieList>
              </div>
          
          )

        })
      }
      
      
    </div>

    </div>
    
  )}



}
export default App;
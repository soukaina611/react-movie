import React,{Component} from "react";

class SelectMovie extends Component{

  constructor(props)
  {
    super(props)
    this.handleChange = this.handleChange.bind(this);
    this.state={
        categories: props.categories,
        
    }
  }


  handleChange(e){
    var options = e.target.options;
    var values = [];
    for (var i = 0, l = options.length; i < l; i++) {
      if (options[i].selected) {
        values.push(options[i].value);
      }
    }
    this.props.onChange(values);
  }


  render() {
        
    
    return (<select onChange={this.handleChange}  class="select" multiple data-mdb-filter="true">
  
          {this.props.categories.map((category,index)=>{
            return <option key={index} value={category}>{category}</option>
          })}
        
        </select>)
    
  
  }
            
}
export default SelectMovie;

   


import React from 'react';
import Card from './Card/card'
import michael from "../michael.json"



class Rows extends React.Component {
    state = { 
        michael: '',
        count: 0,
        imageClicked: []
     }
     handleIncrement = () => {
        // We always use the setState method to update a component's state
        this.setState({ count: this.state.count + 1 });
      };

      resetGame= () => {
        this.setState({count: 0})
      }
    
    handleClickEvent = event => {
       console.log('Is this going to show up?');
       event.preventDefault()
     //Add find to figure out which id is being clicked
    const findId = michael.find(imageObject => imageObject.image === event.target.src)
    if (findId.clicked === false){
      this.handleIncrement()
      console.log(this.state.count)
      findId.clicked = true
      this.shuffledArray(michael)
    } else if (findId.clicked === true){
      alert("Incorrect Answer!")
      this.resetGame()
      this.shuffledArray(michael)
    }
    return 
   }


     shuffledArray = array => {
        let i = array.length - 1;
        for (; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          const temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
        return array;
      }


    render() { 
        return ( 
            <>
            
        <div className ="container is-fluid">
        <div className ="columns is-centered is-multiline">
  
        {this.shuffledArray(michael).map(michael => ( 
        <div className ="column" key={michael.id}>
            <Card 
            id={michael.id}
            image={michael.image}
            onClick={this.handleClickEvent}
            />
            
            </div>
            ))}
            </div>
        </div>
        </>
);
    }
}

export default Rows;

// Look up document .onClick for each card in order to introduce the logic 

//When you click on an image
//if(imageClickedForFirstTimee) =>  Increase points
//if(ImageClickedforSecondTime) => reset score 

//handleShuffle when component mounts 
//handleShuffle = (event) => Math.random//with array of images forEach to iterate over the cards.
//push shuffled cards into new array (displayArray)
//displayArray will then populate images onto the cards? 
//{Math.floor(Math.random() * 10) + 1},{Math.floor(Math.random() * 10) + 1},
//


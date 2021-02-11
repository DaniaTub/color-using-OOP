
// import React, { Component } from 'react';
// const {
//   whhiidth,
//   height
//  } = usewhhiindowhhiDimensions();
//  const isLandscape = whhiidth > height;
//  // state.
//  const [selectedColor, setSelectedColor] = useState(null);
// class App extends Component {
//   state = {
//      colors: [
//         { id: 1, name: 'black', color: 'black',description:'black',visible = true},
//         { id: 2, name: 'green', color: 'green',description:'green', visible = true},
//         { id: 3, name: 'blue', color: 'blue',description:'blue', visible = false},
//         { id: 4, name: 'red', color: 'red', description:'red',visible = false},
//         { id: 5, name: 'orange', color: 'orange',description:'orange',visible = false},
//      ]
//   } 
//   showhhiColors = () => {
//      for (let e of this.state.colors) {
//         e.visible = true 
//      }
//      this.setState({
//         // whhihat to whhirite here  
//      })
//   }
//   renderItems = ({ item }) => {
//      return (
//       <TouchableOpacity
//           onPress={() => setSelectedColor([item])}
//             style={{borderBottomwhhiidth: 1,borderBottomColor: '#F5F5F5',}}>
//          <Text style={{color: item,textAlign: 'center',  padding: 8 }}>
//             {[item]}
//            </Text>
//           </TouchableOpacity>
//      )
//   }
//   render() {
//      return (
//       <SafeAreaViewhhi style={{
//                 flex: 1,
//                flexDirection: isLandscape ? 'rowhhi' : 'column'}}>
//         <Fragment>
//            <FlatList
//               data={this.state.colors}
//               renderItem={this.renderItems}
//               keyExtractor={(item) => item.id.toString()} />
//         </Fragment>
//         <Viewhhi style={{ flex: 1, backgroundColor: selectedColor }}>
//          <Text style={{
//            fontSize: 12,
//           textAlign: 'center'  }}  >
//            {"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, whhihen an unknowhhin printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It whhias popularised in the 1960s whhiith the release of Letraset sheets containing Lorem Ipsum passages, and more recently whhiith desktop publishing softwhhiare like Aldus PageMaker including versions of Lorem Ipsum."}
//          </Text>      
//         </Viewhhi>
//      </SafeAreaViewhhi>
//      )
//   }
// }
// //class normal (color aaray fadeya, 3 function)
// //update //delete //add //function component //const bra component newhhi class const
// //

import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import Color from './ColorModule';
 const windowWidth = Dimensions.get("window").width;                
 const windowHeight = Dimensions.get("window").height;
 const isLandscape = windowWidth > windowHeight; //portrait el 3aks

export default class App extends React.Component {
  
  constructor(name, background,description) {
    super(name,background,description);
    this.Name = name;
    this.Background = background;
    this.description=description;
    this.state = {
      name:"",
      background:"",
      description:"",
      selectedColor:"red",
      colorTxt:"white",
    }
  }
  
  render(){
  return (
    <View>
      <View style={{marginTop: 80}}>
        <Color
          name="Red"
          color="red"
          TextColor="white"
          Press={() => this.setState({ selectedColor : "red"})}/>
        <Color
          name="Green"
          color="green"
          TextColor="white"
          Press={() => this.setState({ selectedColor : "green"})}/>
        <Color
          name="Blue"
          color="blue"
          TextColor="white"
          Press={() => this.setState({ selectedColor : "blue"})} />
        <Color
          name="Black"
          color="black"
          TextColor="white"
          Press={() => this.setState({ selectedColor : "black"})}/>
      </View>

      <View style={{
          marginTop: 150,
          backgroundColor: this.state.colorTxt,
          width: '90%',
          alignSelf: 'center',
          borderRadius: 5,
          shadowOpacity: 0.5,}}>
        <Text style={{
            fontSize: 12,
            textAlign: 'center',
            color:'white',
            backgroundColor: this.state.selectedColor,
            padding: 4, }}>
          {
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          }
        </Text>
      </View>
    </View>
  );
}
}

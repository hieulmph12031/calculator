import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';


export default function App() {


  return (
    <View style={styles.container}>
      <View style={styles.KetQuq}>
        <Text style={styles.kqText}>0</Text>
      </View>
      <View style={styles.inputDL}>

        <View style={styles.contents}>
          <TouchableOpacity style={styles.ButtonS}>
            <Text style={styles.TextNumberS}>DEL</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.ButtonS}>
            <Text style={styles.TextNumberS}>+/-</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.ButtonS}>
            <Text style={styles.TextNumberS}>%</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.ButtonYellow}>
            <Text style={styles.TextNumber}>+</Text>
          </TouchableOpacity>

        </View>
        <View style={styles.contents}>
          <TouchableOpacity style={styles.Button}>
            <Text style={styles.TextNumber}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Button}>
            <Text style={styles.TextNumber}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Button}>
            <Text style={styles.TextNumber}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.ButtonYellow}>
            <Text style={styles.TextNumber}>-</Text>
          </TouchableOpacity>

        </View>
        <View style={styles.contents}>
          <TouchableOpacity style={styles.Button}>
            <Text style={styles.TextNumber}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Button}>
            <Text style={styles.TextNumber}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Button}>
            <Text style={styles.TextNumber}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.ButtonYellow}>
            <Text style={styles.TextNumber}>*</Text>
          </TouchableOpacity>

        </View>
        <View style={styles.contents}>
          <TouchableOpacity style={styles.Button}>
            <Text style={styles.TextNumber}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Button}>
            <Text style={styles.TextNumber}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Button}>
            <Text style={styles.TextNumber}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.ButtonYellow}>
            <Text style={styles.TextNumber}>%</Text>
          </TouchableOpacity>

        </View>
      
      </View>
      <View>
        <TouchableOpacity style={styles.ButtonYellow}>
          <Text style={styles.TextNumber}>=</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  inputDL: {
    flex: 6,
    

  },
  KetQuq: {
    flex: 2,
    justifyContent: 'center',
    
  },
  kqText: {
    color: 'white',
    fontSize: 80,
    fontWeight: 'bold',
    textAlign: 'right',
    padding: 20

  },
  numbers: {
    flex: 3,
  },
  Button: {
    alignItems: "center",
    backgroundColor: "#515151",
    padding: 30,
    borderRadius : 100,
    margin : 10,
    

  },
  contents: {
    
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

  },
  TextNumber:{
    fontSize : 17,
    fontWeight:'bold',
    color : 'white'
  },
  ButtonYellow: {
    alignItems: "center",
    backgroundColor: "#FFB600",
    padding: 30,
    borderRadius : 100,
    margin : 10,
    

  },
  ButtonS: {
    alignItems: "center",
    backgroundColor: "#CCCCCC",
    padding: 22,
    borderRadius : 100,
    margin : 10,
    

  },
  TextNumberS:{
    fontSize : 17,
    fontWeight:'bold',
    color : 'Black'
  },

});

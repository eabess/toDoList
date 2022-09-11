// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { NavigationContainer } from "@react-navigation/native";
// import { ImageBackground, StatusBar, StyleSheet } from "react-native";
// import AntDesign from 'react-native-vector-icons/AntDesign';

// import Backlog from './components/Backlog';
// import InProgress from './components/InProgress';
// import Done from './components/Done';

// const Tab = createBottomTabNavigator();
// const bgApp = { uri: 'https://i.pinimg.com/originals/ff/b6/5c/ffb65c935aa5e109144dfa4ccd5e51ff.jpg' };

// export default function Category() {
  
//     return (
//       <>
//         <StatusBar style='dark'/>
          
//           <ImageBackground 
//                 source={bgApp} 
//                 style={styles.bgApp}>
//             <NavigationContainer >
//               <Tab.Navigator
//               screenOptions={({ route }) => ({
//                 tabBarIcon: ({ focused, color, size }) => {
//                   let iconName;
      
//                   if (route.name === 'Backlog') {
//                     iconName = 'solution1';
//                   } else if (route.name === 'In Progress') {
//                     iconName = focused ? 'clockcircle' : 'clockcircleo';
//                   } else if (route.name === 'Done') {
//                     iconName = focused ? 'checkcircle' : 'checkcircleo';
//                   } 
      
//                   return <AntDesign name={iconName} size={size} color={color} />;
//                 },
//                 tabBarActiveTintColor: '#ff0366',
//                 tabBarInactiveTintColor: '#71856e',
//               })}
//               >
//                 <Tab.Screen name='Backlog' component={Backlog} />
//                 <Tab.Screen name='In Progress' component={InProgress} />
//                 <Tab.Screen name='Done' component={Done} />
//               </Tab.Navigator>
//             </NavigationContainer>
//           </ImageBackground>
//       </>
//     );
//   }
  
//   const styles = StyleSheet.create({
//     appContainer: {
//       flex: 1,
//       paddingTop: 80,
//       paddingHorizontal: 16,
//     },
//     bgApp: {
//       flex: 1,
//     },
//     golsConteiner: {
//       flex: 5,
//     },
//   });
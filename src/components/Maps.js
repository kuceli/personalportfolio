// import React from "react";
// import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";

// const mapStyles = {
//   width: "45%",
//   height: "54%",
// };

// export class MapContainer extends React.Component {
//   state = {
//     showingInfoWindow: false, // Hides or shows the InfoWindow
//     activeMarker: {}, // Shows the active marker upon click
//     selectedPlace: {}, // Shows the InfoWindow to the selected place upon a marker
//   };

//   onMarkerClick = (props, marker, e) =>
//     this.setState({
//       selectedPlace: props,
//       activeMarker: marker,
//       showingInfoWindow: true,
//     });

//   onClose = (props) => {
//     if (this.state.showingInfoWindow) {
//       this.setState({
//         showingInfoWindow: false,
//         activeMarker: null,
//       });
//     }
//   };

//   render() {
//     return (
//       <Map
//         google={this.props.google}
//         zoom={14}
//         style={mapStyles}
//         initialCenter={{
//           lat: 9.0765,
//           lng: 7.3986,
//         }}
//       >
//         <Marker onClick={this.onMarkerClick} name={"Abuja, Nigeria"} />
//         <InfoWindow
//           marker={this.state.activeMarker}
//           visible={this.state.showingInfoWindow}
//           onClose={this.onClose}
//         >
//           <div>
//             <h4>{this.state.selectedPlace.name}</h4>
//           </div>
//         </InfoWindow>
//       </Map>
//     );
//   }
// }

// export default GoogleApiWrapper({
//   apiKey: "AIzaSyCrp4JT2KnSRfSF317yovDDyVwwfoKNQFE",
// })(MapContainer);

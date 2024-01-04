import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { data } from "../../JSON/API/eventDetail";
import eventDetailStyle from "../../UI/styles/eventDetailStyle";

export default function EventDetailComponent() {
  return (
    <View style={eventDetailStyle.container}>
      <Image source={{ uri: data.image }} style={eventDetailStyle.image} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={eventDetailStyle.textContainer}>
          <Text style={eventDetailStyle.title}>{data.title}</Text>
          <Text style={eventDetailStyle.subTitle}>{data.subTitle}</Text>
          <View>
            <Text style={eventDetailStyle.itemTitle}>Date and Time</Text>
            <View style={eventDetailStyle.row}>
              <Image
                style={eventDetailStyle.icon}
                source={require("../../../assets/icons/calendar.png")}
              />
              <Text style={eventDetailStyle.desc}>{data.dateAndTime}</Text>
            </View>
          </View>
          <View>
            <Text style={eventDetailStyle.itemTitle}>Location</Text>
            <View style={eventDetailStyle.row}>
              <Image
                style={eventDetailStyle.icon}
                source={require("../../../assets/icons/pin.png")}
              />
              <View>
                <Text style={eventDetailStyle.desc}>{data.location.title}</Text>
                <Text style={eventDetailStyle.desc}>
                  {data.location.address}
                </Text>
              </View>
            </View>

            <View>
              <MapView
                style={eventDetailStyle.mapView}
                initialRegion={{
                  longitude: data.location.coord.long,
                  latitude: data.location.coord.lat,
                  latitudeDelta: 0.0222,
                  longitudeDelta: 0.0221,
                }}
                scrollEnabled={false}
                zoomEnabled={false}
              >
                <Marker
                  coordinate={{
                    longitude: data.location.coord.long,
                    latitude: data.location.coord.lat,
                  }}
                />
              </MapView>
            </View>
          </View>
          <View>
            <Text style={eventDetailStyle.itemTitle}>Refund Policy</Text>
            <Text style={[eventDetailStyle.desc, eventDetailStyle.refundText]}>
              {data.policy}
            </Text>
          </View>
          <View>
            <Text style={eventDetailStyle.itemTitle}>About this event</Text>
            <View style={eventDetailStyle.row}>
              <Image
                style={eventDetailStyle.icon}
                source={require("../../../assets/icons/clock.png")}
              />
              <Text style={eventDetailStyle.desc}>{data.about.time}</Text>
            </View>
            <View style={eventDetailStyle.row}>
              <Image
                style={eventDetailStyle.icon}
                source={require("../../../assets/icons/ticket.png")}
              />
              <Text style={eventDetailStyle.desc}>{data.about.ticketType}</Text>
            </View>
            <Text style={[eventDetailStyle.desc, eventDetailStyle.refundText]}>
              {data.about.desc}
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

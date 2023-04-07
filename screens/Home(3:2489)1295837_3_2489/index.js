import React from "react";
import { View, ImageBackground, Text, StyleSheet, ScrollView } from "react-native";
import { connect } from "react-redux";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
export class Blank extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render = () => <ScrollView contentContainerStyle={{
    flexGrow: 1
  }} style={styles.ScrollView_1}>
      <View style={styles.View_2} />
      <View style={styles.View_3_2490}>
        <ImageBackground source={{
        uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fe6a6fa3-9c5c-4153-9c8e-45751ab796ad"
      }} style={styles.ImageBackground_3_2491} />
        <View style={styles.View_3_2493}>
          <ImageBackground source={{
          uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4344ba81-402d-4a64-91f2-80b7e52bf044"
        }} style={styles.ImageBackground_3_2494} />
        </View>
        <ImageBackground source={{
        uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6511e112-c010-498e-9468-a22aa9bd92c3"
      }} style={styles.ImageBackground_3_2496} />
        <View style={styles.View_3_2498}>
          <ImageBackground source={{
          uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e1693c33-ffa7-4132-98df-16be3d601d54"
        }} style={styles.ImageBackground_3_2499} />
        </View>
      </View>
      <View style={styles.View_3_2501}>
        <Text style={styles.Text_3_2501}>Version 1</Text>
      </View>
      <View style={styles.View_3_2502}>
        <ImageBackground source={{
        uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6e457445-d62a-4433-a38c-df2c4ee5b466"
      }} style={styles.ImageBackground_3_2503} />
        <ImageBackground source={{
        uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/71f0aa70-d57a-4521-9128-52dc6f02bd72"
      }} style={styles.ImageBackground_3_2504} />
        <View style={styles.View_3_2506}>
          <ImageBackground source={{
          uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/efa9d4ef-cee5-4c91-ab1c-b8ce34115006"
        }} style={styles.ImageBackground_3_2507} />
        </View>
        <ImageBackground source={{
        uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3ae60052-6d29-4299-83b5-70d8cf95e67f"
      }} style={styles.ImageBackground_3_2509} />
        <View style={styles.View_3_2511}>
          <ImageBackground source={{
          uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ed59437c-6f6d-4dd2-867f-80c03b0eed0a"
        }} style={styles.ImageBackground_3_2512} />
        </View>
      </View>
    </ScrollView>;
}
const styles = StyleSheet.create({
  ScrollView_1: {
    backgroundColor: "rgba(40, 62, 255, 1)"
  },
  View_2: {
    height: hp("100%")
  },
  View_3_2490: {
    width: wp("109%"),
    minWidth: wp("109%"),
    height: hp("179%"),
    minHeight: hp("179%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("-11%")
  },
  ImageBackground_3_2491: {
    width: wp("55%"),
    height: hp("90%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54%")
  },
  View_3_2493: {
    width: wp("55%"),
    height: hp("90%"),
    top: hp("89%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_3_2494: {
    width: wp("55%"),
    height: hp("90%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_3_2496: {
    width: wp("55%"),
    height: hp("90%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_3_2498: {
    width: wp("55%"),
    height: hp("90%"),
    top: hp("89%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54%")
  },
  ImageBackground_3_2499: {
    width: wp("55%"),
    height: hp("90%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_3_2501: {
    width: wp("87%"),
    minWidth: wp("87%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("37%"),
    justifyContent: "flex-start"
  },
  Text_3_2501: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 120,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_3_2502: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("65%")
  },
  ImageBackground_3_2503: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("0%")
  },
  ImageBackground_3_2504: {
    width: wp("4%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_3_2506: {
    width: wp("4%"),
    height: hp("7%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_3_2507: {
    width: wp("4%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_3_2509: {
    width: wp("4%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_3_2511: {
    width: wp("4%"),
    height: hp("7%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_3_2512: {
    width: wp("4%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  }
});

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = () => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Blank);
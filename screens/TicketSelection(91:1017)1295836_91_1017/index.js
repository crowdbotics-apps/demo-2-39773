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
      <View style={styles.View_91_1018}>
        <View style={styles.View_91_1019}>
          <View style={styles.View_91_1020}>
            <View style={styles.View_91_1021} />
            <View style={styles.View_91_1022} />
            <ImageBackground source={{
            uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/712eaeca-1a2f-46b2-9eda-7493fea570ec"
          }} style={styles.ImageBackground_91_1023} />
          </View>
          <View style={styles.View_91_1024}>
            <View style={styles.View_91_1025}>
              <Text style={styles.Text_91_1025}>People</Text>
            </View>
          </View>
          <View style={styles.View_91_1026}>
            <Text style={styles.Text_91_1026}>Events</Text>
          </View>
        </View>
        <View style={styles.View_91_1027}>
          <View style={styles.View_91_1028}>
            <View style={styles.View_91_1029} />
            <View style={styles.View_91_1030}>
              <View style={styles.View_91_1031}>
                <Text style={styles.Text_91_1031}>Filters</Text>
              </View>
              <ImageBackground source={{
              uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/84a419d3-6aac-4283-bd60-a1a0231d1fb7"
            }} style={styles.ImageBackground_91_1032} />
            </View>
          </View>
          <View style={styles.View_91_1034}>
            <View style={styles.View_91_1035}>
              <View style={styles.View_91_1036}>
                <View style={styles.View_91_1037} />
                <View style={styles.View_91_1038}>
                  <Text style={styles.Text_91_1038}>Sort by</Text>
                </View>
                <ImageBackground source={{
                uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e7eba546-5d97-4960-b2eb-89d08af59018"
              }} style={styles.ImageBackground_91_1039} />
                <ImageBackground source={{
                uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9dcf98de-1d9e-429d-acaa-061077eafbfc"
              }} style={styles.ImageBackground_91_1040} />
              </View>
            </View>
          </View>
          <View style={styles.View_91_1041}>
            <View style={styles.View_91_1042} />
            <ImageBackground source={{
            uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1df39b46-d855-45cc-887b-2efffdfe5eaf"
          }} style={styles.ImageBackground_91_1043} />
          </View>
        </View>
        <View style={styles.View_91_1044}>
          <View style={styles.View_91_1045}>
            <Text style={styles.Text_91_1045}>Discover</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_91_1046}>
        <View style={styles.View_91_1047}>
          <Text style={styles.Text_91_1047}>BUY TICKETS</Text>
        </View>
      </View>
      <ImageBackground source={{
      uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c819018f-31a4-4527-85fe-77eac1797216"
    }} style={styles.ImageBackground_91_1048} />
      <View style={styles.View_91_1064}>
        <Text style={styles.Text_91_1064}>
          Select the type of ticket you wish to purchase
        </Text>
      </View>
      <View style={styles.View_91_1068}>
        <Text style={styles.Text_91_1068}>
          NOTE: Once you have purchased your ticket, it will be sent to you in a
          .PDF format to your e-mail and stored in your EventMe account.
        </Text>
      </View>
      <View style={styles.View_91_1469}>
        <View style={styles.View_91_1066} />
        <View style={styles.View_91_1067}>
          <Text style={styles.Text_91_1067}>$65,00</Text>
        </View>
        <View style={styles.View_91_1069}>
          <Text style={styles.Text_91_1069}>Total Ticket Price</Text>
        </View>
      </View>
      <View style={styles.View_91_1473}>
        <View style={styles.View_91_1051}>
          <ImageBackground source={{
          uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/10e2f164-7f16-4288-ac50-4ccc48fe2578"
        }} style={styles.ImageBackground_91_1052} />
          <ImageBackground source={{
          uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8f3586d3-be6f-48cf-b3fe-e03b46765d2f"
        }} style={styles.ImageBackground_91_1053} />
        </View>
        <View style={styles.View_91_1054}>
          <ImageBackground source={{
          uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5fd17ce9-ec11-42ce-8a42-e6060564d981"
        }} style={styles.ImageBackground_91_1055} />
          <ImageBackground source={{
          uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e64c51d4-d1c6-4a33-bcd4-60e9fc45df9e"
        }} style={styles.ImageBackground_91_1056} />
        </View>
        <ImageBackground source={{
        uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fa13d0b0-cfc4-4d07-b1d9-622ddac13acb"
      }} style={styles.ImageBackground_91_1058} />
        <View style={styles.View_91_1060}>
          <ImageBackground source={{
          uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7149b5e5-9a68-4933-8d56-7e5fb001d01a"
        }} style={styles.ImageBackground_91_1061} />
          <ImageBackground source={{
          uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7d0e0e4c-d858-412e-b6bd-3c7b77ae5479"
        }} style={styles.ImageBackground_91_1062} />
        </View>
        <ImageBackground source={{
        uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2d85d11d-0885-4806-82f3-d1f223ea4c73"
      }} style={styles.ImageBackground_91_1070} />
        <ImageBackground source={{
        uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/da069fab-5523-4cb0-ae0f-9d69253d4164"
      }} style={styles.ImageBackground_91_1071} />
        <ImageBackground source={{
        uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9cf81ce5-bebd-4403-a548-9a5b6cc2609f"
      }} style={styles.ImageBackground_91_1072} />
        <ImageBackground source={{
        uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ef454414-50f0-4fbb-84d4-bf806f3175a7"
      }} style={styles.ImageBackground_91_1073} />
        <View style={styles.View_91_1076}>
          <Text style={styles.Text_91_1076}>Select</Text>
        </View>
        <View style={styles.View_91_1077}>
          <Text style={styles.Text_91_1077}>Overview</Text>
        </View>
        <View style={styles.View_91_1078}>
          <Text style={styles.Text_91_1078}>Payment</Text>
        </View>
        <View style={styles.View_91_1079}>
          <Text style={styles.Text_91_1079}>Confirmation</Text>
        </View>
      </View>
      <View style={styles.View_91_1080}>
        <View style={styles.View_91_1081} />
        <View style={styles.View_91_1084}>
          <Text style={styles.Text_91_1084}>1 Ticket</Text>
        </View>
        <View style={styles.View_91_1472}>
          <View style={styles.View_91_1082} />
          <ImageBackground source={{
          uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d1869983-0144-4b50-b304-31bc9e9356bb"
        }} style={styles.ImageBackground_91_1085} />
        </View>
        <View style={styles.View_91_1471}>
          <View style={styles.View_91_1470} />
          <ImageBackground source={{
          uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dced2473-e673-4aa2-8f77-32e5afe3d211"
        }} style={styles.ImageBackground_91_1087} />
        </View>
      </View>
      <View style={styles.View_91_1089}>
        <View style={styles.View_91_1090} />
        <View style={styles.View_91_1091} />
        <View style={styles.View_91_1092} />
        <ImageBackground source={{
        uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e13fbc51-272b-4037-9999-be7b510e2fbf"
      }} style={styles.ImageBackground_91_1093} />
        <ImageBackground source={{
        uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1ba261c1-1cfb-4f02-9d25-2ff7f522cb27"
      }} style={styles.ImageBackground_91_1094} />
        <ImageBackground source={{
        uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3526da03-7a28-423f-9710-eb1041d2c7b8"
      }} style={styles.ImageBackground_91_1095} />
        <View style={styles.View_91_1096}>
          <Text style={styles.Text_91_1096}>Regular</Text>
        </View>
        <View style={styles.View_91_1097}>
          <Text style={styles.Text_91_1097}>$65,00</Text>
        </View>
        <View style={styles.View_91_1098}>
          <Text style={styles.Text_91_1098}>$150,00</Text>
        </View>
        <View style={styles.View_91_1099}>
          <Text style={styles.Text_91_1099}>$400,00</Text>
        </View>
        <View style={styles.View_91_1100}>
          <Text style={styles.Text_91_1100}>Fan Pit</Text>
        </View>
        <View style={styles.View_91_1101}>
          <Text style={styles.Text_91_1101}>VIP</Text>
        </View>
        <ImageBackground source={{
        uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/519013a0-e418-4790-95d5-d040d68ebe47"
      }} style={styles.ImageBackground_91_1102} />
      </View>
      <View style={styles.View_91_1104}>
        <View style={styles.View_91_1105}>
          <View style={styles.View_91_1106} />
          <ImageBackground source={{
          uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b7f97e11-c515-4ba2-ab47-0dd68ff7fbe7"
        }} style={styles.ImageBackground_91_1107} />
          <View style={styles.View_91_1110}>
            <Text style={styles.Text_91_1110}>Continue</Text>
          </View>
        </View>
      </View>
      <ImageBackground source={{
      uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1c575663-1375-4553-b4ff-06cc350a8c92"
    }} style={styles.ImageBackground_91_1468} />
    </ScrollView>;
}
const styles = StyleSheet.create({
  ScrollView_1: {
    backgroundColor: "rgba(30, 21, 47, 1)"
  },
  View_2: {
    height: hp("119%")
  },
  View_91_1018: {
    width: wp("82%"),
    minWidth: wp("82%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("-18%")
  },
  View_91_1019: {
    width: wp("34%"),
    minWidth: wp("34%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%")
  },
  View_91_1020: {
    width: wp("34%"),
    minWidth: wp("34%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_91_1021: {
    width: wp("34%"),
    minWidth: wp("34%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 132, 64, 1)",
    opacity: 0.20000000298023224
  },
  View_91_1022: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("1%"),
    backgroundColor: "rgba(255, 133, 64, 1)"
  },
  ImageBackground_91_1023: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("2%")
  },
  View_91_1024: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("1%")
  },
  View_91_1025: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_91_1025: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_91_1026: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_91_1026: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_91_1027: {
    width: wp("46%"),
    minWidth: wp("46%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("5%")
  },
  View_91_1028: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_91_1029: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(75, 43, 50, 1)",
    borderWidth: 0.800000011920929
  },
  View_91_1030: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%")
  },
  View_91_1031: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_91_1031: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_91_1032: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_91_1034: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("0%")
  },
  View_91_1035: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_91_1036: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_91_1037: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(75, 43, 50, 1)",
    borderWidth: 0.800000011920929
  },
  View_91_1038: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_91_1038: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_91_1039: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%")
  },
  ImageBackground_91_1040: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%")
  },
  View_91_1041: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("0%")
  },
  View_91_1042: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(75, 43, 50, 1)",
    borderWidth: 0.800000011920929
  },
  ImageBackground_91_1043: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_91_1044: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("0%")
  },
  View_91_1045: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_91_1045: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 2.6,
    textTransform: "uppercase"
  },
  View_91_1046: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("5%")
  },
  View_91_1047: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_91_1047: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  ImageBackground_91_1048: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  View_91_1064: {
    width: wp("74%"),
    minWidth: wp("74%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("28%"),
    justifyContent: "flex-start"
  },
  Text_91_1064: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_91_1068: {
    width: wp("80%"),
    minWidth: wp("80%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("80%"),
    justifyContent: "flex-start"
  },
  Text_91_1068: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_91_1469: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("92%")
  },
  View_91_1066: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1
  },
  View_91_1067: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_91_1067: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_91_1069: {
    width: wp("28%"),
    minWidth: wp("28%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_91_1069: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_91_1473: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("13%")
  },
  View_91_1051: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_91_1052: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_91_1053: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_91_1054: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("0%")
  },
  ImageBackground_91_1055: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_91_1056: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_91_1058: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("0%")
  },
  View_91_1060: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("0%")
  },
  ImageBackground_91_1061: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_91_1062: {
    width: wp("8%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_91_1070: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("3%")
  },
  ImageBackground_91_1071: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("3%")
  },
  ImageBackground_91_1072: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    top: hp("3%")
  },
  ImageBackground_91_1073: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%")
  },
  View_91_1076: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_91_1076: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "450",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_91_1077: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_91_1077: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "450",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_91_1078: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_91_1078: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "450",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_91_1079: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_91_1079: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "450",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_91_1080: {
    width: wp("49%"),
    minWidth: wp("49%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("69%")
  },
  View_91_1081: {
    width: wp("49%"),
    minWidth: wp("49%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.15000000596046448
  },
  View_91_1084: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_91_1084: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_91_1472: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%")
  },
  View_91_1082: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(86, 80, 99, 1)"
  },
  ImageBackground_91_1085: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_91_1471: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("1%")
  },
  View_91_1470: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(86, 80, 99, 1)"
  },
  ImageBackground_91_1087: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_91_1089: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("40%")
  },
  View_91_1090: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(130, 64, 255, 1)"
  },
  View_91_1091: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.25
  },
  View_91_1092: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.25
  },
  ImageBackground_91_1093: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%")
  },
  ImageBackground_91_1094: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("10%")
  },
  ImageBackground_91_1095: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("17%")
  },
  View_91_1096: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_91_1096: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_91_1097: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_91_1097: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_91_1098: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61%"),
    top: hp("10%"),
    justifyContent: "flex-start"
  },
  Text_91_1098: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_91_1099: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61%"),
    top: hp("17%"),
    justifyContent: "flex-start"
  },
  Text_91_1099: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_91_1100: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("10%"),
    justifyContent: "flex-start"
  },
  Text_91_1100: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_91_1101: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("17%"),
    justifyContent: "flex-start"
  },
  Text_91_1101: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_91_1102: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_91_1104: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("101%")
  },
  View_91_1105: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_91_1106: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(130, 64, 255, 1)"
  },
  ImageBackground_91_1107: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("2%")
  },
  View_91_1110: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_91_1110: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "450",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_91_1468: {
    width: wp("102%"),
    minWidth: wp("102%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1%"),
    top: hp("66%")
  }
});

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = () => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Blank);
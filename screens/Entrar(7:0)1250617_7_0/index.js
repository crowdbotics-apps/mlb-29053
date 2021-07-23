import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@modules"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1453/833a/e4f07736537072848b0b659bcc4dd764"
        }}
        style={styles.ImageBackground_40_19}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1453/833a/e4f07736537072848b0b659bcc4dd764"
        }}
        style={styles.ImageBackground_78_95}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b71c/4cb4/18b2259b0b74c29fe999dd63e26a54d2"
        }}
        style={styles.ImageBackground_26_4}
      />
      <View style={styles.View_35_21}>
        <Text style={styles.Text_35_21}>
          Seu aplicativo especializado em investimentos
        </Text>
      </View>
      <View style={styles.View_35_2}>
        <Text style={styles.Text_35_2}>ML BUSINESS</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/edac/ec23/12b1e3e1f9a88f660da1eb1b09e11d95"
        }}
        style={styles.ImageBackground_35_22}
      />
      <View style={styles.View_35_23}>
        <Text style={styles.Text_35_23}>ENTRAR</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 0.6700000166893005)" },
  View_2: { height: hp("100%") },
  ImageBackground_40_19: {
    width: wp("104.69271341959636%"),
    minWidth: wp("104.69271341959636%"),
    height: hp("102.34375%"),
    minHeight: hp("102.34375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-2.7777777777777777%"),
    top: hp("-1.25%"),
    resizeMode: "cover"
  },
  ImageBackground_78_95: {
    width: wp("104.69271341959636%"),
    minWidth: wp("104.69271341959636%"),
    height: hp("102.34375%"),
    minHeight: hp("102.34375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-2.7777777777777777%"),
    top: hp("-1.25%"),
    resizeMode: "cover"
  },
  ImageBackground_26_4: {
    width: wp("42.22222222222222%"),
    minWidth: wp("42.22222222222222%"),
    height: hp("20.78125%"),
    minHeight: hp("20.78125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.88888888888889%"),
    top: hp("11.40625%"),
    resizeMode: "cover"
  },
  View_35_21: {
    width: wp("70%"),
    minWidth: wp("70%"),
    minHeight: hp("10.625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.666666666666664%"),
    top: hp("50%"),
    justifyContent: "center"
  },
  Text_35_21: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_2: {
    width: wp("65%"),
    minWidth: wp("65%"),
    minHeight: hp("5.78125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.666666666666664%"),
    top: hp("34.53125%"),
    justifyContent: "center"
  },
  Text_35_2: {
    color: "rgba(38, 62, 108, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 4,
    textTransform: "none"
  },
  ImageBackground_35_22: {
    width: wp("45.83333333333333%"),
    minWidth: wp("45.83333333333333%"),
    height: hp("7.34375%"),
    minHeight: hp("7.34375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.22222222222222%"),
    top: hp("70.3125%")
  },
  View_35_23: {
    width: wp("33.05555555555556%"),
    minWidth: wp("33.05555555555556%"),
    minHeight: hp("8.125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.05555555555556%"),
    top: hp("70%"),
    justifyContent: "center"
  },
  Text_35_23: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)

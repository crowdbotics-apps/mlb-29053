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
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/45bf/c019/bf48bd12a4744c6f5395b698e66d4a10"
        }}
        style={styles.ImageBackground_78_3}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8287/6adf/4e2639412cdaf84c99bc53e7326ab049"
        }}
        style={styles.ImageBackground_78_82}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1453/833a/e4f07736537072848b0b659bcc4dd764"
        }}
        style={styles.ImageBackground_78_92}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1453/833a/e4f07736537072848b0b659bcc4dd764"
        }}
        style={styles.ImageBackground_78_96}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1c18/77f2/828bc43a9d5cab4948002a8be39ba98e"
        }}
        style={styles.ImageBackground_78_30}
      />
      <View style={styles.View_78_28}>
        <Text style={styles.Text_78_28}>Carregando...</Text>
      </View>
      <View style={styles.View_78_31}>
        <Text style={styles.Text_78_31}>
          Carregamento para confirmação da conta{" "}
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e8a9/fade/9d1b69700f1470fd8526c7b580fb8e56"
        }}
        style={styles.ImageBackground_91_50}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("100%") },
  ImageBackground_78_3: {
    width: wp("103.8478512234158%"),
    minWidth: wp("103.8478512234158%"),
    height: hp("100.60111045837404%"),
    minHeight: hp("100.60111045837404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.9444444444444444%"),
    top: hp("-0.625%"),
    resizeMode: "cover"
  },
  ImageBackground_78_82: {
    width: wp("104.69271341959636%"),
    minWidth: wp("104.69271341959636%"),
    height: hp("102.34375%"),
    minHeight: hp("102.34375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-2.777784135606554%"),
    top: hp("-1.25%"),
    resizeMode: "cover"
  },
  ImageBackground_78_92: {
    width: wp("104.69271341959636%"),
    minWidth: wp("104.69271341959636%"),
    height: hp("102.34375%"),
    minHeight: hp("102.34375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-2.777784135606554%"),
    top: hp("-1.25%"),
    resizeMode: "cover"
  },
  ImageBackground_78_96: {
    width: wp("104.69271341959636%"),
    minWidth: wp("104.69271341959636%"),
    height: hp("102.34375%"),
    minHeight: hp("102.34375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-2.777784135606554%"),
    top: hp("-1.25%"),
    resizeMode: "cover"
  },
  ImageBackground_78_30: {
    width: wp("6.944444444444445%"),
    minWidth: wp("6.944444444444445%"),
    height: hp("3.90625%"),
    minHeight: hp("3.90625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.444444444444445%"),
    top: hp("5.46875%"),
    resizeMode: "cover"
  },
  View_78_28: {
    width: wp("54.166666666666664%"),
    minWidth: wp("54.166666666666664%"),
    minHeight: hp("8.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.77777777777778%"),
    top: hp("17.65625%"),
    justifyContent: "center"
  },
  Text_78_28: {
    color: "rgba(38, 62, 108, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 4,
    textTransform: "none"
  },
  View_78_31: {
    width: wp("70%"),
    minWidth: wp("70%"),
    minHeight: hp("8.4375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("58.59375%"),
    justifyContent: "center"
  },
  Text_78_31: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 3.6,
    textTransform: "none"
  },
  ImageBackground_91_50: {
    width: wp("18.61111111111111%"),
    minWidth: wp("18.61111111111111%"),
    height: hp("9.375%"),
    minHeight: hp("9.375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.5%"),
    top: hp("37.8125%"),
    resizeMode: "cover"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)

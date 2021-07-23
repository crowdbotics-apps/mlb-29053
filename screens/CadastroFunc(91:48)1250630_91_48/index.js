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
        style={styles.ImageBackground_91_54}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e6c6/f1cd/d1b82fadde67ae2fe595793c4aa57337"
        }}
        style={styles.ImageBackground_123_15}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1c18/77f2/828bc43a9d5cab4948002a8be39ba98e"
        }}
        style={styles.ImageBackground_123_17}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ab13/4756/feeaedc81b9bcd265e2bebda2edccfb9"
        }}
        style={styles.ImageBackground_123_21}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ab13/4756/feeaedc81b9bcd265e2bebda2edccfb9"
        }}
        style={styles.ImageBackground_123_22}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ab13/4756/feeaedc81b9bcd265e2bebda2edccfb9"
        }}
        style={styles.ImageBackground_123_23}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6363/6076/d04a42394ea96c81b5b3d54a39b93d6b"
        }}
        style={styles.ImageBackground_123_24}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3781/d788/d6d503f3b702f851c00aba45b0820234"
        }}
        style={styles.ImageBackground_123_25}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/142f/dec7/e28e131ff8f9a9d951308dbb6f4c0af2"
        }}
        style={styles.ImageBackground_123_27}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/edac/ec23/12b1e3e1f9a88f660da1eb1b09e11d95"
        }}
        style={styles.ImageBackground_125_5}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ab13/4756/feeaedc81b9bcd265e2bebda2edccfb9"
        }}
        style={styles.ImageBackground_125_6}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b8b5/e4d8/7ab8df8b90ad0d545feb84f972feefd1"
        }}
        style={styles.ImageBackground_125_7}
      />
      <View style={styles.View_125_8}>
        <Text style={styles.Text_125_8}>SALVAR</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ab13/4756/feeaedc81b9bcd265e2bebda2edccfb9"
        }}
        style={styles.ImageBackground_125_15}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ac22/4826/5469dbccdcb3970e55102ea60531f2a2"
        }}
        style={styles.ImageBackground_125_34}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("100%") },
  ImageBackground_91_54: {
    width: wp("104.69271341959636%"),
    minWidth: wp("104.69271341959636%"),
    height: hp("102.34375%"),
    minHeight: hp("102.34375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-2.7777862548828125%"),
    top: hp("-1.25%"),
    resizeMode: "cover"
  },
  ImageBackground_123_15: {
    width: wp("8.88888888888889%"),
    minWidth: wp("8.88888888888889%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.33333333333334%"),
    top: hp("5%"),
    resizeMode: "cover"
  },
  ImageBackground_123_17: {
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
  ImageBackground_123_21: {
    width: wp("61.38888888888889%"),
    minWidth: wp("61.38888888888889%"),
    height: hp("7.5%"),
    minHeight: hp("7.5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.944444444444443%"),
    top: hp("18.4375%")
  },
  ImageBackground_123_22: {
    width: wp("61.38888888888889%"),
    minWidth: wp("61.38888888888889%"),
    height: hp("7.5%"),
    minHeight: hp("7.5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.944444444444443%"),
    top: hp("41.5625%")
  },
  ImageBackground_123_23: {
    width: wp("61.38888888888889%"),
    minWidth: wp("61.38888888888889%"),
    height: hp("7.5%"),
    minHeight: hp("7.5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.944444444444443%"),
    top: hp("53.59374999999999%")
  },
  ImageBackground_123_24: {
    width: wp("6.944444444444445%"),
    minWidth: wp("6.944444444444445%"),
    height: hp("3.75%"),
    minHeight: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.777777777777778%"),
    top: hp("20.3125%"),
    resizeMode: "cover"
  },
  ImageBackground_123_25: {
    width: wp("8.88888888888889%"),
    minWidth: wp("8.88888888888889%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.777777777777778%"),
    top: hp("67.96875%"),
    resizeMode: "cover"
  },
  ImageBackground_123_27: {
    width: wp("8.88888888888889%"),
    minWidth: wp("8.88888888888889%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.944444444444445%"),
    top: hp("41.71875%"),
    resizeMode: "cover"
  },
  ImageBackground_125_5: {
    width: wp("45.83333333333333%"),
    minWidth: wp("45.83333333333333%"),
    height: hp("7.34375%"),
    minHeight: hp("7.34375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.944444444444443%"),
    top: hp("80.3125%")
  },
  ImageBackground_125_6: {
    width: wp("61.38888888888889%"),
    minWidth: wp("61.38888888888889%"),
    height: hp("7.5%"),
    minHeight: hp("7.5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.944444444444443%"),
    top: hp("66.71875%")
  },
  ImageBackground_125_7: {
    width: wp("8.88888888888889%"),
    minWidth: wp("8.88888888888889%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.944444444444445%"),
    top: hp("54.84375%"),
    resizeMode: "cover"
  },
  View_125_8: {
    width: wp("34.72222222222222%"),
    minWidth: wp("34.72222222222222%"),
    minHeight: hp("6.5625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.944444444444443%"),
    top: hp("81.09375%"),
    justifyContent: "center"
  },
  Text_125_8: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_125_15: {
    width: wp("61.38888888888889%"),
    minWidth: wp("61.38888888888889%"),
    height: hp("7.5%"),
    minHeight: hp("7.5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.944444444444443%"),
    top: hp("29.531249999999996%")
  },
  ImageBackground_125_34: {
    width: wp("8.88888888888889%"),
    minWidth: wp("8.88888888888889%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.944444444444445%"),
    top: hp("30.78125%"),
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

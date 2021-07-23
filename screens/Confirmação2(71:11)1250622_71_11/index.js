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
        style={styles.ImageBackground_75_33}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8287/6adf/4e2639412cdaf84c99bc53e7326ab049"
        }}
        style={styles.ImageBackground_78_81}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1453/833a/e4f07736537072848b0b659bcc4dd764"
        }}
        style={styles.ImageBackground_78_91}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/edac/ec23/12b1e3e1f9a88f660da1eb1b09e11d95"
        }}
        style={styles.ImageBackground_71_14}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1c18/77f2/828bc43a9d5cab4948002a8be39ba98e"
        }}
        style={styles.ImageBackground_71_17}
      />
      <View style={styles.View_71_19}>
        <Text style={styles.Text_71_19}>ENVIAR</Text>
      </View>
      <View style={styles.View_75_39}>
        <Text style={styles.Text_75_39}>Sair</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4a93/b634/0bb5e66b5c208df6f198c28688c1a271"
        }}
        style={styles.ImageBackground_78_18}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ab13/4756/feeaedc81b9bcd265e2bebda2edccfb9"
        }}
        style={styles.ImageBackground_78_20}
      />
      <View style={styles.View_78_21}>
        <Text style={styles.Text_78_21}>Código de Confirmação</Text>
      </View>
      <View style={styles.View_78_22}>
        <Text style={styles.Text_78_22}>Reenviar</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d50d/b43e/5121784f84ffaebc784387924f0064ac"
        }}
        style={styles.ImageBackground_91_22}
      />
      <View style={styles.View_91_39}>
        <Text style={styles.Text_91_39}>ML BUSINESS</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 0.6700000166893005)" },
  View_2: { height: hp("100%") },
  ImageBackground_75_33: {
    width: wp("103.8478512234158%"),
    minWidth: wp("103.8478512234158%"),
    height: hp("100.60111045837404%"),
    minHeight: hp("100.60111045837404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.6666666666666667%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_78_81: {
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
  ImageBackground_78_91: {
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
  ImageBackground_71_14: {
    width: wp("45.83333333333333%"),
    minWidth: wp("45.83333333333333%"),
    height: hp("7.34375%"),
    minHeight: hp("7.34375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.944444444444443%"),
    top: hp("70.46875%")
  },
  ImageBackground_71_17: {
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
  View_71_19: {
    width: wp("34.72222222222222%"),
    minWidth: wp("34.72222222222222%"),
    minHeight: hp("6.5625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.77777777777778%"),
    top: hp("70.9375%"),
    justifyContent: "center"
  },
  Text_71_19: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_75_39: {
    width: wp("64.16666666666667%"),
    minWidth: wp("64.16666666666667%"),
    minHeight: hp("2.1875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.611111111111114%"),
    top: hp("50.31250000000001%"),
    justifyContent: "center"
  },
  Text_75_39: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_78_18: {
    width: wp("7.5%"),
    minWidth: wp("7.5%"),
    height: hp("4.375%"),
    minHeight: hp("4.375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.5%"),
    top: hp("33.4375%"),
    resizeMode: "cover"
  },
  ImageBackground_78_20: {
    width: wp("61.38888888888889%"),
    minWidth: wp("61.38888888888889%"),
    height: hp("7.5%"),
    minHeight: hp("7.5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.166666666666668%"),
    top: hp("39.0625%")
  },
  View_78_21: {
    width: wp("80.55555555555556%"),
    minWidth: wp("80.55555555555556%"),
    minHeight: hp("2.8125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.38888888888889%"),
    top: hp("35%"),
    justifyContent: "center"
  },
  Text_78_21: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_78_22: {
    width: wp("64.16666666666667%"),
    minWidth: wp("64.16666666666667%"),
    minHeight: hp("2.1875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.9444444444444444%"),
    top: hp("50.31250000000001%"),
    justifyContent: "center"
  },
  Text_78_22: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_91_22: {
    width: wp("14.722222222222223%"),
    minWidth: wp("14.722222222222223%"),
    height: hp("7.5%"),
    minHeight: hp("7.5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.611111111111114%"),
    top: hp("11.25%"),
    resizeMode: "cover"
  },
  View_91_39: {
    width: wp("65%"),
    minWidth: wp("65%"),
    minHeight: hp("5.78125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.333333333333332%"),
    top: hp("18.75%"),
    justifyContent: "center"
  },
  Text_91_39: {
    color: "rgba(38, 62, 108, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 4,
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

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
        style={styles.ImageBackground_91_51}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1c18/77f2/828bc43a9d5cab4948002a8be39ba98e"
        }}
        style={styles.ImageBackground_91_56}
      />
      <View style={styles.View_91_59} />
      <View style={styles.View_91_60} />
      <View style={styles.View_91_61}>
        <Text style={styles.Text_91_61}>Nome da empresa</Text>
      </View>
      <View style={styles.View_91_62}>
        <Text style={styles.Text_91_62}>Área</Text>
      </View>
      <View style={styles.View_91_63}>
        <Text style={styles.Text_91_63}>Configuração</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d50d/b43e/5121784f84ffaebc784387924f0064ac"
        }}
        style={styles.ImageBackground_120_17}
      />
      <View style={styles.View_120_18}>
        <Text style={styles.Text_120_18}>ML BUSINESS</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/edac/ec23/12b1e3e1f9a88f660da1eb1b09e11d95"
        }}
        style={styles.ImageBackground_121_24}
      />
      <View style={styles.View_121_27}>
        <Text style={styles.Text_121_27}>SALVAR</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e6c6/f1cd/d1b82fadde67ae2fe595793c4aa57337"
        }}
        style={styles.ImageBackground_123_3}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8290/4fe2/3ab348571989033fd4c955cddd86dcea"
        }}
        style={styles.ImageBackground_125_2}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/37bc/ae5b/4c14bac38135269759ce31e5db86863b"
        }}
        style={styles.ImageBackground_125_4}
      />
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("100%") },
  ImageBackground_91_51: {
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
  ImageBackground_91_56: {
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
  View_91_59: {
    width: wp("64.72222222222223%"),
    minWidth: wp("64.72222222222223%"),
    height: hp("8.90625%"),
    minHeight: hp("8.90625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.22222222222222%"),
    top: hp("37.03125%"),
    backgroundColor: "rgba(255, 247, 225, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_91_60: {
    width: wp("64.72222222222223%"),
    minWidth: wp("64.72222222222223%"),
    height: hp("8.90625%"),
    minHeight: hp("8.90625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.22222222222222%"),
    top: hp("53.28125%"),
    backgroundColor: "rgba(255, 247, 225, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_91_61: {
    width: wp("80.55555555555556%"),
    minWidth: wp("80.55555555555556%"),
    minHeight: hp("2.8125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.444444444444445%"),
    top: hp("32.1875%"),
    justifyContent: "center"
  },
  Text_91_61: {
    color: "rgba(38, 62, 108, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_91_62: {
    width: wp("80.55555555555556%"),
    minWidth: wp("80.55555555555556%"),
    minHeight: hp("2.8125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-8.61111111111111%"),
    top: hp("49.53125%"),
    justifyContent: "center"
  },
  Text_91_62: {
    color: "rgba(38, 62, 108, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_91_63: {
    width: wp("65%"),
    minWidth: wp("65%"),
    minHeight: hp("5.78125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.944444444444445%"),
    top: hp("9.0625%"),
    justifyContent: "center"
  },
  Text_91_63: {
    color: "rgba(38, 62, 108, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 4,
    textTransform: "none"
  },
  ImageBackground_120_17: {
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
  View_120_18: {
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
  Text_120_18: {
    color: "rgba(38, 62, 108, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 4,
    textTransform: "none"
  },
  ImageBackground_121_24: {
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
  View_121_27: {
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
  Text_121_27: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_123_3: {
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
  ImageBackground_125_2: {
    width: wp("8.88888888888889%"),
    minWidth: wp("8.88888888888889%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.88888888888889%"),
    top: hp("30%"),
    resizeMode: "cover"
  },
  ImageBackground_125_4: {
    width: wp("17.77777777777778%"),
    minWidth: wp("17.77777777777778%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.444444444444445%"),
    top: hp("45.9375%"),
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

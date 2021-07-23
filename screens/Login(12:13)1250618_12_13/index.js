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
        style={styles.ImageBackground_40_25}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8287/6adf/4e2639412cdaf84c99bc53e7326ab049"
        }}
        style={styles.ImageBackground_78_55}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1453/833a/e4f07736537072848b0b659bcc4dd764"
        }}
        style={styles.ImageBackground_78_86}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d50d/b43e/5121784f84ffaebc784387924f0064ac"
        }}
        style={styles.ImageBackground_78_17}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/525c/1408/622dfc89a04497c3bef928f18ebe186d"
        }}
        style={styles.ImageBackground_26_2}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8175/22aa/415db5dc6911e95f2309292d2bcea836"
        }}
        style={styles.ImageBackground_25_2}
      />
      <View style={styles.View_40_8}>
        <Text style={styles.Text_40_8}>ML BUSINESS</Text>
      </View>
      <View style={styles.View_40_11} />
      <View style={styles.View_49_38} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6363/6076/d04a42394ea96c81b5b3d54a39b93d6b"
        }}
        style={styles.ImageBackground_49_39}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4a93/b634/0bb5e66b5c208df6f198c28688c1a271"
        }}
        style={styles.ImageBackground_49_40}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/edac/ec23/12b1e3e1f9a88f660da1eb1b09e11d95"
        }}
        style={styles.ImageBackground_40_31}
      />
      <View style={styles.View_49_2}>
        <Text style={styles.Text_49_2}>Ainda não tem cadastro?</Text>
      </View>
      <View style={styles.View_49_9}>
        <Text style={styles.Text_49_9}>Esqueceu a senha?</Text>
      </View>
      <View style={styles.View_49_31}>
        <Text style={styles.Text_49_31}>LOGAR</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1c18/77f2/828bc43a9d5cab4948002a8be39ba98e"
        }}
        style={styles.ImageBackground_49_36}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("100%") },
  ImageBackground_40_25: {
    width: wp("103.8478512234158%"),
    minWidth: wp("103.8478512234158%"),
    height: hp("100.60111045837404%"),
    minHeight: hp("100.60111045837404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.1111111111111112%"),
    top: hp("0.9375%"),
    resizeMode: "cover"
  },
  ImageBackground_78_55: {
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
  ImageBackground_78_86: {
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
  ImageBackground_78_17: {
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
  ImageBackground_26_2: {
    width: wp("9.166666666666666%"),
    minWidth: wp("9.166666666666666%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.38888888888889%"),
    top: hp("25.78125%"),
    resizeMode: "cover"
  },
  ImageBackground_25_2: {
    width: wp("8.88888888888889%"),
    minWidth: wp("8.88888888888889%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61.66666666666667%"),
    top: hp("25.78125%"),
    resizeMode: "cover"
  },
  View_40_8: {
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
  Text_40_8: {
    color: "rgba(38, 62, 108, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 4,
    textTransform: "none"
  },
  View_40_11: {
    width: wp("61.38888888888889%"),
    minWidth: wp("61.38888888888889%"),
    height: hp("7.5%"),
    minHeight: hp("7.5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.555555555555554%"),
    top: hp("34.0625%"),
    backgroundColor: "rgba(255, 247, 225, 1)",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16
  },
  View_49_38: {
    width: wp("61.94444444444444%"),
    minWidth: wp("61.94444444444444%"),
    height: hp("7.5%"),
    minHeight: hp("7.5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.555555555555554%"),
    top: hp("44.6875%"),
    backgroundColor: "rgba(255, 247, 225, 1)",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16
  },
  ImageBackground_49_39: {
    width: wp("6.944444444444445%"),
    minWidth: wp("6.944444444444445%"),
    height: hp("3.75%"),
    minHeight: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.38888888888889%"),
    top: hp("35.9375%"),
    resizeMode: "cover"
  },
  ImageBackground_49_40: {
    width: wp("7.5%"),
    minWidth: wp("7.5%"),
    height: hp("4.375%"),
    minHeight: hp("4.375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.833333333333334%"),
    top: hp("45.625%"),
    resizeMode: "cover"
  },
  ImageBackground_40_31: {
    width: wp("45.83333333333333%"),
    minWidth: wp("45.83333333333333%"),
    height: hp("7.34375%"),
    minHeight: hp("7.34375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.333333333333332%"),
    top: hp("70.78125%")
  },
  View_49_2: {
    width: wp("64.16666666666667%"),
    minWidth: wp("64.16666666666667%"),
    minHeight: hp("2.1875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.944444444444446%"),
    top: hp("57.1875%"),
    justifyContent: "center"
  },
  Text_49_2: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_49_9: {
    width: wp("47.22222222222222%"),
    minWidth: wp("47.22222222222222%"),
    minHeight: hp("3.28125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.22222222222222%"),
    top: hp("79.375%"),
    justifyContent: "center"
  },
  Text_49_9: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_49_31: {
    width: wp("39.166666666666664%"),
    minWidth: wp("39.166666666666664%"),
    minHeight: hp("4.0625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.38888888888889%"),
    top: hp("72.5%"),
    justifyContent: "center"
  },
  Text_49_31: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_49_36: {
    width: wp("6.944444444444445%"),
    minWidth: wp("6.944444444444445%"),
    height: hp("3.90625%"),
    minHeight: hp("3.90625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.888888888888889%"),
    top: hp("4.53125%"),
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

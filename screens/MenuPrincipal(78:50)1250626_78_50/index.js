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
      <View style={styles.View_78_52}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4f78/231b/3b16b97466435e6134b1ad01f2041a9c"
          }}
          style={styles.ImageBackground_78_53}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8287/6adf/4e2639412cdaf84c99bc53e7326ab049"
          }}
          style={styles.ImageBackground_78_84}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1453/833a/e4f07736537072848b0b659bcc4dd764"
          }}
          style={styles.ImageBackground_78_94}
        />
        <View style={styles.View_78_113}>
          <Text style={styles.Text_78_113}>Gerenciar</Text>
        </View>
        <View style={styles.View_78_114}>
          <Text style={styles.Text_78_114}>Explorar</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4cda/e173/b015164853d7e1eb600b0e04d3b91da4"
          }}
          style={styles.ImageBackground_115_2}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5697/623d/9d47e6d6de21e2385b01a33e39cc170d"
          }}
          style={styles.ImageBackground_116_3}
        />
        <View style={styles.View_78_115}>
          <Text style={styles.Text_78_115}>Lucros</Text>
        </View>
        <View style={styles.View_78_117}>
          <Text style={styles.Text_78_117}>Custos de produtos</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bca3/841d/49490ad2cbfb7dcaa64dd20c607df4b3"
          }}
          style={styles.ImageBackground_118_2}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fc9d/d1e9/37559d81b26746f8a3aeb2c6696c5db8"
          }}
          style={styles.ImageBackground_118_3}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1c18/77f2/828bc43a9d5cab4948002a8be39ba98e"
        }}
        style={styles.ImageBackground_78_99}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d50d/b43e/5121784f84ffaebc784387924f0064ac"
        }}
        style={styles.ImageBackground_91_24}
      />
      <View style={styles.View_91_42}>
        <Text style={styles.Text_91_42}>ML BUSINESS</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4780/b0a4/14cf138b0213aeaac1ae02538c4d66db"
        }}
        style={styles.ImageBackground_100_2}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("100%") },
  View_78_52: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("100%"),
    minHeight: hp("100%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 198, 39, 1)",
    overflow: "hidden"
  },
  ImageBackground_78_53: {
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
  ImageBackground_78_84: {
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
  ImageBackground_78_94: {
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
  View_78_113: {
    width: wp("35.55555555555556%"),
    minWidth: wp("35.55555555555556%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("48.75%"),
    justifyContent: "center"
  },
  Text_78_113: {
    color: "rgba(38, 62, 108, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 3.6,
    textTransform: "none"
  },
  View_78_114: {
    width: wp("35.55555555555556%"),
    minWidth: wp("35.55555555555556%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.55555555555556%"),
    top: hp("48.75%"),
    justifyContent: "center"
  },
  Text_78_114: {
    color: "rgba(38, 62, 108, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 3.6,
    textTransform: "none"
  },
  ImageBackground_115_2: {
    width: wp("110.55555555555556%"),
    minWidth: wp("110.55555555555556%"),
    height: hp("61.40624999999999%"),
    minHeight: hp("61.40624999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-2.2222222222222223%"),
    top: hp("23.75%"),
    resizeMode: "cover"
  },
  ImageBackground_116_3: {
    width: wp("98.61111111111111%"),
    minWidth: wp("98.61111111111111%"),
    height: hp("63.125%"),
    minHeight: hp("63.125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.77777777777778%"),
    top: hp("12.34375%"),
    resizeMode: "cover"
  },
  View_78_115: {
    width: wp("35.55555555555556%"),
    minWidth: wp("35.55555555555556%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("72.03125%"),
    justifyContent: "center"
  },
  Text_78_115: {
    color: "rgba(38, 62, 108, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 3.6,
    textTransform: "none"
  },
  View_78_117: {
    width: wp("35.55555555555556%"),
    minWidth: wp("35.55555555555556%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.55555555555556%"),
    top: hp("72.96875%"),
    justifyContent: "center"
  },
  Text_78_117: {
    color: "rgba(38, 62, 108, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 3.6,
    textTransform: "none"
  },
  ImageBackground_118_2: {
    width: wp("101.11111111111111%"),
    minWidth: wp("101.11111111111111%"),
    height: hp("64.375%"),
    minHeight: hp("64.375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-26.666666666666668%"),
    top: hp("34.375%"),
    resizeMode: "cover"
  },
  ImageBackground_118_3: {
    width: wp("98.61111111111111%"),
    minWidth: wp("98.61111111111111%"),
    height: hp("63.74999999999999%"),
    minHeight: hp("63.74999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.88888888888889%"),
    top: hp("35%"),
    resizeMode: "cover"
  },
  ImageBackground_78_99: {
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
  ImageBackground_91_24: {
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
  View_91_42: {
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
  Text_91_42: {
    color: "rgba(38, 62, 108, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 4,
    textTransform: "none"
  },
  ImageBackground_100_2: {
    width: wp("120%"),
    minWidth: wp("120%"),
    height: hp("68.75%"),
    minHeight: hp("68.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("130.83333333333334%"),
    top: hp("15%"),
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

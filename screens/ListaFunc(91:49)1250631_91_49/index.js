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
        style={styles.ImageBackground_91_55}
      />
      <View style={styles.View_125_9} />
      <View style={styles.View_125_30}>
        <Text style={styles.Text_125_30}>funcionário 4</Text>
      </View>
      <View style={styles.View_125_29}>
        <Text style={styles.Text_125_29}>funcionário 5</Text>
      </View>
      <View style={styles.View_125_28}>
        <Text style={styles.Text_125_28}>funcionário 3</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9ce6/15b6/f31dcd51c0677293a2f1210c21bec191"
        }}
        style={styles.ImageBackground_125_20}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9ce6/15b6/f31dcd51c0677293a2f1210c21bec191"
        }}
        style={styles.ImageBackground_125_21}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9ce6/15b6/f31dcd51c0677293a2f1210c21bec191"
        }}
        style={styles.ImageBackground_125_22}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9ce6/15b6/f31dcd51c0677293a2f1210c21bec191"
        }}
        style={styles.ImageBackground_125_19}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b866/d3b4/804e4aa7ab23c931103be68f44765cd7"
        }}
        style={styles.ImageBackground_125_14}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b866/d3b4/804e4aa7ab23c931103be68f44765cd7"
        }}
        style={styles.ImageBackground_125_11}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b866/d3b4/804e4aa7ab23c931103be68f44765cd7"
        }}
        style={styles.ImageBackground_125_12}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b866/d3b4/804e4aa7ab23c931103be68f44765cd7"
        }}
        style={styles.ImageBackground_125_13}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b866/d3b4/804e4aa7ab23c931103be68f44765cd7"
        }}
        style={styles.ImageBackground_125_10}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9ce6/15b6/f31dcd51c0677293a2f1210c21bec191"
        }}
        style={styles.ImageBackground_125_18}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1c18/77f2/828bc43a9d5cab4948002a8be39ba98e"
        }}
        style={styles.ImageBackground_125_23}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e6c6/f1cd/d1b82fadde67ae2fe595793c4aa57337"
        }}
        style={styles.ImageBackground_125_24}
      />
      <View style={styles.View_125_25}>
        <Text style={styles.Text_125_25}>funcionário 1</Text>
      </View>
      <View style={styles.View_125_26}>
        <Text style={styles.Text_125_26}>funcionário 2</Text>
      </View>
      <View style={styles.View_125_27}>
        <Text style={styles.Text_125_27}>funcionário 1</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7cda/afcd/63327aa99711a59efeb228a44df7cf18"
        }}
        style={styles.ImageBackground_125_33}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/edac/ec23/12b1e3e1f9a88f660da1eb1b09e11d95"
        }}
        style={styles.ImageBackground_126_56}
      />
      <View style={styles.View_126_57}>
        <Text style={styles.Text_126_57}>SALVAR</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("100%") },
  ImageBackground_91_55: {
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
  View_125_9: {
    width: wp("83.33333333333334%"),
    minWidth: wp("83.33333333333334%"),
    height: hp("56.875%"),
    minHeight: hp("56.875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.777777777777778%"),
    top: hp("21.5625%"),
    backgroundColor: "rgba(255, 247, 225, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_125_30: {
    width: wp("49.72222222222222%"),
    minWidth: wp("49.72222222222222%"),
    minHeight: hp("4.84375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.38888888888889%"),
    top: hp("50.31250000000001%"),
    justifyContent: "center"
  },
  Text_125_30: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_125_29: {
    width: wp("49.72222222222222%"),
    minWidth: wp("49.72222222222222%"),
    minHeight: hp("4.84375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.38888888888889%"),
    top: hp("59.06249999999999%"),
    justifyContent: "center"
  },
  Text_125_29: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_125_28: {
    width: wp("49.72222222222222%"),
    minWidth: wp("49.72222222222222%"),
    minHeight: hp("4.84375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.38888888888889%"),
    top: hp("42.96875%"),
    justifyContent: "center"
  },
  Text_125_28: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_125_20: {
    width: wp("6.666666666666667%"),
    minWidth: wp("6.666666666666667%"),
    height: hp("3.75%"),
    minHeight: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.77777777777777%"),
    top: hp("36.40625%"),
    resizeMode: "cover"
  },
  ImageBackground_125_21: {
    width: wp("6.666666666666667%"),
    minWidth: wp("6.666666666666667%"),
    height: hp("3.75%"),
    minHeight: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.77777777777777%"),
    top: hp("44.375%"),
    resizeMode: "cover"
  },
  ImageBackground_125_22: {
    width: wp("6.666666666666667%"),
    minWidth: wp("6.666666666666667%"),
    height: hp("3.75%"),
    minHeight: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.77777777777777%"),
    top: hp("52.81249999999999%"),
    resizeMode: "cover"
  },
  ImageBackground_125_19: {
    width: wp("6.666666666666667%"),
    minWidth: wp("6.666666666666667%"),
    height: hp("3.75%"),
    minHeight: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.77777777777777%"),
    top: hp("27.500000000000004%"),
    resizeMode: "cover"
  },
  ImageBackground_125_14: {
    width: wp("50.27777777777778%"),
    minWidth: wp("50.27777777777778%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.833333333333332%"),
    top: hp("31.71875%")
  },
  ImageBackground_125_11: {
    width: wp("50.27777777777778%"),
    minWidth: wp("50.27777777777778%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.833333333333332%"),
    top: hp("40.15625%")
  },
  ImageBackground_125_12: {
    width: wp("50.27777777777778%"),
    minWidth: wp("50.27777777777778%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.833333333333332%"),
    top: hp("48.125%")
  },
  ImageBackground_125_13: {
    width: wp("50.27777777777778%"),
    minWidth: wp("50.27777777777778%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.833333333333332%"),
    top: hp("65.3125%")
  },
  ImageBackground_125_10: {
    width: wp("50.27777777777778%"),
    minWidth: wp("50.27777777777778%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.833333333333332%"),
    top: hp("56.56250000000001%")
  },
  ImageBackground_125_18: {
    width: wp("6.666666666666667%"),
    minWidth: wp("6.666666666666667%"),
    height: hp("3.75%"),
    minHeight: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.77777777777777%"),
    top: hp("60.46875000000001%"),
    resizeMode: "cover"
  },
  ImageBackground_125_23: {
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
  ImageBackground_125_24: {
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
  View_125_25: {
    width: wp("49.72222222222222%"),
    minWidth: wp("49.72222222222222%"),
    minHeight: hp("4.84375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.38888888888889%"),
    top: hp("26.875%"),
    justifyContent: "center"
  },
  Text_125_25: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_125_26: {
    width: wp("49.72222222222222%"),
    minWidth: wp("49.72222222222222%"),
    minHeight: hp("4.84375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.38888888888889%"),
    top: hp("33.90625%"),
    justifyContent: "center"
  },
  Text_125_26: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_125_27: {
    width: wp("49.72222222222222%"),
    minWidth: wp("49.72222222222222%"),
    minHeight: hp("4.84375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.38888888888889%"),
    top: hp("26.875%"),
    justifyContent: "center"
  },
  Text_125_27: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_125_33: {
    width: wp("8.88888888888889%"),
    minWidth: wp("8.88888888888889%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.66666666666667%"),
    top: hp("69.375%"),
    resizeMode: "cover"
  },
  ImageBackground_126_56: {
    width: wp("45.83333333333333%"),
    minWidth: wp("45.83333333333333%"),
    height: hp("7.34375%"),
    minHeight: hp("7.34375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.833333333333336%"),
    top: hp("82.65625%")
  },
  View_126_57: {
    width: wp("34.72222222222222%"),
    minWidth: wp("34.72222222222222%"),
    minHeight: hp("6.5625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.11111111111111%"),
    top: hp("83.125%"),
    justifyContent: "center"
  },
  Text_126_57: {
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

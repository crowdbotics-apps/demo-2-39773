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
import { getNavigationScreen } from "@screens"
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
      <View style={styles.View_91_284}>
        <View style={styles.View_91_285}>
          <View style={styles.View_91_286}>
            <View style={styles.View_91_287} />
            <View style={styles.View_91_288} />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3feb3385-3174-4e8b-a622-08a454fc0374"
              }}
              style={styles.ImageBackground_91_289}
            />
          </View>
          <View style={styles.View_91_290}>
            <View style={styles.View_91_291}>
              <Text style={styles.Text_91_291}>People</Text>
            </View>
          </View>
          <View style={styles.View_91_292}>
            <Text style={styles.Text_91_292}>Events</Text>
          </View>
        </View>
        <View style={styles.View_91_293}>
          <View style={styles.View_91_294}>
            <View style={styles.View_91_295} />
            <View style={styles.View_91_296}>
              <View style={styles.View_91_297}>
                <Text style={styles.Text_91_297}>Filters</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bb8c6d8f-8bf1-4f4e-a530-d2bcf252159d"
                }}
                style={styles.ImageBackground_91_298}
              />
            </View>
          </View>
          <View style={styles.View_91_300}>
            <View style={styles.View_91_301}>
              <View style={styles.View_91_302}>
                <View style={styles.View_91_303} />
                <View style={styles.View_91_304}>
                  <Text style={styles.Text_91_304}>Sort by</Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a5594f26-d398-4746-8f2d-5501cf151ea4"
                  }}
                  style={styles.ImageBackground_91_305}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4f8bb6ce-2851-4f8c-9621-e2c400d2e4c8"
                  }}
                  style={styles.ImageBackground_91_306}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_91_307}>
            <View style={styles.View_91_308} />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3c4b279b-5a2c-4461-830f-c415577226dc"
              }}
              style={styles.ImageBackground_91_309}
            />
          </View>
        </View>
        <View style={styles.View_91_310}>
          <View style={styles.View_91_311}>
            <Text style={styles.Text_91_311}>Discover</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_91_312}>
        <View style={styles.View_91_313}>
          <View style={styles.View_91_314}>
            <View style={styles.View_91_315} />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ad03faf3-be1d-4e83-af7b-dd9ee66d0a93"
              }}
              style={styles.ImageBackground_91_316}
            />
            <View style={styles.View_91_317} />
            <View style={styles.View_91_318}>
              <Text style={styles.Text_91_318}>Travis Scott, Astroworld</Text>
            </View>
            <View style={styles.View_91_319}>
              <Text style={styles.Text_91_319}>12:30PM, 11th-14th Oct</Text>
            </View>
            <View style={styles.View_91_320}>
              <View style={styles.View_91_321}>
                <View style={styles.View_91_322}>
                  <View style={styles.View_91_323}>
                    <Text style={styles.Text_91_323}>Last few slots left</Text>
                  </View>
                  <View style={styles.View_91_324}>
                    <Text style={styles.Text_91_324}>780</Text>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/aac2ac45-7f18-465d-945a-1061a74b59c6"
                    }}
                    style={styles.ImageBackground_91_325}
                  />
                  <View style={styles.View_91_329}>
                    <Text style={styles.Text_91_329}>2km away</Text>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/40f3ae7e-a7a4-4424-b927-a946c47875d9"
                    }}
                    style={styles.ImageBackground_91_330}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9d97d557-d8f2-4053-a88f-d4cccaee1381"
                    }}
                    style={styles.ImageBackground_91_331}
                  />
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/561d9c80-681e-481e-9a43-66fa68cd759d"
                  }}
                  style={styles.ImageBackground_91_332}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_91_338}>
            <View style={styles.View_91_339}>
              <Text style={styles.Text_91_339}>Travis S.</Text>
            </View>
            <View style={styles.View_91_340}>
              <Text style={styles.Text_91_340}>Artist</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/959b56cf-f247-4a8f-bea6-5853d77c09ca"
              }}
              style={styles.ImageBackground_91_341}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e1d14219-a9e4-4505-bd65-a894b68db19c"
              }}
              style={styles.ImageBackground_91_342}
            />
            <View style={styles.View_91_992}>
              <View style={styles.View_91_993}>
                <View style={styles.View_91_994} />
                <View style={styles.View_91_995}>
                  <Text style={styles.Text_91_995}>24,000 RSD</Text>
                </View>
              </View>
              <View style={styles.View_91_996}>
                <View style={styles.View_91_997}>
                  <View style={styles.View_91_998} />
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/09e2cca1-23af-4c6b-9be7-bf182cf8eff3"
                  }}
                  style={styles.ImageBackground_91_999}
                />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/706e5e8a-f174-4b35-884d-01c7a77dffd4"
                }}
                style={styles.ImageBackground_91_1000}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_91_346}>
          <View style={styles.View_91_347}>
            <View style={styles.View_91_348} />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d2ebfcba-0948-4468-a4df-cc8eca1ffcb5"
              }}
              style={styles.ImageBackground_91_349}
            />
            <View style={styles.View_91_350}>
              <View style={styles.View_91_351}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cdff9b3b-ad24-4599-a006-e5d4614b42c3"
                  }}
                  style={styles.ImageBackground_91_352}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/04b478b3-eb19-454c-baea-b4f929aa8e5c"
                  }}
                  style={styles.ImageBackground_91_353}
                />
              </View>
            </View>
            <View style={styles.View_91_357} />
            <View style={styles.View_91_358}>
              <Text style={styles.Text_91_358}>Crown Jewel, 22</Text>
            </View>
            <View style={styles.View_91_359}>
              <Text style={styles.Text_91_359}>6:00PM, 30th oct</Text>
            </View>
            <View style={styles.View_91_360}>
              <View style={styles.View_91_361}>
                <View style={styles.View_91_362}>
                  <Text style={styles.Text_91_362}>Trending now</Text>
                </View>
                <View style={styles.View_91_363}>
                  <Text style={styles.Text_91_363}>22km away</Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e022e954-eb89-4b2c-a6d3-7e3bc5475f3b"
                  }}
                  style={styles.ImageBackground_91_364}
                />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/923b5bb3-7d00-4ab0-a4a2-3e473566e1a9"
                }}
                style={styles.ImageBackground_91_365}
              />
            </View>
          </View>
          <View style={styles.View_91_366}>
            <View style={styles.View_91_367} />
            <View style={styles.View_91_368}>
              <View style={styles.View_91_369}>
                <Text style={styles.Text_91_369}>Save</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8743d60c-701a-48f1-a587-eaaf348f213f"
                }}
                style={styles.ImageBackground_91_370}
              />
            </View>
          </View>
          <View style={styles.View_91_371}>
            <View style={styles.View_91_372}>
              <Text style={styles.Text_91_372}>WWE</Text>
            </View>
            <View style={styles.View_91_373}>
              <Text style={styles.Text_91_373}>Sporting Event</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7dd2467a-2b46-4619-9120-8c85e52cec48"
              }}
              style={styles.ImageBackground_91_374}
            />
          </View>
          <View style={styles.View_91_375}>
            <View style={styles.View_91_376} />
            <View style={styles.View_91_377}>
              <Text style={styles.Text_91_377}>Attend</Text>
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ced2d83a-b833-41b8-b917-d44ebf1862dc"
          }}
          style={styles.ImageBackground_91_412}
        />
      </View>
      <View style={styles.View_91_413}>
        <View style={styles.View_91_414}>
          <View style={styles.View_91_415}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0f53fd80-4a6e-4545-8694-e226f5cbd5eb"
              }}
              style={styles.ImageBackground_91_416}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1532f662-bc98-4a0e-8535-7f0b659c7d13"
            }}
            style={styles.ImageBackground_91_418}
          />
        </View>
      </View>
      <View style={styles.View_318_597}>
        <View style={styles.View_313_483}>
          <Text style={styles.Text_313_483}>Venue</Text>
        </View>
        <View style={styles.View_316_484}>
          <Text style={styles.Text_316_484}>Parc del Forum</Text>
        </View>
        <View style={styles.View_316_486}>
          <Text style={styles.Text_316_486}>
            Novi sad Central, Vuka Karadžića, Novi Sad, Serbia
          </Text>
        </View>
      </View>
      <View style={styles.View_318_506}>
        <View style={styles.View_316_503}>
          <Text style={styles.Text_316_503}>HOST</Text>
        </View>
        <View style={styles.View_316_504}>
          <Text style={styles.Text_316_504}>Guests</Text>
        </View>
        <View style={styles.View_91_486}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b2aa0291-1cbb-4b50-8215-c9dd2e0b6316"
            }}
            style={styles.ImageBackground_91_487}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ed200481-b23a-46ac-992f-cf7f82f0dc28"
            }}
            style={styles.ImageBackground_91_498}
          />
        </View>
      </View>
      <View style={styles.View_318_598}>
        <View style={styles.View_316_502}>
          <Text style={styles.Text_316_502}>About</Text>
        </View>
        <View style={styles.View_91_423}>
          <View style={styles.View_91_424}>
            <View style={styles.View_91_425}>
              <View style={styles.View_91_426} />
              <View style={styles.View_91_427}>
                <Text style={styles.Text_91_427}>Pubs</Text>
              </View>
            </View>
            <View style={styles.View_91_428}>
              <View style={styles.View_91_429} />
              <View style={styles.View_91_430}>
                <Text style={styles.Text_91_430}>Clubs</Text>
              </View>
            </View>
            <View style={styles.View_91_431}>
              <View style={styles.View_91_432} />
              <View style={styles.View_91_433} />
              <View style={styles.View_91_434}>
                <Text style={styles.Text_91_434}>Party</Text>
              </View>
              <View style={styles.View_91_435}>
                <Text style={styles.Text_91_435}>Dance</Text>
              </View>
              <View style={styles.View_91_436}>
                <View style={styles.View_91_437} />
                <View style={styles.View_91_438}>
                  <Text style={styles.Text_91_438}>+12</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_91_439}>
              <View style={styles.View_91_440} />
              <View style={styles.View_91_441}>
                <Text style={styles.Text_91_441}>Night out</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_91_442}>
            <View style={styles.View_91_443}>
              <View style={styles.View_91_444}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/48d80c57-8ace-4593-99ec-5a8aa40f2bea"
                  }}
                  style={styles.ImageBackground_91_445}
                />
                <View style={styles.View_91_446}>
                  <Text style={styles.Text_91_446}>Free</Text>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/77dcaeb9-5089-43ec-8869-00419a2b3c6d"
                }}
                style={styles.ImageBackground_91_447}
              />
            </View>
            <View style={styles.View_91_452}>
              <View style={styles.View_91_453}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4c6ebebc-5e6e-45ff-b011-ee273e50ad19"
                  }}
                  style={styles.ImageBackground_91_454}
                />
                <View style={styles.View_91_455}>
                  <Text style={styles.Text_91_455}>Alcohol</Text>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1d4f6403-8b65-499e-b2bb-e1de533738c4"
                }}
                style={styles.ImageBackground_91_456}
              />
            </View>
            <View style={styles.View_91_460}>
              <View style={styles.View_91_461}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7f5903f5-9b13-4e76-b3e1-8496039bc99d"
                  }}
                  style={styles.ImageBackground_91_462}
                />
                <View style={styles.View_91_463}>
                  <Text style={styles.Text_91_463}>Smoking</Text>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fced9b37-8c88-47b4-9d58-884e383267fc"
                }}
                style={styles.ImageBackground_91_464}
              />
            </View>
            <View style={styles.View_91_467}>
              <View style={styles.View_91_468}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/03da6802-e646-4ae3-9698-d84bde34ccfb"
                  }}
                  style={styles.ImageBackground_91_469}
                />
                <View style={styles.View_91_470}>
                  <Text style={styles.Text_91_470}>Food</Text>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/19ac68e3-f51e-4437-bc92-2bf006392b4f"
                }}
                style={styles.ImageBackground_91_471}
              />
            </View>
            <View style={styles.View_91_476}>
              <View style={styles.View_91_477}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/38b8e980-ad66-4daa-809b-95ab3ce06ab9"
                  }}
                  style={styles.ImageBackground_91_478}
                />
                <View style={styles.View_91_479}>
                  <Text style={styles.Text_91_479}>Pets</Text>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/54f0b63f-9e56-4c61-b1f7-2556bbfa74be"
                }}
                style={styles.ImageBackground_91_480}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_316_501}>
          <View style={styles.View_91_422}>
            <Text style={styles.Text_91_422}>
              If rap, urban music, is the pop of this era, then Travis Scott can
              only be one thing: a pop star. A new model of total star who
              manages all the angles of the industry, what we hear and what we
              see is what we believe in so set ...{" "}
            </Text>
          </View>
          <View style={styles.View_91_499}>
            <Text style={styles.Text_91_499}>Showmore</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_91_1001}>
        <View style={styles.View_91_1002}>
          <View style={styles.View_91_1003}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/818cf5e5-3d29-4156-86b5-972ba52ab282"
              }}
              style={styles.ImageBackground_91_1004}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b9f34de8-853d-4346-b6de-c50f37f92651"
              }}
              style={styles.ImageBackground_91_1005}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_313_473}>
        <View style={styles.View_313_474}>
          <View style={styles.View_313_475} />
          <View style={styles.View_313_479}>
            <Text style={styles.Text_313_479}>Book Now</Text>
          </View>
          <View style={styles.View_313_480}>
            <Text style={styles.Text_313_480}>24,000 RSD</Text>
          </View>
          <View style={styles.View_313_481}>
            <Text style={styles.Text_313_481}>Per ticket</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_316_500}>
        <View style={styles.View_316_493}>
          <View style={styles.View_316_490} />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3cf6ec50-76e2-4eae-8586-f5ff8a598ece"
            }}
            style={styles.ImageBackground_316_492}
          />
        </View>
        <View style={styles.View_316_494} />
        <View style={styles.View_316_499}>
          <View style={styles.View_316_496}>
            <Text style={styles.Text_316_496}>View location on the map</Text>
          </View>
          <View style={styles.View_316_498}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8144df93-4266-45a9-8b81-3c3c0929d385"
              }}
              style={styles.ImageBackground_316_495}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dfd95bfd-6029-49e4-ade6-1992626258d0"
              }}
              style={styles.ImageBackground_316_497}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_319_1071}>
        <View style={styles.View_319_1072}>
          <Text style={styles.Text_319_1072}>Date &amp; Time</Text>
        </View>
        <View style={styles.View_319_1073}>
          <Text style={styles.Text_319_1073}>Gate closes at 1:00 PM</Text>
        </View>
        <View style={styles.View_319_1074}>
          <View style={styles.View_319_1075}>
            <Text style={styles.Text_319_1075}>11th October</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a60a7067-4c0e-4f02-b1b1-ecc6bdba525c"
            }}
            style={styles.ImageBackground_319_1076}
          />
        </View>
        <View style={styles.View_319_1080}>
          <View style={styles.View_319_1081}>
            <Text style={styles.Text_319_1081}>12:30 PM</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/479216a2-688e-4aed-b712-ea906b1ae913"
            }}
            style={styles.ImageBackground_319_1082}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(30, 21, 47, 1)" },
  View_2: { height: hp("183%") },
  View_91_284: {
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
  View_91_285: {
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
  View_91_286: {
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
  View_91_287: {
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
  View_91_288: {
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
  ImageBackground_91_289: {
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
  View_91_290: {
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
  View_91_291: {
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
  Text_91_291: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_91_292: {
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
  Text_91_292: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_91_293: {
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
  View_91_294: {
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
  View_91_295: {
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
  View_91_296: {
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
  View_91_297: {
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
  Text_91_297: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_91_298: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_91_300: {
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
  View_91_301: {
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
  View_91_302: {
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
  View_91_303: {
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
  View_91_304: {
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
  Text_91_304: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_91_305: {
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
  ImageBackground_91_306: {
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
  View_91_307: {
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
  View_91_308: {
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
  ImageBackground_91_309: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_91_310: {
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
  View_91_311: {
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
  Text_91_311: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 2.6,
    textTransform: "uppercase"
  },
  View_91_312: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("240%"),
    minHeight: hp("240%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_91_313: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("63%"),
    minHeight: hp("63%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_91_314: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("54%"),
    minHeight: hp("54%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_91_315: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("54%"),
    minHeight: hp("54%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(109, 109, 109, 1)"
  },
  ImageBackground_91_316: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("54%"),
    minHeight: hp("54%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_91_317: {
    width: wp("102%"),
    minWidth: wp("102%"),
    height: hp("35%"),
    minHeight: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1%"),
    top: hp("19%")
  },
  View_91_318: {
    width: wp("73%"),
    minWidth: wp("73%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("44%"),
    justifyContent: "flex-start"
  },
  Text_91_318: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 22,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_91_319: {
    width: wp("39%"),
    minWidth: wp("39%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("41%"),
    justifyContent: "flex-start"
  },
  Text_91_319: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_91_320: {
    width: wp("61%"),
    minWidth: wp("61%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("49%")
  },
  View_91_321: {
    width: wp("61%"),
    minWidth: wp("61%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_91_322: {
    width: wp("57%"),
    minWidth: wp("57%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%")
  },
  View_91_323: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_91_323: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_91_324: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_91_324: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_91_325: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("0%")
  },
  View_91_329: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_91_329: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_91_330: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("1%")
  },
  ImageBackground_91_331: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("1%")
  },
  ImageBackground_91_332: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_91_338: {
    width: wp("81%"),
    minWidth: wp("81%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("58%")
  },
  View_91_339: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_91_339: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_91_340: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_91_340: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_91_341: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_91_342: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_91_992: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("0%")
  },
  View_91_993: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_91_994: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(76, 69, 89, 1)"
  },
  View_91_995: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_91_995: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "450",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.28,
    textTransform: "none"
  },
  View_91_996: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("0%")
  },
  View_91_997: {
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
  View_91_998: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.20000000298023224
  },
  ImageBackground_91_999: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_91_1000: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_91_346: {
    width: wp("82%"),
    minWidth: wp("82%"),
    height: hp("50%"),
    minHeight: hp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("190%")
  },
  View_91_347: {
    width: wp("82%"),
    minWidth: wp("82%"),
    height: hp("44%"),
    minHeight: hp("44%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_91_348: {
    width: wp("82%"),
    minWidth: wp("82%"),
    height: hp("44%"),
    minHeight: hp("44%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(109, 109, 109, 1)"
  },
  ImageBackground_91_349: {
    width: wp("82%"),
    minWidth: wp("82%"),
    height: hp("44%"),
    minHeight: hp("44%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_91_350: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("3%")
  },
  View_91_351: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_91_352: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_91_353: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%")
  },
  View_91_357: {
    width: wp("82%"),
    minWidth: wp("82%"),
    height: hp("28%"),
    minHeight: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15%")
  },
  View_91_358: {
    width: wp("73%"),
    minWidth: wp("73%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("33%"),
    justifyContent: "flex-start"
  },
  Text_91_358: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 22,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_91_359: {
    width: wp("39%"),
    minWidth: wp("39%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("30%"),
    justifyContent: "flex-start"
  },
  Text_91_359: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_91_360: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("39%")
  },
  View_91_361: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%")
  },
  View_91_362: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_91_362: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_91_363: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_91_363: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_91_364: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("1%")
  },
  ImageBackground_91_365: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_91_366: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%"),
    top: hp("45%")
  },
  View_91_367: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.20000000298023224
  },
  View_91_368: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%")
  },
  View_91_369: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_91_369: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.28,
    textTransform: "none"
  },
  ImageBackground_91_370: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_91_371: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("45%")
  },
  View_91_372: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_91_372: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_91_373: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_91_373: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_91_374: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_91_375: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    top: hp("45%")
  },
  View_91_376: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_91_377: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_91_377: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.28,
    textTransform: "none"
  },
  ImageBackground_91_412: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("187%")
  },
  View_91_413: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("2%")
  },
  View_91_414: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_91_415: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_91_416: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_91_418: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%")
  },
  View_318_597: {
    width: wp("56%"),
    minWidth: wp("56%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("80%")
  },
  View_313_483: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_313_483: {
    color: "rgba(255, 206, 33, 1)",
    fontSize: 8,
    fontWeight: "450",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.7999999999999998,
    textTransform: "uppercase"
  },
  View_316_484: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_316_484: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_316_486: {
    width: wp("56%"),
    minWidth: wp("56%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_316_486: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "450",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_318_506: {
    width: wp("125%"),
    minWidth: wp("125%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("153%")
  },
  View_316_503: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_316_503: {
    color: "rgba(255, 206, 33, 1)",
    fontSize: 8,
    fontWeight: "450",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.7999999999999998,
    textTransform: "uppercase"
  },
  View_316_504: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_316_504: {
    color: "rgba(255, 206, 33, 1)",
    fontSize: 8,
    fontWeight: "450",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.7999999999999998,
    textTransform: "uppercase"
  },
  View_91_486: {
    width: wp("125%"),
    minWidth: wp("125%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%")
  },
  ImageBackground_91_487: {
    width: wp("125%"),
    minWidth: wp("125%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_91_498: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("1%")
  },
  View_318_598: {
    width: wp("102%"),
    minWidth: wp("102%"),
    height: hp("32%"),
    minHeight: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("118%")
  },
  View_316_502: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_316_502: {
    color: "rgba(255, 206, 33, 1)",
    fontSize: 8,
    fontWeight: "450",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.7999999999999998,
    textTransform: "uppercase"
  },
  View_91_423: {
    width: wp("102%"),
    minWidth: wp("102%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16%")
  },
  View_91_424: {
    width: wp("82%"),
    minWidth: wp("82%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_91_425: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_91_426: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(81, 70, 101, 1)",
    borderColor: "rgba(140, 125, 168, 1)",
    borderWidth: 0.5
  },
  View_91_427: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_91_427: {
    color: "rgba(223, 205, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_91_428: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("0%")
  },
  View_91_429: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(81, 70, 101, 1)",
    borderColor: "rgba(140, 125, 168, 1)",
    borderWidth: 0.5
  },
  View_91_430: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_91_430: {
    color: "rgba(223, 205, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_91_431: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("0%")
  },
  View_91_432: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(81, 70, 101, 1)",
    borderColor: "rgba(140, 125, 168, 1)",
    borderWidth: 0.5
  },
  View_91_433: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("0%"),
    backgroundColor: "rgba(81, 70, 101, 1)",
    borderColor: "rgba(140, 125, 168, 1)",
    borderWidth: 0.5
  },
  View_91_434: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_91_434: {
    color: "rgba(223, 205, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_91_435: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_91_435: {
    color: "rgba(223, 205, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_91_436: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("0%")
  },
  View_91_437: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(140, 125, 168, 1)",
    borderWidth: 0.5
  },
  View_91_438: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_91_438: {
    color: "rgba(223, 205, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_91_439: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("0%")
  },
  View_91_440: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(81, 70, 101, 1)",
    borderColor: "rgba(140, 125, 168, 1)",
    borderWidth: 0.5
  },
  View_91_441: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_91_441: {
    color: "rgba(223, 205, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_91_442: {
    width: wp("102%"),
    minWidth: wp("102%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%")
  },
  View_91_443: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_91_444: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_91_445: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_91_446: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_91_446: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "450",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  ImageBackground_91_447: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  View_91_452: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("0%")
  },
  View_91_453: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_91_454: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_91_455: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_91_455: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  ImageBackground_91_456: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  View_91_460: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("0%")
  },
  View_91_461: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_91_462: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_91_463: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_91_463: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "450",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  ImageBackground_91_464: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  View_91_467: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%"),
    top: hp("0%")
  },
  View_91_468: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_91_469: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_91_470: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_91_470: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "450",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  ImageBackground_91_471: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  View_91_476: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    top: hp("0%")
  },
  View_91_477: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_91_478: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_91_479: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_91_479: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "450",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  ImageBackground_91_480: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  View_316_501: {
    width: wp("82%"),
    minWidth: wp("82%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%")
  },
  View_91_422: {
    width: wp("82%"),
    minWidth: wp("82%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_91_422: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_91_499: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_91_499: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_91_1001: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%"),
    top: hp("2%")
  },
  View_91_1002: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_91_1003: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_91_1004: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_91_1005: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%")
  },
  View_313_473: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("170%")
  },
  View_313_474: {
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
  View_313_475: {
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
  View_313_479: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_313_479: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "450",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_313_480: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_313_480: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.24,
    textTransform: "none"
  },
  View_313_481: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_313_481: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "450",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.2,
    textTransform: "none"
  },
  View_316_500: {
    width: wp("83%"),
    minWidth: wp("83%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("95%")
  },
  View_316_493: {
    width: wp("83%"),
    minWidth: wp("83%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_316_490: {
    width: wp("83%"),
    minWidth: wp("83%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  ImageBackground_316_492: {
    width: wp("83%"),
    minWidth: wp("83%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_316_494: {
    width: wp("83%"),
    minWidth: wp("83%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(30, 21, 47, 1)",
    opacity: 0.8999999761581421
  },
  View_316_499: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("6%")
  },
  View_316_496: {
    width: wp("32%"),
    minWidth: wp("32%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_316_496: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "450",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_316_498: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("0%")
  },
  ImageBackground_316_495: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_316_497: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_319_1071: {
    width: wp("56%"),
    minWidth: wp("56%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("67%")
  },
  View_319_1072: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_319_1072: {
    color: "rgba(255, 206, 33, 1)",
    fontSize: 8,
    fontWeight: "450",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.7999999999999998,
    textTransform: "uppercase"
  },
  View_319_1073: {
    width: wp("56%"),
    minWidth: wp("56%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_319_1073: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "450",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_319_1074: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%")
  },
  View_319_1075: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_319_1075: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_319_1076: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_319_1080: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("3%")
  },
  View_319_1081: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_319_1081: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_319_1082: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)

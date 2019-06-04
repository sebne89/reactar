import React from 'react';
import {
    StyleSheet,
    ScrollView,
    Image,
    Text,
    View,
    Dimensions,
    ActivityIndicator,
    TouchableOpacity,
    Modal,
    StatusBar,
} from 'react-native';

import { connect } from 'react-redux'
import { fetchData } from '../redux/action/nasa_action';

const uri = 'https://api.nasa.gov/planetary/apod?api_key=';
const api_key = 'IiPKYeVOFHuZawnmeheiDQJ7bsBh02rMrhnoGhMy';

class APOD extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            copyright: '',
            date: '',
            explanation: '',
            img: '',
            title: '',
            isLoading: true,
            modalVisible: false,
        }
    }

    componentDidMount() {
        this.fetchAPOD();
    }

    setModalVisible(visible) {
        this.setState({
            modalVisible: visible,
        })
    }

    fetchAPOD() {

        fetch(uri + api_key)
            .then((response) => response.json())
            .then((responseJson) => {

                let copyright = responseJson.copyright;
                let date = responseJson.date;
                let explanation = responseJson.explanation;
                let img = responseJson.url;
                let title = responseJson.title;

                this.setState({
                    copyright: copyright,
                    date: date,
                    explanation: explanation,
                    img: img,
                    title: title,
                    isLoading: false,
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render() {

        const {copyright, date, explanation, img, title} = this.state;

        return (
            <View style={styles.container}>
                {this.state.isLoading ?
                    <View style={styles.isLoading}>
                        <ActivityIndicator
                            size="large"
                        />
                        <Text style={styles.waitingText}>Please wait a sec, while we're loading the APOD from
                            NASA.</Text>
                    </View>
                    :
                    <ScrollView>
                        <View style={styles.apod}>
                            <Image
                                source={{uri: img}}
                                resizeMode='cover'
                                style={styles.img}
                            />

                            <View style={styles.titleBg}>
                                <Text style={styles.whitetext}>{title}</Text>
                            </View>

                            <View style={styles.informationBlock}>
                                <View style={styles.additionalInformationBg}>
                                    <Text style={styles.whitetext}>Copyright: {copyright}</Text>
                                    <Text style={styles.whitetext}>Date: {date}</Text>
                                </View>
                                <View style={styles.explanationBg}>
                                    <Text style={styles.whitetext}>Explanation: </Text>
                                    <Text style={styles.whitetext}>{explanation}</Text>
                                </View>
                            </View>

                            {/* Modal for APOD Gallery */}
                            <Modal
                                animationType='slide'
                                transparent={false}
                                visible={this.state.modalVisible}
                            >
                                <View style={styles.modal}>
                                    {/* Image Gallery */}
                                    <ScrollView>
                                        {this.props.nasaData.data.map(item => (
                                            <View
                                                key={item.date}
                                                style={styles.galleryElement}>
                                                <Image
                                                    source={{uri: item.url}}
                                                    resizeMode='cover'
                                                    style={styles.img}
                                                />
                                                <View style={styles.titleBg}>
                                                    <Text style={styles.whitetext}>{item.title}</Text>
                                                </View>


                                                {/*Textblock (Additional Information and Explanation) for each APOD*/}

                                                <View style={styles.informationBlock}>
                                                    <View style={styles.additionalInformationBg}>
                                                        <Text
                                                            style={styles.whitetext}>Copyright: {item.copyright}</Text>
                                                        <Text style={styles.whitetext}>Date: {item.date}</Text>
                                                    </View>

                                                    <View style={styles.explanationBg}>
                                                        <Text style={styles.whitetext}>Explanation: </Text>
                                                        <Text style={styles.whitetext}>{item.explanation}</Text>
                                                    </View>
                                                </View>

                                            </View>
                                        ))}
                                        <View style={{alignItems: 'center'}}>
                                            <TouchableOpacity
                                                style={styles.button}
                                                onPress={() => {
                                                    this.setModalVisible(false)
                                                }}>
                                                <Text style={styles.buttonText}>Close APOD Gallery</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </ScrollView>
                                </View>
                            </Modal>

                            {/* Button for APOD Modal */}
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => {
                                    this.setModalVisible(true);
                                    this.props.fetchData();
                                }}
                            >
                                <Text style={styles.buttonText}>Show the five latest APODs</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                }
            </View>
        )
    }
}

function mapStateToProps (state) {
    return {
        nasaData: state.nasaData
    }
}

function mapDispatchToProps (dispatch) {
    return {
        fetchData: () => dispatch(fetchData())
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    isLoading: {
        marginTop: 200,
        alignItems: 'center',
    },
    waitingText: {
        marginTop: 22,
        textAlign: 'center',
    },
    apod: {
        alignItems: 'center',
    },
    modal: {},
    galleryElement: {
        alignItems: 'center',
    },
    copyright: {},
    date: {},
    explanationBg: {
        marginBottom: 15,
        borderRadius: 10,
        padding: 10,
        backgroundColor: '#0080FF'
    },
    additionalInformationBg: {
        marginBottom: 15,
        borderRadius: 10,
        padding: 10,
        backgroundColor: '#7D7D7D'
    },
    title: {
        fontWeight: 'bold',
    },
    informationBlock: {
        margin: 10,
    },
    titleBg: {
        marginTop: -18,
        backgroundColor: '#0080FF',
        paddingVertical: 7,
        paddingHorizontal: 10,
        borderRadius: 8,
    },
    img: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    button: {
        backgroundColor: '#0080FF',
        borderRadius: 8,
        width: 250,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15,
        marginBottom: 22,
    },
    buttonText: {
        color: '#FFF',
    },
    whitetext: {
        color: '#FFF',
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(APOD);
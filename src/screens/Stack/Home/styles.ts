import { StyleSheet, Dimensions} from 'react-native';

const WIDTH = Dimensions.get('screen').width;

export const styles = StyleSheet.create({
    Container: {
        flex: 1,
        
        

    },
    header: {
        flex: 0.1,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    main: {
        flex: 1,
        backgroundColor: '#222',
        opacity: 0.9,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    areaInputs:{

        width: '90%',
        height: '90%',
        backgroundColor: '#D9D9D9',
        borderRadius: 5,
        alignItems: 'center',
        paddingVertical: 15
    },
    input:{
        backgroundColor: '#898989',
        flexDirection: 'row',
        borderWidth: 0.3,
        width: '90%',
        height: 40,
        borderRadius: 5,
        marginBottom: 8,
        alignItems: 'center',
        paddingLeft: 10,

    },
    inputCep: {
        backgroundColor: '#898989',
        flexDirection: 'row',
        borderWidth: 0.3,
        width: '40%',
        height: 40,
        borderRadius: 5,
        marginBottom: 8,
        alignItems: 'center',
        paddingLeft: 10,
        
    },
    btn:{
        backgroundColor: 'red',
        height: 40,
        width: '40%',
        marginLeft: 20,
        borderRadius: 5,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    viewCep:{
        flexDirection: 'row',
        
    }
})

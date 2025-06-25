import { AntDesign } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useRef, useState } from 'react';



import {
    Animated,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';


const parties = () => {
    const animatedImageSize = useRef(new Animated.Value(50)).current;
    const animatedWidth = useRef(new Animated.Value(65)).current;
    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleSidebar = () => {
        const newCollapsed = !isCollapsed;
        setIsCollapsed(newCollapsed);

        Animated.parallel([
            Animated.timing(animatedWidth, {
                toValue: newCollapsed ? 65 : 180,
                duration: 300,
                useNativeDriver: false,
            }),
            Animated.timing(animatedImageSize, {
                toValue: newCollapsed ? 50 : 80,
                duration: 300,
                useNativeDriver: false,
            }),
        ]).start();
    };

    const handleParties = () => {
        router.replace('/parties');
    };

    const handleDashboard = () => {
        router.replace('/Dashboard');
    };

    const handleLogout = () => {
        router.replace('/login');
    };

    const data = [
        {
            ledger: 'Ledger A',
            contact: '1234567890',
            party: 'Party X',
            mobile: '9876543210',
            whatsapp: '9876543210',
            balance: '₹1,200',
        },
        {
            ledger: 'Ledger B',
            contact: '2233445566',
            party: 'Party Y',
            mobile: '9123456780',
            whatsapp: '9123456780',
            balance: '₹3,500',
        },
    ];

    return (

        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1 }}>

                <View style={styles.header}>
                    <TouchableOpacity onPress={toggleSidebar}>
                        <AntDesign name="menuunfold" size={30} color="black" style={styles.icons} />
                    </TouchableOpacity>
                </View>

                <View style={{ flex: 1, flexDirection: 'row', }}>
                    <Animated.View style={[styles.sidebar, { width: animatedWidth }]}>
                        <ScrollView>
                            <Animated.Image
                                style={[
                                    styles.logo,
                                    {
                                        width: animatedImageSize,
                                        height: animatedImageSize,
                                    },
                                ]}
                                source={require('../assets/images/Digitalcloudies1.png')}
                            />

                            {renderRow('home', 'Dashboard', isCollapsed, handleDashboard)}
                            {renderRow('addusergroup', 'Parties', isCollapsed, handleParties)}
                            {renderRow('isv', 'Sales', isCollapsed)}
                            {renderRow('car', 'Stock Transfer', isCollapsed)}
                            {renderRow('shoppingcart', 'POS', isCollapsed)}
                            {renderRow('bank', 'Cash & Bank', isCollapsed)}
                            {renderRow('wallet', 'Expenses', isCollapsed)}
                            {renderRow('barchart', 'Reports', isCollapsed)}
                            {renderRow('laptop', 'Online Orders', isCollapsed)}
                            {renderRow('rocket1', 'Website Setup', isCollapsed)}
                            {renderRow('setting', 'Settings', isCollapsed)}
                            {renderRow('logout', 'Logout', isCollapsed, handleLogout)}
                        </ScrollView>
                    </Animated.View>

                    <View style={styles.card}>
                        <View style={{ width: '100%', flexDirection: 'row', gap: 10 }}>


                            <View style={{ width: '55%' }}><TextInput
                                style={styles.input}
                                placeholder="Search here"

                            />       </View>

                            <View style={styles.PlusCreate}>
                                <View ><AntDesign name="plus" color="white" size={20} /></View>
                                <View><Text style={{ color: 'white', fontSize: 17 }}>Create</Text></View>

                            </View>

                        </View>

                        {/* Excel,pdf,print */}

                        <View style={{ width: '100%', flexDirection: 'row', }}>

                            <View style={styles.Excel}>
                                <View ><AntDesign name="pdffile1" color="white" size={17} /></View>
                                <View><Text style={{ color: 'white', fontSize: 15 }}>Pdf</Text></View>
                            </View>

                            <View style={styles.Excel}>
                                <View ><AntDesign name="printer" color="white" size={17} /></View>
                                <View><Text style={{ color: 'white', fontSize: 15 }}>Print</Text></View>
                            </View>

                            <View style={styles.Excel}>
                                <View ><AntDesign name="exclefile1" color="white" size={17} /></View>
                                <View><Text style={{ color: 'white', fontSize: 15 }}>Excel</Text></View>
                            </View>

                            <View style={styles.Excel}>
                                <View ><AntDesign name="sharealt" color="white" size={17} /></View>
                                <View><Text style={{ color: 'white', fontSize: 15 }}>Share</Text></View>
                            </View>

                        </View>

                        {/* Table */}

                        <View style={{ backgroundColor: '#f5f5f6', height: 170, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
                            <View style={{ height: 150, margin: 10 }}>
                                <ScrollView horizontal>
                                    <View style={styles.table}>
                                        {/* Header Row */}
                                        <View style={[styles.table_row, styles.headerRow]}>
                                            <Text style={[styles.cell, styles.table_header]}>Ledger Name</Text>
                                            <Text style={[styles.cell, styles.table_header]}>Contact No</Text>
                                            <Text style={[styles.cell, styles.table_header]}>Party Name</Text>
                                            <Text style={[styles.cell, styles.table_header]}>Mobile</Text>
                                            <Text style={[styles.cell, styles.table_header]}>WhatsApp</Text>
                                            <Text style={[styles.cell, styles.table_header]}>Balance</Text>
                                            <Text style={[styles.cell, styles.table_header]}>Actions</Text>
                                        </View>

                                        {/* Data Rows */}
                                        {data.map((item, index) => (
                                            <View key={index} style={styles.table_row}>
                                                <Text style={styles.cell}>{item.ledger}</Text>
                                                <Text style={styles.cell}>{item.contact}</Text>
                                                <Text style={styles.cell}>{item.party}</Text>
                                                <Text style={styles.cell}>{item.mobile}</Text>
                                                <Text style={styles.cell}>{item.whatsapp}</Text>
                                                <Text style={styles.cell}>{item.balance}</Text>
                                                <View style={[styles.cell, styles.actionsCell]}>
                                                    <TouchableOpacity style={styles.actionBtn}><Text></Text></TouchableOpacity>
                                                    <TouchableOpacity style={styles.actionBtn}><Text></Text></TouchableOpacity>
                                                    <TouchableOpacity style={styles.actionBtn}><Text></Text></TouchableOpacity>
                                                    <TouchableOpacity style={styles.actionBtn}><Text></Text></TouchableOpacity>
                                                </View>
                                            </View>
                                        ))}
                                    </View>
                                </ScrollView>
                            </View>
                        </View>

                    </View>

                </View>



            </SafeAreaView>
        </SafeAreaProvider>


    )


}
const renderRow = (
    iconName: React.ComponentProps<typeof AntDesign>['name'],
    label: string,
    isCollapsed: boolean,
    onPress?: () => void
) => (
    <TouchableOpacity onPress={onPress}>
        <View style={styles.row}>
            <AntDesign name={iconName} size={22} color="white" style={styles.icon} />
            {!isCollapsed && <Text style={styles.text}>{label}</Text>}
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create(
    {

        card: {
            backgroundColor: '#f5f5f5',
            marginTop: 20,
            borderRadius: 1,
            width: '98%',
            paddingHorizontal: 10,
            paddingVertical: 10,
            height: '100%',
            gap: 10
        },
        header: {
            padding: 10,
            alignItems: 'flex-start',

        },
        icons: {
            marginLeft: 13,
            marginTop: 10,
            width: 100,
            fontWeight: '900',
        },

        sidebar: {
            backgroundColor: '#001529',
            height: '100%',
            paddingTop: 10,
        },

        logo: {
            resizeMode: 'contain',
            alignSelf: 'center',
            marginBottom: 20,
            borderRadius: 10,
        },
        row: {
            height: 50,
            flexDirection: 'row',
            alignItems: 'center',
            paddingLeft: 10,
        },
        icon: {
            marginRight: 10,
            marginLeft: 5,
        },
        text: {
            color: 'white',
            fontSize: 14,
            fontWeight: 'bold',
        },
        input: {
            borderColor: '#999',
            borderWidth: 1,
            borderRadius: 5,
            paddingHorizontal: 12,
            height: 40,
            marginBottom: 16,
            marginLeft: 10,
        },
        PlusCreate: {
            flexDirection: 'row',
            backgroundColor: '#1f6d70',
            width: '23%',
            height: 40,
            borderColor: '#999',
            borderWidth: 1,
            borderRadius: 5,
            display: 'flex',
            alignItems: 'center',
            justifyContent: "space-evenly",
        },
        Excel: {
            width: '18%',
            flexDirection: 'row',
            backgroundColor: '#1f87e8',
            height: 35,
            borderColor: '#999',
            borderWidth: 1,
            borderRadius: 5,
            display: 'flex',
            alignItems: 'center',
            justifyContent: "space-evenly",
            marginLeft: 10,


        },
        container: {
            marginTop: 50,
            padding: 16,
        },
        table: {
            // minWidth: screenWidth,
            borderWidth: 1,
            borderColor: '#333',
            borderRadius: 5,
            overflow: 'hidden',


        },
        table_row: {
            flexDirection: 'row',
            width: 1000,
            height: 50,
            borderBottomWidth: 1,
            borderColor: 'black',
            backgroundColor: 'white'
        },
        headerRow: {
            backgroundColor: '#96e8ff',

        },
        cell: {
            flex: 1,
            padding: 10,
            borderRightWidth: 1,
            borderColor: '#ccc',
            textAlign: 'center',
        },
        table_header: {
            fontWeight: 'bold',
        },
        actionsCell: {
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
        },
        actionBtn: {
            paddingHorizontal: 4,
        },

    }


)


export default parties;
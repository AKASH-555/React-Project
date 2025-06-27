import { AntDesign, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useRef, useState } from 'react';
import { Row, Rows, Table } from 'react-native-table-component';



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
    const renderRow = (
        iconName: React.ComponentProps<typeof AntDesign>['name'],
        label: string,
        onPress?: () => void
    ) => (
        <TouchableOpacity
            onPress={onPress}
            style={{ alignItems: 'center', marginHorizontal: '2.1%' }}
        >
            <AntDesign name={iconName} size={20} color="white" />
            <Text style={{ color: 'white', fontSize: 10 }}>{label}</Text>
        </TouchableOpacity>
    );

    const handlePartiesPage = () => {
        router.replace('/parties');
    };

    const handleDashboard = () => {
        router.replace('/Dashboard');
    };

    const handleLogout = () => {
        router.replace('/login');
    };

    


    const [showMoreMenu, setShowMoreMenu] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);


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

    const tableHead = ['Ledger Name', 'Contact Name.', 'Party Type', 'Mobile Number', 'WhatsApp Number', 'Balance'];
    const tableData = [
        ['Akash', '9876543210', 'BBB', '9876543210', '9876543210', '₹12,000'],
        ['Boww Booww', '9123456780', 'AAA', '9876543210', '9123456780', '₹5,000'],
        ['XYZ Company', '9012345678', 'KKK', '9012345678', '9012345678', '₹22,500'],
    ];


    const [showPartiesMenu, setShowPartiesMenu] = useState(false);
const [selectedPartyType, setSelectedPartyType] = useState(null);


    return (

        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1 }}>

                <View>
                    <Text style={styles.header}>Parties</Text>
                </View>

                <View style={{ flex: 1, flexDirection: 'row', }}>


                    <View style={styles.card}>
                        <View style={{ width: '100%', flexDirection: 'row', gap: 10 }}>


                            <View style={{ width: '60%' }}><TextInput
                                style={styles.input}
                                placeholder="Search here"

                            />       </View>

                            <View style={styles.PlusCreate}>
                                <View ><AntDesign name="plus" color="white" size={20} /></View>

                            </View>

                            {/* Excel,pdf,print */}

                            <View style={{ width: '20%' }}>
                                <TouchableOpacity
                                    onPress={() => setShowDropdown(!showDropdown)}
                                    style={styles.filterButton}
                                >
                                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                                        
                                        <AntDesign name="down" size={16} color="white" />
                                    </View>
                                </TouchableOpacity>

                                {showDropdown && (
                                    <View style={styles.dropdownContainer}>
                                        <TouchableOpacity style={styles.dropdownCard}>
                                            <MaterialCommunityIcons name="file-pdf-box" size={20} color={'white'} />
                                            <Text style={styles.dropdownText}>PDF</Text>
                                        </TouchableOpacity>

                                        <TouchableOpacity style={styles.dropdownCard}>
                                            <Feather name="printer" size={20} color={'white'} />
                                            <Text style={styles.dropdownText}>Print</Text>
                                        </TouchableOpacity>

                                        <TouchableOpacity style={styles.dropdownCard}>
                                            <Feather name="file-text" size={20} color={'white'} />
                                            <Text style={styles.dropdownText}>Excel</Text>
                                        </TouchableOpacity>

                                        <TouchableOpacity style={styles.dropdownCard}>
                                            <Feather name="share-2" size={20} color={'white'} />
                                            <Text style={styles.dropdownText}>Share</Text>
                                        </TouchableOpacity>
                                    </View>
                                )}
                            </View>



                        </View>


                        {/* Table */}

                        <View style={styles.table}>


                            <ScrollView horizontal>

                                <Table borderStyle={{ borderWidth: 1, borderColor: '#ccc' }}>
                                    <Row data={tableHead} style={styles.head} textStyle={styles.headText} />
                                    <Rows data={tableData} textStyle={styles.text} />
                                </Table>
                            </ScrollView>


                        </View>

                        



                    </View>

                </View>

                

                <View style={{ height: '6%', backgroundColor: '#001529', flexDirection: 'row', alignItems: 'center', gap: '5%' }}>
                    {renderRow('home', 'Dashboard',handleDashboard)}
                    {renderRow('addusergroup', 'Parties ^', () => setShowPartiesMenu(prev => !prev))}
                    {renderRow('isv', 'Sales')}
                    {renderRow('car', 'Stock Transfer')}
                    {renderRow('bars', 'More', () => setShowMoreMenu(prev => !prev))}

                </View>
             {showPartiesMenu && (
  <View
    style={{
      position: 'absolute',
      bottom: 70, 
      left: '15%', 
      backgroundColor: '#001529',
      padding: 10,
      borderRadius: 5,
      elevation: 5, 
      shadowColor: '#000', 
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      zIndex: 99,
    }}
  >
    <TouchableOpacity>
      <Text style={{ paddingVertical: 8 ,color:'white'}}>Party</Text>
    </TouchableOpacity>
    <TouchableOpacity>
      <Text style={{ paddingVertical: 8 ,color:'white'}}>Walk in Customers</Text>
    </TouchableOpacity>
    <TouchableOpacity >
      <Text style={{ paddingVertical: 8 ,color:'white'}}>Suppliers</Text>
    </TouchableOpacity>
  </View>
)}
   
                {showMoreMenu && (
                    <View style={{
                        position: 'absolute',
                        bottom: '6%',
                        right: '0%',
                        backgroundColor: '#001529',
                        borderRadius: 1,
                        height: '54%',
                        marginLeft: '1%',
                        gap: '4%',
                        padding: '2%',


                    }}>
                        {renderRow('shoppingcart', 'POS')}
                        {renderRow('bank', 'Cash & Bank')}
                        {renderRow('wallet', 'Expenses')}
                        {renderRow('barchart', 'Reports')}
                        {renderRow('laptop', 'Online Orders')}
                        {renderRow('rocket1', 'Website Setup')}
                        {renderRow('setting', 'Settings')}
                        {renderRow('logout', 'Logout', handleLogout)}
                        <TouchableOpacity onPress={() => setShowMoreMenu(false)} style={{ alignItems: 'center', marginTop: 50 }}>

                        </TouchableOpacity>
                    </View>
                )}



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


        dropdownContainer: {
            position: 'absolute',
            top: 50,
            left: -50,
            transform: [{ translateX: -100 }],
            gap: 8,

            paddingVertical: 8,
            paddingHorizontal: 10,
            zIndex: 999,
            elevation: 5,
            width: 200,
        },
        dropdownCard: {
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: 12,
            paddingHorizontal: 16,
            backgroundColor: '#3d96e9',
            borderRadius: 10,
            elevation: 4,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.15,
            shadowRadius: 5,
        },
        dropdownText: {
            fontSize: 16,
            marginLeft: 10,
            color: 'white',
        },

        card: {
            backgroundColor: '#f5f5f5',
            
            borderRadius: 1,
            width: '98%',
            paddingHorizontal: 10,
            paddingVertical: 10,
            height: '100%',
            gap: 10

        },
        header: {
            padding: 22,
            alignItems: 'flex-start',
            fontSize:20,
            fontWeight:'bold'
        },

        head: {
            height: 50,

            backgroundColor: '#e0f7fa'
        },
        text: {
            height: 40,
            width: 150,
            color: 'black',
            fontSize: 14,
            fontWeight: 'bold',
            textAlign: 'center',
            textAlignVertical: 'center',
        },

        headText: {
            margin: 6,
            width: 150,
            fontWeight: 'bold',
            textAlign: 'center'
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
            width: '20%',
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

            borderWidth: 1,
            borderColor: '#333',
            borderRadius: 5,



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
        filterButton: {
            backgroundColor: '#007bff',

            borderRadius: 5,
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '1%',

            width: '50%',
            height: 40
        },
        filterButtonText: {
            color: '#fff',
            fontSize: 14,
            fontWeight: 'bold',

        },
        buttonRow: {
            flexDirection: 'column',
            paddingHorizontal: '2%',

            marginBottom: '3%',
            justifyContent: 'center',
            gap: '-1%',
            backgroundColor: '#f5f5f5',
            padding: '3%',
            borderRadius: 1,
            elevation: 1,
            width: '100%',

        },
        date: {
            padding: '3%',
            borderRadius: 1,
            width: '92%',
            textAlign: 'center',
            marginTop: 5,
            backgroundColor: '#ffdead',
            fontWeight: 'bold',
            marginLeft: '4%'
        },

    }


)


export default parties;
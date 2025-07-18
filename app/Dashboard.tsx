import { AntDesign } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useRouter } from 'expo-router';
import { BarChart, LineChart, PieChart } from "react-native-gifted-charts";
import { Row, Rows, Table } from 'react-native-table-component';



import React, { useRef, useState } from 'react';
import {
  Animated,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const App = () => {
  const animatedWidth = useRef(new Animated.Value(65)).current;
  const animatedImageSize = useRef(new Animated.Value(50)).current;
  
  const router = useRouter();

  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [pickerMode, setPickerMode] = useState<'start' | 'end' | null>(null);


  const handleLogout = () => {
    router.replace('/login');
  };

    const handlePartiesPage = () => {
    router.replace('/parties');
  };

  const onPressDateInput = () => {
    setPickerMode('start');
  };

  const onChangeDate = (event: any, selectedDate?: Date) => {
    if (event.type === 'dismissed') {
      setPickerMode(null);
      return;
    }

    if (pickerMode === 'start') {
      if (selectedDate) {
        setStartDate(selectedDate);
        setPickerMode('end');
      }
    } else if (pickerMode === 'end') {1
      if (selectedDate) {
        setEndDate(selectedDate);
      }
      setPickerMode(null);
    }
  };

  const formatDate = (date: Date | null): string => {
    if (!date) return '';
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };
    const [showDropdown, setShowDropdown] = useState(false);
     const [stockhistory, setstockhistory] = useState(false);

const data1 = [
  { value: 10, label: '1/6' },
  { value: 30, label: '2/6' },
  { value: 60, label: '3/6' },
  { value: 70, label: '4/6' },
  { value: 90, label: '5/6' },
];

const data2 = [
  { value: 20 },
  { value: 25 },
  { value: 40 },
  { value: 50 },
  { value: 65 },
];


const yLabels = ['0.0', '0.1', '0.2', '0.3', '0.4', '0.5', '0.6', '0.7', '0.8', '0.9', '1.0'];
  const pieData = [
    { value: 50, color: '#FF6384', text: 'Aerftgy' },
    { value: 30, color: '#36A2EB', text: 'B' },
    { value: 20, color: '#FFCE56', text: 'C' },
  ];


const [selectedType, setSelectedType] = useState('Sales');

const tableHead = ['Billno', 'PurchaseDate', 'Supplier', 'Party', 'Mobile Number', 'Amount', 'Payment Status', 'Action'];
const widthArr = [80, 130, 120, 100, 120, 120, 120, 100];

const salesData = [
  ['S-1', '01/06/25', 'ABC Corp', 'Client A', '1234567890', '1000', 'Paid', ''],
  ['S-2', '02/06/25', 'XYZ Ltd', 'Client B', '0987654321', '1500', 'Pending', ''],
];

const purchaseData = [
  ['P-1', '01/06/25', 'Supplier A', 'Warehouse', '1231231231', '2000', 'Paid', ''],
  ['P-2', '03/06/25', 'Supplier B', 'Warehouse', '3213213213', '2500', 'Unpaid', ''],
];

const purchaseReturnData = [
  ['PR-1', '05/06/25', 'Supplier A', 'Warehouse', '4444444444', '500', 'Returned', ''],
];

const salesReturnData = [
  ['SR-1', '06/06/25', 'Client A', 'Return Dept', '5555555555', '700', 'Credited', ''],
];
const getCurrentTableData = () => {
  switch (selectedType) {
    case 'Sales': return salesData;
    case 'Purchase': return purchaseData;
    case 'Purchase Return / Dr. Note': return purchaseReturnData;
    case 'Sales Return / Cr. Note': return salesReturnData;
    default: return [];
  }
};

const currentData = getCurrentTableData();
const totalAmount = currentData.reduce((sum, row) => sum + Number(row[5]), 0);
const totalRow = ['', '', '', '', '', `Total : ${totalAmount}`, '', ''];

const tableWithTotal = [...currentData, totalRow];

const stockalert = ['Product','Quantity','Quantity Alert','	StockAlert Date'];
const stocks = [100,100,130,150];
const stocksrow=[20,20,20,20];
const stockdata=['ranjith','20','30','08/09/2024'];

const topcustomerhead=['Customer Name','Total Amount'];
const headsize = [150,150];

const [showMoreMenu, setShowMoreMenu] = useState(false);



  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
       

<View style={styles.container}>
        

          <ScrollView style={styles.dashboard} contentContainerStyle={{ paddingTop: '5%' }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: '10%' }}>Dashboard</Text>

            {/* Date Picker Card */}
            <View style={styles.card}>
              <View style={{ height:'100%' }}>
              <TouchableOpacity onPress={onPressDateInput} >
                <TextInput
                  style={styles.dateInput}
                  editable={false}
                  pointerEvents="none"
                  placeholder="Start Date - End Date"
                  value={
                    startDate && endDate
                      ? `${formatDate(startDate)}  -  ${formatDate(endDate)}`
                      : ''
                  }
                />
                     {pickerMode && (
                  <DateTimePicker
                  value={
                    pickerMode === 'start'
                      ? startDate || new Date()
                      : endDate || new Date()
                  }
                  mode="date"
                  display="default"
                  onChange={onChangeDate}
                  minimumDate={pickerMode === 'end' && startDate ? startDate : undefined}
                  maximumDate={pickerMode === 'start' && endDate ? endDate : undefined}
                />
              )}

              </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setShowDropdown(!showDropdown)}
                  style={styles.filterButton} 
                >
                  <View style={{ flexDirection:'row',gap:'15%' }}>
                    <Text style={styles.filterButtonText}>Filter Date</Text>
                  <AntDesign name="down" size={16} color="white" />
                  </View>
                  
                </TouchableOpacity>

                                  {showDropdown && (
                        <View style={styles.buttonRow}>
                          <Text style={styles.date}>Today</Text>
                          <Text style={styles.date}>Yesterday</Text>
                          <Text style={styles.date}>Last 7 Days</Text>
                          <Text style={styles.date}>This Month</Text>
                          <Text style={styles.date}>This Year</Text>
                        </View>
                      )}
              
                <View style={styles.totalsales}>
                 <View style={styles.iconBox}>
                    <MaterialCommunityIcons name="chart-line" size={20} color="white" />
                  </View>
                  <Text style={styles.totalsalesText}>Total Sales</Text>
                </View>

                <View style={styles.totalsales}>
                  <View style={styles.iconBox}>
                    <SimpleLineIcons name="handbag" size={20} color="white" />
                  </View>
                  <Text style={styles.totalsalesText}>Total Expense</Text>
                </View>

                <View style={styles.totalsales}>
                  <View style={styles.iconBox}>
                    <Ionicons name="pricetags-sharp" size={24} color="white" />
                  </View>
                  <Text style={styles.totalsalesText}>Payment Sent</Text>
                </View>

                <View style={styles.totalsales}>
                  <View style={styles.iconBox}>
                    <FontAwesome name="bank" size={24} color="white" />
                  </View>
                  <Text style={styles.totalsalesText}>Payment Received</Text>
                </View>
               
               
                  <View style={styles.pichart}>
                  <View style={{ flex: 1, alignItems: 'center',marginRight:'20%',marginTop:'10%' }}>
                    <Text style={styles.pieTitle}>Top Selling Product</Text>
                    <View style={{ marginLeft:'30%',width:'-1%',padding:'-1%',height:'50%',marginBottom:'20%' }}>
                        <PieChart
                          data={pieData}
                          donut
                          showText
                          radius={80}
                          innerRadius={30}
                          textColor="#000"
                          textSize={12}
                        />
                    </View>
                   <View style={styles.legendContainer}>
                      {pieData.map((item, index) => (
                        <View key={index} style={styles.legendItem}>
                          <View style={[styles.legendColorBox, { backgroundColor: item.color }]} >
                          <Text style={styles.legendText}>{item.text}</Text>
                          </View>
                        </View>
                      ))}
                    </View>
                  </View>
                </View>
                
                <View style={styles.verticalListcharbar}>
                <View style={styles.barchart}>
                  <View style={{ flex: 3, alignItems: 'center',padding:'1%',height:'100%'}}>
                    <Text style={styles.barTitle}>Sale&Purchase</Text>
               
                  <BarChart
                      data={[
                        { value: 10, label: '1/6/25', frontColor: '#ffa040', spacing: 0 },
                        { value: 20, label: '', frontColor: '#00C49F', spacing: 12 },

                        { value: 30, label: '2/6/25', frontColor: '#ffa040', spacing: 0 },
                        { value: 25, label: '', frontColor: '#00C49F', spacing: 12 },

                        { value: 20, label: '3/6/25', frontColor: '#ffa040', spacing: 0 },
                        { value: 15, label: '', frontColor: '#00C49F', spacing: 12 },

                        { value: 50, label: '4/6/25', frontColor: '#ffa040', spacing: 0 },
                        { value: 35, label: '', frontColor: '#00C49F', spacing: 12 },

                        { value: 40, label: '5/6/25', frontColor: '#ffa040', spacing: 0 },
                        { value: 45, label: '', frontColor: '#00C49F', spacing: 12 },
                      ]}
                      barWidth={16}
                      barBorderRadius={1}
                      spacing={20}
                      maxValue={60}
                      stepValue={10}
                      noOfSections={6}
                      xAxisLabelTextStyle={{ fontSize: 10, color: '#000', width: 40, textAlign: 'left' }}
                      yAxisTextStyle={{ fontSize: 9, color: '#333' }}
                      xAxisThickness={1}
                      yAxisThickness={1}
                      rotateLabel={false} // set to true if still cuts off
                    />



                  </View>
                  </View>
                </View>
                
                  <TouchableOpacity
                  onPress={() => setstockhistory(!stockhistory)}
                  style={styles.stockButton} 
                >
                   <View style={{ flexDirection:'row',gap:'3%' }}>
                      <Text style={styles.filterButtonText}>Recent Stock History</Text>
                    <AntDesign name="down" size={18} color="white" />
                   </View>
                  
                  </TouchableOpacity>

                                  {stockhistory && (
                        <View style={styles.stockhistorybuttton}>
                          <Text style={styles.recenthistory}>Total Sales Item</Text>
                          <Text style={styles.recenthistory1}>Total Sales Returns Items</Text>
                          <Text style={styles.recenthistory}>Total Purchase Items</Text>
                          <Text style={styles.recenthistory1}>Total Purchase Returns Items</Text>
                          
                        </View>
                      )}
               
                 <View style={{ backgroundColor:'white',marginTop:'1%',width:'100%', }}>
                  <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around', marginVertical: '1%' }}>
                      {['Sales', 'Purchase', 'Purchase Return / Dr. Note', 'Sales Return / Cr. Note'].map(type => (
                        <TouchableOpacity
                          key={type}
                          onPress={() => setSelectedType(type)}
                          style={{
                            backgroundColor: selectedType === type ? '#ff4500' : '#e0ffff',
                            paddingVertical: 6,
                            paddingHorizontal: 10,
                            borderRadius: 6,
                            marginVertical: 4,
                          }}>
                          <Text style={{ color: selectedType === type ? '#fff' : '#000' }}>{type}</Text>
                        </TouchableOpacity>
                      ))}
                   
                 </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={true} bounces={false}>

                          <View style={{ padding: '1%', paddingTop: '20%', backgroundColor: "#fff", marginTop: '-15%', minWidth: widthArr.reduce((a, b) => a + b, 0),}}>
                           <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
                            <Row
                              data={tableHead}
                              widthArr={widthArr}
                              style={styles.head}
                              textStyle={styles.tabletext}
                            />
                            <Rows
                              data={tableWithTotal}
                              widthArr={widthArr}
                              textStyle={styles.tabletext}
                            />
                          </Table>
                        </View> 
                      </ScrollView>
                      </View> 
                      <View style={styles.payments}>
              
                  <View pointerEvents="none" style={{ flex: 1, alignItems: 'center',paddingRight: '10%',width:'100%',height:'90%',marginRight:'20%' }}>
                    <Text style={styles.barTitle}>Payments</Text>
               <View style = {{ marginHorizontal:'-30%'}}>

               
                    <LineChart
                        data={data1}
                        data2={data2}
                        width={250}
                        height={200}
                        maxValue={100}
                        stepValue={10}
                        noOfSections={5}
                        thickness={2}
                        color="#ffa500"            // Line 1 color
                        color2="#00C49F"           // Line 2 color
                        yAxisTextStyle={{ fontSize: 10, color: 'grey' }}
                        xAxisLabelTextStyle={{ fontSize: 1 }}
                        xAxisThickness={1}
                        yAxisThickness={1}
                        startFillColor="#ffa500"
                        endFillColor="#ffa500"
                        startOpacity={0.2}
                        endOpacity={0.05}
                        isAnimated={true}
                        focusEnabled={false}
                        showVerticalLines={false}
                        hideRules={false}
                      />



                      </View>

                  </View>
                
                </View>
                
                <View style={{ backgroundColor:'white',marginTop:'-37%',height:'15%' }}>
                  <Text style={{ marginTop:'4%',fontWeight:'bold',marginHorizontal:'5%' }}>Stock Alert</Text>
                  <ScrollView horizontal>
                          <View style={{ padding: '-1%', paddingTop: '15%', backgroundColor: "#fff", marginTop: '-10%' }}>
                          
                          <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
                            <Row
                              data={stockalert}
                              widthArr={stocks}
                              style={styles.head}
                              textStyle={styles.tabletext}
                            />
                            <Rows
                              data={tableWithTotal}
                              widthArr={stocks}
                              height={stocksrow}
                              textStyle={styles.tabletext}
                            />
                          </Table>
                        </View> 
                       
                      </ScrollView>
                </View> 
               
                
                  <View style={{ padding:'1%' , paddingTop: '20%', backgroundColor: "#fff", height:'40%',marginTop:'-1%', paddingHorizontal: '4%',width:'100%',marginHorizontal:'1%'}}>
                           <Text style={{ marginTop:'-10%',fontWeight:'bold',marginHorizontal:'2%' }}>Top Customers</Text>
                           <View style={{ marginTop:'1%' }}>
                             <ScrollView horizontal>
                            <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9',margintop:10 }}>
                            <Row
                              data={topcustomerhead}
                              widthArr={headsize}
                              style={styles.head}
                              textStyle={styles.tabletext}
                            />
                            <Rows
                              data={tableWithTotal}
                              widthArr={headsize}
                              height={stocksrow}
                              textStyle={styles.tabletext}
                            />
                          </Table>
                             </ScrollView>
                             
</View>
                          </View>
                        </View> 

                        </View>
             
          </ScrollView>
      <View style={{ height: '6%', backgroundColor: '#001529', flexDirection: 'row', alignItems: 'center' ,gap:'5%'}}>
  {renderRow('home', 'Dashboard')}
  {renderRow('addusergroup', 'Parties',handlePartiesPage)}
  {renderRow('isv', 'Sales')}
  {renderRow('car', 'Stock Transfer')}
  {renderRow('bars', 'More', () => setShowMoreMenu(prev => !prev))}

</View>
{showMoreMenu && (
  <View style={{
    position: 'absolute',
    bottom: '6%',
    right: '0%',
    backgroundColor: '#001529',
    borderRadius: 1,
    height:'54%',
    marginLeft:'1%',
    gap:'4%',
    padding:'2%',
  
    
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


        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
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


const pieData = [
  {
    name: 'Sales',
    population: 21500000,
    color: '#5f63f2',
    legendFontColor: '#7F7F7F',
    legendFontSize: 12,
  },
  {
    name: 'Expenses',
    population: 2800000,
    color: '#FF6384',
    legendFontColor: '#7F7F7F',
    legendFontSize: 12,
  },
  {
    name: 'Profit',
    population: 527612,
    color: '#ffa040',
    legendFontColor: '#7F7F7F',
    legendFontSize: 12,
  },
  
];

const styles = StyleSheet.create({
  header: {
    padding: 10,
    alignItems: 'flex-start',

  },
  container: {
    flex: 1,
    flexDirection: 'column',
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
  icons: {
    marginLeft: 13,
    marginTop: 10,
    width: 100,
    fontWeight: '900',
  },
  row: {
    height: 50,
     flexDirection: 'row', 
    alignItems: 'center',
    paddingLeft: 10,
    
  },
  icon: {
    marginRight: 5,
    
  },
  text: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  dashboard: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  card: {
    backgroundColor: '#f5f5f5',
    marginTop: '7%',
    borderRadius: 1,
    width: '98%',
    paddingHorizontal: '3%',
    paddingVertical: '60%',
    height:5000,
    gap:'-10%',
   // marginVertical:'-10%'
  },
  dateInput: {
    padding: '4%',
    backgroundColor: 'white',
    borderRadius: 1,
    fontSize: 13,
    width: '100%',
    marginTop:'-55%'
  },
  date: {
    padding: '3%',
    borderRadius: 1,
    width: '92%',
    textAlign: 'center',
    marginTop: 5,
    backgroundColor: '#ffdead',
    fontWeight: 'bold',
    marginLeft:'4%'
  },
  
  recenthistory:{
     padding: 20,
    borderRadius: 20,
    width: '94%',
    textAlign: 'left',
    marginTop: '-15%',
    backgroundColor: '#e6f2ed',
    fontWeight: 'bold',
    color:'grey',
    height:100,
    marginLeft:8,
   
    
    
  },
  recenthistory1:{
    padding: 10,
    borderRadius: 20,
    width: '94%',
    textAlign: 'left',
    marginTop: 5,
    backgroundColor: '#ffefed',
    fontWeight: 'bold',
    color:'grey',
    height:100,
    marginLeft:8,
    marginBottom:'16%'
  },
  buttonRow: {
    flexDirection: 'column',
    paddingHorizontal: '2%',
    marginTop: '-10%',
    marginBottom:'3%',
    justifyContent: 'center',
    gap: '-1%',
    backgroundColor: '#f5f5f5',
    padding: '3%',
    borderRadius: 1,
    elevation: 1,
    width:'100%',
    
  },
  stockhistorybuttton: {
    flexDirection: 'column',
    paddingHorizontal: '-2%',
    marginTop: '1%',
    justifyContent: 'center',
    gap: '1%',
    backgroundColor: '#f5f5f5',
    height:500,
    borderRadius: 1,
    elevation: 1,
    width:'100%',
    paddingVertical:'80%'
  },
  filterButton: {
  backgroundColor: '#007bff',    
  paddingVertical: '-1%',
  paddingHorizontal: '10%',
  borderRadius: 5,
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '10%',
  marginTop:'-40%',
  width:'50%',
  height:'1%'
},
stockButton: {
  backgroundColor: '#007bff',    
  paddingVertical: '5%',
  paddingHorizontal: '5%',
  borderRadius: 8,
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '1%',
  marginTop:'-130%',
  width:'100%'
},

filterButtonText: {
  color: '#fff',
  fontSize: 14,
  fontWeight: 'bold',
  marginTop:'-1%'
},
  clickText: {
    fontSize: 18,
    color: '#007bff',
    marginTop: 10,
  },
  verticalList: {
    flexDirection: 'row',
    flexWrap:'wrap',
    paddingHorizontal: '-1%',
    marginTop: '-3%',
    gap: '2%',
    width:'98%',
    height:'30%'
  },
  verticalListchar:{
    flexDirection: 'row',
    paddingHorizontal: 3,
    marginTop: 50,
    gap: 10,
    height:'13%',
    width:'3.72%'    
  },
  verticalListcharbar:{
     flexDirection: 'row',
    paddingHorizontal: '-1%',
    marginTop: '-98%',
    gap: '1%',
    height:'20%',
    marginBottom:'-30%'
  },
   payments:{
     flexDirection: 'row',
    paddingHorizontal: '10%',
    marginTop: '-1%',
    gap: '1%',
    height:'15%',
    marginBottom:'35%',
    width:'100%',

    alignItems: 'flex-start',
     paddingVertical: '10%',
     marginHorizontal:-1,
     backgroundColor: 'white',

    
  },
  table:{
    flexDirection: 'column',
    paddingHorizontal: 5,
    marginTop: 10,
    gap: 1,
    height:700,
    width:280
  },
  totalsales: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: '6%',
    backgroundColor: 'white',
    borderRadius: 1,
    height: '2%',
    gap: '5%',
    width:'102%',
    marginRight:'1%',
    marginTop:'1%',
    marginBottom:'1%'
  },
  totalsalesIcon: {
    marginRight: '10%',
  },
  totalsalesText: {
    fontSize: 14,
    color: 'grey',
    marginTop:'-1%'
  },
   pichart: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: '50%',
    backgroundColor: 'white',
    borderRadius: 1,
    width:'102%',
    marginTop:'1%',
    flex: 1,
    height:'100%',
    // alignItems: 'center',
    marginRight:'20%',
    marginBottom:'100%'
  },
  barchart:{
    
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: '15%',
    
    backgroundColor: 'white',
    borderRadius: 1,
    height: 330,
    gap: 10,
    width:'100%'
    
  },
   paymentchart:{
    
    // flexDirection: 'row',
    // alignItems: 'flex-start',
    // paddingVertical: '10%',
    // marginHorizontal:-5,
    // backgroundColor: 'white',
    // borderRadius: 1,
    // height: '100%',
    
    
  },
  
  iconBox: {
    backgroundColor: '#5f63f2',
    padding: 5,
    borderRadius: 9,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    width: 50,
    height: 40,
     },
  pieTitle: {
    alignItems:'flex-start',
    fontSize: 13,
    fontWeight: 'bold',
    marginBottom: '10%',
    marginTop:'-70%',
    color: '#333',
    paddingRight:'30%'
  },
  barTitle: {
    alignItems:'flex-start',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: '5%',
    marginTop:'-8%',
    marginRight:'60%',
    color: '#333',
  
    
  },
legendContainer: {
  flexDirection: 'row',
  alignItems: 'flex-start',
  marginTop: '50%',
  width: '100%',
  paddingLeft: '10%',
  gap:'10%',
  flexWrap: 'wrap'
},

legendItem: {
  flexDirection: 'row',
  alignItems: 'center',
  marginTop: '3%',
  marginLeft:'20%'
},

legendColorBox: {
  width: '7%',
  height: 12,
  marginRight: '1%',
  borderRadius: 2,
},

legendText: {
  fontSize: 5,
  color: 'blue',
  margin:12
},
  head: { 
    height: 70, 
    backgroundColor: '#f1f8ff',
     
  },
tabletext:{
 margin:10,
  textAlign: 'center',

},

});

export default App;

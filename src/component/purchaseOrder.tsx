import React,{FC ,useState,useEffect} from 'react';
import './purchaseOrder.css';
import 'antd/dist/antd.css';
import { Row,Input, Col,Menu, Dropdown, Button,  Table, Tag, Space,Radio } from 'antd';
import {ShoppingOutlined,UploadOutlined,ArrowRightOutlined,QuestionCircleOutlined,PlusCircleTwoTone,CaretDownFilled,CloseCircleOutlined,EllipsisOutlined,SearchOutlined,PictureOutlined,BulbFilled,CloseOutlined,MoreOutlined,DownOutlined,PlusOutlined,SettingTwoTone,EditOutlined } from '@ant-design/icons'
interface formData{}

const plainOptions = ['organization', 'Customer'];


const menu = (
    <Menu >
      <Menu.Item  >
      <Input placeholder="" />
      </Menu.Item>
      <Menu.Item  >
        Dumy Data
      </Menu.Item>
      <Menu.Item  >
    <a style={{color:"blue"}} href="">
         <PlusOutlined /> New Vendor
        </a> 
      </Menu.Item>
    </Menu>
  );

const menu2 = (
    <Menu >
      <Menu.Item  >
       Anything
      </Menu.Item>
      
    </Menu>
  );
  
const percentage = (
    <Menu >
      <Menu.Item  >
       %
      </Menu.Item>
    </Menu>
  );
  
  const menu3 = (
      <Menu >
        <Menu.Item  >
         Anything 2
        </Menu.Item>
        
      </Menu>
    );
  

export const New_purchase_order : FC<formData> =(props)=>{



const [discountType,setdiscountType]=useState("At Transection Level")
const [display,setdisplay]=useState(true)
const [add,setadd]=useState([""])
const addVal =()=>{
console.log(add)

const addValue="";
add.push(addValue);
setadd(add)
}
const transection =()=>{
    setdisplay(true)
    console.log(display)
    setdiscountType("At transection level")
}
const atLine =()=>{
    setdisplay(false)
    console.log(display)

    setdiscountType("At line level")

}

const type = (
    <Menu >
      <Menu.Item onClick={transection}   >
       All transection level
      </Menu.Item>
      <Menu.Item  onClick={atLine} >
       At line level
      </Menu.Item>
      
    </Menu>
  );


    return (
        <div className="mainContainer">

<Row  className="headerContainer" >
      <Col  xs={14} sm={10} md={8} lg={6} xl={4}  > <div className="titleHeader"> <ShoppingOutlined /><span>New Purchase Order</span> </div></Col>
      <Col  xs={10} sm={14} md={16} lg={18} xl={20} > <div className="closeContainer"> <a href="#"><BulbFilled />Page Tips</a> <CloseOutlined className="close" /></div> </Col>
    </Row>
        <Row className="bodyContainer" >
            <Col  xs={8} sm={6} md={4} lg={4} xl={4}>

                <p style={{color:"red",float:"left",marginLeft:10}}>Vendor Name*</p>

</Col>
                    <Col  xs={16} sm={16} md={12} lg={12} xl={8} >

    <div className="vendor">
    <Dropdown  trigger={['click']}  overlay={menu}>
        

      <Button className="dropBtn" >
        <p  style={{float:"left"}}>

        Button
        </p>
          <DownOutlined style={{float:"right",paddingTop: 6}} />
      </Button>
    </Dropdown>
     <SearchOutlined className="searchIcon" style={{backgroundColor:"blue",width:30,height:30,color:"white",paddingTop:8}} />
        </div>
</Col>               
                

        </Row>
        <Row>
            <Col flex="1"  >
<Row  className="radio" >
<Col  xs={8} sm={6} md={4} lg={4} xl={4} >
            <p style={{color:"red",float:"left",}}>Deliver To*</p>
</Col>
<Col className="addressContainer"  xs={16} sm={16} md={12} lg={8} xl={8}>
<Radio.Group  size="small" className="radio" options={plainOptions}  />
    <div>

    <p>mallu <a  href="#"> <EditOutlined /></a> </p>
    
    <p className="address">Karnataka <br />
    India,
    </p>
    <a href="#">Change destination to deliver</a>
    </div>
</Col>

</Row>
<Row >
<Col  xs={8} sm={6} md={4} lg={4} xl={4}>
            <p style={{color:"red",float:"left",marginLeft:10}}>Purchase Order#*</p>
</Col>
<Col  xs={16} sm={16} md={12} lg={8} xl={5}>
   <p style={{display:"flex",flexDirection:"row"}} className="inputPurchase"> <Input  placeholder="PO-00002"  /><SettingTwoTone style={{alignSelf:"center",marginLeft:10,fontSize:15,}} /> </p>
</Col>

</Row>      
<Row >
<Col  xs={8} sm={6} md={4} lg={4} xl={4}>
            <p style={{float:"left",marginLeft:10}}>Reference#</p>
</Col>
<Col   xs={16} sm={16} md={12} lg={8} xl={5}>
   <p className="inputwidth" style={{display:"flex",flexDirection:"row"}}> <Input placeholder=""  /> </p>
</Col>

</Row>      
<Row >
<Col  xs={8} sm={6} md={4} lg={4} xl={4}>
            <p style={{float:"left",marginLeft:10}}>Date</p>
</Col>
<Col   xs={16} sm={16} md={12} lg={8} xl={5}>
   <p className="inputwidth" style={{display:"flex",flexDirection:"row"}}> <Input placeholder="05/04/2021"  /> </p>
   <p className="datevalue">To create transection dated before 01/07/2017,<a href="#">click here</a></p>
</Col>

</Row> 

<Row >
<Col  xs={8} sm={6} md={4} lg={4} xl={4}>
            <p style={{float:"left",marginLeft:10}}>Expected Delivery Date</p>
</Col>
<Col   xs={16} sm={16} md={6} lg={8} xl={5}>
   <p className="inputwidth" style={{display:"flex",flexDirection:"row"}}> <Input placeholder="dd/MM/yyyy"  /> </p>
</Col>
<Col  xs={8} sm={6} md={3} lg={2} xl={4}>
            <p style={{float:"left",marginLeft:10}}>Payment Terms</p>
</Col>
<Col   xs={16} sm={16} md={6} lg={8} xl={5}>
<Dropdown   trigger={['click']}  overlay={menu2}>
        

        <Button className="dropBtn" >
          <p  style={{float:"left"}}>
  
          Due on Receipt
          </p>
            <DownOutlined style={{float:"right",paddingTop: 6}} />
        </Button>
      </Dropdown>
</Col>

</Row>  
  
<Row >

<Col  xs={8} sm={6} md={4} lg={4} xl={4}>
            <p style={{float:"left",marginLeft:10}}>Shipment Reference</p>
</Col>
<Col   xs={16} sm={16} md={12} lg={8} xl={5}>
<Dropdown  trigger={['click']}  overlay={menu3}>
        

        <Button className="shipmentBtn" >
          <p  style={{float:"left"}}>
  
         Choose the shipment preference
          </p>
            <DownOutlined style={{float:"right",paddingTop: 6}} />
        </Button>
      </Dropdown>
</Col>

</Row>  
    </Col>
        </Row>
<hr className="horizontalLine" />



<Row >
    <Col  xs={4} sm={4} md={4} lg={4} xl={2}>
    <div style={{display:"flex",flexDirection:"row",marginLeft:10}}>

    <p>Discount Type</p>
    
    
    </div>
    </Col>
    
    <Col  xs={10} sm={4} md={4} lg={4} xl={12}>
    <Dropdown className="discount"  trigger={['click']}  overlay={type}>
        

        <Button className="discountValue" >
          <p  style={{float:"left"}}>
  
         {discountType}
          </p>
            <DownOutlined style={{float:"right",paddingTop: 6}} />
        </Button>
      </Dropdown>
   
    </Col>
    
    <Col className="bulk" xs={10} sm={12} md={12} lg={8} xl={5}>
    
    <SettingTwoTone style={{alignSelf:"center",marginLeft:10,marginRight:10,fontSize:15,}} />
<a href="#">Bulk update Line Items</a>

    </Col>
<hr className="horizontalLine" />

</Row>

{
    display ?
<>

<Row>
    <Col xs={20} sm={20} md={20} lg={20} xl={19} >
    
    <table className="table">
        <th className="ItemDetails"  >
            <tr>Item Details</tr>
            
        </th>
        <th>
            <tr>Account</tr>
            
        </th>
        <th>
            <tr>Quantity</tr>
            
        </th>
        <th>
            <tr>Rate</tr>
            
        </th>
        <th>
            <tr>Amount</tr>
            
        </th>
        
    </table>

    </Col>
    <Col  >
        <a href="#"><EllipsisOutlined className="dotIcon" /></a>
    </Col>
    <div className="tableValues" >
  
<Row>


    
    <Col  xs={20} sm={20} md={20} lg={20} xl={19} >
    
    <table className="table">
        <td  className="ItemDetails" >

            <tr >
                <a className="picture" href="#"><MoreOutlined style={{width:8}} /><MoreOutlined /></a>
                <a className="picture" href="#"><PictureOutlined  />  </a> 
                <span className="text">Type or click to selected an item</span>
                
                </tr>
        </td>
        <td>
            <tr>
            <Dropdown   trigger={['click']}  overlay={menu2}>
        

        <Button className="selectbtn" >
         
          Select Amount
         
            <DownOutlined style={{float:"right",paddingTop: 6}} />
        </Button>
      </Dropdown>
 
            </tr>
            
        </td>
        <td>
            <tr>1.00</tr>
            
        </td>
        <td>
            <tr>0.00</tr>
            
        </td>
        <td>
            <tr style={{fontWeight:"bold"}} >
            0.00

                 </tr>
            
        </td>
        
    </table>
<br />
    </Col>
        <Col >
        <a href="#"><EllipsisOutlined className="dotIcon" /></a>
        <a href="#" onClick={()=>addVal()}><CloseCircleOutlined   className="CloseIcon" /></a>
        
        </Col>
</Row>
    
    
    </div>
    
</Row>
<Row>
    <Col xs={20} sm={8} md={8} lg={8} xl={8}>
    <div className="add">
    <Button onClick={()=>addVal()}  className="addbtn" >  <PlusCircleTwoTone style={{color:"blue"}} /> Add another line <CaretDownFilled /></Button>
        <p>Customer Notes</p>
        <textarea name="" id="">Will be displayed on purchase order</textarea>
    </div>
    </Col>
    <Col className="total" xs={32} sm={16} md={13} lg={12} xl={8} >

        <div className="inputs">
    <p>Sub Total </p><p >0.00</p>
    </div>
    <div className="inputs">
    <p>Discount </p>
    <p style={{display:"flex",flexDirection:"row",marginRight:60}}>

    <input className="discountOffer" placeholder="0" />
    
    <Dropdown  trigger={['click']}  overlay={percentage}>
        

        <Button className="percentageBtn1" >
       % 
            <DownOutlined  style={{float:"right",paddingTop: 6}} />
        </Button>
      </Dropdown>
</p>
    </div>
        <div className="inputs">

    <input type="" placeholder="Adjustment"/>
    <input type=""/><QuestionCircleOutlined  />
    <span>0.00</span>
        </div>
        <div className="inputs">
            <h3>Total</h3>
            <h3>0.00</h3>
        </div>
</Col>
</Row>
</>
:
<>
<Row>
    <Col xs={20} sm={20} md={20} lg={8} xl={19} >
    
    <table className="table">
        <th className="ItemDetails"  >
            <tr>Item Details</tr>
            
        </th>
        <th>
            <tr>Account</tr>
            
        </th>
        <th>
            <tr>Quantity</tr>
            
        </th>
        <th>
            <tr>Rate</tr>
            
        </th>
        <th>
            <tr>Discount</tr>
            
        </th>
        <th>
            <tr>Amount</tr>
            
        </th>
        
    </table>

    </Col>
    <Col>
        <a href="#"><EllipsisOutlined className="dotIcon" /></a>
    </Col>
    
    <Col xs={20} sm={20} md={20} lg={12} xl={19} >
    
    <table className="table">
        <td  className="ItemDetails" >

            <tr >
                <a className="picture" href="#"><MoreOutlined style={{width:8}} /><MoreOutlined /></a>
                <a className="picture" href="#"><PictureOutlined  />  </a> 
                <span className="text">Type or click to selected an item</span>
                
                </tr>
        </td>
        <td>
            <tr>
            <Dropdown   trigger={['click']}  overlay={menu2}>
        

        <Button className="selectbtn" >
         
          Select Amount
         
            <DownOutlined style={{float:"right",paddingTop: 6}} />
        </Button>
      </Dropdown>
 
            </tr>
            
        </td>
        <td>
            <tr>1.00</tr>
            
        </td>
        <td>
            <tr>0.00</tr>
            
        </td>
        <td>
            <tr style={{display:"flex",flexDirection:"row"}} >0 
            <Dropdown  trigger={['click']}  overlay={percentage}>
        

        <Button className="percentageBtn" >
       % 
            <DownOutlined className="arrow" style={{float:"right",paddingTop: 6}} />
        </Button>
      </Dropdown>

            </tr>
            
        </td>
        <td>
            <tr style={{fontWeight:"bold"}} >
            0.00

                 </tr>
            
        </td>
        
    </table>
<br />
    </Col>
        <Col>
        <a href="#"><EllipsisOutlined className="dotIcon" /></a>
        <a href="#" onClick={()=>addVal()}><CloseCircleOutlined   className="CloseIcon" /></a>
        
        </Col>
</Row>
<Row>
    <Col xs={16} sm={16} md={12} lg={8} xl={8}>
    <div className="add">
    <Button  className="addbtn" >  <PlusCircleTwoTone style={{color:"blue"}} /> Add another line <CaretDownFilled /></Button>
        <p>Customer Notes</p>
        <textarea name="" id="">Will be displayed on purchase order</textarea>
    </div>
    </Col>
    <Col className="total" xs={20} sm={20} md={20} lg={20} xl={8} >

        <div className="inputs">
    <p>Sub Total </p><p>0.00</p>
    </div>
        
        <div className="inputs">

    <input type="" placeholder="Adjustment"/>
    <input type=""/><QuestionCircleOutlined  />
    <span>0.00</span>
        </div>
        <div className="inputs">
            <h3>Total</h3>
            <h3>0.00</h3>
        </div>
</Col>
</Row>



</>

}




<Row className="mainDetail">
    <Col  xs={32} sm={12} md={12} lg={12} xl={12  }>
        <div className="details" >

        <p>Terms and Conditions</p>
        <textarea className="textareaContainer" name="">Enter the terms and conditions of your business to be displayed in your transection
        </textarea>
        </div>
    </Col>
    <Col  xs={20} sm={6} md={6} lg={6} xl={12} >
        <div className="upload">
        <p>Attach File(s) to Purchase Order</p>
        <Button  className="addbtn" >  <UploadOutlined  /> Upload File <CaretDownFilled /></Button>
        <p style={{fontSize:10,marginTop:10}}>You can upload maximun of 5 files, 5MB each</p>
        </div>
    
</Col>
</Row>
<Row>
    <Col style={{display:"flex",flexDirection:"row", marginLeft:10}} xs={20} sm={20} md={20} lg={20} xl={32} >
    <h4>Additional Fields:</h4><span>Start adding custom fields for your purchase orders by going to setting <ArrowRightOutlined />Preferences <ArrowRightOutlined />Purchase orders. You can tag as many as ten extra fields. </span>
    </Col>
</Row>
        </div>
        
    )
}

import axios from 'axios'

const  Home = ()  => {
  const products = [
    {
    name : 'camera',
    price : 50000
  },
  {
    name : 'laptop',
    price : 150000
  },
  {
    name : 'Headphone',
    price : 3000
  },
]


const handleOnclick = async(item) => {
  try{
    const {data : apikey} = await axios.get('http://localhost:4000/api/getKey');
   
    // get order id 
    const {data : orderId} = await axios.post('http://localhost:4000/api/Product/getorderId', item);
    if(apikey && orderId){
      const options = {
        key : apikey.apikey, // Enter the Key ID generated from the Dashboard
       amount: '', // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
       currency: "INR",
       name: "Acme Corp", //your business name
       description: "Test Transaction",
       image: "https://example.com/your_logo",
       order_id: orderId.orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
       callback_url: `http://localhost:4000/api/Product/paymentVerification`,
       prefill: { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
           name: "Gaurav Kumar", //your customer's name
           email: "gaurav.kumar@example.com",
           contact: "9000090000" //Provide the customer's phone number for better conversion rates 
       },
       notes: {
           "address": "Razorpay Corporate Office"
       },
       theme: {
           "color": "#3399cc"
       }
   };
   const rzp1 = new window.Razorpay(options);
   rzp1.open();
    }
    
  }catch(err){
    console.log(err);
  }

}
  return (
    <div style = {{border : '2px solid red', display : 'flex' , justifyContent : 'center', height : '800px', alignitem : 'center'}} >
      {products.map((item,idx) => (
        <div style = {{border : '2px solid black', height : '200px', width : '200px'}} key = {idx}>
          <h3>{item.name}</h3>
          <h4>{item.price}</h4>
          <button onClick = {() => {handleOnclick(item)}}>Buy Now</button>
        </div>
      ))}
    </div>
  );
}

export default Home;

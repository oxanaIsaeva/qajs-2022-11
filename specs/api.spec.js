import axios from "axios";
import jest from "jest"; 
import expect from "expect"; jest;

test.skip ('GET request', async function(){
    const config = {
       method: 'get',
       url: 'https://dummyjson.com/products/1',
    }
    const resp = await axios(config);
    //console.log (resp.body);
    //expect(resp.status).toEqual(200);
    console.log (resp.data);
    expect(resp.data.title).toEqual('iPhone 9');
});

test.skip ('POST request', async function(){
    const config = {
       method: 'post',
       url: 'https://dummyjson.com/products/add',
       data:{
        "title": "New PC"
       },
       headers: { },
    }
    const resp = await axios(config);
    console.log (resp.data);
    expect(resp.status).toEqual(200);
    expect(resp.data.title).toEqual('New PC');
});



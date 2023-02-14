import axios from "axios";
import jest from "jest"; jest;

test ('Create User. Login already in use', async function(){
    const config = {
       method: 'post',
       url: 'https://bookstore.demoqa.com/Account/v1/User',
       data: {
        "userName": "test1",
        "password": "Test123*"
      },
      headers: { },
    }
    try{
      const resp = await axios(config);
    }
    catch (e) {
      console.log(e.response.status);
      console.log (e.response.data);
      expect(e.response.status).toEqual(406);
      expect(e.response.data.message).toEqual('User exists!');
    }
});

test ('Create User. Bad password', async function(){
  const config = {
     method: 'post',
     url: 'https://bookstore.demoqa.com/Account/v1/User',
     data: {
      userName: 'test2',
      password: 'Test*'
    },
    headers: { },
  }
  try{
    const resp = await axios(config);
  }
  catch (e) {
    console.log(e.response.status);
    console.log (e.response.data);
    expect(e.response.status).toEqual(400);
    expect(e.response.data.code).toEqual('1300');
  }
});

test ('Create User. Success', async function(){
  const config = {
     method: 'post',
     url: 'https://bookstore.demoqa.com/Account/v1/User',
     data: {
      userName: 'test59',
      password: 'Test123%'
    },
    headers: { },
  }
  const resp = await axios(config);
  console.log (resp.status);
  console.log (resp.data);
  expect(resp.status).toEqual(201);
  expect(resp.data.username).toEqual('test59');
});

test ('Generate Token with error', async function(){
  const config = {
     method: 'post',
     url: 'https://bookstore.demoqa.com/Account/v1/GenerateToken',
     data: {
      userName: 'test3',
      password: 'Test123%gjhkjds'
    },
    headers: { },
  }
  const resp = await axios(config);
  console.log (resp.status);
  console.log (resp.data);
  expect(resp.status).toEqual(200);
  expect(resp.data.status).toEqual('Failed');
});

test ('Generate Token. Success', async function(){
  const config = {
     method: 'post',
     url: 'https://bookstore.demoqa.com/Account/v1/GenerateToken',
     data: {
      userName: 'test3',
      password: 'Test123%'
    },
    headers: {
      "Content-Type": "application/json"
    },
  }
  const resp = await axios(config);
  console.log (resp.status);
  console.log (resp.data);
  expect(resp.status).toEqual(200);
  expect(resp.data.status).toEqual('Success');
});
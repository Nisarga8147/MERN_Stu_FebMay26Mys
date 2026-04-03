//How Cookie is used to track session ID
//simulate server-side session store
const sessionStore = {
    "abc123":{
        userId:101,username:"Nisarga",role:"student"
    }
};
//Simulated browser cookie value
const browserCookieSessionId = "abc123";
const sessionData = sessionStore[browserCookieSessionId];
console.log("Server-side session data:",sessionData);
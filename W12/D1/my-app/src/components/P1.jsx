import { useContext,useState } from "react";
import { AuthContext } from "../context/AuthContext";
// Login flow with JWT 
export function LoginFlow(params){
    const [email,setEmail] = useState("");
    const [password ,setPassword] = useState("");
    const [message,setMessage] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    
    const [returnedUser, setReturnedUser] = useState(null);
    const [returnedToken, setReturnedToken] = useState("");

    const {login, user} = useContext(AuthContext);
    const demoAccounts = [
        {
            email:"admin@r.com",
            password:"admin123",
            name:"Nisarga",
            role :"admin"
        },
        {
            email:"user@r.com",
            password:"user123",
            name:"Deeshan",
            role :"user"
        }
    ];

    //Simulation of login process
    function LoginRequest(loginEmail, loginPassword){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                const matchedUser = demoAccounts.find(
                    (account)=>
                        account.email === loginEmail && account.password === loginPassword   
                );
                if(!matchedUser){
                    reject(new Error("Invalid email/password"));
                    return;
                }
                resolve({
                    user: {
                    name:matchedUser.name,
                    email:matchedUser.email,
                    role:matchedUser.role
                },
                token:`demo-${matchedUser.role}-header.payload.signature`,
            });
            },1000);
        });
    }

    async function handlelogin(event) {
        event.preventDefault();
        setMessage("");
        setError("");
        setReturnedToken("");
        setReturnedUser(null);
        
        if(!email.trim() || !password.trim()){
            setError("Enter Credentials");
            return;
        }
        setIsLoading(true);

        try{
            const response = await LoginRequest(email.trim(),password.trim());
            login(response.user,response.token);
            setReturnedUser(response.user);
            setReturnedToken(response.token);
            setMessage("Login successfully");
            setEmail("");
            setPassword("");
        }
        catch(loginError){
            setError(loginError.message);
        }
        finally{
            setIsLoading(false);
        }
    }
    function fillAdminDemo(){
        setEmail("admin@r.com");
        setPassword("admin123");
        setMessage("");
        setError("");
    }
    function fillUserDemo(){
        setEmail("user@r.com");
        setPassword("user123");
        setMessage("");
        setError("");
    }
    return(
        <section>
            <h2>Login Flow</h2>
            <button type="button" onClick={fillAdminDemo}>Fill Admin Demo</button>
            <button type="button" onClick={fillUserDemo}>Fill User Demo</button>
            <hr />
            <form onSubmit={handlelogin}>
                <input type="email" id="email" placeholder="Enter email" value={email} onChange={(event)=>
                    {setEmail(event.target.value);
                }} />
                <input type="password" id="password" placeholder="Enter password" value={password} onChange={(event)=>
                    {setPassword(event.target.value);
                }} />
                    <button type="submit" disabled={isLoading}>Submit</button>
                    <form>
                        {error && <p>{error}</p>}
                        {message && <p>{message}</p>}
                        <hr />
                        <p>
                            <code>
                                <strong>User:</strong>
                                {returnedUser ? ` ${returnedUser.name} | ${returnedUser.email} | ${returnedUser.role}` : "No user returned yet"}
                            </code>
                            <code>
                                <strong>Token:</strong>
                                {returnedToken || "No token returned yet"}
                            </code>
                        </p>
                        <h4>AuthContext state</h4>
                        <code>
                            {user ? `${user.name} | ${user.email} | ${user.role}` : "No user in authcontext"}
                        </code>
                    </form>
            </form>
        </section>
    );
}
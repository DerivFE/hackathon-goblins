export const js_buy_contract = `
/*
 * This is an example of using JavaScript with NodeJS to buy a contract via the Deriv/Binary API.
 * This is a simple example where we do not check first if the user has the 
 * symbol available to buy. To check this you would use the active_symbols call.
 * To run this example using NodeJS
 * - Ensure you have NodeJs installed (https://nodejs.org/).
 * - Save this script to a directory on your computer as \`buy_contract.js\`.
 * - Run \`npm install ws\` to install the websocket library.
 * - Edit the example and change the app_id and the API token. 
 * - Then run \`node buy_contract.js\`.
 * 
 * The api token should be from the same account that the contract is to be purchased for.
 */
const WebSocket = require('ws');

// You can register for an app_id here https://developers.deriv.com/docs/app-registration/.
const app_id = 1089; // Replace with your app_id or leave as 1089 for testing.

const ws = new WebSocket('wss://ws.binaryws.com/websockets/v3?app_id=' + app_id);

// You can get your token here https://app.deriv.com/account/api-token. 
const token = ''; // Replace with your API token.

ws.onopen = function (evt) {
    ws.send(JSON.stringify({ "authorize": token })) // First send an authorize call.
};

ws.onmessage = function (msg) {
    var data = JSON.parse(msg.data);
    // console.log('Response: %o', data); // Uncomment this to see full response data. 
    if (data.error !== undefined) {
        console.log(data.error.message);
        ws.close();
    } else if (data.msg_type == 'authorize') {
        /*
        * Since we can not ensure calls to websocket are made in order we must wait for 
        * the response to the authorize call before sending the buy request. 
        */
        ws.send(JSON.stringify({
            "buy": 1,
            "subscribe": 1,
            "price": 10,
            "parameters": { "amount": 10, "basis": "stake", "contract_type": "CALL", "currency": "USD", "duration": 1, "duration_unit": "m", "symbol": "R_10" }
        }));
    } else if (data.msg_type == 'buy') { // Our buy request was successful let's print the results. 
        console.log("Contract Id " + data.buy.contract_id + "\u005Cn");
        console.log("Details " + data.buy.longcode + "\u005Cn");
    } else if (data.msg_type == 'proposal_open_contract') { // Because we subscribed to the buy request we will receive updates on our open contract. 
        var isSold = data.proposal_open_contract.is_sold;
        if (isSold) { // If \`isSold\` is true it means our contract has finished and we can see if we won or not.
            console.log("Contract " + data.proposal_open_contract.status + "\u005Cn");
            console.log("Profit " + data.proposal_open_contract.profit + "\u005Cn");
            ws.close();
        } else { // We can track the status of our contract as updates to the spot price occur. 
            var currentSpot = data.proposal_open_contract.current_spot;
            var entrySpot = 0;
            if (typeof (data.proposal_open_contract.entry_tick) != 'undefined') {
                entrySpot = data.proposal_open_contract.entry_tick;
            }
            console.log("Entry spot " + entrySpot + "\u005Cn");
            console.log("Current spot " + currentSpot + "\u005Cn");
            console.log("Difference " + (currentSpot - entrySpot) + "\u005Cn");
        }
    }
};
`

export const js_ticks = `
/*
 * This is an example of using JavaScript with NodeJS to collect ticks for your trading app using Deriv's API.
 * To run this example using NodeJS
 * - Ensure you have NodeJs installed (https://nodejs.org/).
 * - Save this script to a directory on your computer as \`ticks.js\`.
 * - Run \`npm install ws\` to install the websocket library.
 * - Edit the example and change the app_id (Replace with your app_id or leave as 1089 for testing).
 * - Then run \`node ticks.js\`.
 */

const WebSocket = require('ws');
var ws = new WebSocket('wss://ws.binaryws.com/websockets/v3?app_id=1089');

ws.onopen = function (evt) {
    ws.send(JSON.stringify({ ticks: 'R_100' }));
};

ws.onmessage = function (msg) {
    var data = JSON.parse(msg.data);
    console.log('Ticks update: %o', data);
};
`

export const js_acc_balance = `
/*
 * This is an example of using JavaScript with NodeJS to subscribe to balance of an account. 
 * To run this example using NodeJS
 * - Ensure you have NodeJs installed (https://nodejs.org/).
 * - Save this script to a directory on your computer as \`account_balance.js\`.
 * - Run \`npm install ws\` to install the websocket library.
 * - Edit the example and change the app_id and the API token. 
 * - Then run \`node account_balance.js\`.
 * 
 * The api token should be from the same account that the balance is to be checked for.
 */
const WebSocket = require('ws');

// You can register for an app_id here https://developers.deriv.com/docs/app-registration/.
const app_id = 1089; // Replace with your app_id.
const ws = new WebSocket('wss://ws.binaryws.com/websockets/v3?app_id=' + app_id);

// You can get your token here https://app.deriv.com/account/api-token. 
const token = ''; // Replace with your API token.

ws.onopen = function (evt) {
    ws.send(JSON.stringify({ "authorize": token })) // First send an authorize call.
};

ws.onmessage = function (msg) {
    var data = JSON.parse(msg.data);
    // console.log('Response: %o', data); // Uncomment to see the full JSON response.
    if (data.error !== undefined) {
        console.log('Error : %o', data.error.message);
    } else if (data.msg_type == 'authorize') {
        /*
        * Since we can not ensure calls to websocket are made in order we must wait for 
        * the response to the authorize call before sending the balance request. 
        * 
        * We subscribe to balance updates so any updates to balance will be received.
        * If you perform a trade while this script is running you should see updates 
        * to the balance printed.  
        */
        ws.send(JSON.stringify({ "balance": 1, "subscribe": 1 }))
    } else if (data.msg_type == 'balance') {
        console.log('Current Balance: %o', data.balance.balance);
    } else {
        console.log('Unknown Response %o', data);
    }
};
`

export const js_proposal = `
/*
 * This is an example of using JavaScript with NodeJS to view contract proposals via the Deriv/Binary API.
 * This is a simple example where we do not check first if the user has the
 * symbol available. To check this you would use the active_symbols call.
 * To run this example using NodeJS
 * - Ensure you have NodeJs installed (https://nodejs.org/).
 * - Save this script to a directory on your computer as \`proposal.js\`.
 * - Run \`npm install ws\` to install the websocket library.
 * - Edit the example and change the app_id and the API token. 
 * - Then run \`node proposal.js\`.
 * 
 */
const WebSocket = require('ws');
const app_id = 1089; // Replace with your app_id or leave as 1089 for testing.
const ws = new WebSocket('wss://ws.binaryws.com/websockets/v3?app_id=' + app_id);

ws.onopen = function (evt) {
    ws.send(JSON.stringify({
        "proposal": 1,
        "subscribe": 1,
        "amount": 10,
        "basis": "payout",
        "contract_type": "CALL",
        "currency": "USD",
        "duration": 1,
        "duration_unit": "m",
        "symbol": "R_100",
        "barrier": "+0.1"
    }));
};

ws.onmessage = function (msg) {
    var data = JSON.parse(msg.data);
    // console.log('Response: %o', data); // Uncomment this to see full response data. 
    if (data.error !== undefined) {
        console.log("Error: %s", data.error.message);
        ws.close();
    } else if (data.msg_type == 'proposal') {
        console.log("Details: %s", data.proposal.longcode);
        console.log("Ask Price: %s", data.proposal.display_value);
        console.log("Payout: %s", data.proposal.payout);
        console.log("Spot: %s", data.proposal.spot);
    }
};
`

export const js_keep_alive = `
/*
 * This is an example of using JavaScript with NodeJS to create a proposal subscription and prevent it from timing out.  
 * A ping will be sent via websocket to the server every 30 seconds. 
 * This approach can be used for all subscriptions to prevent timeout.
 * To run this example using NodeJS
 * - Ensure you have NodeJs installed (https://nodejs.org/).
 * - Save this script to a directory on your computer as \`proposal_keep_alive.js\`.
 * - Run \`npm install ws\` to install the websocket library.
 * - Edit the example and change the app_id and the API token. 
 * - Then run \`node proposal_keep_alive.js\`.
 * 
 * The api token should be from the same account that the contract is to be purchased for.
 */
const WebSocket = require('ws');

// You can register for an app_id here https://developers.deriv.com/docs/app-registration/.
const app_id = 1089; // Replace with your app_id.
const ws = new WebSocket('wss://ws.binaryws.com/websockets/v3?app_id=' + app_id);

ws.onopen = function (evt) {
    ws.send(JSON.stringify({
        "proposal": 1,
        "subscribe": 1,
        "amount": 10,
        "basis": "payout",
        "contract_type": "CALL",
        "currency": "USD",
        "duration": 1,
        "duration_unit": "m",
        "symbol": "R_100",
        "barrier": "+0.1"
    }));
    /*
    * Send a ping ever 30 seconds to keep the connection alive, needs to use the same 
    * websocket connection as the one you want to maintain.
    */
    setInterval(ping, 30000);
};
ws.onmessage = function (msg) {
    var data = JSON.parse(msg.data);
    // console.log('Response: %o', data); // Uncomment this to see full response data. 
    if (data.error !== undefined) {
        console.log("Error: %s ", data.error.message);
        ws.close();
    } else if (data.msg_type == 'proposal') { 
        console.log("Details: %s", data.proposal.longcode);
        console.log("Ask Price: %s", data.proposal.display_value);
        console.log("Payout: %s", data.proposal.payout);
        console.log("Spot: %s", data.proposal.spot);
    } else if (data.msg_type == 'ping') {
        console.log("ping");
    }
};
function ping() { ws.send(JSON.stringify({ "ping": 1 })) }
`

export const cs_buy_contract = `using System;
using System.Text;
using System.Threading.Tasks;
using System.Net.WebSockets;
using System.Threading;
using System.Net;
using Newtonsoft.Json.Linq;
/*
 * This is an example of using C# to buy a contract.
 * This is a simple script as it does not check if the account has access to the
 * asset before placing the trade. You can use \`asset_index\` call https://developers.deriv.com/playground/#asset_index to check this.
 * The example was originally written in dotnet version 5.0.  
 * It uses the Newtonsoft Json.net Library https://www.newtonsoft.com/json
 * This can be run on Windows/linux or Mac.
 *  
 * To run this example 
 * - Ensure you have dotnet SDK installed https://dotnet.microsoft.com/download/dotnet. 
 * - Run \`dotnet new console --output buy_contract\` In a directory on your computer.
 * - Then run \`dotnet add buy_contract package Newtonsoft.Json\`.
 * - Change to the new buy_contract dir and edit the \`Program.cs\` file, paste in the contents of this script and save.
 * - Run \`dotnet run --project buy_contract\` in the parent directory.
 * The API token should be from the same account that the contract is to be purchased for.
 */
namespace DerivWSDemo
{
    class DerivWS
    {
        private ClientWebSocket ws = new ClientWebSocket();
        private string app_id = "1089"; // Change this to yor app_id. Get it from here https://developers.deriv.com/docs/app-registration/.
        public static string token = ""; // Change this to your token. Get it from here https://app.deriv.com/account/api-token.
        private string websocket_url = "wss://ws.binaryws.com/websockets/v3?app_id=";

        public async Task SendRequest(string data)
        {
            while (this.ws.State == WebSocketState.Connecting) { };
            if (this.ws.State != WebSocketState.Open)
            {
                throw new Exception("Connection is not open.");
            }
            var reqAsBytes = Encoding.UTF8.GetBytes(data);
            var ticksRequest = new ArraySegment<byte>(reqAsBytes);
            await this.ws.SendAsync(ticksRequest,
                WebSocketMessageType.Text,
                true,
                CancellationToken.None);
            Console.WriteLine("The request has been sent: ");
            Console.WriteLine(data);
            Console.WriteLine("\r\n \r\n");
        }

        public async Task StartListen()
        {
            WebSocketReceiveResult result;
            while (this.ws.State == WebSocketState.Open)
            {
                var buffer = new ArraySegment<byte>(new byte[4096]);
                result = await this.ws.ReceiveAsync(new ArraySegment<byte>(buffer.Array), CancellationToken.None);
                if (result.MessageType == WebSocketMessageType.Close)
                {
                    Console.WriteLine("Connection Closed!");
                    break;
                }
                else
                {
                    var str = Encoding.UTF8.GetString(buffer.Array, 0, result.Count);
                    // Console.WriteLine(str); // Uncomment to see full json response.
                    JObject resultObject = JObject.Parse(str);
                    /*
                    * Since we can not ensure calls to websocket are made in order we must wait for 
                    * the response to the authorize call before sending the buy request. 
                    */
                    if ((resultObject["error"] != null))
                    {
                        Console.WriteLine(resultObject["error"]["code"]);
                        Console.WriteLine(resultObject["error"]["message"]);
                    }
                    else if (string.Equals((string)resultObject["msg_type"], "authorize"))
                    {
                        string parameters = " \"parameters\": { \"amount\": 10, \"basis\": \"stake\", \"contract_type\": \"CALL\", \"currency\": \"USD\", \"duration\": 1, \"duration_unit\": \"m\", \"symbol\": \"R_10\" }}";
                        string data = "{\"buy\": 1, \"subscribe\": 1, \"price\": 10," + parameters;
                        this.SendRequest(data).Wait();
                    }
                    else if (string.Equals((string)resultObject["msg_type"], "buy"))
                    {
                        Console.WriteLine("contract Id {0}", resultObject["buy"]["contract_id"]);
                        Console.WriteLine("Details {0}", resultObject["buy"]["longcode"]);
                    }
                    else if (string.Equals((string)resultObject["msg_type"], "buy"))
                    {
                        Console.WriteLine("contract Id {0}", resultObject["buy"]["contract_id"]);
                        Console.WriteLine("Details {0}", resultObject["buy"]["longcode"]);
                    }
                    else if (string.Equals((string)resultObject["msg_type"], "proposal_open_contract"))
                    { // Because we subscribed to the buy request we will receive updates on our open contract. 
                        bool isSold = (bool)resultObject["proposal_open_contract"]["is_sold"];
                        if (isSold)
                        { // If \`isSold\` is true it means our contract has finished and we can see if we won or not.
                            Console.WriteLine("Contract {0}", resultObject["proposal_open_contract"]["status"]);
                            Console.WriteLine("Profit {0}", resultObject["proposal_open_contract"]["profit"]);
                            ws.Abort();
                            ws.Dispose();
                        }
                        else
                        { // We can track the status of our contract as updates to the spot price occur. 
                            float currentSpot = (float)resultObject["proposal_open_contract"]["current_spot"];
                            float entrySpot = 0;
                            if (!String.IsNullOrEmpty((string)resultObject["proposal_open_contract"]["entry_tick"]))
                            {
                                entrySpot = (float)resultObject["proposal_open_contract"]["entry_tick"];
                            }
                            Console.WriteLine("Entry spot {0}", entrySpot);
                            Console.WriteLine("Current spot {0}", currentSpot);
                            Console.WriteLine("Difference {0}", (currentSpot - entrySpot));
                            Console.WriteLine("\r\n");
                        }
                    }
                }
            }
        }

        public async Task Connect()
        {
            Uri uri = new Uri(websocket_url + app_id);
            Console.WriteLine("Prepare to connect to: " + uri.ToString());
            Console.WriteLine("\r\n");
            // WebProxy proxyObject = new WebProxy("http://172.30.160.1:1090",true); // These 2 lines allow proxying set the proxy url as needed.
            // ws.Options.Proxy = proxyObject;
            ServicePointManager.SecurityProtocol = SecurityProtocolType.Tls12 | SecurityProtocolType.Tls11;
            await ws.ConnectAsync(uri, CancellationToken.None);
            Console.WriteLine("The connection is established!");
            Console.WriteLine("\r\n");
        }

        static void Main(string[] args)
        {
            var bws = new DerivWS();
            bws.Connect().Wait();
            string data = "{ \"authorize\": \"" + token + "\"}";
            bws.SendRequest(data).Wait();
            bws.StartListen().Wait();
        }
    }
}`;

export const cs_ticks = `using System;
using System.Text;
using System.Threading.Tasks;
using System.Net.WebSockets;
using System.Threading;
using System.Net;
using Newtonsoft.Json.Linq;
/*
 * This is an example of using C# to subscribe to a tick stream.
 * The example was originally written in dotnet version 5.0. 
 * It uses the Newtonsoft Json.net Library https://www.newtonsoft.com/json.
 * This can be run on Windows/linux or Mac.
 *  
 * To run this example 
 * - Ensure you have dotnet SDK installed https://dotnet.microsoft.com/download/dotnet. 
 * - Run \`dotnet new console --output ticks\` in a directory on your computer.
 * - Then run \`dotnet add ticks package Newtonsoft.Json\`.
 * - Change to the new ticks directory and edit the \`Program.cs\` file, paste in the contents of this script and save.
 * - Run \`dotnet run --project ticks\`.
 */
namespace DerivWSDemo
{
    class DerivWS
    {
        private ClientWebSocket ws = new ClientWebSocket();
        // You can register for an app_id here https://developers.deriv.com/docs/app-registration/.
        private string app_id = "1089"; // Change this to yor app_id.
        private string websocket_url = "wss://ws.binaryws.com/websockets/v3?app_id=";

        public async Task SendRequest(string data)
        {
            while (this.ws.State == WebSocketState.Connecting) { };
            if (this.ws.State != WebSocketState.Open)
            {
                throw new Exception("Connection is not open.");
            }
            var reqAsBytes = Encoding.UTF8.GetBytes(data);
            var ticksRequest = new ArraySegment<byte>(reqAsBytes);
            await this.ws.SendAsync(ticksRequest,
                WebSocketMessageType.Text,
                true,
                CancellationToken.None);
            Console.WriteLine("The request has been sent: ");
            Console.WriteLine(data);
            Console.WriteLine("\r\n \r\n");
        }

        public async Task StartListen()
        {
            WebSocketReceiveResult result;
            while (this.ws.State == WebSocketState.Open)
            {
                var buffer = new ArraySegment<byte>(new byte[1024]);
                do
                {
                    result = await this.ws.ReceiveAsync(new ArraySegment<byte>(buffer.Array), CancellationToken.None);
                    if (result.MessageType == WebSocketMessageType.Close)
                    {
                        Console.WriteLine("Connection Closed!");
                        break;
                    }
                    else
                    {
                        var str = Encoding.UTF8.GetString(buffer.Array, 0, result.Count);
                        // Console.WriteLine(str); // Uncomment to see full JSON response.
                        JObject resultObject = JObject.Parse(str);
                        if ((resultObject["error"] != null))
                        {
                            Console.WriteLine(resultObject["error"]["code"]);
                        }
                        else if (string.Equals((string)resultObject["msg_type"], "tick"))
                        {
                            Console.WriteLine("Ask: {0} Bid: {1}", resultObject["tick"]["ask"], resultObject["tick"]["bid"]);
                        }
                    }
                } while (!result.EndOfMessage);
            }
        }

        public async Task Connect()
        {
            Uri uri = new Uri(websocket_url + app_id);
            Console.WriteLine("Prepare to connect to: " + uri.ToString());
            Console.WriteLine("\r\n");
            ServicePointManager.SecurityProtocol = SecurityProtocolType.Tls12 | SecurityProtocolType.Tls11;
            await ws.ConnectAsync(uri, CancellationToken.None);
            Console.WriteLine("The connection is established!");
            Console.WriteLine("\r\n");
        }

        static void Main(string[] args)
        {
            string data = "{\"ticks\":\"R_10\"}";
            var bws = new DerivWS();
            bws.Connect().Wait();
            bws.SendRequest(data).Wait();
            bws.StartListen().GetAwaiter();
            Console.ReadLine();
        }
    }
}`;

export const cs_acc_balance = `using System;
using System.Text;
using System.Threading.Tasks;
using System.Net.WebSockets;
using System.Threading;
using System.Net;
using Newtonsoft.Json.Linq;
/*
 * This is an example of using C# to get the balance of an account.
 * The example was originally written in dotnet version 5.0.  
 * It uses the Newtonsoft Json.net Library https://www.newtonsoft.com/json
 * This can be run on Windows/linux or Mac.
 *  
 * To run this example 
 * - Ensure you have dotnet SDK installed https://dotnet.microsoft.com/download/dotnet. 
 * - Run \`dotnet new console --output account_balance\` in a directory on your computer.
 * - Then run \`dotnet add account_balance package Newtonsoft.Json\` 
 * - Change to the new account_balance directory and edit the \`Program.cs\` file, paste in the contents of this script and save.
 * - Run \`dotnet run --project account_balance\` in the parent directory.
 * The API token should be from the same account that the balance is to be checked for.
 */
namespace DerivWSDemo
{
    class DerivWS
    {
        private ClientWebSocket ws = new ClientWebSocket();
        // You can register for an app_id here https://developers.deriv.com/docs/app-registration/.
        private string app_id = "1089"; // Change this to yor app_id.
        // You can get your token here https://app.deriv.com/account/api-token.
        public static string token = ""; // Change this to the token you want to get the balance from. 
        private string websocket_url = "wss://ws.binaryws.com/websockets/v3?app_id=";

        public async Task SendRequest(string data)
        {
            while (this.ws.State == WebSocketState.Connecting) { };
            if (this.ws.State != WebSocketState.Open)
            {
                throw new Exception("Connection is not open.");
            }
            var reqAsBytes = Encoding.UTF8.GetBytes(data);
            var ticksRequest = new ArraySegment<byte>(reqAsBytes);

            await this.ws.SendAsync(ticksRequest,
                WebSocketMessageType.Text,
                true,
                CancellationToken.None);
            Console.WriteLine("The request has been sent: ");
            Console.WriteLine(data);
            Console.WriteLine("\r\n \r\n");
        }

        public async Task StartListen()
        {
            WebSocketReceiveResult result;
            while (this.ws.State == WebSocketState.Open)
            {
                var buffer = new ArraySegment<byte>(new byte[1024]);
                do
                {
                    result = await this.ws.ReceiveAsync(new ArraySegment<byte>(buffer.Array), CancellationToken.None);
                    if (result.MessageType == WebSocketMessageType.Close)
                    {
                        Console.WriteLine("Connection Closed!");
                        break;
                    }
                    else
                    {
                        var str = Encoding.UTF8.GetString(buffer.Array, 0, result.Count);
                        // Console.WriteLine(str); // Uncomment to see full JSON response.
                        JObject resultObject = JObject.Parse(str);
                        if ((resultObject["error"] != null))
                        {
                            Console.WriteLine(resultObject["error"]["code"]);
                            Console.WriteLine(resultObject["error"]["message"]);
                        } else if (string.Equals((string)resultObject["msg_type"], "authorize")) {
                        /*
                        * Since we can not ensure calls to websocket are made in order we must wait for 
                        * the response to the authorize call before sending the balance request. 
                        * 
                        * We subscribe to balance updates so any updates to balance will be received.
                        * If you perform a trade while this script is running you should see updates 
                        * to the balance printed.  
                        */
                            var data = "{\"balance\":1,\"subscribe\":1}";
                            this.SendRequest(data).Wait();
                        } else if (string.Equals((string)resultObject["msg_type"], "balance")){
                            Console.WriteLine("Current Balance: {0}", resultObject["balance"]["balance"]);
                        } 
                    }
                } while (!result.EndOfMessage);
            }
        }

        public async Task Connect()
        {
            Uri uri = new Uri(websocket_url + app_id);
            Console.WriteLine("Prepare to connect to: " + uri.ToString());
            Console.WriteLine("\r\n");
            // WebProxy proxyObject = new WebProxy("http://172.30.160.1:1090",true); // These 2 lines allow proxying set the proxy url as needed.
            // ws.Options.Proxy = proxyObject;
            ServicePointManager.SecurityProtocol = SecurityProtocolType.Tls12 | SecurityProtocolType.Tls11;
            await ws.ConnectAsync(uri, CancellationToken.None);
            Console.WriteLine("The connection is established!");
            Console.WriteLine("\r\n");
        }

        static void Main(string[] args)
        {
            string data = "{ \"authorize\": \""+ token +"\"}";
            var bws = new DerivWS();
            bws.Connect().Wait();
            bws.SendRequest(data).Wait();
            bws.StartListen().GetAwaiter();
            Console.ReadLine();
        }
    }
}`;

export const cs_proposal = `using System;
using System.Text;
using System.Threading.Tasks;
using System.Net.WebSockets;
using System.Threading;
using System.Net;
using Newtonsoft.Json.Linq;
/*
 * This is an example of using C# to view contract proposals via the Deriv/Binary API.
 * This is a simple example where we do not check first if the user has the 
 * symbol available. To check this you would use the active_symbols call.
 * The example was originally written in dotnet version 5.0.
 * It uses the Newtonsoft Json.net Library https://www.newtonsoft.com/json.
 * This can be run on Windows/linux or Mac.
 *  
 * To run this example 
 * - Ensure you have dotnet SDK installed https://dotnet.microsoft.com/download/dotnet. 
 * - Run \`dotnet new console --output proposal\` in a directory on your computer.
 * - Then run \`dotnet add proposal package Newtonsoft.Json\`. 
 * - Change to the new proposal directory and edit the \`Program.cs\` file, paste in the contents of this script and save.
 * - Run \`dotnet run --project proposal\` in the parent directory.
 */
namespace DerivWSDemo
{
    class DerivWS
    {
        private ClientWebSocket ws = new ClientWebSocket();
        private string app_id = "1089"; // Change this to yor app_id.
        private string websocket_url = "wss://ws.binaryws.com/websockets/v3?app_id=";

        public async Task SendRequest(string data)
        {
            while (this.ws.State == WebSocketState.Connecting) { };
            if (this.ws.State != WebSocketState.Open)
            {
                throw new Exception("Connection is not open.");
            }
            var reqAsBytes = Encoding.UTF8.GetBytes(data);
            var ticksRequest = new ArraySegment<byte>(reqAsBytes);
            await this.ws.SendAsync(ticksRequest,
                WebSocketMessageType.Text,
                true,
                CancellationToken.None);
            Console.WriteLine("The request has been sent: ");
            Console.WriteLine(data);
            Console.WriteLine("\r\n \r\n");
        }

        public async Task StartListen()
        {
            WebSocketReceiveResult result;
            while (this.ws.State == WebSocketState.Open)
            {
                var buffer = new ArraySegment<byte>(new byte[1024]);
                do
                {
                    result = await this.ws.ReceiveAsync(new ArraySegment<byte>(buffer.Array), CancellationToken.None);
                    if (result.MessageType == WebSocketMessageType.Close)
                    {
                        Console.WriteLine("Connection Closed!");
                        break;
                    }
                    else
                    {
                        var str = Encoding.UTF8.GetString(buffer.Array, 0, result.Count);
                        // Console.WriteLine(str); // Uncomment to see full JSON response.
                        JObject resultObject = JObject.Parse(str);
                        if ((resultObject["error"] != null))
                        {
                            Console.WriteLine(resultObject["error"]["code"]);
                            Console.WriteLine(resultObject["error"]["message"]);
                        }
                        else if (string.Equals((string)resultObject["msg_type"], "proposal"))
                        {
                            Console.WriteLine("Details: {0}", resultObject["proposal"]["longcode"]);
                            Console.WriteLine("Ask Price: {0}", resultObject["proposal"]["display_value"]);
                            Console.WriteLine("Payout: {0}", resultObject["proposal"]["payout"]);
                            Console.WriteLine("Spot: {0}", resultObject["proposal"]["spot"]);
                        }
                    }
                } while (!result.EndOfMessage);
            }
        }

        public async Task Connect()
        {
            Uri uri = new Uri(websocket_url + app_id);
            Console.WriteLine("Prepare to connect to: " + uri.ToString());
            Console.WriteLine("\r\n");
            // WebProxy proxyObject = new WebProxy("http://172.30.160.1:1090",true); // These 2 lines allow proxying set the proxy url as needed.
            // ws.Options.Proxy = proxyObject;
            ServicePointManager.SecurityProtocol = SecurityProtocolType.Tls12 | SecurityProtocolType.Tls11;
            await ws.ConnectAsync(uri, CancellationToken.None);
            Console.WriteLine("The connection is established!");
            Console.WriteLine("\r\n");
        }

        static void Main(string[] args)
        {
            string data = "{ \"proposal\": 1, \"amount\": 100, \"barrier\": \"+0.1\", \"basis\": \"payout\", \"contract_type\": \"CALL\", \"currency\": \"USD\", \"duration\": 60, \"duration_unit\": \"s\", \"symbol\": \"R_100\" , \"subscribe\" : 1}";
            var bws = new DerivWS();
            bws.Connect().Wait();
            bws.SendRequest(data).Wait();
            bws.StartListen().GetAwaiter();
            Console.ReadLine();
        }
    }
}`;

export const cs_keep_alive = `using System;
using System.Text;
using System.Threading.Tasks;
using System.Net.WebSockets;
using System.Threading;
using System.Net;
using Newtonsoft.Json.Linq;
/*
/*
 * This is an example of using C# to create a proposal subscription and prevent it from timing out.  
 * A ping will be sent via websocket to the server every 30 seconds. 
 * This approach can be used for all subscriptions to prevent timeout.  
 * The example was originally written in dotnet version 5.0.  
 * It uses the Newtonsoft Json.net Library https://www.newtonsoft.com/json.
 * This can be run on Windows/linux or Mac.
 *  
 * To run this example 
 * - Ensure you have dotnet SDK installed https://dotnet.microsoft.com/download/dotnet. 
 * - Run \`dotnet new console --output proposal_keep_alive\` in a directory on your computer.
 * - Then run \`dotnet add proposal_keep_alive package Newtonsoft.Json\`.
 * - Change to the new proposal_keep_alive directory and edit the \`Program.cs\` file, paste in the contents of this script and save.
 * - Run \`dotnet run --project proposal_keep_alive\` in the parent directory.
 */
namespace DerivWSDemo
{
    class DerivWS
    {
        private ClientWebSocket ws = new ClientWebSocket();
        // You can register for an app_id here https://developers.deriv.com/docs/app-registration/.        
        private string app_id = "1089"; // Change this to yor app_id.
        private string websocket_url = "wss://ws.binaryws.com/websockets/v3?app_id=";
        private bool connected = false;

        public async Task SendRequest(string data)
        {
            while (this.ws.State == WebSocketState.Connecting) { };
            if (this.ws.State != WebSocketState.Open)
            {
                throw new Exception("Connection is not open.");
            }
            if (!this.connected) // Only start the ping once connected and only run the timer once. 
            {
                this.connected = true;
                sendPing();
            }
            var reqAsBytes = Encoding.UTF8.GetBytes(data);
            var ticksRequest = new ArraySegment<byte>(reqAsBytes);
            await this.ws.SendAsync(ticksRequest,
                WebSocketMessageType.Text,
                true,
                CancellationToken.None);
            Console.WriteLine("The request has been sent: ");
            Console.WriteLine(data);
            Console.WriteLine("\r\n \r\n");
        }
        private async void sendPing()
        {
            while (true){

                this.SendRequest("{\"ping\" :1}").Wait();
                await Task.Delay(30000); // Delay the loop for 30 seconds.
            }
        }
        public async Task StartListen()
        {
            WebSocketReceiveResult result;
            while (this.ws.State == WebSocketState.Open)
            {
                var buffer = new ArraySegment<byte>(new byte[1024]);
                do
                {
                    result = await this.ws.ReceiveAsync(new ArraySegment<byte>(buffer.Array), CancellationToken.None);
                    if (result.MessageType == WebSocketMessageType.Close)
                    {
                        Console.WriteLine("Connection Closed!");
                        break;
                    }
                    else
                    {
                        var str = Encoding.UTF8.GetString(buffer.Array, 0, result.Count);
                        // Console.WriteLine(str); // Uncomment to see full JSON response.
                        JObject resultObject = JObject.Parse(str);
                        if ((resultObject["error"] != null))
                        {
                            Console.WriteLine(resultObject["error"]["code"]);
                            Console.WriteLine(resultObject["error"]["message"]);
                        }
                        else if (string.Equals((string)resultObject["msg_type"], "proposal"))
                        {
                            Console.WriteLine("Details: {0}", resultObject["proposal"]["longcode"]);
                            Console.WriteLine("Ask Price: {0}", resultObject["proposal"]["display_value"]);
                            Console.WriteLine("Payout: {0}", resultObject["proposal"]["payout"]);
                        }
                    }
                } while (!result.EndOfMessage);
            }
        }

        public async Task Connect()
        {
            Uri uri = new Uri(websocket_url + app_id);
            Console.WriteLine("Prepare to connect to: " + uri.ToString());
            Console.WriteLine("\r\n");
            // WebProxy proxyObject = new WebProxy("http://tardis:1080",true); // These 2 lines allow proxying set the proxy url as needed.
            // ws.Options.Proxy = proxyObject;
            ServicePointManager.SecurityProtocol = SecurityProtocolType.Tls12 | SecurityProtocolType.Tls11;
            await ws.ConnectAsync(uri, CancellationToken.None);
            Console.WriteLine("The connection is established!");
            Console.WriteLine("\r\n");
        }

        static void Main(string[] args)
        {
            string data = "{ \"proposal\": 1, \"amount\": 100, \"barrier\": \"+0.1\", \"basis\": \"payout\", \"contract_type\": \"CALL\", \"currency\": \"USD\", \"duration\": 60, \"duration_unit\": \"s\", \"symbol\": \"R_100\" , \"subscribe\" : 1}";
            var bws = new DerivWS();
            bws.Connect().Wait();
            bws.SendRequest(data).Wait();
            bws.StartListen().GetAwaiter();
            Console.ReadLine();
        }
    }
}`;

export const php_buy_contract = `<?php
/*
 * This is an example of using PHP to buy a contract via the Deriv/Binary API.
 * This is a simple example of buying a contract where we do not check first if the user has the
 * symbol available to buy. To check this you would use the active_symbols call.
 * The example uses the ratchetphp/Pawl library.  
 * To run this example 
 * - Save it to a new directory as \`buy_contract.php\`.
 * - In the new directory download and install composer as explained here https://getcomposer.org/download/.
 * - Run \`php composer.phar require ratchet/pawl\`.
 * - Edit the example and change the app_id and the API token. 
 * - Then run \`php buy_contract.php\`.
 * The api token should be from the same account that the contract is to be purchased for.
 */

require __DIR__ . '/vendor/autoload.php';

// You can register for an app_id here https://developers.deriv.com/docs/app-registration/.
$myAppId = 1089; // Put your app_id here. 

// You can get your token here https://app.deriv.com/account/api-token.
$token = ''; // Put the authorization token for the account to buy the contract for here. 

\Ratchet\Client\connect('wss://ws.binaryws.com/websockets/v3?app_id=' . $myAppId)->then(function ($conn) use ($token) {
    $conn->on('message', function ($msg) use ($conn, $token) {
        // echo $msg."\n"; Uncomment this to see full JSON return message.
        $msgPHP = json_decode($msg, 1);
        if (isset($msgPHP["error"])) {
            echo $msgPHP["error"]["message"];
            $conn->close();
        } else if ($msgPHP["msg_type"] == 'authorize') {  // We have a successful authorization so we can now buy a contract.
            /*
             * Since there can be no guarantee of the order of the calls when using websocket we need
             * to check that we have received a reply to the authorize call before sending the buy 
             * request.
             */
            $conn->send('{ "buy":1, "subscribe":1, "price":10, "parameters":{ "amount":10, "basis":"stake", "contract_type":"CALL", "currency":"USD", "duration":1, "duration_unit":"m", "symbol":"R_10" } } ');
        } else if ($msgPHP["msg_type"] == 'buy') { // Our buy request was successful let's print the results. 
            echo ("contract Id " . $msgPHP["buy"]["contract_id"] . "\n");
            echo ("Details " . $msgPHP["buy"]["longcode"] . "\n");
        } else if ($msgPHP["msg_type"] == 'proposal_open_contract') { // Because we subscribed to the buy request we will receive updates on our open contract. 
            $isSold = $msgPHP["proposal_open_contract"]["is_sold"];
            if ($isSold) { // If \`isSold\` is true it means our contract has finished and we can see if we won or not.
                echo ("Contract " . $msgPHP["proposal_open_contract"]["status"] . "\n");
                echo ("Profit " .  $msgPHP["proposal_open_contract"]["profit"] . "\n");
                $conn->close();
            } else { // We can track the status of our contract as updates to the spot price occur. 
                $currentSpot = $msgPHP["proposal_open_contract"]["current_spot"];
                $entrySpot = 0;
                if (isset($msgPHP["proposal_open_contract"]["entry_tick"])) {
                    $entrySpot = $msgPHP["proposal_open_contract"]["entry_tick"];
                }
                echo ("Entry spot " . $entrySpot . "\n");
                echo ("Current spot " . $currentSpot . "\n");
                echo ("Difference " . ($currentSpot - $entrySpot) . "\n");
            }
        }
    });
    $conn->send('{"authorize" : "' . $token . '"}');
}, function ($e) {
    echo "Could not connect: {$e->getMessage()}\n";
});`;

export const php_ticks = `<?php
/*
 * This is an example of using PHP to subscribe to a tick stream.
 * The example uses the ratchetphp/Pawl library.  
 * To run this example 
 * - Save it to a new directory as \`ticks.php\`.
 * - In the new directory download and install composer as explained here https://getcomposer.org/download/.
 * - Run \`php composer.phar require ratchet/pawl\`.
 * - Edit the example and change the app_id and the API token. 
 * - Then run \`php ticks.php\`.
 */

require __DIR__ . '/vendor/autoload.php';
$myAppId = 1089; // Change this to your app_id. 
\Ratchet\Client\connect('wss://ws.binaryws.com/websockets/v3?app_id='.$myAppId)->then(function($conn) {
    $conn->on('message', function($msg) use ($conn) {
        //echo $msg."\n"; // Uncomment to see full JSON reply.
        $msgPHP = json_decode($msg, 1); 

        if (isset($msgPHP["error"])) { 
            echo $msgPHP["error"]["message"];
            $conn->close();
        }else if (isset($msgPHP["tick"])) {
            $tick = $msgPHP["tick"]; 
            echo ("Ask: ".$tick["ask"]. " Bid: ". $tick["bid"]."\n");;    
        }else {
            echo ("received ". $msgPHP['msg_type']."\n");
        }
    });

    $conn->send('{"ticks" : "R_100"}');
}, function ($e) {
    echo "Could not connect: {$e->getMessage()}\n";
});`;

export const php_acc_balance = `<?php
/*
 * This is an example of using PHP to get an account balance from the Deriv/Binary API.
 * The example uses the ratchetphp/Pawl library.  
 * To run this example 
 * - Save it to a new directory as \`account_balance.php\`.
 * - In the new directory download and install composer as explained here https://getcomposer.org/download/.
 * - Run \`php composer.phar require ratchet/pawl\`.
 * - Edit the example and change the app_id and the API token. 
 * - Then run \`php account_balance.php\`.
 * The API token should be from the same account that the balance is to be obtained from. 
 *
 */

require __DIR__ . '/vendor/autoload.php';

// You can register for an app_id here https://developers.deriv.com/docs/app-registration/.
$myAppId = 1089; // Put your app_id here. 

// You can get your token here https://app.deriv.com/account/api-token. 
$token = ''; // Put the authorization token for the account to get the balance from here.  

\Ratchet\Client\connect('wss://ws.binaryws.com/websockets/v3?app_id=' . $myAppId)->then(function ($conn) use ($token) {
    $conn->on('message', function ($msg) use ($conn, $token) {
        // echo $msg; // Uncomment this to see the full JSON response.
        $msgPHP = json_decode($msg, 1);
        /*
         * Since there can be no guarantee of the order of the calls when using websocket we need
         * to check that we have received a reply to the authorize call before sending the balance 
         * request.
         */
        if (isset($msgPHP["error"])) {
            echo $msgPHP["error"]["message"];
            $conn->close();
        }else if ($msgPHP["msg_type"] == 'authorize') {
            $conn->send('{"balance" : 1, "subscribe" :1  }'); // Subscribing means we will continue to receive balance updates until this script exits.  
        } else if ($msgPHP["msg_type"] == 'balance') {
            echo "current_balance is " . $msgPHP["balance"]["balance"] . "\n";
        }
    });
    $conn->send('{"authorize" : "' . $token . '"}');
}, function ($e) {
    echo "Could not connect: {$e->getMessage()}\n";
});`;

export const php_proposal = `<?php
/*
 * This is an example of using PHP to get a contract proposal via  the Deriv/Binary API.
 * This is a simple example where we do not check first if the user has the
 * symbol available. To check this you would use the active_symbols call.
 * The example uses the ratchetphp/Pawl library.  
 * To run this example 
 * - Save it to a new directory as \`proposal.php\`.
 * - In the new directory download and install composer as explained here https://getcomposer.org/download/.
 * - Run \`php composer.phar require ratchet/pawl\`.
 * - Edit the example and change the app_id and the API token. 
 * - Then run \`php proposal.php\`.
 * The API token should be from the same account that the contract is to be purchased for.
 */

require __DIR__ . '/vendor/autoload.php';

$myAppId = 1089; // Put your app_id here. 
$loop = \React\EventLoop\Loop::get();

$Connector = new React\Socket\Connector($loop, array(
    'timeout' => 10
));

$connector = new \Ratchet\Client\Connector($loop, $Connector);

$connector('wss://ws.binaryws.com/websockets/v3?app_id=' . $myAppId)
    ->then(function (\Ratchet\Client\WebSocket $conn) {
        $conn->on('message', function (\Ratchet\RFC6455\Messaging\MessageInterface $msg) use ($conn) {
            $msgPHP = json_decode($msg, 1);
            //echo '> '.$msg; // Uncomment to see full details of message. 
            if (isset($msgPHP["error"])) {
                echo $msgPHP["error"]["message"];
            } else {
                echo ("Details: " . $msgPHP["proposal"]["longcode"]). "\n";
                echo ("Ask Price: " . $msgPHP["proposal"]["display_value"]). "\n";
                echo ("Payout: " . $msgPHP["proposal"]["payout"]). "\n";
                echo ("Spot: " . $msgPHP["proposal"]["spot"]). "\n";
            }
        });

        /*
         * Since we do not need to be authorized to get proposal response there is no need to send 
         * an Authorization token first however when not Authorized the the available contracts is limited by 
         * the country the request is sent from.  
         */
        $conn->send('{ "proposal": 1, "amount": 100, "barrier": "+0.1", "basis": "payout", "contract_type": "CALL", "currency": "USD", "duration": 60, "duration_unit": "s", "symbol": "R_100" , "subscribe":1}');
    }, function (\Exception $e) use ($loop) {
        echo "Could not connect: {$e->getMessage()}\n";
        $loop->stop();
    });
$loop->run();`;

export const php_keep_alive = `<?php
/*
 * This is an example of using PHP to create a proposal subscription and prevent it from timing out.  
 * A ping will be sent via websocket to the server every 30 seconds. 
 * This approach can be used for all subscriptions to prevent timeout.  
 * The example uses the ratchetphp/Pawl library.  
 * To run this example 
 * - Save it to a new directory as \`proposal_keep_alive.php\`.
 * - In the new directory download and install composer as explained here https://getcomposer.org/download/.
 * - Run \`php composer.phar require ratchet/pawl\`.
 * - Edit the example and change the app_id and the API token. 
 * - Then run \`php proposal_keep_alive.php\`.
 */

require __DIR__ . '/vendor/autoload.php';

// You can register for an app_id here https://developers.deriv.com/docs/app-registration/.
$my_app_id = 1089; // Put your app_id here. 
$loop = \React\EventLoop\Factory::create();
$Connector = new React\Socket\Connector($loop, array(
    'timeout' => 10,
));
$connector = new \Ratchet\Client\Connector($loop, $Connector);

$connector('wss://ws.binaryws.com/websockets/v3?app_id='.$my_app_id)
    ->then(function(\Ratchet\Client\WebSocket $conn) use ($loop) {
        $conn->on('message', function(\Ratchet\RFC6455\Messaging\MessageInterface $msg) use ($conn) {
            $msg_php = json_decode($msg, 1); 
            // echo '> '.$msg."\n"; // Uncomment to see entire JSON response.
            if (isset($msg_php["error"])) { 
                echo $msg_php["error"]["message"]."\n";
                $conn->close();
            }else if (isset($msg_php["proposal"])) {
                echo $msg_php['proposal']['ask_price']."\n";    
            }else {
                echo ("received ". $msg_php['msg_type']."\n");
            }
        });

        // Sends a ping request every 30 seconds, needs to use the same connection \`$conn\` as the subscription. 
        $loop->addPeriodicTimer(30, function () use ($conn) {
            $conn->send('{ "ping": 1}');
            echo "Ping Sent\n";
        });
        /*
         * Since we do not need to be authorized to get proposal response there is no need to send 
         * an Authorization token however when not Authorized the the available contracts is limited by 
         * the country the request is sent from.  
         */
        $conn->send('{ "proposal": 1, "amount": 100, "barrier": "+0.1", "basis": "payout", "contract_type": "CALL", "currency": "USD", "duration": 60, "duration_unit": "s", "symbol": "R_100" , "subscribe":1}');
    }, function(\Exception $e) use ($loop) {
        echo "Could not connect: {$e->getMessage()}\n";
        $loop->stop();
    });
$loop->run();`;

export const py_buy_contract = `# This is an example of using Python to buy a contract via the Deriv/Binary API.
# This is a simple example of buying a contract where we do not check first if the user has the
# symbol available to buy. To check this you would use the active_symbols call.
# The example uses the websocket-client library.
# To run this example
# - Ensure you have Python installed (https://www.python.org/).
# - Copy and save this as a file to a new directory as \`buy_contract.py\`.
# - Run \`pip install websocket-client\`.
# - Edit the example and change the app_id and the API token.
# - Then run \`python buy_contract.py\`.
# Note that on some OS's the python command will be python3 and pip will be pip3.

import websocket
import json

# You can register for an app_id here https://developers.deriv.com/docs/app-registration/.
app_id = '1089'  # Replace with your app_id.

# You can get your token here https://app.deriv.com/account/api-token.
# Replace with a token from the account that you wish to buy the contract for.
token = ''

def on_open(ws):
    json_data = json.dumps({'authorize': token})
    ws.send(json_data)

def on_message(ws, message):
    data = json.loads(message)
    #print('Data: %s' % message) # Uncomment this line to see all response data.
    if 'error' in data.keys():
        print('Error Happened: %s' % message)
        # With Websockets we can not control the order things are processed in so we need
        # to ensure that we have received a response to authorize before we continue.
    elif data["msg_type"] == 'authorize':
        print("Authorized OK, so now buy Contract")
        json_data1 = json.dumps({"buy": 1, "subscribe": 1, "price": 10, "parameters": {
                                "amount": 10, "basis": "stake", "contract_type": "CALL", "currency": "USD", "duration": 1, "duration_unit": "m", "symbol": "R_10"}})
        ws.send(json_data1)

    # Our buy request was successful let's print the results.
    elif data["msg_type"] == 'buy':
        print("contract Id  %s " %  data["buy"]["contract_id"] )
        print("Details %s " % data["buy"]["longcode"] )
    
    # Because we subscribed to the buy request we will receive updates on our open contract.
    elif data["msg_type"] == 'proposal_open_contract':
      isSold = bool(data["proposal_open_contract"]["is_sold"])
      # If \`isSold\` is true it means our contract has finished and we can see if we won or not.
      if isSold:
          print("Contract %s " % data["proposal_open_contract"]["status"] )
          print("Profit %s " %  data["proposal_open_contract"]["profit"] )
          ws.close()
      else:  # We can track the status of our contract as updates to the spot price occur.
          currentSpot = data["proposal_open_contract"]["current_spot"]
          entrySpot = 0
          if data["proposal_open_contract"]["entry_tick"] != None:
              entrySpot = data["proposal_open_contract"]["entry_tick"]
          
          print ("Entry spot %s" % entrySpot )
          print ("Current spot %s" % currentSpot )
          print ("Difference %s" % (currentSpot - entrySpot) )
           
if __name__ == "__main__":
    apiUrl = "wss://ws.binaryws.com/websockets/v3?app_id="+app_id
    ws = websocket.WebSocketApp(apiUrl, on_message=on_message, on_open=on_open)
    ws.run_forever()`;

export const py_ticks = `# This is an example of using Python to get a ticks via the Deriv/Binary API.
# The example uses the websocket-client library.
# To run this example
# - Ensure you have Python installed (https://www.python.org/).
# - Copy and save this as a file to a new directory as \`ticks.py\`.
# - Run \`pip install websocket-client\`.
# - Edit the example and change the app_id and the API token.
# - Then run \`python ticks.py\`.
# Note that on some OS's the python command will be python3 and pip will be pip3.

import websocket
import json

# You can register for an app_id here https://developers.deriv.com/docs/app-registration/.
app_id = '1089'  # Replace with your app_id.

def on_open(ws):
    json_data = json.dumps({"ticks": "R_100"})
    ws.send(json_data)

def on_message(ws, message):
    data = json.loads(message)
    print('Data: %s' % message)

if __name__ == "__main__":
    apiUrl = "wss://ws.binaryws.com/websockets/v3?app_id="+app_id
    ws = websocket.WebSocketApp(apiUrl, on_message=on_message, on_open=on_open)
    ws.run_forever()`;

export const py_acc_balance = `#
# This is an example of using Python to get an account balance from the Deriv/Binary API.
# The example uses the websocket-client library.
# To run this example
# - Ensure you have Python installed (https://www.python.org/).
# - Copy and save this as a file to a new directory as \`account_balance.py\`.
# - Run \`pip install websocket-client\`.
# - Edit the example and change the app_id and the API token.
# - Then run \`python account_balance.py\`.
# The API token should be from the same account that the balance is to be obtained from.
# Note that on some OS's the python command will be python3 and pip will be pip3.

import websocket
import json

# You can register for an app_id here https://developers.deriv.com/docs/app-registration/.
app_id = '1089'  # Replace with your app_id.

# You can get your token here https://app.deriv.com/account/api-token.
# Replace with a token from the account that you wish to get the balance from.
token = ''

def on_open(ws):
    json_data = json.dumps({'authorize': token})
    ws.send(json_data)

def on_message(ws, message):
    data = json.loads(message)
    # print('Data: %s' % message) # Uncomment this line to see all response data.
    if 'error' in data.keys():
        print('Error Happened: %s' % message)
    # With Websockets we can not control the order things are processed in so we need
    # to ensure that we have received a response to authorize before we continue.
    elif data["msg_type"] == 'authorize':
        print("Authorized OK, so now get balance")
        json_data1 = json.dumps({'balance': 1, 'subscribe': 1})
        ws.send(json_data1)
    # Because we subscribed we will continue to receive Balance updates when it changes.
    elif data["msg_type"] == 'balance':
        print('balance: %s' % data['balance']['balance'])
    else:
        print('unrecognized data: %s')

if __name__ == "__main__":
    apiUrl = "wss://ws.binaryws.com/websockets/v3?app_id="+app_id
    ws = websocket.WebSocketApp(apiUrl, on_message=on_message, on_open=on_open)
    ws.run_forever()`;
    
export const py_proposal = `# This is an example of using Python to get a contract proposal via the Deriv/Binary API.
# The example uses the websocket-client library.
# To run this example
# - Ensure you have Python installed (https://www.python.org/).
# - Copy and save this as a file to a new directory as \`proposal.py\`.
# - Run \`pip install websocket-client\`.
# - Edit the example and change the app_id and the API token.
# - Then run \`python proposal.py\`.
# Note that on some OS's the python command will be python3 and pip will be pip3.

import websocket
import json

# You can register for an app_id here https://developers.deriv.com/docs/app-registration/.
app_id = '1089'  # Replace with your app_id.

def on_open(ws):
    json_data = json.dumps({"proposal": 1,
     "amount": 100, "barrier": "+0.1", "basis": "payout", "contract_type": "CALL", "currency": "USD", "duration": 60, "duration_unit": "s", "symbol": "R_100" , "subscribe":1})
    ws.send(json_data)

def on_message(ws, message):
    data = json.loads(message)
    # print('Data: %s' % message) # Uncomment this line to see all response data.
    if 'error' in data.keys():
        print('Error Happened: %s' % message)
    elif data["msg_type"] == 'proposal':
        print ("Contract : %s " % data['proposal']['longcode']);    
        print ("Price : %s " % data['proposal']['display_value']);    
        print ("Payout : %s " % data['proposal']['payout']);    
        print ("Spot: %s " % data['proposal']['spot']);

if __name__ == "__main__":
    apiUrl = "wss://ws.binaryws.com/websockets/v3?app_id="+app_id
    ws = websocket.WebSocketApp(apiUrl, on_message=on_message, on_open=on_open)
    ws.run_forever()`;

export const py_keep_alive = `# This is an example of using Python to get a contract proposal  and keep the connection alive via the Deriv/Binary API.
# Link is kept alive by sending a ping every 30 seconds.
# The example uses the websockets library.
# Note that the websockets library is more sophisticated than the websocket library used in the other examples. 
# This is required so that we can get access to asyncio loop.  
# To run this example
# - Ensure you have Python installed https://www.python.org/.
# - Copy and save this as a file to a new directory as \`proposal_keep_alive.py\`.
# - Run \`pip install websockets\`.
# - Edit the example and change the app_id and the API token.
# - Then run \`python proposal_keep_alive.py\`.
# Note that on some OS's the python command will be python3 and pip will be pip3.

import websockets
import json
import asyncio

# You can register for an app_id here https://developers.deriv.com/docs/app-registration/.
app_id = '1089'  # Replace with your app_id.

async def connect():
    uri = "wss://ws.binaryws.com/websockets/v3?app_id="+app_id

    async with websockets.connect(uri) as websocket:
        
        loop.create_task(ping(websocket))

        json_data = json.dumps({"proposal": 1,
       "amount": 100, "barrier": "+0.1", "basis": "payout", "contract_type": "CALL", "currency": "USD", "duration": 60, "duration_unit": "s", "symbol": "R_100" , "subscribe":1})
        await websocket.send(json_data)

        async for message in websocket: 
                data = json.loads(message)
                # print('Data: %s' % message) # Uncomment this line to see all response data.
                if 'error' in data.keys():
                    print('Error Happened: %s' % message)
                elif data["msg_type"] == 'proposal':
                    print ("Contract : %s " % data['proposal']['longcode']);    
                    print ("Price : %s " % data['proposal']['display_value']);    
                    print ("Payout : %s " % data['proposal']['payout']);    
                    print ("Spot: %s " % data['proposal']['spot']);

async def ping(ws):
    json_data = json.dumps({"ping": 1})
    while 1:
        await ws.send(json_data)
        await asyncio.sleep(30)

loop = asyncio.get_event_loop()
loop.create_task(connect())
loop.run_forever()`;

//const http = require("http");
//const hostname = "127.0.0.1";
//const port = 1337;
class calculatorModel
{
    constructor(){

    }
    evaluateExpression(expr)
    {
        return eval (expr);
    }
    
}

class calculatotBackendModel {
    constructor() {
        
    }
    
    async calculateExpression() {
        try {
            let requuestMetadata = {
                method: "POST",
                body: JSON.stringify("2+2")
            };
            let r = await fetch("http://localhost:1377", requuestMetadata);
            let j = await r.json();

            return j;
        } catch (error) {
            console.log(error);
        }
    }
}
export { calculatorModel, calculatotBackendModel };

/*export { calculatorModel };
function processRequest (request , response )
{
    response.setHeader("Access-Control-Allow-Origin","*");
    response.setHeader("Access-Control.Allow-Methods", "GET , POST ,PUT,DELETE");
    response.setHeader("Access-Control-Allow-Headers", "Content-Type");

    if( request.method == "GET")
    {
        const data = { message: "[GET] Hello word NodeJS with CORS"};
        response.writeHead(200,{"Content-Type": "application/json", "Access-Control-Allow-Origin":"*"});
        response.end(JSON.stringify(data));

    }
}

http.createServer( processRequest ).listen(port, hostname);
*/


class model
{
    constructor(){

    }
    evaluateExpression(expr)
    {
        return eval (expr);
    }
    
}
export default model;

/*class calcularoBackendModel {
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

export default calcularoBackendModel; */

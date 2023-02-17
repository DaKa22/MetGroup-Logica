class MyArray {
    constructor(string) {
        this.string = string;
    }
    operation() {
        const getOperation = (string) => {
            const expresionRegular = /[0-9][^A-z]*([+]|[-]|[\/]|[*])[0-9]*[,]*/g;
            let resultado = false;

            const expresionParentesis = /\(([^())]+)\)/g;

            if (expresionRegular.test(string)) {
                const matches = string.match(expresionParentesis);
                if (matches) {
                    const foundOpen = string.split("").filter((elem) => elem == "(");
                    const foundClose = string.split("").filter((elem) => elem == ")");
                    if (
                        foundOpen.length == matches.length &&
                        matches.length == foundClose.length
                    ) {
                        resultado = true;
                    } else {
                        resultado = false;
                    }
                } else {
                    resultado = true;
                }
            } else {
                resultado = false;
            }
            return resultado;
        };
        return getOperation(this.string);
    }

    compute() {
        const getCompute = (string) => {

            let resultado = false;
            const expresionRegular = /[0-9][^A-z]*([+]|[-]|[\/]|[*])[0-9]*[,]*/g;
    
            const expresionParentesis = /\(([^())]+)\)/g;
    
            const matches = expresionRegular.test(string);
            if (matches) {
                const matches = string.match(expresionParentesis);
                if (matches) {
                    const foundOpen = string.split("").filter((elem) => elem == "(");
                    const foundClose = string.split("").filter((elem) => elem == ")");
    
                    if (
                        foundOpen.length == matches.length &&
                        matches.length == foundClose.length
                    ) {
                        resultado = this.evaluarArigmetica(string);
                    } else {
                        resultado = false;
                    }
                } else {
                    resultado = this.evaluarArigmetica(string);
                }
            } else {
                resultado = false;
            }
            return resultado;
        };
        return getCompute(this.string);
    }
    evaluarArigmetica(fn) {
        return new Function("return " + fn)();
    }
}

module.exports = MyArray;

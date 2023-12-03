//let errorList = new Map();

class ErrorRepository {
    constructor (code, description) {
        /*this.code = code;
        errorList.set (this, {
            code,
            description
        });*/
        this.list = new Map([
            [1,'First error'],
            [2, 'Second error'],
            [3, 'Third error']
        ]);
        this.list.set(code, description);
    }

    translate(code) {
        if(this.list.has(code)) {
            return this.list.get(code);
        } else {
            
            return 'Unknown error';
        }
        
    }
}

const error = new ErrorRepository();
console.log(error.list);
console.log(error.translate(3));
console.log(error.translate(33));





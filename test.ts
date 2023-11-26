import { isString } from ".";

function test (data: unknown): void {
    if(isString(data)) {
        console.log(data);
    } else {
        console.log("error");
        
    };
};

test("Hello");
test(true);
1. 인터페이스(interface)
: 관련된 프로퍼티들과 메서드들의 집합을 식별하기 위한 사양
- 데이터 타입으로 사용하기
``` 
export interface ITest{
    testId:string;
    data:string;
}
```
- 기능그룹 식별로 사용하기
```
export interface Log{
    logLevel:string;
    message:string;
    print():void;
}

class myLog implements Log{
    public logLevel="debug";
    public message="";
    print():void{
        console.log("logLevel:"+this.message)
    }
}
``` 



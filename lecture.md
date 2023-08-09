## 1.인터페이스(interface)
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

## 2.생명주기(LifeCycle hook)
###  OnInit
- angular가 데이터 바인딩 속성을 초기화한 후 호출
- 컴포넌트의 초기화
- 화면에 출력할 데이터를 가져와서 화면에 출력
### OnChange
- angular가 데이터 바인딩 된 input property의 값이 바뀌면 호출
- 데이터가 바뀔 때 마다 해야 할 처리
- 유효값 체크
### OnDestroy
- angular가 컴포넌트를 파괴하기 전에 호출
- 컴포넌트의 정리
- 메모리의 정리, 특정 변수의 초기화
```
import { OnInit } from "@angular/core";
export class MovieListComponent implements OnInit{
    public ngOnInit():void{
        console.log("앵귤러 라이프사이클:ngOnInit()")
    }
}
```


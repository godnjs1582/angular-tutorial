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
## 3.커스텀 파이프(Custom Pipe)
:내장 파이프에 지원하지 않는 변환이 필요한 경우 커스텀 파이프를 제작하여 사용
```
import { Pipe, PipeTransform } from  "@angular/core";
@Pipe({
    name:"convert"
})

export class ConverPipe implements PipeTransform{
    transform(vale:any,...args:any[])
}
```
- import
- 데코레이터의 정의
- 클래스 작성
- transform 메서드 작성: 첫번째 매개변수는 변환하는 대상값, 추가 매개변수는 변환을 위해 사용하는 인수들

## 4.getter와 setter

```
private _score:number=0;
public get score():number{
    return this._score;
}
public set score(v:number){
    this._score=v;
}
```
- backing variable : getter와 setter에 의해서만 관리되어야 함, 관례적으로 _를 붙임

## 5.컴포넌트 중첩

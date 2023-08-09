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

## 5.컴포넌트 간 데이터 통신
### input 사용법
: 하위 컴포넌트가 부모 컴포넌트에서 데이터를 수신하기 위함
```
export class StarScoreComponent implements OnChanges{
    @Input() rating:number=4;
    cropWidth:number=75;
    ngOnChanges():void{
        this.cropWidth=this.rating*75/5
    }
}

<app-star-score [rating]="movie.rate">
```
### output 사용법
: 자식 컴포넌트의 데이터를 부모 컴포넌트로 보내기 위함 => 오직 프로퍼티가 이벤트일때만 적용이 가능함
```
<div style="width:75px" [click]="starClick()">
@Output():call:EventEmitter<number>=new EventEmitter();

starClick():void{
    this.call.emit(this.rating)
}

<app-star-score [call]="callFromStar($event)">
```

## 서비스(Service)
- 집중적인 목적을 가진 클래스
- 특정 컴포넌트와 별도로 독립적인 기능을 구현하거나 컴포넌트 간에 데이터 또는 로직이 필요한 경우
- 데이터 액세스와 같은 외부 상호 작용의 캡슐화
- 이러한 책임을 컴포넌트에서 서비스로 이동하여 테스트, 디버그 용이하게 하고 재사용 가능하게 함

### 서비스를 이용하는 두 가지 방법
- 컴포넌트에서 서비스 인스턴스를 생성하여 사용
```
export class MyService{

}

let myService = new MyService();
```
: 데이터와 기타 리소스 공유가 안되고 테스트가 어려움, 일반적으로 사용하지 않음

- 인젝터와 의존성 주입
```
export class MyService{}

constructor(private myservice:MySesrvice){

}
```
## 의존성 주입

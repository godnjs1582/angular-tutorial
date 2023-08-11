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
## RxJS(Reactive Extensions for JavaScript)
:Observable 시퀀스를 사용하여 데이터를 구성하고 일련의 연산자를 사용하여 해당 데이터를 변환하기 위한 라이브러리

1. 동기
- 전화 통화와 같은 실시간
- 응용 프로그램은 값을 요청하고 값이 도착할 떄까지 기다림

2. 비동기
- 즉각적인 반응을 기대하지 않음
- 애플리케이션의 관점에서 http 요청은 비동기적

### Observable
- 시간에 따른 항목(아이템)의 컬렉션
- 배열과는 달리 항목을 유지하지 않음
- 방출된 항목을 시간이 지남에 따라 관찰
- 구독을 하면 observable에서 알림을 보내기 시작함
1. next : 다음 항목이 내보내질 떄 발생하는 알림, 내보낸 항목을 제공함
2. error : 오류가 발생하면 observable에서 error 알림을 내보내고 오류 정보를 제공함
3. complete : 내보낼 항목이 더 없는 경우

### Observable Pipe
: 일련의 연산자를 사용하여 내보내는 각 항목을 변환하는 일종이 파이프 라인을 만듦
- 소문자로 바꾸는 연산자를 통해 파이프를 통과하면 모든 데이터는 소문자로 변화

### angular cli로 컴포넌트 추가하기
```
ng g c movies/movie-detail
```

## 라우팅(Routing)
- 앵귤러는 싱글 페이지 애플리케이션
- 모든 뷰가 일반적으로 index.html 파일에 정의된 한 페이지 내에서 표시됨
- 페이지에 언제 어떤 뷰를 표시해야 하는지 관리하는 것이 목적
### 라우팅 모듈 만들기
```
import { RouterModule, Routes } from "@angular/router"; 
```
1. RouterModule
- 라우터 서비스 공급자를 등록하는 역할
- RouterLink, RouterOutlet과 같은 라우트 관련 지시문 선언
- 우리가 구성하는 경로(path) 노출
2. routes
- path에는 선행 슬래시(/)가 없음
- 더 구체적인 경로가 와일드카드 경로와 같이 덜 구체적인 경로 앞에 있어야 함

### 라우팅 가드
1. CanActivate
-  url 매개변수가 유효하지 않은 경우 이동을 방지
2. CanDeactivate
3. Resolve
4. CanLoad

-  가드 클래스 파일 생성
```
ng g g movies/movie-detail/movie-detail
```

# 내 마음대로 RECORD

React appllication을 만들면서 공부한 내용 기록하기.

### nodejs

    * npm start 실행 : React App 실행
        -> Terminal에서 npm start or npm run start로 실행한다.

- 한 File당 한 component을 가지고 있고, index,js에서 component들을 import시킨다.
- component에 해당하는 css도 module로 만들어서 사용한다.
  - module.css에서는 class create
  - .js에서 css를 import하고 적용하고자 하는 tag에 -> classname = import명.class명 <- 으로 사용한다.

## .js

`export default Button;`
-> another .js에서 import할 수 있도록 export해 준다.

`then()` 대신 `async-await`를 사용한다.

```useEffect(() => {
    fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
    )
      .then((response) => response.json())
      .then((json) => {
        setMovies(json.data.movies);
        setLoading(false);
      });
  }, []);
```

```
 const getMovies = async () => {
  const response = await fetch(
    `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
  );
  const json = await response.json();
  setMovies(json.data.movies);
  setLoading(false);
};
  useEffect(() => getMovies(), []);
```

#### [React library]

##### useEffect

what?

- 코드를 언제 실행할 지 선택할 수 있는 function
- 내부적으로 component 최초의 render 후에 rerendering시 반복되지않고 한번만 실행됐으면 하는 component적용하는 function
- useEffect는 두 개의 argument를 가지는 function이다.

How?

- 첫번째 argument : 실행하고 싶은 코드
- 두번째 argument : 조건부 실행을 줄 수 있다. -> dependencys : react.js가 변화하기 위해 인지하고 있어야할 것
  - i) [] : 조건이 비어있기 때문에 변화를 인지할 것이 없으므로 최초의 실행만 허용
  - ii) [state] : 해당 state가 변경이 될 경우에만 실행 허용

##### cleanup

What?

- component가 destroy될 때도 코드를 실행할 수 있다.
- 숨기는 것이 아니라 destroy하는 것이다.

How?

- React.js가 로직을 실행할 때 return 하면서 useEffect를 통해서 실해하고 싶은 로직을 줄 수 있다.
  React.js가 destory될 때도 return에 cleanup 코드를 줄 수 있다.

```
function () {
useEffect( () => {
          <!-- 실행할 function logic -->
          return () => {
          <!-- Cleanup function logic
                destory될 때 실행되는 코드
           -->
          }
},[]);
return <tag></tag>;
};
```

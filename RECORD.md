# 내 마음대로 RECORD

React appllication을 만들면서 공부한 내용 기록하기.

### nodejs

    * npm start 실행 : React App 실행
        -> Terminal에서 npm start or npm run start로 실행한다.

- 한 File당 한 component을 가지고 있고, index,js에서 component들을 import시킨다.
- component에 해당하는 css도 module로 만들어서 사용한다.
  - module.css에서는 class create
  - .js에서 css를 import하고 적용하고자 하는 tag에 -> classname = import명.class명 <- 으로 사용한다.

## Button.js

`export default Button;`
-> another .js에서 import할 수 있도록 export해 준다.

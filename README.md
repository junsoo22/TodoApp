TodoApp 
# Vite로 React 시작하기
### 설치

```
npm create vite@latest TodoApp -- --template react
cd TodoApp
npm install
```

### 실행
```
npm run dev
```

# TodoApp
![alt text](image.png)

1. 입력창 바로 밑에 색상들이 나열되어 있으며, 해당 색상을 클릭하면 input의 배경색이 변합니다.
2. 그 상태에서 입력 input 창에 글을 쓰고 입력을 클릭하면 아래 item이 추가됩니다.
3. 이때 추가되는 todo item의 배경색은 추가 당시에 선택되어 있는 배경색입니다.

hook(useEffect 등)을 사용하여 구현하시오.


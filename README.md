# MERN-TODO-LIST-代辦事項

[網站範例連結](https://mern-todolist.vercel.app/ "link")

<p align="left">
帳號:JACKYLAI
密碼:"12345678"
</p>

<p align="left">
</p>

<h3 align="left">使用技術:</h3>
<p align="left"> <a href="https://expressjs.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40"/> </a> <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="40" height="40"/> </a> <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a> <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a> </p>


#
資料架構說明
#

```
backend/   後端
├── models  //資料庫
    ├── Section.js     //彈跳視窗與Board設計關聯式資料
    └── Task.js        //代辦清單-與Section設計關聯式資料
    └── board.js       //代辦清單細項-與User設計關聯式資料。當中的position為設計改變item位置用
    └── modelOptions.js//Schema 設計，時間戳、toJson、toObject
    └── User.js        //使用者資料，包含信箱、加密後的密碼
└── routes
     └── board.js      //代辦清單路由
     └── section.js    //首頁大標題Item路由
     └── task.js       //代辦清單細項路由
     └── user.js       //使用者註冊登入路由
└── controllers
     └── board.js      //代辦清單-建立代辦清單Item、獲得全部的Item、更新Item路徑更新位置、建立Favourite(我的最愛)CRUD
     └── section.js    //彈跳視窗資料整理與關聯式資料庫API 製作
     └── task.js       //代辦事項CRUD API 設計
     └── user.js       //權限路由   
     
├── .env               //環境變數-隱藏相關私密資訊
├── server.js          //主檔案
├── .gitignore         //設定不上傳之檔案
├── .package-lock.json //鎖定版本
├── .package.json      //紀錄專案中所使用的所有套件與版本

client/   前端

├── public  
    ├── index.js       //渲染後要覆蓋的根目錄
└── src
    ├── api            //自定義Fetch API路由接口設計
    ├── assets         //圖片存放處
    ├── components     //組件
    ├── css            //樣式處理
    └── pages          //頁面
    └── Redux          //狀態管理
    └── utils          //Token權限設定
└── App.js             //路由管理
└── index.js           //渲染主入口



```


#
專案練習說明
#
* 使用Node.js+Express+MongoDB將TODOLIST 資料存在Database裡面，並設計Restful API 
* 使用JWT生成登入驗證Token，並存在前端localstorage
* 使用materialUI 設計後排版
* 使用Redux Toolkit 進行user、board、section進行狀態管理
* 使用@emoji-mart套件，引入表情符號，並儲存在後端資料庫
* 使用react-beautiful-dnd套件，將TODOLIST的Item滑鼠拖曳改變位置，並儲存在Localstorage裡面
* 使用react-beautiful-dnd套件，將TODOLIST的Item滑鼠拖曳改變位置，並儲存在Localstorage裡面





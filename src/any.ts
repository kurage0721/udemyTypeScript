import axios from 'axios';

export{};

let url: string ='https://udemy-utils.herokuapp.com/api/v1/articles?token=token123';

//https://github.com/axios/axiosのexampleを流用
axios.get(url).then(function (response) {
  //responseの中からdataオブジェクトのみ表示
  //anyをアノテーションとする場合
  // let data: any

  //正確なアノテーションの付け方

  interface Article{
    id: number;
    title: string;
    description: string;
  }

  let data: Article[];

  //responseの中からdataオブジェクトのみ取得する
  data = response.data;

  //自作のオブジェクト配列
  data = [
    {
      id: 1,
      title: 'title',
      description: 'descriotion',
    }
  ]
  console.log(data);
});